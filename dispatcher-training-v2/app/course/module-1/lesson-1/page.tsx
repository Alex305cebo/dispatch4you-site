import Link from 'next/link'

export default function Lesson1Page() {
    return (
        <main className="min-h-screen bg-black">
            <section className="py-20 bg-gradient-to-b from-indigo-950/20 to-black">
                <div className="container mx-auto px-6">
                    <Link href="/course/module-1" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Назад к модулю
                    </Link>

                    <div className="mb-8">
                        <div className="text-sm text-indigo-400 mb-2">Модуль 1 • Урок 1</div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Что делает диспетчер</h1>
                        <div className="flex gap-4 text-sm text-gray-400">
                            <span>⏱️ 15 минут</span>
                            <span>📚 Основы профессии</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Video Player Placeholder */}
                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-12">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                                <p className="text-gray-400">Видео урок будет доступен после покупки курса</p>
                            </div>
                        </div>

                        {/* Lesson Content */}
                        <div className="prose prose-invert max-w-none">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">О чем этот урок</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    В этом уроке вы узнаете, кто такой диспетчер грузоперевозок и какие задачи он выполняет ежедневно.
                                    Мы разберем основные обязанности, необходимые навыки и инструменты работы.
                                </p>
                                <h3 className="text-xl font-bold text-white mb-3 mt-6">Что вы узнаете:</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Основные обязанности диспетчера</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Типичный рабочий день</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Необходимые навыки и качества</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Инструменты и программы для работы</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Взаимодействие с водителями и брокерами</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Practice Task */}
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30">
                                <h3 className="text-xl font-bold text-white mb-4">📝 Практическое задание</h3>
                                <p className="text-gray-300 mb-4">
                                    Составьте список из 10 основных задач диспетчера на основе материала урока.
                                    Отправьте ваш список преподавателю для проверки.
                                </p>
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                                    Отправить задание
                                </button>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-12 flex justify-between">
                            <Link
                                href="/course/module-1"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>
                                К списку уроков
                            </Link>
                            <Link
                                href="/course/module-1/lesson-2"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
                            >
                                Следующий урок
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
