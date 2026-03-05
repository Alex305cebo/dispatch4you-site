'use client';

import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { useCourseStats } from '@/src/hooks/useCourseStats';
import { COURSE_CONTENT } from '@/src/data/content';
import {
    Play,
    CheckCircle,
    Clock,
    TrendingUp,
    Calculator,
    Timer,
    Gamepad2,
    BookOpen,
    Award,
    Target,
    Zap
} from 'lucide-react';

export default function DashboardPage() {
    const stats = useCourseStats();

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours > 0) {
            return `${hours}ч ${minutes}мин`;
        }
        return `${minutes}мин`;
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Добро пожаловать! 👋
                </h1>
                <p className="text-lg text-gray-600">
                    Ваш персональный центр обучения диспетчингу
                </p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {/* Overall Progress */}
                <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <TrendingUp size={24} />
                        </div>
                        <div className="text-3xl font-bold">
                            {Math.round(stats.overallProgress)}%
                        </div>
                    </div>
                    <div className="text-sm opacity-90">Общий прогресс</div>
                    <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-500"
                            style={{ width: `${stats.overallProgress}%` }}
                        />
                    </div>
                </Card>

                {/* Completed Lessons */}
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <CheckCircle size={24} />
                        </div>
                        <div className="text-3xl font-bold">
                            {stats.completedLessons}
                        </div>
                    </div>
                    <div className="text-sm opacity-90">Завершено уроков</div>
                    <div className="text-xs opacity-75 mt-1">
                        из {stats.totalLessons} доступных
                    </div>
                </Card>

                {/* In Progress */}
                <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Clock size={24} />
                        </div>
                        <div className="text-3xl font-bold">
                            {stats.inProgressLessons}
                        </div>
                    </div>
                    <div className="text-sm opacity-90">В процессе</div>
                    <div className="text-xs opacity-75 mt-1">
                        {formatTime(stats.totalTimeListened)} прослушано
                    </div>
                </Card>

                {/* Achievement */}
                <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Award size={24} />
                        </div>
                        <div className="text-3xl font-bold">
                            {stats.completedLessons >= stats.totalLessons ? '🏆' : '⭐'}
                        </div>
                    </div>
                    <div className="text-sm opacity-90">
                        {stats.completedLessons >= stats.totalLessons
                            ? 'Курс завершен!'
                            : 'Продолжайте!'}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                        {stats.totalLessons - stats.completedLessons} уроков осталось
                    </div>
                </Card>
            </div>

            {/* Continue Learning Section */}
            {stats.lastLesson && (
                <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <Play size={32} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <div className="text-sm font-medium text-indigo-600 mb-1">
                                        Продолжить обучение
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                        {stats.lastLesson.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {stats.lastLesson.category}
                                    </p>
                                </div>
                                <Link href={`/modules/${stats.lastLesson.moduleSlug}/${stats.lastLesson.slug}`}>
                                    <Button className="flex items-center gap-2">
                                        <Play size={16} />
                                        Продолжить
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                                        style={{ width: `${stats.lastLesson.progress}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-600">
                                    {Math.round(stats.lastLesson.progress)}%
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            )}

            {/* Quick Access Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Link href="/tools">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Calculator size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                                    Калькулятор прибыли
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Быстрый расчет выгодности груза
                                </p>
                            </div>
                            <Zap className="text-green-600 group-hover:translate-x-1 transition-transform" size={24} />
                        </div>
                    </Card>
                </Link>

                <Link href="/tools">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Timer size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                                    Таймер Detention
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Отслеживание времени простоя
                                </p>
                            </div>
                            <Zap className="text-orange-600 group-hover:translate-x-1 transition-transform" size={24} />
                        </div>
                    </Card>
                </Link>
            </div>

            {/* Learning Roadmap */}
            <Card className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    🗺️ Карта обучения
                </h2>

                <div className="space-y-6">
                    {/* Stage 1: Theory */}
                    <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${stats.completedLessons > 0
                                ? 'bg-green-100 text-green-600'
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                            <BookOpen size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Этап 1: Теория
                                </h3>
                                <span className="text-sm font-medium text-gray-600">
                                    {stats.completedLessons} / {stats.totalLessons}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Изучите модули курса и освойте теоретические основы
                            </p>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
                                    style={{ width: `${stats.overallProgress}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stage 2: Practice */}
                    <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${stats.overallProgress >= 50
                                ? 'bg-purple-100 text-purple-600'
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                            <Gamepad2 size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Этап 2: Практика
                                </h3>
                                <span className="text-sm font-medium text-gray-600">
                                    {stats.overallProgress >= 50 ? 'Доступно' : 'Заблокировано'}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Пройдите симуляторы звонков и отработайте навыки
                            </p>
                            {stats.overallProgress >= 50 ? (
                                <Link href="/simulator">
                                    <Button variant="ghost" className="text-purple-600">
                                        Перейти к симуляторам →
                                    </Button>
                                </Link>
                            ) : (
                                <p className="text-xs text-gray-500">
                                    Завершите 50% теории для разблокировки
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Stage 3: Tools */}
                    <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${stats.overallProgress >= 75
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                            <Target size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Этап 3: Мастерство
                                </h3>
                                <span className="text-sm font-medium text-gray-600">
                                    {stats.overallProgress >= 75 ? 'Доступно' : 'Заблокировано'}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Используйте профессиональные инструменты в работе
                            </p>
                            {stats.overallProgress >= 75 ? (
                                <Link href="/tools">
                                    <Button variant="ghost" className="text-blue-600">
                                        Открыть инструменты →
                                    </Button>
                                </Link>
                            ) : (
                                <p className="text-xs text-gray-500">
                                    Завершите 75% курса для разблокировки
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Card>

            {/* Module Progress */}
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    📚 Прогресс по модулям
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {COURSE_CONTENT.map((module) => {
                        const progress = stats.moduleProgress[module.id] || { completed: 0, total: 0, percentage: 0 };

                        return (
                            <Link key={module.id} href={`/modules/${module.slug}`}>
                                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-xl`}>
                                            {module.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {module.title}
                                            </h3>
                                            <p className="text-xs text-gray-600">
                                                {progress.completed} / {progress.total} уроков
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${module.color} rounded-full transition-all duration-500`}
                                            style={{ width: `${progress.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
