export default function BenefitsSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Что вы получите после <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">обучения</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Полный набор навыков для успешного старта карьеры диспетчера грузоперевозок
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Практические навыки',
                                    description: 'Умение работать со всеми необходимыми программами и сервисами'
                                },
                                {
                                    title: 'Портфолио кейсов',
                                    description: 'Решенные реальные задачи для демонстрации работодателям'
                                },
                                {
                                    title: 'Сертификат',
                                    description: 'Официальный документ о прохождении курса'
                                },
                                {
                                    title: 'Доступ к сообществу',
                                    description: 'Нетворкинг с другими диспетчерами и обмен опытом'
                                },
                                {
                                    title: 'Поддержка после курса',
                                    description: 'Помощь в первые месяцы работы и консультации'
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                                        <p className="text-gray-400">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm">
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-black/50 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-2xl">
                                            💼
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Средняя зарплата</div>
                                            <div className="text-2xl font-black text-white">$3,000 - $6,000</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm">в месяц для начинающих</div>
                                </div>

                                <div className="p-6 rounded-2xl bg-black/50 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                                            ⏰
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Время обучения</div>
                                            <div className="text-2xl font-black text-white">3-4 недели</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm">до первой работы</div>
                                </div>

                                <div className="p-6 rounded-2xl bg-black/50 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                            🎯
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Трудоустройство</div>
                                            <div className="text-2xl font-black text-white">85%</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm">выпускников находят работу</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
