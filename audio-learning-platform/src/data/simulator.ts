export interface SimulatorOption {
    text: string;
    nextStep: string;
    points?: number;
}

export interface SimulatorStep {
    id: string;
    audio: string;
    text: string;
    brokerText?: string;
    options?: SimulatorOption[];
    isEnd?: boolean;
    feedback?: {
        type: 'success' | 'warning' | 'error';
        message: string;
        tip?: string;
    };
}

export interface SimulatorScenario {
    id: string;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    category: string;
    icon: string;
    steps: Record<string, SimulatorStep>;
    startStep: string;
}

export const SIMULATOR_SCENARIOS: SimulatorScenario[] = [
    {
        id: 'negotiation-1',
        title: 'Торг за ставку (Reefer)',
        description: 'Брокер предлагает груз с низкой ставкой. Научитесь правильно торговаться.',
        difficulty: 'beginner',
        category: 'Переговоры',
        icon: '💰',
        startStep: 'start',
        steps: {
            start: {
                id: 'start',
                audio: '/audio/sim/negotiation-1-start.mp3',
                text: 'Звонок от брокера',
                brokerText: 'Hey, I have a reefer load from Chicago to Dallas, 1,200 miles. Paying $2.40 per mile. Are you interested?',
                options: [
                    { text: 'Согласиться сразу ($2,880 total)', nextStep: 'accept_low', points: 0 },
                    { text: 'Спросить про deadhead', nextStep: 'ask_deadhead', points: 5 },
                    { text: 'Запросить $2.80 per mile', nextStep: 'counter_high', points: 10 },
                    { text: 'Уточнить детали груза', nextStep: 'ask_details', points: 8 }
                ]
            },
            accept_low: {
                id: 'accept_low',
                audio: '/audio/sim/negotiation-1-accept-low.mp3',
                text: 'Результат: Сделка заключена',
                brokerText: 'Great! I\'ll send you the Rate Confirmation right away.',
                isEnd: true,
                feedback: {
                    type: 'warning',
                    message: 'Вы согласились слишком быстро!',
                    tip: 'Всегда пытайтесь торговаться. Брокеры ожидают этого и часто имеют запас для повышения ставки. Минимум $2.60-2.70 было бы разумнее для reefer на такое расстояние.'
                }
            },
            ask_deadhead: {
                id: 'ask_deadhead',
                audio: '/audio/sim/negotiation-1-ask-deadhead.mp3',
                text: 'Вы спросили про пустой пробег',
                brokerText: 'Pickup is in Chicago downtown. Where is your truck now?',
                options: [
                    { text: 'Truck is 50 miles away', nextStep: 'deadhead_close', points: 5 },
                    { text: 'Truck is 200 miles away', nextStep: 'deadhead_far', points: 5 }
                ]
            },
            deadhead_close: {
                id: 'deadhead_close',
                audio: '/audio/sim/negotiation-1-deadhead-close.mp3',
                text: 'Брокер учитывает близость',
                brokerText: 'That\'s not bad. I can do $2.55 per mile. That\'s my best offer.',
                options: [
                    { text: 'Принять $2.55', nextStep: 'accept_medium', points: 7 },
                    { text: 'Попросить $2.70', nextStep: 'push_higher', points: 10 }
                ]
            },
            deadhead_far: {
                id: 'deadhead_far',
                audio: '/audio/sim/negotiation-1-deadhead-far.mp3',
                text: 'Большой пустой пробег',
                brokerText: 'Hmm, that\'s quite a deadhead. I can bump it to $2.50 per mile to help with that.',
                options: [
                    { text: 'Принять $2.50', nextStep: 'accept_medium', points: 6 },
                    { text: 'Попросить $2.65 из-за deadhead', nextStep: 'negotiate_deadhead', points: 9 }
                ]
            },
            counter_high: {
                id: 'counter_high',
                audio: '/audio/sim/negotiation-1-counter-high.mp3',
                text: 'Вы запросили высокую ставку',
                brokerText: '$2.80? That\'s way too high for this lane. I can go up to $2.60, but that\'s it.',
                options: [
                    { text: 'Принять $2.60', nextStep: 'accept_good', points: 12 },
                    { text: 'Настаивать на $2.75', nextStep: 'push_too_hard', points: 5 },
                    { text: 'Встретиться посередине - $2.65', nextStep: 'meet_middle', points: 15 }
                ]
            },
            ask_details: {
                id: 'ask_details',
                audio: '/audio/sim/negotiation-1-ask-details.mp3',
                text: 'Вы уточняете детали',
                brokerText: 'It\'s 40,000 lbs of frozen food. Pickup tomorrow at 8 AM, delivery in 2 days. Temperature needs to be 0°F.',
                options: [
                    { text: 'Запросить $2.70 за температурный режим', nextStep: 'negotiate_temp', points: 12 },
                    { text: 'Спросить про detention pay', nextStep: 'ask_detention', points: 10 },
                    { text: 'Принять $2.40', nextStep: 'accept_low', points: 0 }
                ]
            },
            negotiate_temp: {
                id: 'negotiate_temp',
                audio: '/audio/sim/negotiation-1-negotiate-temp.mp3',
                text: 'Торг за температурный режим',
                brokerText: '0°F is standard for frozen. But okay, I can do $2.65 per mile. Deal?',
                options: [
                    { text: 'Принять $2.65', nextStep: 'accept_good', points: 13 },
                    { text: 'Попросить еще $50 на топливо', nextStep: 'ask_fuel', points: 15 }
                ]
            },
            ask_detention: {
                id: 'ask_detention',
                audio: '/audio/sim/negotiation-1-ask-detention.mp3',
                text: 'Вопрос про detention',
                brokerText: 'Detention is $50 per hour after 2 hours free time. Standard terms.',
                options: [
                    { text: 'Хорошо, принять $2.40', nextStep: 'accept_low', points: 3 },
                    { text: 'Попросить $2.60 + detention', nextStep: 'negotiate_with_detention', points: 11 }
                ]
            },
            negotiate_with_detention: {
                id: 'negotiate_with_detention',
                audio: '/audio/sim/negotiation-1-negotiate-detention.mp3',
                text: 'Комплексные переговоры',
                brokerText: 'Alright, you drive a hard bargain. $2.60 per mile with detention terms. Let\'s do it.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Отличная работа!',
                    tip: 'Вы показали профессионализм: уточнили детали, обсудили дополнительные условия и получили хорошую ставку. $2.60/mile + detention - это справедливая сделка для reefer.'
                }
            },
            push_higher: {
                id: 'push_higher',
                audio: '/audio/sim/negotiation-1-push-higher.mp3',
                text: 'Вы настаиваете на повышении',
                brokerText: 'You know what, you seem professional. $2.65 per mile, final offer.',
                options: [
                    { text: 'Принять $2.65', nextStep: 'accept_good', points: 14 },
                    { text: 'Попросить $2.70', nextStep: 'push_too_hard', points: 5 }
                ]
            },
            negotiate_deadhead: {
                id: 'negotiate_deadhead',
                audio: '/audio/sim/negotiation-1-negotiate-deadhead.mp3',
                text: 'Торг с учетом deadhead',
                brokerText: 'Fair point about the deadhead. I can do $2.62 per mile. That\'s really my max.',
                options: [
                    { text: 'Принять $2.62', nextStep: 'accept_good', points: 13 },
                    { text: 'Отказаться и искать другой груз', nextStep: 'decline', points: 0 }
                ]
            },
            meet_middle: {
                id: 'meet_middle',
                audio: '/audio/sim/negotiation-1-meet-middle.mp3',
                text: 'Компромиссное предложение',
                brokerText: 'You know how to negotiate! $2.65 works for me. I\'ll send the RC.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Превосходно!',
                    tip: 'Встреча посередине - классическая техника переговоров. Вы подняли ставку с $2.40 до $2.65 (+$300 на рейс). Брокер доволен, вы довольны - win-win!'
                }
            },
            ask_fuel: {
                id: 'ask_fuel',
                audio: '/audio/sim/negotiation-1-ask-fuel.mp3',
                text: 'Запрос на топливо',
                brokerText: 'The rate already includes fuel considerations. But fine, $2.68 per mile, and that\'s absolutely final.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Мастерский уровень!',
                    tip: 'Вы выжали максимум из переговоров: $2.68/mile вместо изначальных $2.40. Это +$336 на рейс! Но будьте осторожны - слишком агрессивный торг может испортить отношения с брокером.'
                }
            },
            push_too_hard: {
                id: 'push_too_hard',
                audio: '/audio/sim/negotiation-1-push-too-hard.mp3',
                text: 'Слишком агрессивный торг',
                brokerText: 'You know what, I have other carriers interested. Thanks anyway.',
                isEnd: true,
                feedback: {
                    type: 'error',
                    message: 'Груз потерян!',
                    tip: 'Вы перестарались. Когда брокер говорит "final offer", обычно это действительно так. Лучше взять хорошую ставку, чем остаться без груза. Баланс важен!'
                }
            },
            decline: {
                id: 'decline',
                audio: '/audio/sim/negotiation-1-decline.mp3',
                text: 'Вы отказались от груза',
                brokerText: 'Alright, good luck finding something better.',
                isEnd: true,
                feedback: {
                    type: 'warning',
                    message: 'Груз упущен',
                    tip: '$2.62/mile для reefer на 1,200 миль - это неплохая ставка, особенно с учетом deadhead. Иногда лучше взять хороший груз, чем ждать идеального.'
                }
            },
            accept_medium: {
                id: 'accept_medium',
                audio: '/audio/sim/negotiation-1-accept-medium.mp3',
                text: 'Сделка заключена',
                brokerText: 'Perfect! I\'ll email you the Rate Confirmation in 5 minutes.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Хорошая работа!',
                    tip: 'Вы подняли ставку с $2.40 до $2.50-2.55. Это дополнительные $120-180 на рейс. Неплохо, но можно было выжать еще немного, если бы продолжили переговоры.'
                }
            },
            accept_good: {
                id: 'accept_good',
                audio: '/audio/sim/negotiation-1-accept-good.mp3',
                text: 'Отличная сделка!',
                brokerText: 'Great doing business with you! RC is on the way.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Отлично!',
                    tip: '$2.60-2.65/mile - это справедливая ставка для reefer на данном маршруте. Вы подняли цену на $240-300 от изначального предложения. Профессиональная работа!'
                }
            }
        }
    },
    {
        id: 'problem-solving-1',
        title: 'Проблема на маршруте',
        description: 'Водитель сломался в дороге. Как правильно сообщить брокеру?',
        difficulty: 'intermediate',
        category: 'Решение проблем',
        icon: '🚨',
        startStep: 'start',
        steps: {
            start: {
                id: 'start',
                audio: '/audio/sim/problem-1-start.mp3',
                text: 'Звонок от водителя',
                brokerText: 'Dispatcher, we have a problem. Truck broke down in Kansas. ETA to delivery is now delayed by 12 hours.',
                options: [
                    { text: 'Немедленно позвонить брокеру', nextStep: 'call_broker_immediate', points: 15 },
                    { text: 'Сначала найти решение, потом звонить', nextStep: 'find_solution_first', points: 10 },
                    { text: 'Подождать, может починят быстро', nextStep: 'wait_and_see', points: 0 }
                ]
            },
            call_broker_immediate: {
                id: 'call_broker_immediate',
                audio: '/audio/sim/problem-1-call-immediate.mp3',
                text: 'Вы сразу звоните брокеру',
                brokerText: 'Thanks for letting me know right away. What\'s the plan?',
                options: [
                    { text: 'Предложить найти другой трак', nextStep: 'offer_power_only', points: 15 },
                    { text: 'Сказать что работаете над решением', nextStep: 'working_on_it', points: 10 },
                    { text: 'Попросить отменить груз', nextStep: 'ask_cancel', points: 0 }
                ]
            },
            find_solution_first: {
                id: 'find_solution_first',
                audio: '/audio/sim/problem-1-find-solution.mp3',
                text: 'Вы ищете решение',
                brokerText: 'Why am I hearing about this so late? The shipper is calling me!',
                isEnd: true,
                feedback: {
                    type: 'error',
                    message: 'Потеря доверия!',
                    tip: 'При проблемах ВСЕГДА сообщайте брокеру немедленно. Transparency is key. Брокер должен знать о проблеме раньше, чем shipper начнет звонить ему.'
                }
            },
            wait_and_see: {
                id: 'wait_and_see',
                audio: '/audio/sim/problem-1-wait.mp3',
                text: 'Вы решили подождать',
                brokerText: 'The shipper just called me furious! Why didn\'t you inform me? This is unacceptable!',
                isEnd: true,
                feedback: {
                    type: 'error',
                    message: 'Критическая ошибка!',
                    tip: 'Никогда не скрывайте проблемы! Это худшее, что может сделать диспетчер. Вы потеряли доверие брокера и, возможно, будущие грузы от него.'
                }
            },
            offer_power_only: {
                id: 'offer_power_only',
                audio: '/audio/sim/problem-1-power-only.mp3',
                text: 'Предложение решения',
                brokerText: 'Good thinking! If you can get another truck there in 4 hours, we can still make the delivery window.',
                isEnd: true,
                feedback: {
                    type: 'success',
                    message: 'Профессиональный подход!',
                    tip: 'Вы показали проактивность: сразу сообщили о проблеме И предложили решение. Это то, что отличает хорошего диспетчера от плохого.'
                }
            },
            working_on_it: {
                id: 'working_on_it',
                audio: '/audio/sim/problem-1-working.mp3',
                text: 'Обещание решить проблему',
                brokerText: 'Okay, but I need updates every hour. The shipper is not happy.',
                isEnd: true,
                feedback: {
                    type: 'warning',
                    message: 'Можно лучше',
                    tip: 'Вы сообщили о проблеме - это хорошо. Но лучше звонить брокеру уже с готовым планом решения. Это вызывает больше доверия.'
                }
            },
            ask_cancel: {
                id: 'ask_cancel',
                audio: '/audio/sim/problem-1-cancel.mp3',
                text: 'Просьба об отмене',
                brokerText: 'Cancel? Are you serious? This will cost me the customer! Don\'t call me again.',
                isEnd: true,
                feedback: {
                    type: 'error',
                    message: 'Отношения разрушены!',
                    tip: 'Отмена груза - это последний вариант. Всегда пытайтесь найти решение: power only, другой водитель, ремонт на месте. Брокер потерял клиента из-за вас.'
                }
            }
        }
    }
];

export const getScenarioById = (id: string): SimulatorScenario | undefined => {
    return SIMULATOR_SCENARIOS.find(scenario => scenario.id === id);
};

export const getScenariosByDifficulty = (difficulty: string): SimulatorScenario[] => {
    return SIMULATOR_SCENARIOS.filter(scenario => scenario.difficulty === difficulty);
};
