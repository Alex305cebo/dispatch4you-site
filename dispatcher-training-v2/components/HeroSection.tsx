'use client'

import Link from 'next/link'
import CanvasBackground from './CanvasBackground'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Canvas Background */}
            <CanvasBackground />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-indigo-500/20 border border-indigo-400/40 rounded-full backdrop-blur-md shadow-lg shadow-indigo-500/20">
                    <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-400/50"></span>
                    <span className="text-sm font-bold text-indigo-200 tracking-wide">Профессиональное обучение</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] drop-shadow-2xl">
                    <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Станьте </span>
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                        Диспетчером
                    </span>
                    <br />
                    <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Грузоперевозок в США</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                    Освойте высокооплачиваемую профессию удаленно.
                    <br className="hidden md:block" />
                    Полное обучение с нуля за 3-4 недели + помощь в трудоустройстве.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
                    <Link
                        href="/course"
                        className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/60 shadow-xl shadow-indigo-600/40"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            🎓 Начать обучение бесплатно
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>

                    <Link
                        href="/simulator"
                        className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 shadow-xl"
                    >
                        <span className="flex items-center gap-3">
                            💬 Dispatch Simulator
                        </span>
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                        { number: '12', label: 'Модулей', icon: '📚' },
                        { number: '50+', label: 'Кейсов', icon: '💼' },
                        { number: '100%', label: 'Практика', icon: '🎯' },
                        { number: '24/7', label: 'Поддержка', icon: '🚀' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-3 drop-shadow-lg">
                                {stat.number}
                            </div>
                            <div className="text-base text-gray-300 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
                <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center shadow-lg shadow-white/20">
                    <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-pulse shadow-lg shadow-white/50"></div>
                </div>
            </div>
        </section>
    )
}
