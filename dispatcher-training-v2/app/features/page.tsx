import Link from 'next/link'

export default function FeaturesPage() {
    const features = [
        {
            icon: '🎯',
            title: 'Практический подход',
            description: 'Реальные кейсы и ситуации из работы диспетчера. Никакой теории без практики.',
            details: [
                'Более 50 реальных кейсов из практики',
                'Разбор типичных и сложных ситуаций',
                'Практические задания после каждого урока',
                'Работа с реальными документами и формами'
            ]
        },
        {
            icon: '💼',
            title: 'Помощь в трудоустройстве',
            description: 'Помощь в поиске работы и составлении резюме. Связи с компаниями-работодателями.',
            details: [
                'Составление профессионального резюме',
                'Подготовка к собеседованиям',
                'База вакансий от партнеров',
                'Рекомендации работодателям'
            ]
        },
        {
            icon: '⚡',
            title: 'Быстрый старт',
            description: 'Начните зарабатывать уже через 3-4 недели обучения. Минимум времени - максимум результата.',
            details: [
                'Интенсивная программа обучения',
                'Фокус на самом важном',
                'Ежедневная практика',
                'Быстрый путь к первой работе'
            ]
        },
        {
            icon: '🌍',
            title: 'Удаленная работа',
            description: 'Работайте из любой точки мира. Нужен только компьютер и интернет.',
            details: [
                'Работа из дома или любого места',
                'Гибкий график',
                'Не нужно переезжать в США',
                'Международная команда'
            ]
        },
        {
            icon: '💰',
            title: 'Высокий доход',
            description: 'Средняя зарплата диспетчера $3000-6000/месяц. Опытные специалисты зарабатывают до $10000.',
            details: [
                'Начинающие: $3000-4000/месяц',
                'Опытные: $5000-7000/месяц',
                'Эксперты: $8000-10000+/месяц',
                'Бонусы и премии'
            ]
        },
        {
            icon: '🎓',
            title: 'Сертификат',
            description: 'Получите сертификат о прохождении курса, который ценят работодатели.',
            details: [
                'Официальный сертификат',
                'Признается работодателями',
                'Подтверждение квалификации',
                'Портфолио выполненных кейсов'
            ]
        },
        {
            icon: '👥',
            title: 'Сообщество',
            description: 'Доступ к закрытому сообществу диспетчеров для обмена опытом.',
            details: [
                'Telegram чат выпускников',
                'Еженедельные вебинары',
                'Обмен опытом и советами',
                'Нетворкинг и связи'
            ]
        },
        {
            icon: '🔄',
            title: 'Обновления навсегда',
            description: 'Все обновления курса бесплатны. Доступ к материалам не ограничен.',
            details: [
                'Пожизненный доступ к курсу',
                'Все новые уроки бесплатно',
                'Актуальная информация',
                'Новые кейсы и материалы'
            ]
        },
        {
            icon: '🎮',
            title: 'Dispatch Simulator',
            description: 'Уникальный тренажер для отработки навыков в безопасной среде.',
            details: [
                '50+ интерактивных сценариев',
                'AI-собеседники (водители, брокеры)',
                'Оценка ваших решений',
                'Обратная связь по каждому действию'
            ]
        },
        {
            icon: '📚',
            title: 'База знаний',
            description: 'Доступ к обширной базе знаний с шаблонами и чек-листами.',
            details: [
                'Шаблоны документов',
                'Чек-листы для работы',
                'Справочники терминов',
                'Полезные ссылки и ресурсы'
            ]
        },
        {
            icon: '🎯',
            title: 'Персональный подход',
            description: 'Индивидуальная обратная связь и помощь на каждом этапе.',
            details: [
                'Проверка домашних заданий',
                'Ответы на вопросы 24/7',
                'Персональные консультации',
                'Адаптация программы под вас'
            ]
        },
        {
            icon: '🚀',
            title: 'Карьерный рост',
            description: 'Помощь в развитии карьеры от Junior до Senior Dispatcher.',
            details: [
                'Планирование карьеры',
                'Советы по повышению',
                'Развитие навыков лидерства',
                'Путь к управляющим позициям'
            ]
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
                        Преимущества <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">курса</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Все, что делает наш курс лучшим выбором для обучения профессии диспетчера
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                                        <ul className="space-y-2">
                                            {feature.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-400">
                                                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
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
                        Готовы начать?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Получите доступ ко всем преимуществам курса
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
