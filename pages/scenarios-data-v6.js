// СИМУЛЬ - База диалогов для обучения диспетчеров
// Версия: Dialogue #6 - Reefer Frozen Food (NEW SYSTEM V3.0 - IMPROVED)
// Дата: 2026-03-07
// ПРАВИЛА: Имена совпадают, Outcome в карточке, Детальные prompts, Торг!

console.log('🔵 Loading scenarios-data-v6.js...');

// Dialogue #6: Reefer Frozen Food - LA → Denver
// Medium difficulty, temperature-controlled freight
// Posted rate: $2,300 ($2.80/mile, 820 mi), Target: $2,550-2,650 ($3.11-3.23/mile)

const scenario6 = {
    id: 6,
    route: "Los Angeles CA → Denver CO",
    distance: 820,
    equipment: "Reefer (53ft refrigerated)",
    cargo: "Frozen food (ice cream, frozen meals)",
    weight: "44,000 lbs",
    deadline: "Pickup tomorrow 6 AM - 10 AM, Delivery in 2 days",
    brokerStyle: "Professional cold chain broker",
    difficulty: "medium",

    initialMessage: "Good morning! This is David Martinez from Cold Chain Logistics.\nI saw your load posting for LA to Denver frozen food.\nIs this load still available?",

    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Lisa from FreshFreight Brokers.\nYes, available.\nWhat's your MC?",
                dispatcherPrompt: "💎 Брокер проверяет вашу компанию. Представьтесь ПОЛНОСТЬЮ: MC номер, название компании, размер флота (сколько reefer trucks), специализация (temperature-controlled freight). Укажите где reefer truck сейчас и когда готов. Reefer = специализация!",
                suggestions: [
                    { text: "Good morning Lisa! Cold Chain Logistics, MC 556677. We're a 28-truck fleet specializing in temperature-controlled freight. 15 reefer units. Truck's in LA at cold storage facility, empty since yesterday. Reefer unit operational, pre-cooled. Ready for 6 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 28 trucks (15 reefers), специализация temp-controlled, местоположение (cold storage), reefer operational, pre-cooled, готовность!", path: "master" },
                    { text: "Good morning! MC 556677, Cold Chain Logistics. We specialize in reefer freight. 15 reefer trucks. Truck in LA, reefer unit working. Ready tomorrow.", quality: "good", analytics: "✔️ Хорошо! MC, компания, специализация, количество reefers, reefer operational.", path: "master" },
                    { text: "MC 556677, Cold Chain Logistics. We have reefer trucks. Truck in LA.", quality: "normal", analytics: "⚪ Нормально. Базовая информация, но нет деталей о reefer unit status.", path: "master" },
                    { text: "MC 556677... Truck in LA area... reefer should work...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в reefer unit - критично для frozen food!", path: "master" },
                    { text: "Why so many questions? Just rate!", quality: "aggressive", analytics: "🔴 Агрессивно! Грубость. Reefer freight требует детальной проверки!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал! Не представился, не дал MC, не упомянул reefer capability!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your reefer truck? Is the unit operational and pre-cooled?",
                dispatcherPrompt: "💎 Брокер хочет ТОЧНОЕ местоположение и статус reefer unit. Дайте конкретный адрес (cold storage, distribution center), статус unit (operational, когда last serviced), температуру (pre-cooled to what temp), когда готов. Reefer status = критично!",
                suggestions: [
                    { text: "Truck's at Americold cold storage facility in Vernon, LA. Empty since yesterday. Reefer unit operational, last serviced 2 weeks ago. Pre-cooled to -10°F, ready for frozen load. Driver can be at pickup by 6 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Конкретный адрес (Americold Vernon), статус (empty), reefer operational, last service (2 weeks), pre-cooled (-10°F), готовность!", path: "master" },
                    { text: "At cold storage in Vernon, LA. Empty since yesterday. Reefer unit working, pre-cooled to -10°F. Ready for 6 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, reefer operational, температура, готовность.", path: "master" },
                    { text: "In LA, near cold storage. Reefer unit is working. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально. Общее местоположение, но нет деталей о pre-cooling.", path: "master" },
                    { text: "Somewhere in LA... reefer should be working... I think it's cold...", quality: "weak", analytics: "⚠️ Слабо. Неточное местоположение, неуверенность в reefer unit - недопустимо для frozen!", path: "master" },
                    { text: "Just send pickup address!", quality: "aggressive", analytics: "🔴 Агрессивно! Не отвечает на критические вопросы о reefer.", path: "reject1" },
                    { text: "Reefer unit not working right now...", quality: "fail", analytics: "❌ Провал! Reefer unit не работает - не может везти frozen food!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 820 miles LA to Denver. Frozen food - ice cream and frozen meals. 44K lbs. Must maintain -10°F throughout. Pickup tomorrow 6-10 AM, delivery in 2 days. Can you handle temperature-sensitive freight?",
                dispatcherPrompt: "💎 Брокер дал детали frozen груза. Подтвердите ВСЁ: расстояние (820 mi), температура (-10°F constant), pickup window (6-10 AM), delivery (2 days). Дайте ETA. Спросите о: temp monitoring requirements, fuel stop procedures, door opening restrictions. Frozen = строгие правила!",
                suggestions: [
                    { text: "Perfect! 820 miles in 2 days, maintaining -10°F constant. We have GPS temp monitoring, will send logs every 6 hours. Driver experienced with frozen freight - knows to minimize door openings, fuel stops max 20 minutes. Can pickup at 6 AM, deliver by end of day 2. Any specific temp monitoring requirements?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение temp (-10°F), GPS monitoring, temp logs, опыт driver, door opening protocol, fuel stop limits, ETA, вопрос о requirements!", path: "master" },
                    { text: "Yes, we handle frozen regularly. 820 miles in 2 days, maintaining -10°F. GPS temp monitoring installed. Driver experienced. Any temp monitoring requirements?", quality: "good", analytics: "✔️ Хорошо! Опыт с frozen, подтверждение temp, GPS monitoring, вопрос.", path: "master" },
                    { text: "We can do it. Will maintain -10°F. Driver will be on time.", quality: "normal", analytics: "⚪ Нормально. Базовое подтверждение, но нет деталей о monitoring и procedures.", path: "master" },
                    { text: "I think we can keep it cold... 2 days is tight...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в temp control и timeline - недопустимо для frozen!", path: "master" },
                    { text: "Yeah, it's just frozen food. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение к temp-sensitive freight. Брокер откажет.", path: "reject2" },
                    { text: "Driver won't be ready until 10 AM...", quality: "fail", analytics: "❌ Провал! Не может забрать в начале pickup window - риск для frozen!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Good! Reefer unit must maintain -10°F constant. GPS temp monitoring required - send logs every 6 hours. Minimize door openings. Fuel stops max 30 minutes. Call immediately if temp rises above -5°F.",
                dispatcherPrompt: "💎 Брокер назвал СТРОГИЕ requirements для frozen. Подтвердите что у вас есть: GPS temp monitoring (какая система), можете отправлять logs (как часто), driver знает procedures (door openings, fuel stops, emergency protocol). Frozen = zero tolerance!",
                suggestions: [
                    { text: "Perfect! We have SkyBitz GPS temp monitoring - sends real-time alerts. I'll send logs every 6 hours to your email. Driver trained on frozen protocols: door openings only at pickup/delivery, fuel stops under 20 minutes, emergency contact if temp rises. We have 24/7 dispatch for monitoring. Ready to go!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Конкретная система (SkyBitz), real-time alerts, logs every 6 hours, driver training, door protocol, fuel limits, emergency contact, 24/7 dispatch!", path: "master" },
                    { text: "Yes, GPS temp monitoring installed. Will send logs every 6 hours. Driver knows frozen procedures - minimal door openings, quick fuel stops, call if temp rises.", quality: "good", analytics: "✔️ Хорошо! GPS monitoring, logs, driver знает procedures.", path: "master" },
                    { text: "We have GPS monitoring. Driver will follow procedures.", quality: "normal", analytics: "⚪ Нормально. Есть monitoring, но нет деталей о системе и procedures.", path: "master" },
                    { text: "I think we have GPS... driver should know what to do...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в GPS и driver training - недопустимо для frozen!", path: "master" },
                    { text: "Too many rules! It's just ice cream!", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение safety requirements. Frozen = strict rules!", path: "reject3" },
                    { text: "We don't have GPS temp monitoring...", quality: "fail", analytics: "❌ Провал! Нет GPS monitoring - required для frozen freight!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Excellent! Insurance current? We need $100K cargo coverage for frozen food.",
                dispatcherPrompt: "💎 Брокер проверяет страховку для frozen груза. Назовите ТОЧНО: сумму покрытия ($100K+), страховую компанию, срок действия, покрывает ли temperature failure claims. Предложите отправить certificate. Frozen = high value!",
                suggestions: [
                    { text: "Yes, $100K cargo insurance through Northland Insurance. Certificate current, expires March 2027. Coverage includes temperature failure claims. I can email certificate right now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма ($100K), компания (Northland), срок (March 2027), temp failure coverage, готовность отправить!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Northland. Includes temp failure. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо! Сумма, компания, temp failure coverage, готовность отправить.", path: "master" },
                    { text: "Yes, we have $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально. Сумма есть, но нет деталей о temp failure coverage.", path: "master" },
                    { text: "I think we have enough insurance...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в страховке для high-value frozen!", path: "master" },
                    { text: "Insurance is fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Не дает конкретной информации.", path: "reject3" },
                    { text: "We only have $50K coverage...", quality: "fail", analytics: "❌ Провал! Недостаточное покрытие для frozen freight!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're well-equipped for frozen. Let's talk rate. What do you need for 820 miles?",
                dispatcherPrompt: "💎 ТОРГ ЗА ЦЕНУ - ГЛАВНЫЙ МОМЕНТ! Брокер спрашивает ВАШУ цену. Назовите цену ПЕРВЫМ! Posted rate $2,300 ($2.80/mile) - просите $2,550-2,650 ($3.11-3.23/mile). Reefer freight платит БОЛЬШЕ чем dry van! Обоснуйте: GPS monitoring, temp control, experienced driver, strict procedures. ЧЕМ БОЛЬШЕ - ТЕМ ЛУЧШЕ!",
                suggestions: [
                    { text: "For 820 miles with frozen freight, I'm looking at $2,650. That's $3.23/mile, fair rate for temperature-controlled with GPS monitoring, experienced driver, and strict temp protocols. Zero temp failures on record.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $2,650 - это $350 БОЛЬШЕ posted ($2,300)! Обоснование: temp-controlled, GPS, experienced, protocols, track record. Сильный торг!", path: "master" },
                    { text: "$2,550 for this load. That's $3.11/mile for frozen freight with GPS monitoring.", quality: "good", analytics: "✔️ Хорошо! Просит $2,550 - это $250 больше posted! Указал rate и GPS.", path: "master" },
                    { text: "I'm looking at $2,450 for 820 miles frozen.", quality: "normal", analytics: "⚪ Нормально. Просит $2,450 - только $150 больше. Мог бы больше для reefer!", path: "master" },
                    { text: "Can you do $2,400?", quality: "weak", analytics: "⚠️ Слабо! Просит только $100 больше - слишком мало для reefer freight!", path: "master" },
                    { text: "I need $3,000 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $3,000 = $3.66/mile - нереально! Потеряет груз!", path: "reject4" },
                    { text: "I'll take posted $2,300!", quality: "fail", analytics: "❌ ПРОВАЛ! Принял posted БЕЗ ТОРГА! Потерял $250-350 для reefer!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $2,450. That's $2.99/mile.",
                dispatcherPrompt: "💎 Брокер дал встречное $2,450 (вы просили $2,650, posted $2,300). Это НОРМАЛЬНО! Варианты: 1) Встречное $2,525-2,550 (посередине), 2) Принять $2,450 + detention $100/hr, 3) Принять $2,450. НЕ стойте на $2,650 - потеряете! Reefer = гибкость!",
                suggestions: [
                    { text: "Can we meet at $2,550? That's fair for both - right in the middle. GPS monitoring, zero temp failures, experienced with frozen freight.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Встречное $2,550 - посередине между $2,450 и $2,650! Обоснование. Профессионально!", path: "master" },
                    { text: "$2,450 works if detention is $100/hr after 2 hours free time for frozen.", quality: "good", analytics: "✔️ Хорошо! Принимает $2,450 + detention $100/hr (выше для reefer)!", path: "master" },
                    { text: "$2,450 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально. Принимает без дополнительных условий.", path: "master" },
                    { text: "Okay, $2,450 I guess...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность, нет энтузиазма.", path: "master" },
                    { text: "$2,550 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно! Ультиматум. Брокер откажет.", path: "reject4" },
                    { text: "No, I need $2,650!", quality: "fail", analytics: "❌ Провал! Не гибкий - потеряет груз!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$2,475 final. That's $3.02/mile. Detention $100/hr after 2 hours for frozen. Deal?",
                dispatcherPrompt: "💎 ФИНАЛЬНОЕ ПРЕДЛОЖЕНИЕ! Брокер дал $2,475 (вы просили $2,650, posted $2,300). ВЫ ЗАРАБОТАЛИ $175 БОЛЬШЕ! Detention $100/hr для reefer! Это ОТЛИЧНЫЙ результат! ПОСЛЕДНИЙ шанс - ПРИНИМАЙТЕ! Скажите 'Deal!' и спросите factoring. НЕ торгуйтесь!",
                suggestions: [
                    { text: "$2,475 works! Deal! Which factoring company? I'll send temp monitoring setup details too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $175 больше! 'Deal!', factoring, упомянул temp monitoring!", path: "master" },
                    { text: "Perfect! $2,475 with $100/hr detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $175 больше! Подтверждение условий.", path: "master" },
                    { text: "$2,475 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально. Заработал $175, но без энтузиазма.", path: "master" },
                    { text: "Okay, $2,475...", quality: "weak", analytics: "⚠️ Слабо. Нет энтузиазма.", path: "master" },
                    { text: "I want $125/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно! Новые требования после согласования!", path: "reject4" },
                    { text: "Can we do $2,500?", quality: "fail", analytics: "❌ ПРОВАЛ! Торгуется после финального предложения!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $2,475 all-in, detention $100/hr after 2 hours. Which factoring? Send me your temp monitoring contact too.",
                dispatcherPrompt: "💎 Брокер финализирует и просит factoring + temp monitoring contact. Дайте: factoring название + email, temp monitoring contact (dispatch phone/email для alerts). Предложите отправить insurance. Быстро = профессионально!",
                suggestions: [
                    { text: "OTR Capital, factoring@otrcapital.com. Temp monitoring: dispatch 24/7 at (555) 123-4567, alerts@coldchainlogistics.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring (OTR + email), temp monitoring (phone + email), insurance, вопрос!", path: "master" },
                    { text: "Triumph Factoring, factoring@triumphbc.com. Dispatch 24/7: (555) 123-4567 for temp alerts. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо! Factoring, dispatch contact, insurance.", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Dispatch: (555) 123-4567.", quality: "normal", analytics: "⚪ Нормально. Factoring и phone, но не упомянул insurance.", path: "master" },
                    { text: "Let me find factoring email...", quality: "weak", analytics: "⚠️ Слабо. Не знает factoring email!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно! Не отвечает.", path: "reject4" },
                    { text: "We don't use factoring.", quality: "fail", analytics: "❌ Провал! Нет factoring!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@otrcapital.com with all details. Sign and return. After pickup, send BOL, photos, and first temp log. If this goes well, I have 6-8 frozen loads weekly LA-Denver lane. Good luck!",
                dispatcherPrompt: "💎 УСПЕХ! Брокер отправил Rate Con и предлагает 6-8 frozen loads WEEKLY! Это $14,850-19,800/неделю потенциал! Поблагодарите, подтвердите: 1) подпишете rate con, 2) отправите BOL/photos/temp log, 3) заинтересованы в weekly loads. Reefer relationships = золото!",
                suggestions: [
                    { text: "Thank you Lisa! We'll sign rate con immediately. Driver will send BOL, photos, and temp logs starting at pickup. We're very interested in 6-8 weekly frozen loads on this lane - our specialty! Looking forward to long-term partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, подтверждение всех действий (BOL/photos/temp logs), энтузиазм по weekly loads, long-term partnership!", path: "master" },
                    { text: "Thank you! We'll sign rate con right away and send all documentation. Very interested in more frozen loads on this lane!", quality: "good", analytics: "✔️ Хорошо! Благодарность, подтверждение, интерес к weekly loads.", path: "master" },
                    { text: "Thank you, we'll take care of it. Talk soon.", quality: "normal", analytics: "⚪ Нормально. Вежливо, но без энтузиазма.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо. Слишком короткий ответ.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно. Грубость портит впечатление.", path: "master" },
                    { text: "What temp should I maintain?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил критическую температуру (-10°F)!", path: "master" }
                ]
            },
            {
                brokerResponse: "Perfect! Rate con sent. Sign and return. Safe travels and keep that temp steady!",
                outcome: {
                    type: "success",
                    quality: "excellent",
                    rate: "$2,475",
                    ratePerMile: "$3.02/mile",
                    relationship: "strengthened",
                    dialogueTime: "6-7 minutes",
                    questionsAsked: "Professional questions",
                    detailLevel: "high",
                    futureOpportunity: "repeat",
                    weeklyLoads: "6-8 frozen loads weekly LA-Denver ($14,850-19,800/week)",
                    feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $175 больше ($2,475 vs $2,300 posted).

💡 УРОК: Frozen freight требует GPS temp monitoring, strict procedures (door openings, fuel stops), experienced driver. Торг: Posted $2,300 → Вы просили $2,650 → Встречное $2,450 → Финал $2,475 ($3.02/mile). Заработали $175 = 7.6% прибавка!

🎯 РЕАЛЬНОСТЬ: Reefer loads платят БОЛЬШЕ чем dry van ($2.75-3.20/mile vs $2.30-2.60/mile). Frozen = highest rates в reefer category. Ваш профессионализм + GPS monitoring = 6-8 loads weekly ($14,850-19,800/неделю = $59,400-79,200/месяц потенциал)!`
                }
            }
        ],
        reject1: [
            {},
            {
                brokerResponse: "I need professional reefer carrier with operational equipment. Thanks.",
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
                    feedback: "❌ ОТКАЗ: НЕТ REEFER CAPABILITY\n\n✅ ЧТО НУЖНО БЫЛО:\n- Подтвердить что у вас REEFER truck (не dry van!)\n- Reefer unit operational и pre-cooled\n- Знать когда last serviced\n- GPS temp monitoring installed\n\n🎯 ПРИМЕНЕНИЕ: Frozen freight = specialized equipment. Брокер ОБЯЗАН проверить reefer capability перед booking. Без operational reefer unit - нет груза!"
                }
            }
        ],
        reject2: [
            {},
            {
                brokerResponse: "I need carrier who can handle temperature-sensitive freight properly. Thanks.",
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
                    feedback: "❌ ОТКАЗ: НЕ МОЖЕТ HANDLE TEMP-SENSITIVE\n\n✅ ЧТО НУЖНО БЫЛО:\n- Показать опыт с frozen freight\n- Подтвердить GPS temp monitoring\n- Знать procedures (door openings, fuel stops)\n- Уверенность в temp control\n\n🎯 ПРИМЕНЕНИЕ: Frozen = zero tolerance. Temp rises above threshold = product loss = $44K claim. Брокер не рискует с неопытным carrier!"
                }
            }
        ],
        reject3: [
            {},
            {
                brokerResponse: "I need carrier with GPS temp monitoring and proper insurance. Thanks.",
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
                    feedback: "❌ ОТКАЗ: НЕТ GPS MONITORING ИЛИ СТРАХОВКИ\n\n✅ ЧТО НУЖНО БЫЛО:\n- GPS temp monitoring (SkyBitz, PeopleNet, etc.)\n- $100K+ cargo insurance with temp failure coverage\n- 24/7 dispatch для monitoring\n- Emergency procedures\n\n🎯 ПРИМЕНЕНИЕ: Frozen freight = high liability. Без GPS monitoring брокер не может track temp. Без temp failure coverage в insurance = огромный risk!"
                }
            }
        ],
        reject4: [
            {},
            {
                brokerResponse: "That rate doesn't work for this lane. Thanks anyway.",
                outcome: {
                    type: "failure",
                    quality: "poor",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "damaged",
                    dialogueTime: "5-6 minutes",
                    questionsAsked: "Good",
                    detailLevel: "high",
                    futureOpportunity: "unlikely",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ\n\n✅ ЧТО НУЖНО БЫЛО:\n- Просить разумно (+10-20% от posted)\n- Быть гибким в переговорах\n- Принять финальное предложение\n- Не ультиматумы\n\n🎯 ПРИМЕНЕНИЕ: Reefer платит больше чем dry van, но есть limits. Posted $2,300 → Просите $2,550-2,650 → Финал обычно $2,450-2,500. Это ХОРОШО для reefer!"
                }
            }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario6);
    console.log('✅ Scenario 6 (Reefer Frozen Food LA-Denver) added to allScenarios');
} else {
    console.warn('⚠️ allScenarios array not found - scenario6 created but not added');
}
