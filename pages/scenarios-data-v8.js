// СИМУЛЬ - Dialogue #8 - Reefer Dairy (NEW SYSTEM V3.0)
// Phoenix → Portland, 1,180 miles, Temperature-sensitive
// Posted: $3,200 ($2.71/mile), Target: $3,500-3,600 ($2.97-3.05/mile)

console.log('🔵 Loading scenarios-data-v8.js...');

const scenario8 = {
    id: 8,
    route: "Phoenix AZ → Portland OR",
    distance: 1180,
    equipment: "Reefer (53ft refrigerated)",
    cargo: "Dairy products (milk, cheese, yogurt)",
    weight: "43,000 lbs",
    deadline: "Pickup tomorrow 4 AM - 6 AM, Delivery in 2 days",
    brokerStyle: "Professional dairy broker",
    difficulty: "medium",
    initialMessage: "Good morning! This is James Rodriguez from DairyFreight Solutions.\nI saw your load posting for Phoenix to Portland dairy products.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Sarah from FreshDairy Brokers.\nYes, available.\nWhat's your MC?", dispatcherPrompt: "💎 Брокер проверяет компанию. Представьтесь: MC, компания, флот (reefer trucks), специализация (dairy/temp-controlled). Укажите где reefer, unit status. Dairy = специализация!", suggestions: [
                    { text: "Good morning Sarah! DairyFreight Solutions, MC 445566. We're a 22-truck fleet specializing in dairy and temp-controlled freight. 12 reefer units. Truck's in Phoenix at dairy distribution center, empty. Reefer unit operational, pre-cooled to 36°F. Ready for 4 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 22 trucks (12 reefers), специализация dairy, местоположение (dairy DC), reefer operational, pre-cooled 36°F!", path: "master" },
                    { text: "Good morning! MC 445566, DairyFreight Solutions. We specialize in dairy freight. 12 reefer trucks. Truck in Phoenix, reefer working, pre-cooled. Ready 4 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, специализация, reefers, operational, готовность.", path: "master" },
                    { text: "MC 445566, DairyFreight Solutions. We have reefer trucks. Truck in Phoenix.", quality: "normal", analytics: "⚪ Нормально. Базовая информация.", path: "master" },
                    { text: "MC 445566... truck in Phoenix area... reefer should work...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в reefer - критично для dairy!", path: "master" },
                    { text: "Why so many questions?", quality: "aggressive", analytics: "🔴 Агрессивно! Dairy требует проверки!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал! Не представился!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your reefer? Is it pre-cooled to 36-38°F for dairy?", dispatcherPrompt: "💎 Местоположение и temp для dairy. Дайте адрес (dairy facility), reefer status (operational, last service), pre-cooled (36-38°F), готовность. Dairy temp = критично!", suggestions: [
                    { text: "Truck's at Shamrock Foods dairy facility in Phoenix. Empty since yesterday. Reefer unit operational, last serviced 3 weeks ago. Pre-cooled to 36°F, perfect for dairy. Driver can be there by 4 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Конкретный адрес (Shamrock Foods), reefer operational, last service, pre-cooled 36°F, готовность!", path: "master" },
                    { text: "At dairy facility in Phoenix. Empty. Reefer working, pre-cooled to 36°F. Ready 4 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, reefer, temp, готовность.", path: "master" },
                    { text: "In Phoenix, near dairy facility. Reefer working. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально. Общее местоположение.", path: "master" },
                    { text: "Somewhere in Phoenix... reefer should be cold...", quality: "weak", analytics: "⚠️ Слабо. Неточно, неуверенность!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Reefer not working...", quality: "fail", analytics: "❌ Провал! Reefer не работает!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 1,180 miles Phoenix to Portland. Dairy products - milk, cheese, yogurt. 43K lbs. Must maintain 36-38°F constant. Pickup tomorrow 4-6 AM, delivery in 2 days. Can you handle dairy?", dispatcherPrompt: "💎 Детали dairy груза. Подтвердите: 1,180 mi, temp 36-38°F constant, pickup 4-6 AM, delivery 2 days. ETA. Спросите: temp monitoring, door opening limits, fuel stop procedures. Dairy = strict!", suggestions: [
                    { text: "Perfect! 1,180 miles in 2 days maintaining 36-38°F constant. We have GPS temp monitoring, send logs every 6 hours. Driver experienced with dairy - knows to minimize door openings, fuel stops max 20 minutes. Can pickup at 4 AM, deliver by end of day 2. Any specific temp monitoring requirements?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение temp, GPS monitoring, logs, опыт dairy, door/fuel protocols, ETA, вопрос!", path: "master" },
                    { text: "Yes, we handle dairy regularly. 1,180 miles in 2 days, maintaining 36-38°F. GPS temp monitoring. Driver experienced. Any requirements?", quality: "good", analytics: "✔️ Хорошо! Опыт dairy, temp, GPS, вопрос.", path: "master" },
                    { text: "We can do it. Will maintain 36-38°F. Driver on time.", quality: "normal", analytics: "⚪ Нормально. Базовое подтверждение.", path: "master" },
                    { text: "I think we can keep it cold...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в temp control!", path: "master" },
                    { text: "It's just dairy. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение.", path: "reject2" },
                    { text: "Driver won't be ready until 6 AM...", quality: "fail", analytics: "❌ Провал! Не может забрать рано!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Good! Reefer must maintain 36-38°F constant. GPS temp monitoring required - send logs every 6 hours. Minimize door openings. Fuel stops max 30 minutes. Call if temp rises above 40°F.", dispatcherPrompt: "💎 СТРОГИЕ requirements для dairy. Подтвердите: GPS monitoring (система), logs (как часто), driver знает procedures (doors, fuel, emergency). Dairy = zero tolerance!", suggestions: [
                    { text: "Perfect! We have Omnitracs GPS temp monitoring with real-time alerts. I'll send logs every 6 hours. Driver trained on dairy protocols: door openings only at pickup/delivery, fuel stops under 20 minutes, emergency contact if temp rises. 24/7 dispatch monitoring. Ready!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Система (Omnitracs), real-time, logs, training, protocols, 24/7 dispatch!", path: "master" },
                    { text: "Yes, GPS temp monitoring. Will send logs every 6 hours. Driver knows dairy procedures - minimal doors, quick fuel, call if temp rises.", quality: "good", analytics: "✔️ Хорошо! GPS, logs, procedures.", path: "master" },
                    { text: "We have GPS monitoring. Driver will follow procedures.", quality: "normal", analytics: "⚪ Нормально. GPS есть.", path: "master" },
                    { text: "I think we have GPS...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Too many rules!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "No GPS monitoring...", quality: "fail", analytics: "❌ Провал! Нет GPS!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Excellent! Insurance current? We need $100K cargo coverage for dairy.", dispatcherPrompt: "💎 Страховка для dairy. Назовите: сумму ($100K+), компанию, срок, temp failure coverage. Предложите certificate. Dairy = high value!", suggestions: [
                    { text: "Yes, $100K cargo insurance through Northland. Certificate current, expires August 2027. Coverage includes temperature failure claims for dairy. I can email certificate now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма, компания, срок, temp failure coverage, готовность!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Northland. Includes temp failure. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо! Сумма, компания, coverage.", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально. Сумма есть.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал! Недостаточно!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're well-equipped for dairy. Let's talk rate. What do you need for 1,180 miles?", dispatcherPrompt: "💎 ТОРГ! Posted $3,200 ($2.71/mile) - просите $3,500-3,600 ($2.97-3.05/mile). Dairy reefer платит premium! Обоснуйте: GPS, temp control, experienced, protocols!", suggestions: [
                    { text: "For 1,180 miles with dairy, I'm looking at $3,600. That's $3.05/mile, fair for temp-controlled dairy with GPS monitoring, experienced driver, strict protocols. Zero temp failures on dairy.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $3,600 - это $400 БОЛЬШЕ posted! Обоснование полное!", path: "master" },
                    { text: "$3,500 for this load. That's $2.97/mile for dairy with GPS monitoring.", quality: "good", analytics: "✔️ Хорошо! Просит $3,500 - $300 больше!", path: "master" },
                    { text: "I'm looking at $3,400 for 1,180 miles dairy.", quality: "normal", analytics: "⚪ Нормально. $3,400 - только $200 больше.", path: "master" },
                    { text: "Can you do $3,300?", quality: "weak", analytics: "⚠️ Слабо! Только $100 больше!", path: "master" },
                    { text: "I need $4,000 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $4,000 = $3.39/mile - нереально!", path: "reject4" },
                    { text: "I'll take $3,200!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $3,400. That's $2.88/mile.", dispatcherPrompt: "💎 Встречное $3,400 (вы $3,600, posted $3,200). Варианты: 1) $3,475-3,500 (посередине), 2) $3,400 + detention $100/hr, 3) $3,400. НЕ стойте на $3,600!", suggestions: [
                    { text: "Can we meet at $3,500? Fair for both - middle ground. GPS monitoring, zero dairy temp failures, experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $3,500 - посередине! Обоснование!", path: "master" },
                    { text: "$3,400 works if detention is $100/hr after 2 hours for dairy.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$3,400 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально. Принимает.", path: "master" },
                    { text: "Okay, $3,400 I guess...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность.", path: "master" },
                    { text: "$3,500 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно! Ультиматум.", path: "reject4" },
                    { text: "No, I need $3,600!", quality: "fail", analytics: "❌ Провал! Не гибкий!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$3,450 final. That's $2.92/mile. Detention $100/hr after 2 hours. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $3,450 (вы $3,600, posted $3,200). ЗАРАБОТАЛИ $250 БОЛЬШЕ! Detention $100/hr! ПОСЛЕДНИЙ шанс - ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$3,450 works! Deal! Which factoring? I'll send temp monitoring setup details too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $250 больше! 'Deal!', factoring, temp monitoring!", path: "master" },
                    { text: "Perfect! $3,450 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $250!", path: "master" },
                    { text: "$3,450 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально. Заработал $250.", path: "master" },
                    { text: "Okay, $3,450...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $125/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $3,500?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $3,450 all-in, detention $100/hr. Which factoring? Send temp monitoring contact too.", dispatcherPrompt: "💎 Финализация! Дайте: factoring (название + email), temp monitoring contact (dispatch 24/7). Предложите insurance!", suggestions: [
                    { text: "RTS Financial, factoring@rtsfin.com. Temp monitoring: dispatch 24/7 at (555) 234-5678, alerts@dairyfreight.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, temp contact (phone + email), insurance, вопрос!", path: "master" },
                    { text: "Triumph Factoring, factoring@triumphbc.com. Dispatch 24/7: (555) 234-5678 for temp alerts. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо! Factoring, dispatch, insurance.", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com. Dispatch: (555) 234-5678.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@rtsfin.com. Sign and return. After pickup, send BOL, photos, and first temp log. If this goes well, I have 7-9 dairy loads weekly Phoenix-Northwest. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 7-9 dairy loads WEEKLY! Это $24,150-31,050/неделю! Поблагодарите, подтвердите все, интерес к weekly loads!", suggestions: [
                    { text: "Thank you Sarah! We'll sign rate con immediately. Driver will send BOL, photos, and temp logs starting at pickup. We're very interested in 7-9 weekly dairy loads - our specialty! Looking forward to partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия, энтузиазм weekly loads!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all documentation. Very interested in more dairy loads!", quality: "good", analytics: "✔️ Хорошо! Благодарность, интерес.", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What temp should I maintain?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил temp!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Keep that dairy cold!", outcome: { type: "success", quality: "excellent", rate: "$3,450", ratePerMile: "$2.92/mile", relationship: "strengthened", dialogueTime: "6-7 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "7-9 dairy loads weekly Phoenix-Northwest ($24,150-31,050/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $250 больше ($3,450 vs $3,200 posted).\n\n💡 УРОК: Dairy требует GPS temp monitoring 36-38°F, strict procedures. Торг: Posted $3,200 → Вы $3,600 → Встречное $3,400 → Финал $3,450 ($2.92/mile). Заработали $250 = 7.8% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Dairy reefer loads платят premium ($2.75-3.20/mile). Ваш профессионализм = 7-9 loads weekly ($24,150-31,050/неделю = $96,600-124,200/месяц потенциал)!` } }
        ],
        reject1: [{}, { brokerResponse: "I need professional reefer carrier. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ REEFER CAPABILITY" } }],
        reject2: [{}, { brokerResponse: "I need carrier who can handle dairy properly. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕ МОЖЕТ HANDLE DAIRY" } }],
        reject3: [{}, { brokerResponse: "I need carrier with GPS monitoring and insurance. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ GPS/СТРАХОВКИ" } }],
        reject4: [{}, { brokerResponse: "That rate doesn't work. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "5-6 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ" } }]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario8);
    console.log('✅ Scenario 8 (Reefer Dairy Phoenix-Portland) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
