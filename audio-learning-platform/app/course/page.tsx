'use client';

import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import AudioButton from '@/src/components/ui/AudioButton';
import { BookOpen, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { lessons, getTotalDuration } from '@/src/data/courseData';
import { useAudio } from '@/src/context/AudioContext';

export default function CoursePage() {
    const { getProgressPercent, isLessonCompleted } = useAudio();
    const totalLessons = lessons.length;
    const totalDuration = getTotalDuration();

    // Calculate overall progress
    const completedCount = lessons.filter(lesson => isLessonCompleted(lesson.id)).length;
    const overallProgress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

    return (
        <div className="max-w-5xl mx-auto">
            {/* Заголовок курса */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Полный курс обучения
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Изучите все материалы курса последовательно. Каждый урок содержит текстовый материал и аудио версию для удобного обучения.
                </p>

                {/* Статистика курса */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                        <BookOpen size={18} />
                        <span>{totalLessons} уроков</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={18} />
                        <span>{totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-green-600" />
                        <span>{completedCount} завершено</span>
                    </div>
                </div>

                {/* Overall progress bar */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Общий прогресс</span>
                        <span className="text-sm font-semibold text-indigo-600">{Math.round(overallProgress)}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${overallProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Список всех уроков */}
            <div className="space-y-4">
                {lessons.map((lesson, index) => {
                    const progressPercent = getProgressPercent(lesson.id);
                    const completed = isLessonCompleted(lesson.id);
                    const inProgress = progressPercent > 0 && !completed;

                    return (
                        <Card key={lesson.id} className="hover:shadow-lg transition-shadow duration-200 relative overflow-hidden">
                            {/* Progress background */}
                            {progressPercent > 0 && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent opacity-50"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            )}

                            <div className="relative flex items-start gap-4">
                                {/* Номер урока / Статус */}
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

                                {/* Контент урока */}
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
                                                {lesson.category}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-sm text-gray-500 flex items-center gap-1">
                                            <Clock size={14} />
                                            {lesson.duration}
                                        </div>
                                    </div>

                                    {/* Progress bar for individual lesson */}
                                    {progressPercent > 0 && !completed && (
                                        <div className="mb-3">
                                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Превью контента */}
                                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                                        {lesson.content.substring(0, 150)}...
                                    </p>

                                    {/* Действия */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <AudioButton
                                            lesson={lesson}
                                            label={inProgress ? 'Продолжить' : 'Прослушать урок'}
                                            size="sm"
                                        />

                                        <Link
                                            href={`/docs/${lesson.slug}`}
                                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                                        >
                                            Читать урок
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Информационный блок */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">📚 Как проходить курс</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Проходите уроки последовательно для лучшего понимания материала</li>
                    <li>• Используйте аудио версию для обучения в любом месте</li>
                    <li>• Ваш прогресс автоматически сохраняется каждые 5 секунд</li>
                    <li>• Возвращайтесь к пройденным урокам для повторения</li>
                    <li>• Каждый урок можно читать или слушать - выбирайте удобный формат</li>
                </ul>
            </div>
        </div>
    );
}
