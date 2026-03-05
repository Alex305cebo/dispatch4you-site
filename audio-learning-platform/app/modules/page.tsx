import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import { getAllModules } from '@/src/data/content';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

export default function ModulesPage() {
    const modules = getAllModules();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Модули курса
                </h1>
                <p className="text-lg text-gray-600">
                    Структурированная программа обучения диспетчеров грузоперевозок
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((module, index) => {
                    const lessonCount = module.lessons.length;

                    return (
                        <Link key={module.id} href={`/modules/${module.slug}`}>
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                                <div className="relative overflow-hidden">
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                                    <div className="relative p-6">
                                        {/* Module number and icon */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-lg`}>
                                                    {module.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-500">
                                                        Модуль {index + 1}
                                                    </div>
                                                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                        {module.title}
                                                    </h2>
                                                </div>
                                            </div>
                                            <ChevronRight className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" size={24} />
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-4">
                                            {module.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <BookOpen size={16} />
                                                <span>{lessonCount} {lessonCount === 1 ? 'урок' : 'уроков'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {/* Info block */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">📚 Рекомендации по обучению</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Проходите модули последовательно для лучшего понимания</li>
                    <li>• Каждый модуль содержит практические примеры и документы</li>
                    <li>• Используйте аудио версию для обучения в любое время</li>
                    <li>• Возвращайтесь к материалам для повторения</li>
                </ul>
            </div>
        </div>
    );
}
