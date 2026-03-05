import Link from 'next/link'

export default function Module2Page() {
    const lessons = [
        { id: 1, title: 'DAT Load Board', duration: '18 мин' },
        { id: 2, title: 'Truckstop', duration: '17 мин' },
        { id: 3, title: 'Поиск грузов', duration: '22 мин' },
        { id: 4, title: 'Анализ ставок', duration: '20 мин' },
        { id: 5, title: 'Бронирование', duration: '19 мин' },
        { id: 6, title: 'Работа с брокерами', duration: '24 мин' },
        { id: 7, title: 'Negotiation', duration: '21 мин' },
        { id: 8, title: 'Rate confirmation', duration: '16 мин' }
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
                            2
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-white">Работа с Load Boards</h1>
                            <p className="text-gray-400 mt-2">Поиск и бронирование грузов на платформах</p>
                        </div>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <span>📚 10 уроков</span>
                        <span>⏱️ 3 часа</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {lessons.map((lesson) => (
                            <Link
                                key={lesson.id}
                                href={`/course/module-2/lesson-${lesson.id}`}
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

                    <div className="mt-12 flex justify-between">
                        <Link
                            href="/course/module-1"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                            Предыдущий модуль
                        </Link>
                        <Link
                            href="/course/module-3"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
                        >
                            Следующий модуль
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
