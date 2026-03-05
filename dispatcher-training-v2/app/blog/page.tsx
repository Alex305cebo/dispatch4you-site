import Link from 'next/link'

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Как стать диспетчером грузоперевозок с нуля',
            excerpt: 'Полное руководство для начинающих: что нужно знать, какие навыки развивать и как найти первую работу.',
            category: 'Карьера',
            date: '15 марта 2024',
            readTime: '8 мин',
            image: '📚',
            author: 'Михаил'
        },
        {
            id: 2,
            title: 'Топ-10 ошибок начинающих диспетчеров',
            excerpt: 'Разбираем самые частые ошибки новичков и как их избежать. Учитесь на чужом опыте!',
            category: 'Советы',
            date: '12 марта 2024',
            readTime: '6 мин',
            image: '⚠️',
            author: 'Анна'
        },
        {
            id: 3,
            title: 'Сколько зарабатывает диспетчер в 2024 году',
            excerpt: 'Актуальная статистика зарплат, факторы влияющие на доход и как увеличить свой заработок.',
            category: 'Финансы',
            date: '10 марта 2024',
            readTime: '10 мин',
            image: '💰',
            author: 'Михаил'
        },
        {
            id: 4,
            title: 'Load Boards: полное руководство',
            excerpt: 'Как работать с DAT и Truckstop, находить лучшие грузы и договариваться о высоких ставках.',
            category: 'Инструменты',
            date: '8 марта 2024',
            readTime: '12 мин',
            image: '🔧',
            author: 'Дмитрий'
        },
        {
            id: 5,
            title: 'Переговоры с брокерами: 7 техник',
            excerpt: 'Проверенные техники переговоров, которые помогут вам получать лучшие ставки.',
            category: 'Навыки',
            date: '5 марта 2024',
            readTime: '7 мин',
            image: '🤝',
            author: 'Анна'
        },
        {
            id: 6,
            title: 'Как работать с трудными водителями',
            excerpt: 'Стратегии общения с проблемными водителями и решение конфликтных ситуаций.',
            category: 'Коммуникация',
            date: '3 марта 2024',
            readTime: '9 мин',
            image: '👥',
            author: 'Михаил'
        },
        {
            id: 7,
            title: 'TMS системы: обзор и сравнение',
            excerpt: 'Сравниваем популярные TMS системы для диспетчеров: функции, цены, плюсы и минусы.',
            category: 'Технологии',
            date: '1 марта 2024',
            readTime: '15 мин',
            image: '💻',
            author: 'Дмитрий'
        },
        {
            id: 8,
            title: 'Fraud prevention: как не попасться на мошенников',
            excerpt: 'Типичные схемы мошенничества в грузоперевозках и как защитить себя и компанию.',
            category: 'Безопасность',
            date: '28 февраля 2024',
            readTime: '11 мин',
            image: '🔒',
            author: 'Анна'
        },
        {
            id: 9,
            title: 'Карьерный путь диспетчера: от Junior до Lead',
            excerpt: 'Этапы карьерного роста, необходимые навыки и зарплаты на каждом уровне.',
            category: 'Карьера',
            date: '25 февраля 2024',
            readTime: '10 мин',
            image: '📈',
            author: 'Михаил'
        }
    ]

    const categories = ['Все', 'Карьера', 'Советы', 'Финансы', 'Инструменты', 'Навыки', 'Технологии']

    return (
        <main className="min-h-screen bg-black">
            {/* Header */}
            <section className="py-20 bg-gradient-to-b from-indigo-950/20 to-black">
                <div className="container mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Назад на главную
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Блог</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Полезные статьи о работе диспетчера, советы экспертов и новости индустрии
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${category === 'Все'
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 text-sm font-semibold">
                                Рекомендуем
                            </span>
                            <span className="text-gray-400 text-sm">{posts[0].date}</span>
                            <span className="text-gray-400 text-sm">• {posts[0].readTime}</span>
                        </div>
                        <div className="flex items-start gap-8">
                            <div className="flex-1">
                                <h2 className="text-4xl font-black text-white mb-4">{posts[0].title}</h2>
                                <p className="text-xl text-gray-300 mb-6">{posts[0].excerpt}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xl">
                                            👨‍💼
                                        </div>
                                        <span className="text-gray-400">{posts[0].author}</span>
                                    </div>
                                    <span className="text-indigo-400 font-semibold">Читать →</span>
                                </div>
                            </div>
                            <div className="hidden lg:block flex-shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-6xl">
                                {posts[0].image}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <div
                                key={post.id}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-6xl mb-6">
                                    {post.image}
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-sm">
                                            👤
                                        </div>
                                        <span className="text-sm text-gray-400">{post.author}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                        <h2 className="text-3xl font-black text-white mb-4">
                            Подпишитесь на рассылку
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Получайте новые статьи, советы и эксклюзивные материалы прямо на почту
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                            />
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Готовы начать обучение?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Получите профессию диспетчера за 3-4 недели
                    </p>
                    <Link
                        href="/course"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/50"
                    >
                        🚀 Начать обучение
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
