'use client';

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Lesson } from '@/src/data/courseData';

interface LessonProgress {
    lessonId: string;
    currentTime: number;
    duration: number;
    lastPlayed: string;
    completed: boolean;
}

interface AudioContextType {
    currentLesson: Lesson | null;
    isPlaying: boolean;
    progress: number;
    duration: number;
    playbackRate: number;
    playLesson: (lesson: Lesson) => void;
    togglePlay: () => void;
    setSpeed: (rate: number) => void;
    seek: (time: number) => void;
    getLessonProgress: (lessonId: string) => LessonProgress | null;
    getProgressPercent: (lessonId: string) => number;
    isLessonCompleted: (lessonId: string) => boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const STORAGE_KEY = 'audio-learning-progress';
const SAVE_INTERVAL = 5000; // 5 seconds
const COMPLETION_THRESHOLD = 0.95; // 95% считается завершенным

export function AudioProvider({ children }: { children: ReactNode }) {
    const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
    const playPromiseRef = useRef<Promise<void> | null>(null);

    // Load progress from localStorage
    const loadProgress = (): Record<string, LessonProgress> => {
        if (typeof window === 'undefined') return {};
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Error loading progress:', error);
            return {};
        }
    };

    // Save progress to localStorage
    const saveProgress = (lessonId: string, currentTime: number, duration: number) => {
        if (typeof window === 'undefined') return;
        try {
            const allProgress = loadProgress();
            const progressPercent = duration > 0 ? currentTime / duration : 0;
            const completed = progressPercent >= COMPLETION_THRESHOLD;

            allProgress[lessonId] = {
                lessonId,
                currentTime,
                duration,
                lastPlayed: new Date().toISOString(),
                completed,
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    // Get progress for specific lesson
    const getLessonProgress = (lessonId: string): LessonProgress | null => {
        const allProgress = loadProgress();
        return allProgress[lessonId] || null;
    };

    // Get progress percentage
    const getProgressPercent = (lessonId: string): number => {
        const lessonProgress = getLessonProgress(lessonId);
        if (!lessonProgress || lessonProgress.duration === 0) return 0;
        return Math.min(100, (lessonProgress.currentTime / lessonProgress.duration) * 100);
    };

    // Check if lesson is completed
    const isLessonCompleted = (lessonId: string): boolean => {
        const lessonProgress = getLessonProgress(lessonId);
        return lessonProgress?.completed || false;
    };

    // Initialize audio element
    useEffect(() => {
        audioRef.current = new Audio();

        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setProgress(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            // Mark as completed when ended
            if (currentLesson) {
                saveProgress(currentLesson.id, audio.duration, audio.duration);
            }
        };

        const handlePlay = () => {
            setIsPlaying(true);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.pause();
        };
    }, [currentLesson]);

    // Auto-save progress every 5 seconds while playing
    useEffect(() => {
        if (isPlaying && currentLesson && audioRef.current) {
            saveTimerRef.current = setInterval(() => {
                const audio = audioRef.current;
                if (audio && currentLesson) {
                    saveProgress(currentLesson.id, audio.currentTime, audio.duration);
                }
            }, SAVE_INTERVAL);
        } else {
            if (saveTimerRef.current) {
                clearInterval(saveTimerRef.current);
                saveTimerRef.current = null;
            }
        }

        return () => {
            if (saveTimerRef.current) {
                clearInterval(saveTimerRef.current);
            }
        };
    }, [isPlaying, currentLesson]);

    // Save progress when component unmounts or lesson changes
    useEffect(() => {
        return () => {
            if (currentLesson && audioRef.current) {
                saveProgress(currentLesson.id, audioRef.current.currentTime, audioRef.current.duration);
            }
        };
    }, [currentLesson]);

    // Update playback rate when changed
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    const playLesson = (lesson: Lesson) => {
        if (!audioRef.current) return;

        const audio = audioRef.current;

        // If same lesson, just toggle play
        if (currentLesson?.id === lesson.id) {
            togglePlay();
            return;
        }

        // Wait for any pending play promise before changing source
        if (playPromiseRef.current) {
            playPromiseRef.current.then(() => {
                audio.pause();
            }).catch(() => {
                // Ignore errors from interrupted play
            });
        }

        // Save progress of previous lesson
        if (currentLesson) {
            saveProgress(currentLesson.id, audio.currentTime, audio.duration);
        }

        // Load new lesson
        setCurrentLesson(lesson);
        audio.src = lesson.audioUrl;
        audio.load();

        // Check if there's saved progress
        const savedProgress = getLessonProgress(lesson.id);

        audio.addEventListener('loadedmetadata', () => {
            // Restore saved position if exists and not completed
            if (savedProgress && !savedProgress.completed && savedProgress.currentTime > 5) {
                audio.currentTime = savedProgress.currentTime;
            }

            // Play when ready
            playPromiseRef.current = audio.play().catch(error => {
                console.error('Error playing audio:', error);
                setIsPlaying(false);
            }).finally(() => {
                playPromiseRef.current = null;
            });
        }, { once: true });
    };

    const togglePlay = () => {
        if (!audioRef.current || !currentLesson) return;

        const audio = audioRef.current;

        if (isPlaying) {
            // Wait for any pending play promise before pausing
            if (playPromiseRef.current) {
                playPromiseRef.current.then(() => {
                    audio.pause();
                    // Save progress when pausing
                    saveProgress(currentLesson.id, audio.currentTime, audio.duration);
                }).catch(() => {
                    // Ignore errors from interrupted play
                });
            } else {
                audio.pause();
                // Save progress when pausing
                saveProgress(currentLesson.id, audio.currentTime, audio.duration);
            }
        } else {
            playPromiseRef.current = audio.play().catch(error => {
                console.error('Error playing audio:', error);
                setIsPlaying(false);
            }).finally(() => {
                playPromiseRef.current = null;
            });
        }
    };

    const setSpeed = (rate: number) => {
        setPlaybackRate(rate);
    };

    const seek = (time: number) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = time;
        setProgress(time);

        // Save progress when seeking
        if (currentLesson) {
            saveProgress(currentLesson.id, time, audioRef.current.duration);
        }
    };

    return (
        <AudioContext.Provider
            value={{
                currentLesson,
                isPlaying,
                progress,
                duration,
                playbackRate,
                playLesson,
                togglePlay,
                setSpeed,
                seek,
                getLessonProgress,
                getProgressPercent,
                isLessonCompleted,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
}
