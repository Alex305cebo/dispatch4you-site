'use client';

import Link from 'next/link';
import { Home, BookOpen, Settings, Sparkles, GraduationCap, Layers, Gamepad2, Wrench, LayoutDashboard } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Home, label: 'Главная', href: '/' },
    { icon: Layers, label: 'Модули', href: '/modules' },
    { icon: GraduationCap, label: 'Курс', href: '/course' },
    { icon: Gamepad2, label: 'Симулятор', href: '/simulator' },
    { icon: Wrench, label: 'Инструменты', href: '/tools' },
    { icon: BookOpen, label: 'Уроки', href: '/docs' },
    { icon: Sparkles, label: 'Демо', href: '/demo' },
    { icon: Settings, label: 'Настройки', href: '/settings' },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Audio Learn</h1>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            'flex items-center gap-3 px-4 py-3 rounded-lg',
                            'hover:bg-gray-800 transition-colors duration-200'
                        )}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
