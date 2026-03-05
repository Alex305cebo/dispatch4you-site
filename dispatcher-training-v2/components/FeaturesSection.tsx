export default function FeaturesSection() {
    const features = [
        {
            icon: '🎯',
            title: 'Практический подход',
            description: 'Реальные кейсы и ситуации из работы диспетчера. Никакой теории без практики.'
        },
        {
            icon: '💼',
            title: 'Трудоустройство',
            description: 'Помощь в поиске работы и составлении резюме. Связи с компаниями-работодателями.'
        },
        {
            icon: '⚡',
            title: 'Быстрый старт',
            description: 'Начните зарабатывать уже через 3-4 недели обучения. Минимум времени - максимум результата.'
        },
        {
            icon: '🌍',
            title: 'Удаленная работа',
            description: 'Работайте из любой точки мира. Нужен только компьютер и интернет.'
        },
        {
            icon: '💰',
            title: 'Высокий доход',
            description: 'Средняя зарплата диспетчера $3000-6000/месяц. Опытные специалисты зарабатывают до $10000.'
        },
        {
            icon: '🎓',
            title: 'Сертификат',
            description: 'Получите сертификат о прохождении курса, который ценят работодатели.'
        }
    ]

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Почему выбирают <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">наш курс</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Мы создали программу, которая действительно работает и помогает людям начать карьеру
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
