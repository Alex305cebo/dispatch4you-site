'use client';

import { useAudio } from '@/src/context/AudioContext';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import Link from 'next/link';

export default function Player() {
    const { currentLesson, isPlaying, progress, duration, playbackRate, togglePlay, setSpeed, seek } = useAudio();

    if (!currentLesson) return null;

    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        seek(newTime);
    };

    const skipBackward = () => {
        seek(Math.max(0, progress - 10));
    };

    const skipForward = () => {
        seek(Math.min(duration, progress + 10));
    };

    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const cycleSpeed = () => {
        const currentIndex = speeds.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % speeds.length;
        setSpeed(speeds[nextIndex]);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg text-white shadow-2xl border-t border-gray-800 z-50">
            {/* Progress bar */}
            <div className="relative h-1 bg-gray-800 group cursor-pointer">
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={progress}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-100"
                    style={{ width: `${progressPercent}%` }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `${progressPercent}%`, transform: 'translate(-50%, -50%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Lesson info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Volume2 size={24} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <Link
                                href={`/docs/${currentLesson.slug}`}
                                className="font-semibold text-white hover:text-indigo-400 transition-colors block truncate"
                            >
                                {currentLesson.title}
                            </Link>
                            <p className="text-sm text-gray-400 truncate">{currentLesson.category}</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        {/* Skip backward */}
                        <button
                            onClick={skipBackward}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Назад 10 сек"
                        >
                            <SkipBack size={20} />
                        </button>

                        {/* Play/Pause */}
                        <button
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                        >
                            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                        </button>

                        {/* Skip forward */}
                        <button
                            onClick={skipForward}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Вперед 10 сек"
                        >
                            <SkipForward size={20} />
                        </button>

                        {/* Time */}
                        <div className="text-sm text-gray-400 min-w-[100px] text-center">
                            {formatTime(progress)} / {formatTime(duration)}
                        </div>

                        {/* Speed control */}
                        <button
                            onClick={cycleSpeed}
                            className="px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors min-w-[60px]"
                            title="Скорость воспроизведения"
                        >
                            {playbackRate}x
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
