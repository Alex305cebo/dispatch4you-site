import Link from 'next/link'

export default function PrivacyPage() {
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
                        Политика <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">конфиденциальности</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Последнее обновление: 4 марта 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-invert">
                        <div className="space-y-8 text-gray-300">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Введение</h2>
                                <p className="leading-relaxed">
                                    Dispatcher Training ("мы", "наш", "нас") уважает вашу конфиденциальность и стремится защитить ваши персональные данные.
                                    Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего веб-сайта и услуг.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Информация, которую мы собираем</h2>
                                <p className="leading-relaxed mb-4">Мы можем собирать следующие типы информации:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Личная информация: имя, email, номер телефона</li>
                                    <li>Платежная информация: данные карты обрабатываются через защищенные платежные системы</li>
                                    <li>Информация об использовании: IP-адрес, тип браузера, страницы, которые вы посещаете</li>
                                    <li>Cookies и аналогичные технологии для улучшения пользовательского опыта</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Как мы используем вашу информацию</h2>
                                <p className="leading-relaxed mb-4">Мы используем собранную информацию для:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Предоставления доступа к курсам и материалам</li>
                                    <li>Обработки платежей и управления подписками</li>
                                    <li>Отправки важных уведомлений и обновлений</li>
                                    <li>Улучшения наших услуг и пользовательского опыта</li>
                                    <li>Предоставления технической поддержки</li>
                                    <li>Соблюдения юридических обязательств</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Защита данных</h2>
                                <p className="leading-relaxed">
                                    Мы применяем современные технические и организационные меры для защиты ваших данных от несанкционированного доступа,
                                    изменения, раскрытия или уничтожения. Все данные передаются по защищенному SSL-соединению.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Передача данных третьим лицам</h2>
                                <p className="leading-relaxed mb-4">
                                    Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Платежных систем для обработки транзакций</li>
                                    <li>Сервисов email-рассылок для отправки уведомлений</li>
                                    <li>Аналитических сервисов для улучшения сайта</li>
                                    <li>Случаев, требуемых законом</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Ваши права</h2>
                                <p className="leading-relaxed mb-4">Вы имеете право:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Получить доступ к своим персональным данным</li>
                                    <li>Исправить неточные данные</li>
                                    <li>Удалить свои данные</li>
                                    <li>Ограничить обработку данных</li>
                                    <li>Возразить против обработки данных</li>
                                    <li>Получить копию своих данных</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
                                <p className="leading-relaxed">
                                    Мы используем cookies для улучшения функциональности сайта и анализа трафика.
                                    Вы можете настроить свой браузер для отклонения cookies, но это может ограничить функциональность сайта.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Изменения в политике</h2>
                                <p className="leading-relaxed">
                                    Мы можем обновлять эту политику конфиденциальности время от времени.
                                    Мы уведомим вас о существенных изменениях по email или через уведомление на сайте.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Контакты</h2>
                                <p className="leading-relaxed">
                                    Если у вас есть вопросы о нашей политике конфиденциальности, свяжитесь с нами:
                                </p>
                                <ul className="list-none space-y-2 mt-4">
                                    <li>📧 Email: privacy@dispatcher-training.com</li>
                                    <li>💬 Telegram: @dispatcher_training</li>
                                    <li>📱 WhatsApp: +1 (234) 567-8900</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
