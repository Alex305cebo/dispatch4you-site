'use client';

import Link from 'next/link';
import Card from '@/src/components/ui/Card';
import { Calculator, Clock, CheckSquare, DollarSign, Fuel, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ToolsPage() {
    // Profit Calculator State
    const [totalRate, setTotalRate] = useState<string>('2800');
    const [totalMiles, setTotalMiles] = useState<string>('1200');
    const [deadheadMiles, setDeadheadMiles] = useState<string>('50');
    const [fuelPrice, setFuelPrice] = useState<string>('3.50');
    const [mpg, setMpg] = useState<string>('6.5');
    const [dispatchFee, setDispatchFee] = useState<string>('10');

    // Detention Timer State
    const [detentionStartTime, setDetentionStartTime] = useState<number | null>(null);
    const [detentionElapsed, setDetentionElapsed] = useState<number>(0);
    const [detentionRunning, setDetentionRunning] = useState(false);

    // Setup Checklist State
    const [checklist, setChecklist] = useState({
        creditScore: false,
        bond: false,
        paymentTerms: false,
        mcVerified: false,
        rateConfirmation: false,
        insurance: false,
        detention: false,
        tonu: false
    });

    // Profit Calculator Logic
    const calculateProfit = () => {
        const rate = parseFloat(totalRate) || 0;
        const miles = parseFloat(totalMiles) || 0;
        const deadhead = parseFloat(deadheadMiles) || 0;
        const fuel = parseFloat(fuelPrice) || 0;
        const efficiency = parseFloat(mpg) || 1;
        const fee = parseFloat(dispatchFee) || 0;

        const totalDistance = miles + deadhead;
        const fuelCost = (totalDistance / efficiency) * fuel;
        const dispatchCost = (rate * fee) / 100;
        const netProfit = rate - fuelCost - dispatchCost;
        const ratePerMile = totalDistance > 0 ? rate / totalDistance : 0;
        const profitPerMile = totalDistance > 0 ? netProfit / totalDistance : 0;

        const isProfitable = netProfit > (totalDistance * 1.5); // Минимум $1.50/mile чистыми

        return {
            netProfit: netProfit.toFixed(2),
            fuelCost: fuelCost.toFixed(2),
            dispatchCost: dispatchCost.toFixed(2),
            ratePerMile: ratePerMile.toFixed(2),
            profitPerMile: profitPerMile.toFixed(2),
            isProfitable,
            totalDistance
        };
    };

    const profit = calculateProfit();

    // Detention Timer Logic
    const startDetentionTimer = () => {
        setDetentionStartTime(Date.now());
        setDetentionRunning(true);
    };

    const stopDetentionTimer = () => {
        setDetentionRunning(false);
    };

    const resetDetentionTimer = () => {
        setDetentionStartTime(null);
        setDetentionElapsed(0);
        setDetentionRunning(false);
    };

    // Update detention timer
    useState(() => {
        const interval = setInterval(() => {
            if (detentionRunning && detentionStartTime) {
                const elapsed = Math.floor((Date.now() - detentionStartTime) / 1000);
                setDetentionElapsed(elapsed);
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const freeTimeSeconds = 2 * 3600; // 2 hours
    const isDetentionTime = detentionElapsed > freeTimeSeconds;
    const detentionHours = Math.max(0, Math.floor((detentionElapsed - freeTimeSeconds) / 3600));
    const detentionMinutes = Math.max(0, Math.floor(((detentionElapsed - freeTimeSeconds) % 3600) / 60));

    // Checklist Logic
    const toggleChecklistItem = (key: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const completedItems = Object.values(checklist).filter(Boolean).length;
    const totalItems = Object.keys(checklist).length;
    const checklistProgress = (completedItems / totalItems) * 100;

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-4">
                    <Calculator size={16} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Инструменты диспетчера</span>
                </div>

                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Dispatch Toolbox
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Профессиональные инструменты для быстрых расчетов и контроля процессов
                </p>
            </div>

            {/* Profit Calculator */}
            <Card className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <DollarSign size={24} className="text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Калькулятор прибыльности</h2>
                        <p className="text-sm text-gray-600">Быстрый расчет выгодности груза</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Inputs */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Total Rate ($)
                            </label>
                            <input
                                type="number"
                                value={totalRate}
                                onChange={(e) => setTotalRate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Total Miles (loaded)
                            </label>
                            <input
                                type="number"
                                value={totalMiles}
                                onChange={(e) => setTotalMiles(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Deadhead Miles (empty)
                            </label>
                            <input
                                type="number"
                                value={deadheadMiles}
                                onChange={(e) => setDeadheadMiles(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Fuel Price ($/gallon)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={fuelPrice}
                                onChange={(e) => setFuelPrice(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                MPG (Miles Per Gallon)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                value={mpg}
                                onChange={(e) => setMpg(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Dispatch Fee (%)
                            </label>
                            <input
                                type="number"
                                value={dispatchFee}
                                onChange={(e) => setDispatchFee(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                        <div className={`p-6 rounded-xl ${profit.isProfitable ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
                            <div className="text-center mb-4">
                                <div className="text-sm font-medium text-gray-600 mb-1">
                                    {profit.isProfitable ? '✅ Выгодный груз' : '❌ Невыгодный груз'}
                                </div>
                                <div className={`text-4xl font-bold ${profit.isProfitable ? 'text-green-600' : 'text-red-600'}`}>
                                    ${profit.netProfit}
                                </div>
                                <div className="text-sm text-gray-600">Чистая прибыль</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">Rate/Mile</div>
                                <div className="text-2xl font-bold text-gray-900">${profit.ratePerMile}</div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">Profit/Mile</div>
                                <div className="text-2xl font-bold text-gray-900">${profit.profitPerMile}</div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">Fuel Cost</div>
                                <div className="text-xl font-bold text-gray-900">${profit.fuelCost}</div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 mb-1">Dispatch Fee</div>
                                <div className="text-xl font-bold text-gray-900">${profit.dispatchCost}</div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <div className="text-sm font-medium text-indigo-900 mb-2">📊 Анализ</div>
                            <ul className="text-sm text-indigo-800 space-y-1">
                                <li>• Общее расстояние: {profit.totalDistance} миль</li>
                                <li>• Deadhead: {((parseFloat(deadheadMiles) / profit.totalDistance) * 100).toFixed(1)}%</li>
                                <li>• {profit.isProfitable ? 'Рекомендуется брать' : 'Лучше поискать другой груз'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Detention Timer */}
            <Card className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Clock size={24} className="text-orange-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Таймер Detention</h2>
                        <p className="text-sm text-gray-600">Отслеживание времени простоя</p>
                    </div>
                </div>

                <div className="text-center mb-6">
                    <div className={`text-6xl font-bold mb-4 ${isDetentionTime ? 'text-red-600 animate-pulse' : 'text-gray-900'}`}>
                        {formatTime(detentionElapsed)}
                    </div>

                    {isDetentionTime && (
                        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-4">
                            <div className="text-red-900 font-bold text-lg mb-2">
                                🚨 Detention Time!
                            </div>
                            <div className="text-red-700">
                                Прошло {detentionHours}ч {detentionMinutes}мин сверх free time
                            </div>
                            <div className="text-sm text-red-600 mt-2">
                                Стандартная ставка: $50-75/час
                            </div>
                        </div>
                    )}

                    {!isDetentionTime && detentionRunning && (
                        <div className="text-sm text-gray-600 mb-4">
                            Free time: {Math.floor((freeTimeSeconds - detentionElapsed) / 60)} минут осталось
                        </div>
                    )}
                </div>

                <div className="flex justify-center gap-4">
                    {!detentionRunning ? (
                        <button
                            onClick={startDetentionTimer}
                            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            Начать отсчет
                        </button>
                    ) : (
                        <button
                            onClick={stopDetentionTimer}
                            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                        >
                            Остановить
                        </button>
                    )}
                    <button
                        onClick={resetDetentionTimer}
                        className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    >
                        Сбросить
                    </button>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-blue-900 mb-2">ℹ️ Информация</div>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Стандартный free time: 2 часа</li>
                        <li>• После 2 часов начинается detention</li>
                        <li>• Обычная ставка: $50-75 за час</li>
                        <li>• Всегда проверяйте условия в Rate Confirmation</li>
                    </ul>
                </div>
            </Card>

            {/* Setup Packet Checklist */}
            <Card>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <CheckSquare size={24} className="text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Setup Packet Checklist</h2>
                        <p className="text-sm text-gray-600">Проверка брокера перед сделкой</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Прогресс проверки
                        </span>
                        <span className="text-sm font-semibold text-indigo-600">
                            {completedItems} / {totalItems}
                        </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${checklistProgress}%` }}
                        />
                    </div>
                </div>

                {/* Checklist Items */}
                <div className="space-y-3">
                    <div
                        onClick={() => toggleChecklistItem('mcVerified')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.mcVerified
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.mcVerified
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.mcVerified && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    MC Number Verification
                                </div>
                                <p className="text-sm text-gray-600">
                                    Проверить MC# брокера на FMCSA (fmcsa.dot.gov/sms)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('creditScore')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.creditScore
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.creditScore
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.creditScore && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Credit Score Check
                                </div>
                                <p className="text-sm text-gray-600">
                                    Проверить кредитный рейтинг через RMISWeb или Carrier411
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('bond')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.bond
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.bond
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.bond && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Bond Verification
                                </div>
                                <p className="text-sm text-gray-600">
                                    Убедиться что у брокера есть активный Bond ($75,000)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('insurance')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.insurance
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.insurance
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.insurance && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Insurance Certificate
                                </div>
                                <p className="text-sm text-gray-600">
                                    Получить Certificate of Insurance (COI) от брокера
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('paymentTerms')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.paymentTerms
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.paymentTerms
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.paymentTerms && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Payment Terms
                                </div>
                                <p className="text-sm text-gray-600">
                                    Уточнить условия: QuickPay (1-2 дня) vs Standard (30 дней)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('rateConfirmation')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.rateConfirmation
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.rateConfirmation
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.rateConfirmation && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Rate Confirmation Review
                                </div>
                                <p className="text-sm text-gray-600">
                                    Проверить все детали RC: адреса, даты, ставку, MC#
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('detention')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.detention
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.detention
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.detention && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    Detention Terms
                                </div>
                                <p className="text-sm text-gray-600">
                                    Уточнить: free time, ставку за час, процедуру запроса
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => toggleChecklistItem('tonu')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${checklist.tonu
                                ? 'bg-green-50 border-green-500'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center ${checklist.tonu
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                {checklist.tonu && <span className="text-white text-sm">✓</span>}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-gray-900 mb-1">
                                    TONU Policy
                                </div>
                                <p className="text-sm text-gray-600">
                                    Уточнить компенсацию при отмене груза (обычно $100-200)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {checklistProgress === 100 && (
                    <div className="mt-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                        <div className="text-green-900 font-bold text-lg mb-2">
                            ✅ Все проверки пройдены!
                        </div>
                        <p className="text-sm text-green-700">
                            Брокер проверен, можно безопасно работать
                        </p>
                    </div>
                )}

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-yellow-900 mb-2">⚠️ Важно</div>
                    <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Никогда не работайте с непроверенными брокерами</li>
                        <li>• Сохраняйте все документы до получения оплаты</li>
                        <li>• При сомнениях - лучше отказаться от груза</li>
                        <li>• Используйте factoring для быстрой оплаты</li>
                    </ul>
                </div>
            </Card>
        </div>
    );
}
