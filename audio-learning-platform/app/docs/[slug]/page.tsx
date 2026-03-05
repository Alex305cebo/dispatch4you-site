import { notFound } from 'next/navigation';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import AudioButton from '@/src/components/ui/AudioButton';
import { Clock, BookOpen, ArrowLeft } from 'lucide-react';
import { lessons, getLessonBySlug } from '@/src/data/courseData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return lessons.map((lesson) => ({
        slug: lesson.slug,
    }));
}

export default async function LessonPage({ params }: PageProps) {
    const { slug } = await params;
    const lesson = getLessonBySlug(slug);

    if (!lesson) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <Link href="/course">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft size={16} />
                        Назад к курсу
                    </Button>
                </Link>

                <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">
                        {lesson.category}
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {lesson.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                            <Clock size={20} />
                            <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen size={20} />
                            <span>Урок</span>
                        </div>
                    </div>
                    <AudioButton
                        lesson={lesson}
                        label="Прослушать весь урок"
                        size="lg"
                    />
                </div>
            </div>

            <Card className="mb-6">
                <div className="prose max-w-none">
                    <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br />') }}
                    />
                </div>
            </Card>

            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
                <p className="text-indigo-800 text-sm flex items-center gap-2">
                    <span>💡</span>
                    <span>Совет: Используйте глобальный плеер внизу экрана для управления воспроизведением. Аудио продолжит играть при переходе между страницами.</span>
                </p>
            </div>
        </div>
    );
}
