// СИМУЛЬ - База диалогов для обучения диспетчеров
// Версия: Dialogue #5 - Dry Van Retail (NEW SYSTEM V3.0 - IMPROVED)
// Дата: 2026-03-07
// ПРАВИЛА: Имена совпадают, Outcome в карточке, Детальные prompts, Торг!

console.log('🔵 Loading scenarios-data-v5.js...');

// Dialogue #5: Dry Van Retail - Chicago → Dallas
// Easy difficulty, standard retail freight
// Posted rate: $1,800 ($2.31/mile, 780 mi), Target: $2,000-2,100 ($2.56-2.69/mile)

const scenario5 = {
    id: 5,
    route: "Chicago IL → Dallas TX",
    distance: 780,
    equipment: "Dry Van (53ft)",
    cargo: "Retail products (clothing, home goods)",
    weight: "42,000 lbs",
    deadline: "Pickup tomorrow 8 AM - 12 PM, Delivery in 2 days",
    brokerStyle: "Professional retail broker",
    difficulty: "easy",

    initialMessage: "Good morning! This is Tom Wilson from Midwest Freight Solutions.\nI saw your load posting for Chicago to Dallas retail products.\nIs this load still available?",

    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Mike from RetailFreight Logistics.\nYes, still available.\nWhat's your MC number?",
                dispatcherPrompt: "💎 Брокер проверяет вашу компанию. Представьтесь ПОЛНОСТЬЮ: MC номер, название компании, размер флота (сколько trucks), специализация (Dry Van retail). Укажите где truck сейчас и когда готов. Детали = доверие брокера!",
                suggestions: [
                    { text: "Good morning Mike! Midwest Freight Solutions, MC 778899. We're a 35-truck fleet specializing in retail freight. Truck's in Chicago at distribution center, empty since yesterday. Ready for 8 AM pickup tomorrow. Where's the pickup location?", quality: "excellent", analytics: "✨ Отлично! MC, компания, 35 trucks, специализация retail, точное местоположение, готовность, вопрос о pickup - полный профессионализм!", path: "master" },
                    { text: "Good morning! MC 778899, Midwest Freight Solutions. We handle retail regularly. Truck in Chicago, ready tomorrow.", quality: "good", analytics: "✔️ Хорошо! MC, компания, опыт с retail, местоположение, готовность.", path: "master" },
                    { text: "MC 778899, Midwest Freight Solutions. Truck in Chicago area.", quality: "normal", analytics: "⚪ Нормально. Базовая информация, но нет деталей о флоте и специализации.", path: "master" },
                    { text: "MC 778899... I think. Truck somewhere in Chicago.", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в MC номере, неточное местоположение!", path: "master" },
                    { text: "Why you need MC? Just give me rate!", quality: "aggressive", analytics: "🔴 Агрессивно! Грубость, отказ давать MC - брокер откажет.", path: "reject1" },
                    { text: "Hi, is it available?", quality: "fail", analytics: "❌ Провал! Не представился, не дал MC номер - базовое требование!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where exactly is your truck? Need precise location.",
                dispatcherPrompt: "💎 Брокер хочет ТОЧНОЕ местоположение для планирования. Дайте конкретный адрес или landmark (warehouse, distribution center, truck stop с названием), статус (empty/loaded), когда освободился. Точность = профессионализм!",
                suggestions: [
                    { text: "Truck's at Target distribution center on West 55th Street in Chicago. Empty since yesterday afternoon after delivery. Driver rested and ready. Can be at pickup by 8 AM sharp.", quality: "excellent", analytics: "✨ Отлично! Конкретный адрес (Target DC, West 55th), статус (empty), время освобождения, готовность водителя, подтверждение времени pickup!", path: "master" },
                    { text: "At distribution center on West 55th Street, Chicago. Empty since yesterday. Ready for 8 AM.", quality: "good", analytics: "✔️ Хорошо! Конкретный адрес, статус, готовность.", path: "master" },
                    { text: "In Chicago, near downtown. Empty and ready.", quality: "normal", analytics: "⚪ Нормально. Общее местоположение, но недостаточно точно для планирования.", path: "master" },
                    { text: "Somewhere in Chicago... I can check...", quality: "weak", analytics: "⚠️ Слабо. Очень неточно, диспетчер не знает где его водитель!", path: "master" },
                    { text: "Just send pickup address!", quality: "aggressive", analytics: "🔴 Агрессивно! Не отвечает на вопрос, грубость.", path: "reject1" },
                    { text: "Driver will call when he's ready...", quality: "fail", analytics: "❌ Провал! Нет контроля над водителем, непрофессионально!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 780 miles Chicago to Dallas. Retail products - clothing and home goods, palletized. 42K lbs. Pickup tomorrow 8 AM - 12 PM at Walmart DC, delivery in 2 days. Can you handle this?",
                dispatcherPrompt: "💎 Брокер дал основные детали груза. Подтвердите ВСЁ: расстояние (780 mi), тип груза (retail), вес (42K), pickup window (8-12), delivery срок (2 days). Дайте ETA для delivery. Спросите о special requirements (load locks, straps). Детали = профессионализм!",
                suggestions: [
                    { text: "Perfect! 780 miles in 2 days is comfortable - about 390 miles per day. We handle retail freight regularly with proper load locks and straps. Driver can pickup at 8 AM, deliver by end of day 2. Any special handling requirements for clothing?", quality: "excellent", analytics: "✨ Отлично! Подтверждение расстояния, расчет миль/день, опыт с retail, оборудование (load locks/straps), ETA, вопрос о handling!", path: "master" },
                    { text: "Yes, we can handle it. 780 miles in 2 days works. Pickup at 8 AM, deliver in 2 days. Any special requirements?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, ETA, вопрос о requirements.", path: "master" },
                    { text: "We can do it. Driver will be on time.", quality: "normal", analytics: "⚪ Нормально. Базовое подтверждение, но нет деталей и вопросов.", path: "master" },
                    { text: "I think we can make it... 2 days is tight...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в возможности выполнить стандартный груз!", path: "master" },
                    { text: "Yeah, whatever. What's the rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежительное отношение к деталям груза.", path: "reject2" },
                    { text: "Driver won't be ready until afternoon...", quality: "fail", analytics: "❌ Провал! Не может забрать в указанное время pickup window!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Standard dry van. Need load locks and straps. Trailer must be clean and dry - no odors. All palletized cargo.",
                dispatcherPrompt: "💎 Брокер назвал requirements для retail груза. Подтвердите что у вас есть: load locks (сколько), straps, trailer clean and dry (когда последний раз чистили). Упомяните опыт водителя с retail freight. Готовность оборудования = получите груз!",
                suggestions: [
                    { text: "Perfect! We have 12 load locks and heavy-duty straps ready. Trailer was cleaned and inspected yesterday - completely dry, no odors. Driver has 5 years experience with retail freight, knows proper handling. Ready to go!", quality: "excellent", analytics: "✨ Отлично! Конкретное количество load locks (12), straps, состояние trailer (cleaned yesterday), опыт водителя (5 years retail), готовность!", path: "master" },
                    { text: "Yes, we have load locks and straps. Trailer is clean and dry. Driver experienced with retail.", quality: "good", analytics: "✔️ Хорошо! Оборудование есть, trailer готов, опыт водителя.", path: "master" },
                    { text: "We have load locks and straps. Trailer is clean.", quality: "normal", analytics: "⚪ Нормально. Оборудование есть, но нет деталей о состоянии и опыте.", path: "master" },
                    { text: "I think we have them... trailer should be clean...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в наличии оборудования и состоянии trailer!", path: "master" },
                    { text: "It's just retail stuff!", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение требованиями безопасности груза.", path: "reject3" },
                    { text: "We don't have load locks...", quality: "fail", analytics: "❌ Провал! Нет требуемого оборудования для retail freight!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo coverage for retail.",
                dispatcherPrompt: "💎 Брокер проверяет страховку для retail груза. Назовите ТОЧНО: сумму покрытия ($100K+), название страховой компании, срок действия certificate (месяц/год). Предложите отправить certificate сразу на email. Страховка = доверие брокера!",
                suggestions: [
                    { text: "Yes, $100K cargo insurance through Progressive Commercial. Certificate current, expires December 2026. I can email it to you right now. What's your email?", quality: "excellent", analytics: "✨ Отлично! Точная сумма ($100K), компания (Progressive), срок (Dec 2026), готовность отправить сразу!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Progressive. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо! Сумма, компания, готовность отправить.", path: "master" },
                    { text: "Yes, we have cargo insurance. $100K coverage.", quality: "normal", analytics: "⚪ Нормально. Подтверждение суммы, но нет деталей о компании и сроке.", path: "master" },
                    { text: "I think we have enough insurance...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в критической информации о страховке!", path: "master" },
                    { text: "Insurance is fine! Just give rate!", quality: "aggressive", analytics: "🔴 Агрессивно! Не дает конкретной информации, грубость.", path: "reject3" },
                    { text: "We only have $50K coverage...", quality: "fail", analytics: "❌ Провал! Недостаточное покрытие для retail груза ($100K required)!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're well-prepared. Let's talk rate. What do you need for 780 miles?",
                dispatcherPrompt: "💎 ТОРГ ЗА ЦЕНУ - ГЛАВНЫЙ МОМЕНТ! Брокер спрашивает ВАШУ цену. Назовите цену ПЕРВЫМ! Posted rate $1,800 ($2.31/mile) - просите $2,000-2,100 ($2.56-2.69/mile). Retail freight платит standard rates. Обоснуйте: опыт с retail, оборудование, быстрая delivery. ЧЕМ БОЛЬШЕ ПРОСИТЕ - ТЕМ БОЛЬШЕ ЗАРАБОТАЕТЕ!",
                suggestions: [
                    { text: "For 780 miles with retail freight, I'm looking at $2,100. That's $2.69/mile, fair rate for retail with proper equipment and experienced driver. Quick 2-day delivery.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $2,100 - это $300 БОЛЬШЕ posted rate ($1,800)! Обоснование: retail, equipment, experienced driver, quick delivery. Торг начался сильно!", path: "master" },
                    { text: "$2,000 for this load. That's $2.56/mile for retail freight.", quality: "good", analytics: "✔️ Хорошо! Просит $2,000 - это $200 больше posted! Указал rate per mile.", path: "master" },
                    { text: "I'm looking at $1,950 for 780 miles.", quality: "normal", analytics: "⚪ Нормально. Просит $1,950 - только $150 больше. Мог бы просить больше!", path: "master" },
                    { text: "Can you do $1,900?", quality: "weak", analytics: "⚠️ Слабо! Просит только $100 больше - слишком мало! Теряет деньги!", path: "master" },
                    { text: "I need $2,500 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $2,500 = $3.21/mile - нереально для retail! Потеряет груз!", path: "reject4" },
                    { text: "I'll take posted $1,800!", quality: "fail", analytics: "❌ ПРОВАЛ! Принял posted rate БЕЗ ТОРГА! Потерял возможность заработать $200-300 больше!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's a bit high for retail. I can do $1,950. That's $2.50/mile.",
                dispatcherPrompt: "💎 Брокер дал встречное предложение $1,950 (вы просили $2,100, posted $1,800). Это НОРМАЛЬНО - брокер всегда торгуется! Варианты: 1) Встречное $2,000-2,025 (посередине), 2) Принять $1,950 + добавить detention $75/hr, 3) Принять $1,950. НЕ стойте на $2,100 - потеряете груз! Гибкость = успех!",
                suggestions: [
                    { text: "Can we meet at $2,025? That's fair for both - right in the middle. Quick delivery, experienced driver, proper equipment.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Встречное предложение $2,025 - ровно посередине между $1,950 и $2,100! Обоснование. Профессиональный торг!", path: "master" },
                    { text: "$1,950 works if detention is $75/hr after 2 hours free time.", quality: "good", analytics: "✔️ Хорошо! Принимает $1,950 но добавляет условие detention - умный ход!", path: "master" },
                    { text: "$1,950 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально. Принимает без дополнительных условий. Мог бы попросить detention.", path: "master" },
                    { text: "Okay, $1,950 I guess...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность, нет энтузиазма. Звучит как проигравший.", path: "master" },
                    { text: "$2,025 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно! Ультиматум вместо переговоров. Брокер откажет.", path: "reject4" },
                    { text: "No, I need $2,100!", quality: "fail", analytics: "❌ Провал! Не гибкий в переговорах. Стоит на своем - потеряет груз!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$1,975 final. That's $2.53/mile. Detention $75/hr after 2 hours. Deal?",
                dispatcherPrompt: "💎 ФИНАЛЬНОЕ ПРЕДЛОЖЕНИЕ! Брокер дал $1,975 (вы просили $2,100, posted $1,800). ВЫ ЗАРАБОТАЛИ $175 БОЛЬШЕ! Это ОТЛИЧНЫЙ результат! Detention $75/hr включен. Это ПОСЛЕДНИЙ шанс - ПРИНИМАЙТЕ! Скажите 'Deal!' и спросите про factoring. НЕ торгуйтесь дальше - потеряете груз!",
                suggestions: [
                    { text: "$1,975 works! Deal! Which factoring company should I send?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $175 больше ($1,975 vs $1,800 posted)! Сразу 'Deal!' и переходит к factoring. Профессионально!", path: "master" },
                    { text: "Perfect! $1,975 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $175 больше! Подтверждение условий, переход к factoring.", path: "master" },
                    { text: "$1,975 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально. Заработал $175, но без энтузиазма.", path: "master" },
                    { text: "Okay, $1,975...", quality: "weak", analytics: "⚠️ Слабо. Нет энтузиазма, звучит неуверенно. Заработал $175 но не ценит это!", path: "master" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно! Новые требования ПОСЛЕ согласования ставки. Брокер откажет!", path: "reject4" },
                    { text: "Can we do $2,000?", quality: "fail", analytics: "❌ ПРОВАЛ! Продолжает торговаться после ФИНАЛЬНОГО предложения. Потеряет груз!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $1,975 all-in, detention $75/hr after 2 hours. Which factoring company?",
                dispatcherPrompt: "💎 Брокер финализирует rate и спрашивает про factoring. Дайте ПОЛНУЮ информацию: название factoring компании + email адрес. Предложите отправить insurance certificate сразу. Быстрый ответ = профессионализм!",
                suggestions: [
                    { text: "RTS Financial Services, factoring@rtsfin.com. I'm sending insurance certificate to that email right now. Anything else you need?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Название (RTS), email, сразу отправляет insurance, спрашивает что еще нужно!", path: "master" },
                    { text: "Triumph Business Capital, factoring@triumphbc.com. I'll send insurance certificate.", quality: "good", analytics: "✔️ Хорошо! Название, email, готовность отправить insurance.", path: "master" },
                    { text: "OTR Capital. Email is otr@otrcapital.com.", quality: "normal", analytics: "⚪ Нормально. Название и email, но не упомянул insurance.", path: "master" },
                    { text: "Let me find the email...", quality: "weak", analytics: "⚠️ Слабо. Не знает email своего factoring - непрофессионально!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно! Не отвечает на вопрос, грубость.", path: "reject4" },
                    { text: "We don't use factoring.", quality: "fail", analytics: "❌ ПРОВАЛ! Нет factoring - брокер не будет работать (риск неоплаты)!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@rtsfin.com with all pickup and delivery details. Sign and return it. After pickup, send BOL and photos. If this goes well, I have 8-10 retail loads weekly Chicago-Texas lane. Good luck!",
                dispatcherPrompt: "💎 УСПЕХ! Брокер отправил Rate Con и предлагает 8-10 retail loads WEEKLY на этом lane! Это $15,800-19,750/неделю потенциал! Поблагодарите профессионально, подтвердите что: 1) подпишете rate con сразу, 2) отправите BOL и photos после pickup, 3) заинтересованы в будущих грузах. Хорошие отношения = постоянные грузы!",
                suggestions: [
                    { text: "Thank you Mike! We'll sign rate con within the hour. Driver will send BOL and photos right after pickup. We're definitely interested in more retail loads on this lane - 8-10 weekly sounds great! Looking forward to working together!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, конкретное время (within hour), подтверждение BOL/photos, энтузиазм по поводу weekly loads, желание сотрудничать!", path: "master" },
                    { text: "Thank you! We'll sign rate con right away and keep you updated. Looking forward to more loads on this lane!", quality: "good", analytics: "✔️ Хорошо! Благодарность, подтверждение действий, интерес к будущим грузам.", path: "master" },
                    { text: "Thank you, we'll take care of it. Talk soon.", quality: "normal", analytics: "⚪ Нормально. Вежливо, но без энтузиазма по поводу weekly loads.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо. Слишком короткий ответ, нет интереса к будущим грузам.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно. Грубость в конце диалога портит впечатление. Не получит weekly loads!", path: "master" },
                    { text: "What was the pickup time again?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил критические детали груза! Брокер не даст больше грузов!", path: "master" }
                ]
            },
            {
                brokerResponse: "Perfect! Rate con sent. Sign and return. Safe travels!",
                outcome: {
                    type: "success",
                    quality: "excellent",
                    rate: "$1,975",
                    ratePerMile: "$2.53/mile",
                    relationship: "strengthened",
                    dialogueTime: "5-6 minutes",
                    questionsAsked: "Professional questions",
                    detailLevel: "high",
                    futureOpportunity: "repeat",
                    weeklyLoads: "8-10 retail loads weekly Chicago-Texas ($15,800-19,750/week)",
                    feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $175 больше ($1,975 vs $1,800 posted).

💡 УРОК: Retail freight требует load locks, straps, clean trailer. Торг: Posted $1,800 → Вы просили $2,100 → Встречное $1,950 → Финал $1,975 ($2.53/mile). Заработали $175 = 9.7% прибавка!

🎯 РЕАЛЬНОСТЬ: Retail loads - это 50% всех Dry Van грузов. Standard rates $2.30-2.60/mile. Ваш профессионализм = 8-10 loads weekly на Chicago-Texas lane ($15,800-19,750/неделю = $63,200-79,000/месяц потенциал)!`
                }
            }
        ],
        reject1: [
            {},
            {
                brokerResponse: "I need professional carrier with proper MC verification. Thanks anyway.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "rejected",
                    dialogueTime: "1-2 minutes",
                    questionsAsked: "None",
                    detailLevel: "none",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕПРОФЕССИОНАЛИЗМ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Представиться полностью: MC номер, название компании, размер флота\n- Дать точное местоположение truck (конкретный адрес или landmark)\n- Показать готовность и профессионализм\n- Отвечать вежливо на все вопросы брокера\n\n🎯 ПРИМЕНЕНИЕ: MC verification - это ПЕРВЫЙ шаг. Без MC номера брокер не может проверить вашу компанию в FMCSA database. Знайте свой MC наизусть!"
                }
            }
        ],
        reject2: [
            {},
            {
                brokerResponse: "I need carrier who can meet the pickup schedule. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "rejected",
                    dialogueTime: "2-3 minutes",
                    questionsAsked: "Minimal",
                    detailLevel: "low",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕ МОЖЕТ ЗАБРАТЬ ВОВРЕМЯ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Подтвердить что можете забрать в pickup window (8 AM - 12 PM)\n- Дать конкретное время когда driver будет на месте\n- Показать уверенность в возможности выполнить груз\n- Задать вопросы о деталях груза\n\n🎯 ПРИМЕНЕНИЕ: Pickup window - это НЕ рекомендация, это ТРЕБОВАНИЕ. Если не можете забрать вовремя - скажите сразу, не тратьте время брокера."
                }
            }
        ],
        reject3: [
            {},
            {
                brokerResponse: "I need carrier with proper equipment and insurance. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "rejected",
                    dialogueTime: "3-4 minutes",
                    questionsAsked: "Some",
                    detailLevel: "medium",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕТ ОБОРУДОВАНИЯ ИЛИ СТРАХОВКИ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Иметь load locks и straps для retail freight\n- Иметь минимум $100K cargo insurance\n- Trailer должен быть clean and dry (no odors)\n- Знать точные детали своей страховки (компания, срок)\n\n🎯 ПРИМЕНЕНИЕ: Retail freight требует proper securing (load locks/straps) и insurance. Без этого брокер не может дать груз - это liability risk."
                }
            }
        ],
        reject4: [
            {},
            {
                brokerResponse: "That rate doesn't work for me. Thanks anyway.",
                outcome: {
                    type: "failure",
                    quality: "poor",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "damaged",
                    dialogueTime: "4-5 minutes",
                    questionsAsked: "Good",
                    detailLevel: "high",
                    futureOpportunity: "unlikely",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Просить разумную цену (+10-20% от posted)\n- Быть гибким в переговорах\n- Принять финальное предложение брокера\n- Не выдвигать ультиматумы\n\n🎯 ПРИМЕНЕНИЕ: Торг - это искусство компромисса. Если просите слишком много или не гибкий - потеряете груз. Posted $1,800 → Просите $2,000-2,100 → Финал обычно $1,950-2,000. Это НОРМАЛЬНО!"
                }
            }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario5);
    console.log('✅ Scenario 5 (Dry Van Retail Chicago-Dallas) added to allScenarios');
} else {
    console.warn('⚠️ allScenarios array not found - scenario5 created but not added');
}
