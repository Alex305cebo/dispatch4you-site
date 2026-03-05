'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import AudioButton from '@/src/components/ui/AudioButton';
import Button from '@/src/components/ui/Button';
import { getLessonBySlug, getModuleBySlug } from '@/src/data/content';
import { ArrowLeft, FileText, Download, ExternalLink } from 'lucide-react';
import { use, useState } from 'react';

interface PageProps {
    params: Promise<{ moduleSlug: string; lessonSlug: string }>;
}

export default function LessonPage({ params }: PageProps) {
    const { moduleSlug, lessonSlug } = use(params);
    const module = getModuleBySlug(moduleSlug);
    const lesson = getLessonBySlug(moduleSlug, lessonSlug);
    const [selectedAttachment, setSelectedAttachment] = useState<string | null>(null);

    if (!module || !lesson) {
        notFound();
    }

    // Convert lesson to format expected by AudioButton
    const lessonForAudio = {
        ...lesson,
        category: module.title,
        content: lesson.content
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <Link href={`/modules/${moduleSlug}`}>
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft size={16} />
                        Назад к модулю
                    </Button>
                </Link>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${module.color} text-white`}>
                            {module.title}
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {lesson.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        {lesson.description}
                    </p>

                    <AudioButton
                        lesson={lessonForAudio}
                        label="Прослушать весь урок"
                        size="lg"
                    />
                </div>
            </div>

            {/* Key Terms */}
            {lesson.keyTerms && lesson.keyTerms.length > 0 && (
                <Card className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        🔑 Ключевые термины
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {lesson.keyTerms.map((term, index) => (
                            <span
                                key={index}
                                className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium text-sm"
                            >
                                {term}
                            </span>
                        ))}
                    </div>
                </Card>
            )}

            {/* Main Content */}
            <Card className="mb-6">
                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: lesson.content
                            .replace(/\n/g, '<br />')
                            .replace(/#{3} (.*?)(<br \/>|$)/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
                            .replace(/#{2} (.*?)(<br \/>|$)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                            .replace(/#{1} (.*?)(<br \/>|$)/g, '<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-5">$1</h1>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                            .replace(/^- (.*?)(<br \/>|$)/gm, '<li class="ml-4">$1</li>')
                    }}
                />
            </Card>

            {/* Attachments */}
            {lesson.attachments && lesson.attachments.length > 0 && (
                <Card className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        📎 Материалы к уроку
                    </h3>
                    <div className="space-y-3">
                        {lesson.attachments.map((attachment) => (
                            <div
                                key={attachment.id}
                                className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-start gap-3 flex-1">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                        <FileText size={20} className="text-indigo-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            {attachment.title}
                                        </h4>
                                        {attachment.description && (
                                            <p className="text-sm text-gray-600">
                                                {attachment.description}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-xs text-gray-500 uppercase">
                                                {attachment.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => setSelectedAttachment(attachment.url)}
                                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                        title="Просмотреть"
                                    >
                                        <ExternalLink size={18} />
                                    </button>
                                    <a
                                        href={attachment.url}
                                        download
                                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                        title="Скачать"
                                    >
                                        <Download size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">💡 Совет</h3>
                <p className="text-sm text-gray-700">
                    Используйте глобальный плеер внизу экрана для управления воспроизведением.
                    Аудио продолжит играть при переходе между страницами. Ваш прогресс автоматически сохраняется.
                </p>
            </div>

            {/* Document Modal */}
            {selectedAttachment && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedAttachment(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="font-semibold text-gray-900">Просмотр документа</h3>
                            <button
                                onClick={() => setSelectedAttachment(null)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                            <iframe
                                src={selectedAttachment}
                                className="w-full h-[600px] border-0"
                                title="Document preview"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
