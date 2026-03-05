'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const categories = [
        {
            name: 'Общие вопросы',
            icon: '❓',
            faqs: [
                {
                    question: 'Что делает диспетчер грузоперевозок?',
                    answer: 'Диспетчер координирует перевозку грузов между водителями и брокерами. Основные задачи: поиск грузов на load boards, переговоры о ставках, маршрутизация, решение проблем в пути, документооборот. Это удаленная работа, требующая только компьютер и интернет.'
                },
                {
                    question: 'Нужен ли опыт в логистике?',
                    answer: 'Нет, курс разработан для начинающих. Мы обучаем с нуля, никакого предварительного опыта не требуется. Многие наши выпускники до курса работали в совершенно других сферах.'
                },
                {
                    question: 'Какой уровень английского нужен?',
                    answer: 'Базовый уровень английского (A2-B1) достаточен для старта. В курсе есть модуль с профессиональной терминологией и фразами для общения. Английский будет улучшаться в процессе работы.'
                },
                {
                    question: 'Можно ли работать из России/СНГ?',
                    answer: 'Да, это полностью удаленная работа. Нужен только компьютер и стабильный интернет. Многие наши выпускники работают из России, Украины, Казахстана, Беларуси и других стран СНГ.'
                }
            ]
        },
        {
            name: 'Обучение',
            icon: '🎓',
            faqs: [
                {
                    question: 'Сколько времени занимает обучение?',
                    answer: 'В среднем 3-4 недели при занятиях по 2-3 часа в день. Вы можете учиться в своем темпе - доступ к материалам не ограничен по времени. Некоторые проходят курс быстрее, другие растягивают на 2 месяца.'
                },
                {
                    question: 'Какой формат обучения?',
                    answer: 'Онлайн-курс с видео уроками, текстовыми материалами, практическими заданиями и кейсами. Есть Dispatch Simulator для отработки навыков. Персональная поддержка преподавателей 24/7 в чате.'
                },
                {
                    question: 'Нужно ли сдавать экзамены?',
                    answer: 'Формальных экзаменов нет. После каждого модуля есть практические задания и кейсы, которые нужно решить. Это помогает закрепить материал и получить обратную связь от преподавателей.'
                },
                {
                    question: 'Что такое Dispatch Simulator?',
                    answer: 'Это интерактивный тренажер, где вы практикуете навыки диспетчера в безопасной среде. 50+ реалистичных сценариев с AI-собеседниками (водители, брокеры). Получаете оценку своих решений и обратную связь.'
                }
            ]
        },
        {
            name: 'Трудоустройство',
            icon: '💼',
            faqs: [
                {
                    question: 'Помогаете ли с трудоустройством?',
                    answer: 'Да! Мы помогаем составить резюме, подготовиться к собеседованиям и имеем партнерские отношения с компаниями-работодателями. 85% наших выпускников находят работу в течение месяца после окончания курса.'
                },
                {
                    question: 'Какая зарплата у диспетчера?',
                    answer: 'Начинающие диспетчеры зарабатывают $3000-4000/месяц. С опытом 6-12 месяцев - $4000-6000. Опытные диспетчеры (1-2 года) - $6000-8000. Senior и Lead диспетчеры могут зарабатывать $8000-12000 и выше.'
                },
                {
                    question: 'Как быстро можно найти работу?',
                    answer: 'В среднем наши выпускники находят работу за 2-3 недели. Некоторые получают предложения еще до окончания курса. Многое зависит от вашей активности в поиске и качества резюме.'
                },
                {
                    question: 'Нужна ли рабочая виза в США?',
                    answer: 'Нет, виза не нужна. Вы работаете удаленно как подрядчик (contractor) для американских компаний. Оплата обычно идет через международные платежные системы или криптовалюту.'
                }
            ]
        },
        {
            name: 'Оплата и тарифы',
            icon: '💰',
            faqs: [
                {
                    question: 'Что если курс мне не подойдет?',
                    answer: 'У нас есть 14-дневная гарантия возврата денег. Если курс вам не подойдет, мы вернем полную стоимость без вопросов. Просто напишите нам в течение 14 дней после покупки.'
                },
                {
                    question: 'Можно ли оплатить в рассрочку?',
                    answer: 'Да, мы предлагаем рассрочку на 3 или 6 месяцев без процентов для тарифов "Профессиональный" и "VIP". Первый платеж при покупке, остальные равными частями.'
                },
                {
                    question: 'Есть ли скидки?',
                    answer: 'Мы регулярно проводим акции и предлагаем скидки. Подпишитесь на рассылку, чтобы не пропустить специальные предложения. Также есть скидки для групп от 3 человек.'
                },
                {
                    question: 'Что входит в бесплатный тариф?',
                    answer: 'Бесплатный тариф включает первые 3 модуля курса (около 20 уроков), базовые материалы и доступ к общему чату. Это позволяет познакомиться с профессией и форматом обучения перед покупкой.'
                }
            ]
        },
        {
            name: 'Технические вопросы',
            icon: '💻',
            faqs: [
                {
                    question: 'Какое оборудование нужно?',
                    answer: 'Компьютер или ноутбук (Windows, Mac или Linux), стабильный интернет (минимум 5 Мбит/с), наушники с микрофоном для практики общения. Все программы, которые мы используем, бесплатны или имеют пробный период.'
                },
                {
                    question: 'Работает ли курс на телефоне?',
                    answer: 'Платформа адаптирована для мобильных устройств, но для комфортного обучения и работы диспетчером рекомендуем использовать компьютер. На телефоне можно смотреть уроки, но практические задания лучше делать на ПК.'
                },
                {
                    question: 'Как долго доступ к курсу?',
                    answer: 'Доступ к курсу пожизненный (для тарифов "Профессиональный" и "VIP"). Вы можете пересматривать материалы в любое время. Все обновления курса также доступны бесплатно.'
                },
                {
                    question: 'Есть ли мобильное приложение?',
                    answer: 'Пока нет отдельного приложения, но платформа полностью адаптирована для мобильных браузеров. Вы можете учиться с телефона или планшета через браузер.'
                }
            ]
        },
        {
            name: 'О профессии',
            icon: '🚛',
            faqs: [
                {
                    question: 'Какой график работы у диспетчера?',
                    answer: 'График зависит от компании. Обычно это 8-10 часов в день, 5-6 дней в неделю. Многие компании предлагают гибкий график. Есть вакансии с дневными и ночными сменами (ночные обычно платят больше).'
                },
                {
                    question: 'Насколько стрессовая эта работа?',
                    answer: 'Работа может быть стрессовой, особенно когда возникают проблемы (поломки, задержки, конфликты). Но с опытом вы научитесь справляться со стрессом. Курс включает модуль по работе с кризисными ситуациями.'
                },
                {
                    question: 'Можно ли совмещать с другой работой?',
                    answer: 'На начальном этапе сложно совмещать, так как нужно полностью погрузиться в работу. Но с опытом и при гибком графике некоторые диспетчеры работают part-time или совмещают с другими проектами.'
                },
                {
                    question: 'Есть ли карьерный рост?',
                    answer: 'Да! Путь: Junior Dispatcher → Dispatcher → Senior Dispatcher → Lead Dispatcher → Dispatch Manager. Также можно открыть свою компанию или стать брокером. Зарплата растет с опытом и уровнем.'
                }
            ]
        }
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
                        Частые <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">вопросы</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Ответы на все вопросы о курсе, профессии диспетчера и трудоустройстве
                    </p>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                                    {category.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                            </div>

                            <div className="max-w-4xl space-y-4">
                                {category.faqs.map((faq, faqIndex) => {
                                    const globalIndex = catIndex * 100 + faqIndex
                                    return (
                                        <div
                                            key={faqIndex}
                                            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                                                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                                            >
                                                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                                                <svg
                                                    className={`w-6 h-6 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${openIndex === globalIndex ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${openIndex === globalIndex ? 'max-h-96' : 'max-h-0'
                                                    }`}
                                            >
                                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still have questions */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                        <h2 className="text-3xl font-black text-white mb-4">
                            Не нашли ответ?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacts"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                💬 Связаться с нами
                            </Link>
                            <a
                                href="https://t.me/dispatcher_training"
                                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300"
                            >
                                Telegram чат
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Готовы начать обучение?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Присоединяйтесь к 500+ выпускникам, которые уже работают диспетчерами
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
