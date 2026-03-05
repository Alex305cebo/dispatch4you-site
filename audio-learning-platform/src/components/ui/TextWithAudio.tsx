'use client';

import { ReactNode } from 'react';
import AudioButton from './AudioButton';

interface TextWithAudioProps {
    children: ReactNode;
    audioUrl: string;
    title?: string;
}

export default function TextWithAudio({ children, audioUrl, title }: TextWithAudioProps) {
    return (
        <div className="relative group">
            <div className="mb-3 flex items-center justify-between">
                {title && (
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                )}
                <AudioButton audioUrl={audioUrl} label="🎧 Прослушать" size="sm" />
            </div>

            <div className="prose prose-gray max-w-none">
                {children}
            </div>
        </div>
    );
}
