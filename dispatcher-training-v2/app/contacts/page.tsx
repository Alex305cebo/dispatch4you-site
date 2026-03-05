import Link from 'next/link'

export default function ContactsPage() {
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
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Контакты</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Свяжитесь с нами любым удобным способом. Мы ответим в течение 24 часов.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                                📧
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <a href="mailto:info@dispatcher-training.com" className="text-indigo-400 hover:text-indigo-300">
                                info@dispatcher-training.com
                            </a>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                                💬
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
                            <a href="https://t.me/dispatcher_training" className="text-indigo-400 hover:text-indigo-300">
                                @dispatcher_training
                            </a>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                                📱
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <a href="https://wa.me/1234567890" className="text-indigo-400 hover:text-indigo-300">
                                +1 (234) 567-8900
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-3xl font-bold text-white mb-6">Отправить сообщение</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Ваше имя
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                                        placeholder="Иван Иванов"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                                        placeholder="ivan@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Тема
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                                        placeholder="Вопрос о курсе"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Сообщение
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 resize-none"
                                        placeholder="Расскажите, чем мы можем помочь..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/50"
                                >
                                    Отправить сообщение
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Link */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Часто задаваемые вопросы</h2>
                    <p className="text-gray-400 mb-8">
                        Возможно, ответ на ваш вопрос уже есть в нашем FAQ
                    </p>
                    <Link
                        href="/#faq"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all duration-300"
                    >
                        Посмотреть FAQ
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
