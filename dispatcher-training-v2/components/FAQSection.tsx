'use client'

import { useState } from 'react'

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'Нужен ли опыт в логистике?',
            answer: 'Нет, курс разработан для начинающих. Мы обучаем с нуля, никакого предварительного опыта не требуется.'
        },
        {
            question: 'Сколько времени занимает обучение?',
            answer: 'В среднем 3-4 недели при занятиях по 2-3 часа в день. Вы можете учиться в своем темпе - доступ к материалам не ограничен по времени.'
        },
        {
            question: 'Какой уровень английского нужен?',
            answer: 'Базовый уровень английского (A2-B1) достаточен для старта. В курсе есть модуль с профессиональной терминологией и фразами для общения.'
        },
        {
            question: 'Помогаете ли с трудоустройством?',
            answer: 'Да! Мы помогаем составить резюме, подготовиться к собеседованиям и имеем партнерские отношения с компаниями-работодателями.'
        },
        {
            question: 'Какая зарплата у диспетчера?',
            answer: 'Начинающие диспетчеры зарабатывают $3000-6000/месяц. С опытом зарплата может достигать $8000-10000 и выше.'
        },
        {
            question: 'Можно ли работать из России/СНГ?',
            answer: 'Да, это полностью удаленная работа. Нужен только компьютер и стабильный интернет. Многие наши выпускники работают из разных стран.'
        },
        {
            question: 'Что если курс мне не подойдет?',
            answer: 'У нас есть 14-дневная гарантия возврата денег. Если курс вам не подойдет, мы вернем полную стоимость без вопросов.'
        },
        {
            question: 'Какое оборудование нужно?',
            answer: 'Компьютер или ноутбук, стабильный интернет, наушники с микрофоном. Все программы, которые мы используем, бесплатны или имеют пробный период.'
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Частые <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">вопросы</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ответы на самые популярные вопросы о курсе
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact support */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-4">Не нашли ответ на свой вопрос?</p>
                    <a
                        href="/contacts"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all duration-300"
                    >
                        💬 Связаться с нами
                    </a>
                </div>
            </div>
        </section>
    )
}
