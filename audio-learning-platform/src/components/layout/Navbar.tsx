'use client';

import { Bell, User } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <input
                        type="search"
                        placeholder="Поиск уроков..."
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <User size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
