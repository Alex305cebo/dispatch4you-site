import Link from 'next/link'

export default function Module1Page() {
    const lessons = [
        { id: 1, title: 'Что делает диспетчер', duration: '15 мин', completed: false },
        { id: 2, title: 'Терминология', duration: '20 мин', completed: false },
        { id: 3, title: 'Типы грузов', duration: '18 мин', completed: false },
        { id: 4, title: 'Документация', duration: '22 мин', completed: false },
        { id: 5, title: 'Рабочий день', duration: '16 мин', completed: false },
        { id: 6, title: 'Инструменты', duration: '19 мин', completed: false },
        { id: 7, title: 'Зарплаты', duration: '14 мин', completed: false },
        { id: 8, title: 'Карьерный путь', duration: '17 мин', completed: false }
    ]

    return (
        <main className="min-h-screen bg-black">
            <section className="py-20 bg-gradient-to-b from-indigo-950/20 to-black">
                <div className="container mx-auto px-6">
                    <Link href="/course" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Назад к программе курса
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-black text-white">
                            1
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-white">Основы профессии</h1>
                            <p className="text-gray-400 mt-2">Введение в профессию диспетчера грузоперевозок</p>
                        </div>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <span>📚 8 уроков</span>
                        <span>⏱️ 2 часа</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {lessons.map((lesson) => (
                            <Link
                                key={lesson.id}
                                href={`/course/module-1/lesson-${lesson.id}`}
                                className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                                            {lesson.id}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{lesson.title}</h3>
                                            <p className="text-gray-400 text-sm">{lesson.duration}</p>
                                        </div>
                                    </div>
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/course/module-2"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
                        >
                            Следующий модуль: Работа с Load Boards
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
