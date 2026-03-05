import Link from 'next/link'

export default function CoursePage() {
    const modules = [
        {
            id: 1,
            title: 'Основы профессии',
            description: 'Введение в профессию диспетчера грузоперевозок',
            lessons: 8,
            duration: '2 часа',
            topics: ['Что делает диспетчер', 'Терминология', 'Типы грузов', 'Документация', 'Рабочий день', 'Инструменты', 'Зарплаты', 'Карьерный путь']
        },
        {
            id: 2,
            title: 'Работа с Load Boards',
            description: 'Поиск и бронирование грузов на платформах',
            lessons: 10,
            duration: '3 часа',
            topics: ['DAT Load Board', 'Truckstop', 'Поиск грузов', 'Анализ ставок', 'Бронирование', 'Работа с брокерами', 'Negotiation', 'Rate confirmation']
        },
        {
            id: 3,
            title: 'Коммуникация с водителями',
            description: 'Эффективное общение и управление водителями',
            lessons: 12,
            duration: '4 часа',
            topics: ['Первый контакт', 'Переговоры', 'Решение проблем', 'Конфликты', 'Мотивация', 'Feedback', 'Emergency situations', 'Retention']
        },
        {
            id: 4,
            title: 'Работа с брокерами',
            description: 'Построение отношений с freight brokers',
            lessons: 10,
            duration: '3 часа',
            topics: ['Поиск брокеров', 'Cold calling', 'Переговоры о ставках', 'Контракты', 'Факторинг', 'Credit checks', 'Carrier packets', 'Long-term relationships']
        },
        {
            id: 5,
            title: 'Маршрутизация',
            description: 'Планирование оптимальных маршрутов',
            lessons: 8,
            duration: '2.5 часа',
            topics: ['Google Maps', 'PC Miler', 'Планирование маршрутов', 'HOS правила', 'Truck stops', 'Weigh stations', 'Оптимизация', 'Fuel management']
        },
        {
            id: 6,
            title: 'Документооборот',
            description: 'Работа с документами и invoicing',
            lessons: 6,
            duration: '2 часа',
            topics: ['BOL (Bill of Lading)', 'POD (Proof of Delivery)', 'Rate Confirmation', 'Invoicing', 'Факторинг', 'Quick Pay', 'Архивация', 'Compliance']
        },
        {
            id: 7,
            title: 'Безопасность грузов',
            description: 'Cargo insurance и fraud prevention',
            lessons: 7,
            duration: '2 часа',
            topics: ['Cargo insurance', 'Проверка водителей', 'Fraud prevention', 'Double brokering', 'Claims', 'Liability', 'Safety ratings', 'FMCSA']
        },
        {
            id: 8,
            title: 'Работа с CRM',
            description: 'TMS системы и автоматизация',
            lessons: 5,
            duration: '1.5 часа',
            topics: ['TMS системы', 'Axon', 'McLeod', 'Автоматизация', 'Отчетность', 'Аналитика', 'Integrations', 'Best practices']
        },
        {
            id: 9,
            title: 'Финансы и учет',
            description: 'Управление финансами и прибылью',
            lessons: 6,
            duration: '2 часа',
            topics: ['Расчет прибыли', 'Expenses', 'Налоги', 'Бюджетирование', 'Cash flow', 'Profit margins', 'Financial reports', 'Accounting']
        },
        {
            id: 10,
            title: 'Кризисные ситуации',
            description: 'Решение проблем и форс-мажоры',
            lessons: 8,
            duration: '2.5 часа',
            topics: ['Поломки', 'Аварии', 'Задержки', 'Форс-мажор', 'Погода', 'Отказы водителей', 'Cancellations', 'Recovery plans']
        },
        {
            id: 11,
            title: 'Масштабирование',
            description: 'Рост и развитие бизнеса',
            lessons: 7,
            duration: '2 часа',
            topics: ['Найм водителей', 'Расширение флота', 'Делегирование', 'Системы', 'Team building', 'Scaling strategies', 'Partnerships', 'Growth hacking']
        },
        {
            id: 12,
            title: 'Карьерный рост',
            description: 'Трудоустройство и развитие карьеры',
            lessons: 5,
            duration: '1.5 часа',
            topics: ['Резюме', 'Собеседования', 'Зарплаты', 'Развитие', 'Networking', 'Personal branding', 'Job search', 'Career planning']
        }
    ]

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
                        Программа <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">курса</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        12 модулей, 92 урока, 28 часов контента. От новичка до профессионального диспетчера за 3-4 недели.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                <span className="text-2xl">📚</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">92</div>
                                <div className="text-sm text-gray-400">Урока</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <span className="text-2xl">⏱️</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">28</div>
                                <div className="text-sm text-gray-400">Часов</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                <span className="text-2xl">💼</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-sm text-gray-400">Кейсов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="space-y-6">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* Module number */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                                            <span className="text-2xl font-black text-white">{module.id}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                                        <p className="text-gray-400 mb-4">{module.description}</p>

                                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                                                📚 {module.lessons} уроков
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                                                ⏱️ {module.duration}
                                            </span>
                                        </div>

                                        {/* Topics */}
                                        <div className="flex flex-wrap gap-2">
                                            {module.topics.map((topic, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm border border-white/10"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex-shrink-0">
                                        <Link
                                            href={`/course/module-${module.id}`}
                                            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/20 inline-block"
                                        >
                                            Начать модуль
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-black to-indigo-950/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Готовы начать обучение?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Получите доступ ко всем модулям и начните карьеру диспетчера
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/50"
                    >
                        🚀 Купить курс
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
