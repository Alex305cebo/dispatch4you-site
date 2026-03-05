'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Главная', href: '/' },
        { name: 'Курс', href: '/course' },
        { name: 'Simulator', href: '/simulator' },
        { name: 'О нас', href: '/about' },
        { name: 'Цены', href: '/pricing' },
        { name: 'Отзывы', href: '/testimonials' },
        { name: 'Блог', href: '/blog' },
        { name: 'Вакансии', href: '/careers' },
        { name: 'FAQ', href: '/faq' }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                            <span className="text-xl font-black text-white">D</span>
                        </div>
                        <span className="text-xl font-black text-white hidden sm:inline">Dispatcher Training</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navigation.slice(0, 4).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/course"
                            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
                        >
                            Начать обучение
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-300 hover:text-white transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/course"
                            className="block text-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Начать обучение
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
