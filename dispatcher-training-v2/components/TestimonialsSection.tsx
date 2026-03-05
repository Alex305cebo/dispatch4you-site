export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Алексей М.',
            role: 'Dispatcher в ABC Logistics',
            avatar: '👨‍💼',
            text: 'Прошел курс за 3 недели и сразу нашел работу. Зарплата $4500/месяц. Курс окупился за первый месяц работы!',
            rating: 5
        },
        {
            name: 'Мария К.',
            role: 'Senior Dispatcher',
            avatar: '👩‍💼',
            text: 'Отличная программа! Особенно понравились практические кейсы. Сейчас зарабатываю $6000 и работаю удаленно из дома.',
            rating: 5
        },
        {
            name: 'Дмитрий П.',
            role: 'Dispatcher в XYZ Transport',
            avatar: '👨‍💻',
            text: 'До курса не знал ничего о логистике. Сейчас уверенно работаю диспетчером. Преподаватели всегда помогали и поддерживали.',
            rating: 5
        },
        {
            name: 'Елена С.',
            role: 'Freight Dispatcher',
            avatar: '👩‍💻',
            text: 'Лучшее вложение в себя! За 4 недели получила все необходимые знания. Работаю уже полгода, очень довольна.',
            rating: 5
        },
        {
            name: 'Игорь В.',
            role: 'Lead Dispatcher',
            avatar: '👨‍🔧',
            text: 'Курс дал мне возможность сменить профессию и увеличить доход в 2 раза. Рекомендую всем, кто хочет работать удаленно.',
            rating: 5
        },
        {
            name: 'Анна Л.',
            role: 'Dispatcher',
            avatar: '👩‍🎓',
            text: 'Очень структурированная программа. Все по делу, без воды. Simulator помог отработать навыки перед реальной работой.',
            rating: 5
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-black via-indigo-950/10 to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Отзывы <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">выпускников</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Более 500 человек уже прошли обучение и успешно работают диспетчерами
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { number: '500+', label: 'Выпускников' },
                        { number: '85%', label: 'Трудоустроено' },
                        { number: '4.9/5', label: 'Рейтинг курса' },
                        { number: '$5000', label: 'Средняя зарплата' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
