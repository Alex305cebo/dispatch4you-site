'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SimulatorPage() {
    const [scenario, setScenario] = useState<string | null>(null)
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'system', text: string }>>([])
    const [input, setInput] = useState('')

    const scenarios = [
        {
            id: 'driver-breakdown',
            title: 'Поломка грузовика',
            difficulty: 'Средний',
            description: 'Водитель сообщает о поломке в пути. Нужно организовать ремонт и не сорвать доставку.',
            icon: '🔧'
        },
        {
            id: 'rate-negotiation',
            title: 'Переговоры о ставке',
            difficulty: 'Легкий',
            description: 'Брокер предлагает низкую ставку. Нужно договориться о лучшей цене.',
            icon: '💰'
        },
        {
            id: 'late-delivery',
            title: 'Задержка доставки',
            difficulty: 'Сложный',
            description: 'Водитель опаздывает на 3 часа. Клиент недоволен. Нужно решить ситуацию.',
            icon: '⏰'
        },
        {
            id: 'new-driver',
            title: 'Новый водитель',
            difficulty: 'Легкий',
            description: 'Первый контакт с новым водителем. Нужно объяснить детали груза и маршрут.',
            icon: '🚛'
        },
        {
            id: 'weather-delay',
            title: 'Плохая погода',
            difficulty: 'Средний',
            description: 'Снежная буря на маршруте. Нужно принять решение о продолжении или остановке.',
            icon: '🌨️'
        },
        {
            id: 'document-issue',
            title: 'Проблема с документами',
            difficulty: 'Средний',
            description: 'На погрузке обнаружили ошибку в документах. Нужно быстро исправить.',
            icon: '📄'
        }
    ]

    const startScenario = (scenarioId: string) => {
        setScenario(scenarioId)
        const selectedScenario = scenarios.find(s => s.id === scenarioId)
        setMessages([
            {
                role: 'system',
                text: `Сценарий: ${selectedScenario?.title}\n\n${selectedScenario?.description}\n\nНачните диалог, чтобы решить ситуацию.`
            }
        ])
    }

    const sendMessage = () => {
        if (!input.trim()) return

        setMessages([...messages, { role: 'user', text: input }])

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'system',
                text: 'Это демо-версия симулятора. В полной версии курса вы получите доступ к интерактивным сценариям с AI-ответами.'
            }])
        }, 1000)

        setInput('')
    }

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
                        Dispatch <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Simulator</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Практикуйте навыки диспетчера в реалистичных сценариях. Учитесь решать проблемы без риска.
                    </p>
                </div>
            </section>

            {!scenario ? (
                /* Scenario Selection */
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-8">Выберите сценарий</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {scenarios.map((s) => (
                                <div
                                    key={s.id}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                                    onClick={() => startScenario(s.id)}
                                >
                                    <div className="text-5xl mb-4">{s.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-3">
                                        {s.difficulty}
                                    </div>
                                    <p className="text-gray-400 mb-4">{s.description}</p>
                                    <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                                        Начать сценарий
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* Chat Interface */
                <section className="py-16">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <button
                            onClick={() => {
                                setScenario(null)
                                setMessages([])
                            }}
                            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Выбрать другой сценарий
                        </button>

                        {/* Chat messages */}
                        <div className="mb-6 p-6 rounded-2xl bg-white/5 border border-white/10 min-h-[400px] max-h-[600px] overflow-y-auto">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl ${msg.role === 'user'
                                                ? 'bg-indigo-500/20 ml-12'
                                                : 'bg-white/5 mr-12'
                                            }`}
                                    >
                                        <div className="text-sm text-gray-400 mb-1">
                                            {msg.role === 'user' ? 'Вы' : 'Система'}
                                        </div>
                                        <div className="text-white whitespace-pre-line">{msg.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Введите ваш ответ..."
                                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                            />
                            <button
                                onClick={sendMessage}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                Отправить
                            </button>
                        </div>

                        {/* Demo notice */}
                        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">ℹ️</span>
                                <div>
                                    <div className="font-bold text-yellow-300 mb-1">Демо-версия</div>
                                    <div className="text-gray-400 text-sm">
                                        Это упрощенная версия симулятора. В полном курсе доступны интерактивные сценарии с AI-ответами,
                                        оценкой ваших решений и детальной обратной связью.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Features */}
            <section className="py-16 bg-gradient-to-b from-black to-indigo-950/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Возможности полной версии</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: '🤖',
                                title: 'AI-собеседники',
                                description: 'Реалистичные диалоги с водителями, брокерами и клиентами'
                            },
                            {
                                icon: '📊',
                                title: 'Оценка решений',
                                description: 'Получайте баллы и обратную связь по каждому сценарию'
                            },
                            {
                                icon: '🎯',
                                title: '50+ сценариев',
                                description: 'От простых до сложных ситуаций из реальной практики'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Получите полный доступ
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Simulator включен в курс "Профессиональный" и "VIP"
                    </p>
                    <Link
                        href="/course"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/50"
                    >
                        🚀 Купить курс
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}
