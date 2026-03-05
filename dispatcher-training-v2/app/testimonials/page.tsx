import Link from 'next/link'

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: 'Алексей М.',
            role: 'Dispatcher в ABC Logistics',
            location: 'Москва, Россия',
            avatar: '👨‍💼',
            rating: 5,
            date: 'Январь 2024',
            text: 'Прошел курс за 3 недели и сразу нашел работу. Зарплата $4500/месяц. Курс окупился за первый месяц работы! Особенно помог Simulator - там я отработал все сложные ситуации.',
            salary: '$4,500/мес',
            timeToJob: '2 недели'
        },
        {
            name: 'Мария К.',
            role: 'Senior Dispatcher',
            location: 'Киев, Украина',
            avatar: '👩‍💼',
            rating: 5,
            date: 'Декабрь 2023',
            text: 'Отличная программа! Особенно понравились практические кейсы. Сейчас зарабатываю $6000 и работаю удаленно из дома. Преподаватели всегда на связи и помогают.',
            salary: '$6,000/мес',
            timeToJob: '1 неделя'
        },
        {
            name: 'Дмитрий П.',
            role: 'Dispatcher в XYZ Transport',
            location: 'Минск, Беларусь',
            avatar: '👨‍💻',
            rating: 5,
            date: 'Ноябрь 2023',
            text: 'До курса не знал ничего о логистике. Сейчас уверенно работаю диспетчером. Преподаватели всегда помогали и поддерживали. Очень благодарен за помощь в трудоустройстве!',
            salary: '$3,800/мес',
            timeToJob: '3 недели'
        },
        {
            name: 'Елена С.',
            role: 'Freight Dispatcher',
            location: 'Алматы, Казахстан',
            avatar: '👩‍💻',
            rating: 5,
            date: 'Октябрь 2023',
            text: 'Лучшее вложение в себя! За 4 недели получила все необходимые знания. Работаю уже полгода, очень довольна. Зарплата растет каждый месяц.',
            salary: '$4,200/мес',
            timeToJob: '2 недели'
        },
        {
            name: 'Игорь В.',
            role: 'Lead Dispatcher',
            location: 'Санкт-Петербург, Россия',
            avatar: '👨‍🔧',
            rating: 5,
            date: 'Сентябрь 2023',
            text: 'Курс дал мне возможность сменить профессию и увеличить доход в 2 раза. Рекомендую всем, кто хочет работать удаленно. Сейчас управляю командой из 5 диспетчеров.',
            salary: '$7,500/мес',
            timeToJob: '1 неделя'
        },
        {
            name: 'Анна Л.',
            role: 'Dispatcher',
            location: 'Тбилиси, Грузия',
            avatar: '👩‍🎓',
            rating: 5,
            date: 'Август 2023',
            text: 'Очень структурированная программа. Все по делу, без воды. Simulator помог отработать навыки перед реальной работой. Нашла работу еще до окончания курса!',
            salary: '$3,500/мес',
            timeToJob: '1 неделя'
        },
        {
            name: 'Сергей Н.',
            role: 'Dispatcher в Global Freight',
            location: 'Ереван, Армения',
            avatar: '👨‍💼',
            rating: 5,
            date: 'Июль 2023',
            text: 'Работал таксистом, решил попробовать диспетчинг. Не пожалел! Доход вырос в 3 раза, работаю из дома. Курс дал все необходимые знания и уверенность.',
            salary: '$5,200/мес',
            timeToJob: '2 недели'
        },
        {
            name: 'Ольга Т.',
            role: 'Senior Dispatcher',
            location: 'Варшава, Польша',
            avatar: '👩‍💼',
            rating: 5,
            date: 'Июнь 2023',
            text: 'Прошла курс год назад. Сейчас зарабатываю $8000 и обучаю новых диспетчеров. Курс дал отличную базу, а дальше все зависит от вас. Спасибо команде!',
            salary: '$8,000/мес',
            timeToJob: '1 неделя'
        },
        {
            name: 'Владимир К.',
            role: 'Dispatcher',
            location: 'Рига, Латвия',
            avatar: '👨‍💻',
            rating: 5,
            date: 'Май 2023',
            text: 'Мне 45 лет, думал поздно менять профессию. Но курс показал, что возраст не помеха. Сейчас работаю диспетчером и очень доволен. Никогда не поздно учиться!',
            salary: '$4,000/мес',
            timeToJob: '3 недели'
        },
        {
            name: 'Наталья Р.',
            role: 'Freight Coordinator',
            location: 'Кишинев, Молдова',
            avatar: '👩‍💼',
            rating: 5,
            date: 'Апрель 2023',
            text: 'Была домохозяйкой, хотела начать зарабатывать. Курс дал мне профессию и финансовую независимость. Работаю пока дети в школе. Идеально для мам!',
            salary: '$3,200/мес',
            timeToJob: '4 недели'
        },
        {
            name: 'Артем Б.',
            role: 'Lead Dispatcher',
            location: 'Баку, Азербайджан',
            avatar: '👨‍💼',
            rating: 5,
            date: 'Март 2023',
            text: 'Начинал с $3000, сейчас зарабатываю $9000. Курс дал фундамент, а опыт пришел с практикой. Рекомендую VIP тариф - индивидуальные консультации очень помогли.',
            salary: '$9,000/мес',
            timeToJob: '1 неделя'
        },
        {
            name: 'Юлия М.',
            role: 'Dispatcher',
            location: 'Ташкент, Узбекистан',
            avatar: '👩‍💻',
            rating: 5,
            date: 'Февраль 2023',
            text: 'Английский был на базовом уровне, но курс помог подтянуть профессиональную лексику. Сейчас свободно общаюсь с водителями и брокерами. Зарплата $3600.',
            salary: '$3,600/мес',
            timeToJob: '2 недели'
        }
    ]

    const stats = [
        { number: '500+', label: 'Выпускников', icon: '🎓' },
        { number: '85%', label: 'Трудоустроено', icon: '💼' },
        { number: '$5,000', label: 'Средняя зарплата', icon: '💰' },
        { number: '4.9/5', label: 'Рейтинг курса', icon: '⭐' },
        { number: '2 недели', label: 'До первой работы', icon: '⚡' },
        { number: '98%', label: 'Довольны курсом', icon: '😊' }
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
                        Отзывы <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">выпускников</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Реальные истории людей, которые прошли обучение и успешно работают диспетчерами
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl flex-shrink-0">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{testimonial.name}</div>
                                            <div className="text-sm text-gray-400">{testimonial.role}</div>
                                            <div className="text-xs text-gray-500">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-sm text-gray-400 ml-2">{testimonial.date}</span>
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 mb-6 leading-relaxed flex-1">"{testimonial.text}"</p>

                                {/* Stats */}
                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-500 mb-1">Зарплата</div>
                                        <div className="font-bold text-green-400">{testimonial.salary}</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-500 mb-1">До работы</div>
                                        <div className="font-bold text-indigo-400">{testimonial.timeToJob}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-16 bg-gradient-to-b from-indigo-950/10 to-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Видео отзывы</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-400">Видео отзыв #{i}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Станьте следующим успешным выпускником
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Присоединяйтесь к 500+ людям, которые уже изменили свою жизнь
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
