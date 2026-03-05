import Link from 'next/link'

export default function TermsPage() {
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
                        Условия <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">использования</span>
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
                                <h2 className="text-2xl font-bold text-white mb-4">1. Принятие условий</h2>
                                <p className="leading-relaxed">
                                    Используя веб-сайт Dispatcher Training и наши услуги, вы соглашаетесь с настоящими Условиями использования.
                                    Если вы не согласны с какой-либо частью этих условий, пожалуйста, не используйте наши услуги.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Описание услуг</h2>
                                <p className="leading-relaxed mb-4">
                                    Dispatcher Training предоставляет онлайн-курсы и образовательные материалы для обучения профессии диспетчера грузоперевозок.
                                    Наши услуги включают:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Доступ к видео урокам и текстовым материалам</li>
                                    <li>Практические задания и кейсы</li>
                                    <li>Dispatch Simulator для отработки навыков</li>
                                    <li>Поддержку преподавателей</li>
                                    <li>Сертификат о прохождении курса</li>
                                    <li>Помощь в трудоустройстве</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Регистрация и аккаунт</h2>
                                <p className="leading-relaxed mb-4">
                                    Для доступа к некоторым функциям вам необходимо создать аккаунт. Вы обязуетесь:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Предоставлять точную и актуальную информацию</li>
                                    <li>Поддерживать безопасность своего пароля</li>
                                    <li>Немедленно уведомлять нас о любом несанкционированном использовании</li>
                                    <li>Не передавать свой аккаунт третьим лицам</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Оплата и возврат средств</h2>
                                <p className="leading-relaxed mb-4">
                                    <strong>Оплата:</strong> Все цены указаны в долларах США. Оплата производится единоразово или в рассрочку согласно выбранному тарифу.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    <strong>Возврат средств:</strong> Мы предлагаем 14-дневную гарантию возврата денег.
                                    Если вы не удовлетворены курсом, вы можете запросить полный возврат средств в течение 14 дней с момента покупки.
                                </p>
                                <p className="leading-relaxed">
                                    Для возврата средств свяжитесь с нами по email: refunds@dispatcher-training.com
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Интеллектуальная собственность</h2>
                                <p className="leading-relaxed mb-4">
                                    Все материалы курса, включая видео, тексты, изображения и программное обеспечение, защищены авторским правом и являются собственностью Dispatcher Training.
                                </p>
                                <p className="leading-relaxed mb-4">Вам запрещается:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Копировать, распространять или продавать материалы курса</li>
                                    <li>Записывать или скачивать видео уроки</li>
                                    <li>Передавать доступ к курсу третьим лицам</li>
                                    <li>Использовать материалы в коммерческих целях без разрешения</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Правила поведения</h2>
                                <p className="leading-relaxed mb-4">При использовании наших услуг вы обязуетесь:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Соблюдать законы и правила</li>
                                    <li>Уважительно относиться к другим пользователям и преподавателям</li>
                                    <li>Не публиковать оскорбительный или незаконный контент</li>
                                    <li>Не использовать сервис для спама или мошенничества</li>
                                    <li>Не пытаться получить несанкционированный доступ к системе</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Ограничение ответственности</h2>
                                <p className="leading-relaxed mb-4">
                                    Dispatcher Training предоставляет образовательные услуги "как есть". Мы не гарантируем:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Трудоустройство после окончания курса</li>
                                    <li>Конкретный уровень дохода</li>
                                    <li>Непрерывную доступность сервиса</li>
                                    <li>Отсутствие ошибок в материалах</li>
                                </ul>
                                <p className="leading-relaxed mt-4">
                                    Мы не несем ответственности за любые прямые, косвенные или случайные убытки, возникшие в результате использования наших услуг.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Прекращение доступа</h2>
                                <p className="leading-relaxed">
                                    Мы оставляем за собой право приостановить или прекратить ваш доступ к услугам в случае нарушения настоящих Условий использования,
                                    без возврата средств.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Изменения в условиях</h2>
                                <p className="leading-relaxed">
                                    Мы можем изменять настоящие Условия использования время от времени.
                                    Существенные изменения будут доведены до вашего сведения по email или через уведомление на сайте.
                                    Продолжение использования услуг после изменений означает ваше согласие с новыми условиями.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Применимое право</h2>
                                <p className="leading-relaxed">
                                    Настоящие Условия регулируются законодательством США.
                                    Любые споры будут разрешаться в соответствии с законами штата, в котором зарегистрирована компания.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Контакты</h2>
                                <p className="leading-relaxed">
                                    Если у вас есть вопросы об Условиях использования, свяжитесь с нами:
                                </p>
                                <ul className="list-none space-y-2 mt-4">
                                    <li>📧 Email: legal@dispatcher-training.com</li>
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
