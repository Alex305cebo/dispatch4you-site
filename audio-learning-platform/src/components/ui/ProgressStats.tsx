'use client';

import { useAudio } from '@/src/context/AudioContext';
import { lessons } from '@/src/data/courseData';
import { CheckCircle2, Clock, TrendingUp } from 'lucide-react';

export default function ProgressStats() {
    const { isLessonCompleted, getProgressPercent } = useAudio();

    const completedCount = lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
    const inProgressCount = lessons.filter(lesson => {
        const progress = getProgressPercent(lesson.id);
        return progress > 0 && !isLessonCompleted(lesson.id);
    }).length;

    const overallProgress = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Completed lessons */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                        <CheckCircle2 className="text-green-600" size={28} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">{completedCount}</p>
                        <p className="text-gray-600 text-sm">Завершено</p>
                    </div>
                </div>
            </div>

            {/* In progress */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                        <Clock className="text-indigo-600" size={28} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">{inProgressCount}</p>
                        <p className="text-gray-600 text-sm">В процессе</p>
                    </div>
                </div>
            </div>

            {/* Overall progress */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                        <TrendingUp className="text-purple-600" size={28} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">{Math.round(overallProgress)}%</p>
                        <p className="text-gray-600 text-sm">Прогресс</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
