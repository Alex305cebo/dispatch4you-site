'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import AudioButton from '@/src/components/ui/AudioButton';
import Button from '@/src/components/ui/Button';
import { getModuleBySlug } from '@/src/data/content';
import { useAudio } from '@/src/context/AudioContext';
import { ArrowLeft, Clock, ChevronRight, CheckCircle2, FileText } from 'lucide-react';
import { use } from 'react';

interface PageProps {
    params: Promise<{ moduleSlug: string }>;
}

export default function ModulePage({ params }: PageProps) {
    const { moduleSlug } = use(params);
    const module = getModuleBySlug(moduleSlug);
    const { getProgressPercent, isLessonCompleted } = useAudio();

    if (!module) {
        notFound();
    }

    const completedCount = module.lessons.filter(lesson =>
        isLessonCompleted(lesson.id)
    ).length;
    const moduleProgress = module.lessons.length > 0
        ? (completedCount / module.lessons.length) * 100
        : 0;

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <Link href="/modules">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft size={16} />
                        Все модули
                    </Button>
                </Link>

                <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                        {module.icon}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {module.title}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {module.description}
                        </p>
                    </div>
                </div>

                {/* Module progress */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Прогресс модуля
                        </span>
                        <span className="text-sm font-semibold text-indigo-600">
                            {completedCount} из {module.lessons.length} уроков
                        </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${module.color} rounded-full transition-all duration-500`}
                            style={{ width: `${moduleProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Lessons list */}
            <div className="space-y-4">
                {module.lessons.map((lesson, index) => {
                    const progressPercent = getProgressPercent(lesson.id);
                    const completed = isLessonCompleted(lesson.id);
                    const inProgress = progressPercent > 0 && !completed;

                    // Convert lesson to format expected by AudioButton
                    const lessonForAudio = {
                        ...lesson,
                        category: module.title,
                        content: lesson.content
                    };

                    return (
                        <Card key={lesson.id} className="hover:shadow-lg transition-shadow duration-200 relative overflow-hidden">
                            {/* Progress background */}
                            {progressPercent > 0 && (
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-10`}
                                    style={{ width: `${progressPercent}%` }}
                                />
                            )}

                            <div className="relative flex items-start gap-4">
                                {/* Lesson number / Status */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${completed
                                        ? 'bg-green-100'
                                        : inProgress
                                            ? 'bg-indigo-100'
                                            : 'bg-gray-100'
                                    }`}>
                                    {completed ? (
                                        <CheckCircle2 size={24} className="text-green-600" />
                                    ) : (
                                        <span className={`text-xl font-bold ${inProgress ? 'text-indigo-600' : 'text-gray-600'
                                            }`}>
                                            {index + 1}
                                        </span>
                                    )}
                                </div>

                                {/* Lesson content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h2 className="text-xl font-semibold text-gray-900">
                                                    {lesson.title}
                                                </h2>
                                                {completed && (
                                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                                        Завершено
                                                    </span>
                                                )}
                                                {inProgress && (
                                                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                                                        {Math.round(progressPercent)}%
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {lesson.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-sm text-gray-500 flex items-center gap-1">
                                            <Clock size={14} />
                                            {lesson.duration}
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    {progressPercent > 0 && !completed && (
                                        <div className="mb-3">
                                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${module.color} rounded-full transition-all duration-300`}
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Key terms */}
                                    {lesson.keyTerms && lesson.keyTerms.length > 0 && (
                                        <div className="mb-3 flex flex-wrap gap-2">
                                            {lesson.keyTerms.slice(0, 3).map((term, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                >
                                                    {term}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Attachments indicator */}
                                    {lesson.attachments && lesson.attachments.length > 0 && (
                                        <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                                            <FileText size={16} />
                                            <span>{lesson.attachments.length} документ(ов)</span>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <AudioButton
                                            lesson={lessonForAudio}
                                            label={inProgress ? 'Продолжить' : 'Прослушать'}
                                            size="sm"
                                        />

                                        <Link
                                            href={`/modules/${moduleSlug}/${lesson.slug}`}
                                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                                        >
                                            Открыть урок
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
