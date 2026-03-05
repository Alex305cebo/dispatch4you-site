import Card from '@/src/components/ui/Card';
import AudioButton from '@/src/components/ui/AudioButton';
import { lessons } from '@/src/data/courseData';

export default function DemoPage() {
    // Get first 3 lessons for demo
    const demoLessons = lessons.slice(0, 3);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Демонстрация аудио возможностей
            </h1>

            {/* Пример 1: Разные размеры кнопок */}
            <Card className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">1. Размеры кнопок</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Маленькая кнопка (sm):</p>
                        <AudioButton
                            lesson={demoLessons[0]}
                            label="Прослушать"
                            size="sm"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">Средняя кнопка (md):</p>
                        <AudioButton
                            lesson={demoLessons[0]}
                            label="Прослушать урок"
                            size="md"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">Большая кнопка (lg):</p>
                        <AudioButton
                            lesson={demoLessons[0]}
                            label="Прослушать весь урок"
                            size="lg"
                        />
                    </div>
                </div>
            </Card>

            {/* Пример 2: Варианты отображения */}
            <Card className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">2. Варианты отображения</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Inline (по умолчанию):</p>
                        <AudioButton
                            lesson={demoLessons[0]}
                            label="Прослушать"
                            variant="inline"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">Block (на всю ширину):</p>
                        <AudioButton
                            lesson={demoLessons[0]}
                            label="Прослушать урок"
                            variant="block"
                        />
                    </div>
                </div>
            </Card>

            {/* Пример 3: Множественные уроки */}
            <Card className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">3. Разные уроки</h2>

                <div className="space-y-6">
                    {demoLessons.map((lesson) => (
                        <div key={lesson.id} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                                    <p className="text-sm text-gray-600">{lesson.category}</p>
                                </div>
                                <span className="text-xs text-gray-500">{lesson.duration}</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">
                                {lesson.content.substring(0, 100)}...
                            </p>
                            <AudioButton
                                lesson={lesson}
                                label="Прослушать"
                                size="sm"
                            />
                        </div>
                    ))}
                </div>
            </Card>

            {/* Пример 4: Глобальный плеер */}
            <Card className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">4. Глобальный плеер</h2>

                <div className="prose max-w-none">
                    <p className="mb-4">
                        Нажмите на любую кнопку выше, чтобы начать воспроизведение.
                        Глобальный плеер появится внизу экрана и будет работать на всех страницах.
                    </p>

                    <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Возможности плеера:</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Воспроизведение/пауза</li>
                            <li>Перемотка вперед/назад на 10 секунд</li>
                            <li>Изменение скорости воспроизведения (0.5x - 2x)</li>
                            <li>Прогресс бар с возможностью перемотки</li>
                            <li>Отображение текущего времени и длительности</li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-600">
                        💡 Попробуйте перейти на другую страницу во время воспроизведения -
                        аудио продолжит играть без прерывания!
                    </p>
                </div>
            </Card>

            {/* Информация */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">💡 Совет</h3>
                <p className="text-sm text-gray-700">
                    Все аудио кнопки подключены к глобальному аудио контексту.
                    Это означает, что воспроизведение не прерывается при навигации между страницами,
                    и вы всегда можете управлять плеером из любого места на сайте.
                </p>
            </div>
        </div>
    );
}
