import Link from 'next/link'

export default function PricingPage() {
    const plans = [
        {
            name: 'Базовый',
            price: 'Бесплатно',
            period: '',
            description: 'Для знакомства с профессией',
            features: [
                'Доступ к первым 3 модулям',
                'Базовые материалы курса',
                'Общий чат поддержки',
                'Доступ на 30 дней'
            ],
            notIncluded: [
                'Сертификат не выдается',
                'Нет доступа к Simulator',
                'Нет помощи в трудоустройстве',
                'Нет персональной поддержки'
            ],
            cta: 'Начать бесплатно',
            popular: false,
            color: 'gray'
        },
        {
            name: 'Профессиональный',
            price: '$299',
            period: 'единоразово',
            description: 'Полное обучение с поддержкой',
            features: [
                'Все 12 модулей курса (92 урока)',
                '50+ практических кейсов',
                'Dispatch Simulator (полная версия)',
                'Персональная поддержка 24/7',
                'Помощь в составлении резюме',
                'Помощь в трудоустройстве',
                'Сертификат о прохождении',
                'Доступ к сообществу выпускников',
                'Все обновления курса навсегда',
                'База знаний и шаблоны',
                'Пожизненный доступ'
            ],
            notIncluded: [],
            cta: 'Купить курс',
            popular: true,
            color: 'indigo'
        },
        {
            name: 'VIP',
            price: '$599',
            period: 'единоразово',
            description: 'Максимальная поддержка и внимание',
            features: [
                'Все из тарифа "Профессиональный"',
                'Персональный наставник',
                '5 часов индивидуальных консультаций 1-на-1',
                'Детальный разбор вашего резюме',
                'Подготовка к собеседованиям (mock interviews)',
                'Помощь в первый месяц работы',
                'Приоритетная поддержка (ответ в течение 1 часа)',
                'Доступ к закрытым вакансиям',
                'Персональный план развития карьеры',
                'Рекомендательное письмо',
                'Lifetime mentorship'
            ],
            notIncluded: [],
            cta: 'Купить VIP',
            popular: false,
            color: 'purple'
        }
    ]

    const comparison = [
        { feature: 'Модули курса', basic: '3', pro: '12', vip: '12' },
        { feature: 'Количество уроков', basic: '~20', pro: '92', vip: '92' },
        { feature: 'Практические кейсы', basic: '10', pro: '50+', vip: '50+' },
        { feature: 'Dispatch Simulator', basic: '❌', pro: '✅', vip: '✅' },
        { feature: 'Сертификат', basic: '❌', pro: '✅', vip: '✅' },
        { feature: 'Помощь в трудоустройстве', basic: '❌', pro: '✅', vip: '✅ Premium' },
        { feature: 'Персональная поддержка', basic: '❌', pro: '✅', vip: '✅ Приоритет' },
        { feature: 'Индивидуальный наставник', basic: '❌', pro: '❌', vip: '✅' },
        { feature: '1-на-1 консультации', basic: '❌', pro: '❌', vip: '5 часов' },
        { feature: 'Доступ к материалам', basic: '30 дней', pro: 'Навсегда', vip: 'Навсегда' },
        { feature: 'Обновления курса', basic: '❌', pro: '✅', vip: '✅' },
        { feature: 'Сообщество', basic: '❌', pro: '✅', vip: '✅ VIP' }
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
                        Тарифы и <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">цены</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Выберите план, который подходит именно вам. Инвестиция окупится за первый месяц работы.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
                                        🔥 Популярный
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                                    <div className="text-5xl font-black text-white mb-2">{plan.price}</div>
                                    {plan.period && (
                                        <div className="text-gray-400 text-sm">{plan.period}</div>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <div className="font-semibold text-white mb-4">Включено:</div>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {plan.notIncluded.length > 0 && (
                                        <>
                                            <div className="font-semibold text-white mb-4 mt-6">Не включено:</div>
                                            <ul className="space-y-3">
                                                {plan.notIncluded.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        <span className="text-gray-500 text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>

                                <a
                                    href="/course"
                                    className={`block w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${plan.popular
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 shadow-lg shadow-indigo-500/50'
                                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Сравнение тарифов</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-4 px-4 text-gray-400 font-semibold">Функция</th>
                                        <th className="text-center py-4 px-4 text-white font-bold">Базовый</th>
                                        <th className="text-center py-4 px-4 text-white font-bold">Профессиональный</th>
                                        <th className="text-center py-4 px-4 text-white font-bold">VIP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, index) => (
                                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                                            <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                                            <td className="py-4 px-4 text-center text-gray-400">{row.basic}</td>
                                            <td className="py-4 px-4 text-center text-indigo-400 font-semibold">{row.pro}</td>
                                            <td className="py-4 px-4 text-center text-purple-400 font-semibold">{row.vip}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Наши гарантии</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-bold text-white mb-2">Возврат денег</h3>
                            <p className="text-gray-400">14 дней на то, чтобы убедиться, что курс вам подходит</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-white mb-2">Безопасная оплата</h3>
                            <p className="text-gray-400">Все платежи защищены и проходят через безопасные каналы</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center">
                            <div className="text-4xl mb-4">♾️</div>
                            <h3 className="text-xl font-bold text-white mb-2">Доступ навсегда</h3>
                            <p className="text-gray-400">Платите один раз, учитесь всю жизнь. Все обновления бесплатны</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Вопросы о ценах</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Можно ли оплатить в рассрочку?',
                                a: 'Да, мы предлагаем рассрочку на 3 или 6 месяцев без процентов для тарифов "Профессиональный" и "VIP".'
                            },
                            {
                                q: 'Есть ли скидки?',
                                a: 'Мы регулярно проводим акции. Подпишитесь на рассылку, чтобы не пропустить специальные предложения.'
                            },
                            {
                                q: 'Что если я не найду работу?',
                                a: 'Мы помогаем с трудоустройством всем выпускникам. 85% находят работу в течение месяца после окончания курса.'
                            },
                            {
                                q: 'Можно ли перейти с одного тарифа на другой?',
                                a: 'Да, вы можете в любой момент перейти на более высокий тариф, доплатив разницу.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Начните сегодня
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Инвестиция в образование - лучшая инвестиция в себя
                    </p>
                    <Link
                        href="/course"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/50"
                    >
                        🚀 Выбрать тариф
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
