export default function CourseModulesSection() {
    const modules = [
        {
            number: '01',
            title: 'Основы профессии',
            lessons: 8,
            duration: '2 часа',
            topics: ['Что делает диспетчер', 'Терминология', 'Типы грузов', 'Документация']
        },
        {
            number: '02',
            title: 'Работа с Load Boards',
            lessons: 10,
            duration: '3 часа',
            topics: ['DAT, Truckstop', 'Поиск грузов', 'Анализ ставок', 'Бронирование']
        },
        {
            number: '03',
            title: 'Коммуникация с водителями',
            lessons: 12,
            duration: '4 часа',
            topics: ['Переговоры', 'Решение проблем', 'Конфликты', 'Мотивация']
        },
        {
            number: '04',
            title: 'Работа с брокерами',
            lessons: 10,
            duration: '3 часа',
            topics: ['Поиск брокеров', 'Переговоры о ставках', 'Контракты', 'Факторинг']
        },
        {
            number: '05',
            title: 'Маршрутизация',
            lessons: 8,
            duration: '2.5 часа',
            topics: ['Google Maps', 'Планирование маршрутов', 'HOS правила', 'Оптимизация']
        },
        {
            number: '06',
            title: 'Документооборот',
            lessons: 6,
            duration: '2 часа',
            topics: ['BOL, POD, Rate Con', 'Invoicing', 'Факторинг', 'Архивация']
        },
        {
            number: '07',
            title: 'Безопасность грузов',
            lessons: 7,
            duration: '2 часа',
            topics: ['Cargo insurance', 'Проверка водителей', 'Fraud prevention', 'Claims']
        },
        {
            number: '08',
            title: 'Работа с CRM',
            lessons: 5,
            duration: '1.5 часа',
            topics: ['TMS системы', 'Автоматизация', 'Отчетность', 'Аналитика']
        },
        {
            number: '09',
            title: 'Финансы и учет',
            lessons: 6,
            duration: '2 часа',
            topics: ['Расчет прибыли', 'Expenses', 'Налоги', 'Бюджетирование']
        },
        {
            number: '10',
            title: 'Кризисные ситуации',
            lessons: 8,
            duration: '2.5 часа',
            topics: ['Поломки', 'Аварии', 'Задержки', 'Форс-мажор']
        },
        {
            number: '11',
            title: 'Масштабирование',
            lessons: 7,
            duration: '2 часа',
            topics: ['Найм водителей', 'Расширение флота', 'Делегирование', 'Системы']
        },
        {
            number: '12',
            title: 'Карьерный рост',
            lessons: 5,
            duration: '1.5 часа',
            topics: ['Резюме', 'Собеседования', 'Зарплаты', 'Развитие']
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Программа <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">обучения</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        12 модулей от основ до профессионального уровня
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            {/* Module number background */}
                            <div className="absolute top-0 right-0 text-8xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">
                                {module.number}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm font-bold text-indigo-400 bg-indigo-500/20 px-3 py-1 rounded-full">
                                        Модуль {module.number}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>

                                <div className="flex gap-4 mb-4 text-sm text-gray-400">
                                    <span>📚 {module.lessons} уроков</span>
                                    <span>⏱️ {module.duration}</span>
                                </div>

                                <ul className="space-y-2">
                                    {module.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400">
                                            <span className="text-indigo-400 mt-1">•</span>
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-8 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30">
                        <div>
                            <div className="text-4xl font-black text-white mb-2">92</div>
                            <div className="text-gray-400">Урока</div>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">28</div>
                            <div className="text-gray-400">Часов</div>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">50+</div>
                            <div className="text-gray-400">Кейсов</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
