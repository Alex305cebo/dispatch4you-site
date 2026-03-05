'use client';

import { Play, Pause } from 'lucide-react';
import clsx from 'clsx';
import { useAudio } from '@/src/context/AudioContext';
import { Lesson } from '@/src/data/courseData';

interface AudioButtonProps {
    lesson: Lesson;
    label?: string;
    variant?: 'inline' | 'block';
    size?: 'sm' | 'md' | 'lg';
}

export default function AudioButton({
    lesson,
    label = 'Прослушать',
    variant = 'inline',
    size = 'md'
}: AudioButtonProps) {
    const { currentLesson, isPlaying, playLesson } = useAudio();

    const isCurrentLesson = currentLesson?.id === lesson.id;
    const isCurrentlyPlaying = isCurrentLesson && isPlaying;

    const handleClick = () => {
        playLesson(lesson);
    };

    return (
        <button
            onClick={handleClick}
            className={clsx(
                'flex items-center gap-2 rounded-lg font-medium transition-all duration-200',
                'hover:scale-105 active:scale-95',
                {
                    'bg-indigo-600 text-white hover:bg-indigo-700': isCurrentlyPlaying,
                    'bg-gray-100 text-gray-700 hover:bg-gray-200': !isCurrentlyPlaying,
                    'px-2 py-1 text-xs': size === 'sm',
                    'px-3 py-2 text-sm': size === 'md',
                    'px-4 py-3 text-base': size === 'lg',
                    'inline-flex': variant === 'inline',
                    'flex w-full justify-center': variant === 'block',
                }
            )}
        >
            {isCurrentlyPlaying ? (
                <Pause size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} />
            ) : (
                <Play size={size === 'sm' ? 14 : size === 'md' ? 16 : 20} />
            )}
            <span>{isCurrentlyPlaying ? 'Пауза' : label}</span>
        </button>
    );
}
