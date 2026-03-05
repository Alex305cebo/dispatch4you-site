import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import { SIMULATOR_SCENARIOS } from '@/src/data/simulator';
import { Play, TrendingUp, AlertCircle } from 'lucide-react';

export default function SimulatorPage() {
    const beginnerScenarios = SIMULATOR_SCENARIOS.filter(s => s.difficulty === 'beginner');
    const intermediateScenarios = SIMULATOR_SCENARIOS.filter(s => s.difficulty === 'intermediate');
    const advancedScenarios = SIMULATOR_SCENARIOS.filter(s => s.difficulty === 'advanced');

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'from-green-500 to-emerald-500';
            case 'intermediate': return 'from-yellow-500 to-orange-500';
            case 'advanced': return 'from-red-500 to-pink-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getDifficultyLabel = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'Начальный';
            case 'intermediate': return 'Средний';
            case 'advanced': return 'Продвинутый';
            default: return difficulty;
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 mb-4">
                    <Play size={16} className="text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">Интерактивное обучение</span>
                </div>

                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Симулятор звонков
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Практикуйте реальные сценарии переговоров с брокерами.
                    Каждое ваше решение влияет на результат сделки.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Play size={24} className="text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Реальные сценарии</h3>
                    <p className="text-sm text-gray-600">
                        Основаны на реальных ситуациях из практики диспетчеров
                    </p>
                </Card>

                <Card className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TrendingUp size={24} className="text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Система оценки</h3>
                    <p className="text-sm text-gray-600">
                        Получайте баллы за правильные решения и учитесь на ошибках
                    </p>
                </Card>

                <Card className="text-center">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <AlertCircle size={24} className="text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Детальный фидбек</h3>
                    <p className="text-sm text-gray-600">
                        Узнайте, почему ваше решение было правильным или ошибочным
                    </p>
                </Card>
            </div>

            {/* Beginner Scenarios */}
            {beginnerScenarios.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        🌱 Начальный уровень
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {beginnerScenarios.map((scenario) => (
                            <Link key={scenario.id} href={`/simulator/${scenario.id}`}>
                                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getDifficultyColor(scenario.difficulty)} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                                            {scenario.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDifficultyColor(scenario.difficulty)} text-white`}>
                                                    {getDifficultyLabel(scenario.difficulty)}
                                                </span>
                                                <span className="text-xs text-gray-500">{scenario.category}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {scenario.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {scenario.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Intermediate Scenarios */}
            {intermediateScenarios.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        ⚡ Средний уровень
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {intermediateScenarios.map((scenario) => (
                            <Link key={scenario.id} href={`/simulator/${scenario.id}`}>
                                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getDifficultyColor(scenario.difficulty)} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                                            {scenario.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDifficultyColor(scenario.difficulty)} text-white`}>
                                                    {getDifficultyLabel(scenario.difficulty)}
                                                </span>
                                                <span className="text-xs text-gray-500">{scenario.category}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {scenario.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {scenario.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold mb-2">💡 Советы по прохождению</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Внимательно слушайте брокера - детали важны</li>
                    <li>• Не спешите с ответом - обдумайте варианты</li>
                    <li>• Учитесь на ошибках - каждый сценарий можно пройти заново</li>
                    <li>• Обращайте внимание на фидбек - там ценные советы</li>
                    <li>• Практикуйтесь регулярно для развития навыков</li>
                </ul>
            </div>
        </div>
    );
}
