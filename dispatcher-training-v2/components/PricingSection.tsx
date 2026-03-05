import Link from 'next/link'

export default function PricingSection() {
    const plans = [
        {
            name: 'Базовый',
            price: 'Бесплатно',
            description: 'Для знакомства с профессией',
            features: [
                'Доступ к первым 3 модулям',
                'Базовые материалы',
                'Общий чат поддержки',
                'Сертификат не выдается'
            ],
            cta: 'Начать бесплатно',
            popular: false
        },
        {
            name: 'Профессиональный',
            price: '$299',
            description: 'Полное обучение с поддержкой',
            features: [
                'Все 12 модулей курса',
                '50+ практических кейсов',
                'Dispatch Simulator',
                'Персональная поддержка',
                'Помощь в трудоустройстве',
                'Сертификат о прохождении',
                'Доступ к сообществу',
                'Обновления курса навсегда'
            ],
            cta: 'Купить курс',
            popular: true
        },
        {
            name: 'VIP',
            price: '$599',
            description: 'Максимальная поддержка',
            features: [
                'Все из Профессионального',
                'Индивидуальный наставник',
                '1-на-1 консультации (5 часов)',
                'Разбор вашего резюме',
                'Подготовка к собеседованиям',
                'Помощь в первый месяц работы',
                'Приоритетная поддержка',
                'Доступ к закрытым вакансиям'
            ],
            cta: 'Купить VIP',
            popular: false
        }
    ]

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Выберите свой <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">план</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Инвестиция в образование окупится за первый месяц работы
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${plan.popular
                                ? 'bg-gradient-to-b from-indigo-500/20 to-purple-500/20 border-indigo-500/50 shadow-2xl shadow-indigo-500/20'
                                : 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold text-white">
                                    Популярный
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                                <div className="text-5xl font-black text-white mb-2">{plan.price}</div>
                                {plan.price !== 'Бесплатно' && (
                                    <div className="text-gray-400 text-sm">единоразовый платеж</div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.price === 'Бесплатно' ? "/course" : "/pricing"}
                                className={`block w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${plan.popular
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 shadow-lg shadow-indigo-500/50'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Money back guarantee */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
                        <div className="text-4xl">✅</div>
                        <div className="text-left">
                            <div className="font-bold text-white text-lg">Гарантия возврата денег</div>
                            <div className="text-gray-400">14 дней на то, чтобы убедиться, что курс вам подходит</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
