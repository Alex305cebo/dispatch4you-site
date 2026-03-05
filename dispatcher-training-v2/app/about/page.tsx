import Link from 'next/link'

export default function AboutPage() {
    const team = [
        {
            name: 'Михаил',
            role: 'Основатель и главный инструктор',
            avatar: '👨‍💼',
            experience: '8 лет в логистике',
            description: 'Работал диспетчером в крупных компаниях США, управлял флотом из 50+ trucks'
        },
        {
            name: 'Анна',
            role: 'Старший преподаватель',
            avatar: '👩‍🏫',
            experience: '5 лет опыта',
            description: 'Специалист по коммуникациям и переговорам, обучила более 200 диспетчеров'
        },
        {
            name: 'Дмитрий',
            role: 'Технический директор',
            avatar: '👨‍💻',
            experience: '10 лет в IT',
            description: 'Разработал платформу обучения и Dispatch Simulator'
        }
    ]

    const values = [
        {
            icon: '🎯',
            title: 'Практичность',
            description: 'Только реальные знания, которые применимы в работе'
        },
        {
            icon: '🤝',
            title: 'Поддержка',
            description: 'Мы с вами на каждом этапе обучения и после'
        },
        {
            icon: '📈',
            title: 'Результат',
            description: 'Наша цель - ваше трудоустройство и успех'
        },
        {
            icon: '💡',
            title: 'Инновации',
            description: 'Современные методы обучения и технологии'
        }
    ]

    return (
        <main className="min-h-screen bg-black">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-b from-indigo-950/20 to-black">
                <div className="container mx-auto px-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Назад на главную
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        О <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">нас</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Мы помогаем людям освоить профессию диспетчера грузоперевозок и начать зарабатывать удаленно
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Наша история</h2>
                        <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                            <p>
                                Все началось в 2018 году, когда я, Михаил, работал диспетчером в небольшой транспортной компании в США.
                                Я видел огромный спрос на квалифицированных диспетчеров и понимал, что многие люди хотят работать удаленно,
                                но не знают, с чего начать.
                            </p>
                            <p>
                                Я начал обучать друзей и знакомых, делясь своим опытом. Первые 10 человек успешно устроились на работу
                                и начали зарабатывать. Тогда я понял, что это можно масштабировать и помочь сотням людей.
                            </p>
                            <p>
                                В 2020 году мы запустили первый онлайн-курс. За это время через нашу программу прошли более 500 человек,
                                85% из которых успешно трудоустроились и работают диспетчерами.
                            </p>
                            <p>
                                Сегодня у нас команда из опытных преподавателей, собственная платформа обучения с Dispatch Simulator
                                и партнерские отношения с десятками компаний-работодателей.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { number: '500+', label: 'Выпускников' },
                            { number: '85%', label: 'Трудоустроено' },
                            { number: '4 года', label: 'На рынке' },
                            { number: '4.9/5', label: 'Рейтинг' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Наша команда</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 text-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-5xl">
                                    {member.avatar}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <div className="text-indigo-400 font-semibold mb-2">{member.role}</div>
                                <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                                <p className="text-gray-400">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gradient-to-b from-indigo-950/10 to-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Наши ценности</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Присоединяйтесь к нам
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Станьте частью сообщества успешных диспетчеров
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
