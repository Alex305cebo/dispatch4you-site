import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
    return (
        <div
            className={clsx(
                'bg-white rounded-xl border border-gray-200 p-6 shadow-sm',
                {
                    'hover:shadow-md hover:border-gray-300 transition-all duration-200': hover,
                },
                className
            )}
        >
            {children}
        </div>
    );
}
