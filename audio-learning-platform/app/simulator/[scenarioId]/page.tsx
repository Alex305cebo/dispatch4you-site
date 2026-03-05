'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { getScenarioById, SimulatorStep } from '@/src/data/simulator';
import { ArrowLeft, Play, CheckCircle, XCircle, AlertTriangle, RotateCcw } from 'lucide-react';
import { use, useState } from 'react';

interface PageProps {
    params: Promise<{ scenarioId: string }>;
}

export default function ScenarioPage({ params }: PageProps) {
    const { scenarioId } = use(params);
    const scenario = getScenarioById(scenarioId);

    const [currentStepId, setCurrentStepId] = useState<string>(scenario?.startStep || '');
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState<string[]>([]);

    if (!scenario) {
        notFound();
    }

    const currentStep = scenario.steps[currentStepId];

    const handleChoice = (nextStep: string, points: number = 0) => {
        setScore(prev => prev + points);
        setHistory(prev => [...prev, currentStepId]);
        setCurrentStepId(nextStep);
    };

    const handleRestart = () => {
        setCurrentStepId(scenario.startStep);
        setScore(0);
        setHistory([]);
    };

    const getFeedbackIcon = (type: string) => {
        switch (type) {
            case 'success': return <CheckCircle size={24} className="text-green-600" />;
            case 'error': return <XCircle size={24} className="text-red-600" />;
            case 'warning': return <AlertTriangle size={24} className="text-yellow-600" />;
            default: return null;
        }
    };

    const getFeedbackColor = (type: string) => {
        switch (type) {
            case 'success': return 'from-green-50 to-emerald-50 border-green-200';
            case 'error': return 'from-red-50 to-pink-50 border-red-200';
            case 'warning': return 'from-yellow-50 to-orange-50 border-yellow-200';
            default: return 'from-gray-50 to-gray-100 border-gray-200';
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <Link href="/simulator">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft size={16} />
                        Все сценарии
                    </Button>
                </Link>

                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {scenario.title}
                        </h1>
                        <p className="text-gray-600">
                            {scenario.description}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">Баллы</div>
                        <div className="text-3xl font-bold text-indigo-600">{score}</div>
                    </div>
                </div>
            </div>

            {/* Current Step */}
            <Card className="mb-6">
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Play size={20} className="text-indigo-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            {currentStep.text}
                        </h2>
                    </div>

                    {/* Broker Speech */}
                    {currentStep.brokerText && (
                        <div className="bg-gray-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    B
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500 mb-1">Брокер говорит:</div>
                                    <p className="text-gray-900 italic">
                                        "{currentStep.brokerText}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Options */}
                    {currentStep.options && currentStep.options.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-700 mb-3">
                                Выберите ваш ответ:
                            </p>
                            {currentStep.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleChoice(option.nextStep, option.points)}
                                    className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 group-hover:bg-indigo-100 rounded-full flex items-center justify-center font-bold text-gray-600 group-hover:text-indigo-600 transition-colors">
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 group-hover:text-indigo-900 font-medium">
                                                {option.text}
                                            </p>
                                            {option.points !== undefined && option.points > 0 && (
                                                <span className="text-xs text-gray-500 mt-1 inline-block">
                                                    +{option.points} баллов
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* End State with Feedback */}
                    {currentStep.isEnd && currentStep.feedback && (
                        <div className={`bg-gradient-to-r ${getFeedbackColor(currentStep.feedback.type)} border rounded-lg p-6 mt-4`}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    {getFeedbackIcon(currentStep.feedback.type)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {currentStep.feedback.message}
                                    </h3>
                                    {currentStep.feedback.tip && (
                                        <p className="text-sm text-gray-700 mb-4">
                                            {currentStep.feedback.tip}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-3">
                                        <Button onClick={handleRestart} className="flex items-center gap-2">
                                            <RotateCcw size={16} />
                                            Пройти заново
                                        </Button>
                                        <Link href="/simulator">
                                            <Button variant="ghost">
                                                Другие сценарии
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Card>

            {/* Progress */}
            {history.length > 0 && (
                <Card className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                        История решений ({history.length} шагов)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {history.map((stepId, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                                Шаг {index + 1}
                            </span>
                        ))}
                    </div>
                </Card>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">💡 Подсказка</h3>
                <p className="text-sm text-gray-700">
                    В реальных переговорах у вас не будет вариантов ответа.
                    Этот симулятор помогает понять логику и последствия разных решений.
                    Практикуйтесь, чтобы развить интуицию!
                </p>
            </div>
        </div>
    );
}
