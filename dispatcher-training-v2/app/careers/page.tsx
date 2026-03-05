import Link from 'next/link'

export default function CareersPage() {
    const jobs = [
        {
            title: 'Dispatcher (Entry Level)',
            company: 'ABC Logistics',
            location: 'Remote (USA)',
            salary: '$3,000 - $4,000/мес',
            type: 'Full-time',
            experience: 'Без опыта',
            description: 'Ищем начинающего диспетчера для работы с флотом из 10 trucks. Обучение на месте.',
            requirements: [
                'Базовый английский (B1)',
                'Компьютерная грамотность',
                'Готовность учиться',
                'Ответственность'
            ],
            benefits: [
                'Обучение за счет компании',
                'Гибкий график',
                'Удаленная работа',
                'Карьерный рост'
            ]
        },
        {
            title: 'Freight Dispatcher',
            company: 'XYZ Transport',
            location: 'Remote (International)',
            salary: '$4,000 - $5,500/мес',
            type: 'Full-time',
            experience: '6+ месяцев',
            description: 'Требуется опытный диспетчер для работы с dry van и reefer грузами.',
            requirements: [
                'Опыт работы диспетчером 6+ месяцев',
                'Знание DAT, Truckstop',
                'Английский B2+',
                'Опыт работы с TMS'
            ],
            benefits: [
                'Конкурентная зарплата',
                'Бонусы за performance',
                'Оплачиваемый отпуск',
                'Медицинская страховка'
            ]
        },
        {
            title: 'Senior Dispatcher',
            company: 'Global Freight Solutions',
            location: 'Remote (Worldwide)',
            salary: '$6,000 - $8,000/мес',
            type: 'Full-time',
            experience: '2+ года',
            description: 'Ищем опытного диспетчера для управления командой и работы с крупными клиентами.',
            requirements: [
                'Опыт работы 2+ года',
                'Опыт управления командой',
                'Английский C1',
                'Знание всех типов грузов'
            ],
            benefits: [
                'Высокая зарплата',
                'Управление командой',
                'Бонусы и премии',
                'Профессиональное развитие'
            ]
        },
        {
            title: 'Night Shift Dispatcher',
            company: 'FastTrack Logistics',
            location: 'Remote',
            salary: '$3,500 - $4,500/мес',
            type: 'Full-time (Night)',
            experience: '3+ месяца',
            description: 'Требуется диспетчер для работы в ночную смену (EST timezone).',
            requirements: [
                'Опыт работы 3+ месяца',
                'Готовность к ночным сменам',
                'Английский B1+',
                'Стрессоустойчивость'
            ],
            benefits: [
                'Надбавка за ночные',
                'Стабильный график',
                'Удаленная работа',
                'Дружная команда'
            ]
        },
        {
            title: 'Lead Dispatcher',
            company: 'Prime Transport',
            location: 'Remote (USA/Canada)',
            salary: '$7,000 - $10,000/мес',
            type: 'Full-time',
            experience: '3+ года',
            description: 'Ищем Lead Dispatcher для управления отделом диспетчеров (5-7 человек).',
            requirements: [
                'Опыт работы 3+ года',
                'Опыт управления командой',
                'Английский C1+',
                'Лидерские качества'
            ],
            benefits: [
                'Топовая зарплата',
                'Управление отделом',
                'Годовые бонусы',
                'Equity options'
            ]
        },
        {
            title: 'Dispatcher Trainee',
            company: 'StartUp Logistics',
            location: 'Remote',
            salary: '$2,500 - $3,000/мес',
            type: 'Full-time',
            experience: 'Без опыта',
            description: 'Программа стажировки для начинающих диспетчеров с последующим трудоустройством.',
            requirements: [
                'Без опыта (обучим)',
                'Базовый английский',
                'Желание учиться',
                'Компьютерная грамотность'
            ],
            benefits: [
                'Полное обучение',
                'Наставник',
                'Гарантия трудоустройства',
                'Карьерный рост'
            ]
        }
    ]

    const careerPath = [
        {
            level: 'Junior Dispatcher',
            salary: '$3,000 - $4,000',
            experience: '0-6 месяцев',
            skills: ['Базовые навыки', 'Load boards', 'Коммуникация', 'Документация']
        },
        {
            level: 'Dispatcher',
            salary: '$4,000 - $6,000',
            experience: '6-18 месяцев',
            skills: ['Переговоры', 'TMS системы', 'Маршрутизация', 'Решение проблем']
        },
        {
            level: 'Senior Dispatcher',
            salary: '$6,000 - $8,000',
            experience: '1.5-3 года',
            skills: ['Экспертиза', 'Наставничество', 'Сложные кейсы', 'Оптимизация']
        },
        {
            level: 'Lead Dispatcher',
            salary: '$8,000 - $12,000',
            experience: '3+ года',
            skills: ['Управление командой', 'Стратегия', 'Бизнес-процессы', 'Лидерство']
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
                        Вакансии <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">диспетчеров</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Актуальные вакансии от наших партнеров. Помогаем выпускникам найти работу.
                    </p>
                </div>
            </section>

            {/* Career Path */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Карьерный путь диспетчера</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {careerPath.map((stage, index) => (
                            <div key={index} className="relative">
                                {index < careerPath.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent transform translate-x-1/2 -translate-y-1/2 z-0"></div>
                                )}
                                <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-black text-white mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{stage.level}</h3>
                                    <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                        {stage.salary}
                                    </div>
                                    <div className="text-sm text-gray-400 mb-4">{stage.experience}</div>
                                    <ul className="space-y-2">
                                        {stage.skills.map((skill, i) => (
                                            <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                                <span className="text-indigo-400">•</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8">Актуальные вакансии</h2>
                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold">
                                                {job.type}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {job.company}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {job.experience}
                                            </span>
                                        </div>

                                        <p className="text-gray-400 mb-6">{job.description}</p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-white mb-3">Требования:</h4>
                                                <ul className="space-y-2">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-400">
                                                            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-3">Мы предлагаем:</h4>
                                                <ul className="space-y-2">
                                                    {job.benefits.map((benefit, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-400">
                                                            <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 lg:text-right">
                                        <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                                            {job.salary}
                                        </div>
                                        <button className="w-full lg:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300">
                                            Откликнуться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 bg-gradient-to-b from-indigo-950/10 to-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Помощь в трудоустройстве</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Мы помогаем нашим выпускникам найти работу и подготовиться к собеседованиям
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '📝', title: 'Резюме', text: 'Помогаем составить профессиональное резюме' },
                                { icon: '🎯', title: 'Подготовка', text: 'Готовим к собеседованиям и тестовым заданиям' },
                                { icon: '🤝', title: 'Рекомендации', text: 'Рекомендуем лучших выпускников работодателям' }
                            ].map((item, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Начните карьеру диспетчера
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Пройдите обучение и получите доступ к вакансиям от наших партнеров
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
