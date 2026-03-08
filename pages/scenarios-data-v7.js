// СИМУЛЬ - Dialogue #7 - Dry Van Electronics (NEW SYSTEM V3.0)
// Seattle → Miami, 2,995 miles, High-value cargo
// Posted: $7,200 ($2.41/mile), Target: $7,800-8,100 ($2.61-2.71/mile)

console.log('🔵 Loading scenarios-data-v7.js...');

const scenario7 = {
    id: 7,
    route: "Seattle WA → Miami FL",
    distance: 2995,
    equipment: "Dry Van (53ft)",
    cargo: "Electronics (laptops, tablets, phones)",
    weight: "35,000 lbs",
    deadline: "Pickup tomorrow 10 AM - 2 PM, Delivery in 5 days",
    brokerStyle: "Professional high-value broker",
    difficulty: "hard",

    initialMessage: "Good afternoon! This is Robert Johnson from TechFreight Logistics.\nI saw your load posting for Seattle to Miami electronics.\nIs this load still available?",

    paths: {
        master: [
            {
                brokerQuestion: "Good afternoon! This is Jennifer from HighValue Brokers.\nYes, available.\nWhat's your MC?", dispatcherPrompt: "💎 Брокер проверяет компанию. Представьтесь ПОЛНОСТЬЮ: MC, компания, флот, специализация (high-value cargo). Укажите где truck, GPS tracking. High-value = строгие требования!", suggestions: [
                    { text: "Good afternoon Jennifer! TechFreight Logistics, MC 334455. We're a 40-truck fleet specializing in high-value electronics with GPS tracking and $100K+ insurance. Truck's in Seattle at tech distribution center, empty. Ready tomorrow 10 AM. Where's pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 40 trucks, специализация electronics, GPS tracking, insurance, местоположение, готовность!", path: "master" },
                    { text: "Good afternoon! MC 334455, TechFreight Logistics. We handle electronics regularly. Truck in Seattle, ready tomorrow.", quality: "good", analytics: "✔️ Хорошо! MC, компания, опыт с electronics.", path: "master" },
                    { text: "MC 334455, TechFreight Logistics. Truck in Seattle.", quality: "normal", analytics: "⚪ Нормально. Базовая информация.", path: "master" },
                    { text: "MC 334455... truck somewhere in Seattle...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность, неточно.", path: "master" },
                    { text: "Why MC? Rate!", quality: "aggressive", analytics: "🔴 Агрессивно! Грубость.", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал! Не представился.", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your truck? Do you have GPS tracking for high-value?", dispatcherPrompt: "💎 Брокер хочет местоположение и GPS для high-value. Дайте ТОЧНЫЙ адрес, статус, подтвердите GPS tracking real-time. High-value = обязательно GPS!", suggestions: [
                    { text: "Truck's at Amazon distribution center in Kent, WA. Empty since yesterday. GPS tracking installed - real-time updates via SkyBitz. Driver experienced with high-value cargo, clean background check. Ready tomorrow 10 AM.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Точный адрес (Amazon Kent), GPS (SkyBitz), real-time, опыт driver, background check!", path: "master" },
                    { text: "In Kent, WA. Empty. GPS tracking installed. Ready tomorrow.", quality: "good", analytics: "✔️ Хорошо! Местоположение, GPS.", path: "master" },
                    { text: "Seattle area, empty. GPS yes.", quality: "normal", analytics: "⚪ Нормально. Общее местоположение.", path: "master" },
                    { text: "Somewhere in Seattle... GPS should work...", quality: "weak", analytics: "⚠️ Слабо. Неточно, неуверенность в GPS!", path: "master" },
                    { text: "Just tell me pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "No GPS...", quality: "fail", analytics: "❌ Провал! Нет GPS для high-value!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 2,995 miles Seattle to Miami. High-value electronics - laptops, tablets, phones. 35K lbs. Pickup tomorrow 10 AM - 2 PM, delivery in 5 days. Can you handle high-value?", dispatcherPrompt: "💎 Брокер дал детали high-value груза. Подтвердите: 2,995 mi, 5 days (600 mi/day), high-value handling. Дайте ETA. Спросите: security requirements, team driver option, special handling. High-value = критичные вопросы!", suggestions: [
                    { text: "Perfect! 2,995 miles in 5 days is comfortable - about 600 miles/day. We handle high-value electronics regularly with GPS tracking and secure parking. Driver can pickup at noon. Any special security requirements? Team driver available if needed for faster delivery.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Расчет миль/день, опыт high-value, GPS, secure parking, ETA, вопросы security, team option!", path: "master" },
                    { text: "Yes, works. Driver there by 1 PM. 5 days is good. Any security requirements?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, вопрос.", path: "master" },
                    { text: "We can do it. Driver on time.", quality: "normal", analytics: "⚪ Нормально. Базовое подтверждение.", path: "master" },
                    { text: "I think we can... it's far...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Yeah, whatever. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение high-value.", path: "reject2" },
                    { text: "Driver won't be ready...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Standard dry van. GPS tracking required. Secure parking only - no truck stops overnight. Driver must have clean background check. Climate control preferred (65-75°F).", dispatcherPrompt: "💎 Брокер назвал requirements для high-value electronics. Подтвердите: GPS tracking (система), secure parking protocol, driver background check, climate control capability. High-value = zero tolerance!", suggestions: [
                    { text: "Perfect! GPS tracking via SkyBitz with real-time alerts. Driver parks only at secure facilities - Flying J secure lots, TA Petro secure parking. Background check current, renewed annually. Trailer has climate control capability 65-75°F. Ready!", quality: "excellent", analytics: "✨ ОТЛИЧНО! GPS система (SkyBitz), конкретные secure parking (Flying J, TA Petro), background check current, climate control!", path: "master" },
                    { text: "Yes, GPS tracking installed. Driver uses secure parking only. Background check current. Climate control available.", quality: "good", analytics: "✔️ Хорошо! GPS, secure parking, background, climate.", path: "master" },
                    { text: "We have GPS. Driver knows secure parking. Background check done.", quality: "normal", analytics: "⚪ Нормально. Есть requirements, но нет деталей.", path: "master" },
                    { text: "I think we have GPS... driver should park safely...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в critical requirements!", path: "master" },
                    { text: "Too many rules! It's just electronics!", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение safety.", path: "reject3" },
                    { text: "We don't have GPS...", quality: "fail", analytics: "❌ Провал! Нет GPS - required!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo coverage minimum for electronics.", dispatcherPrompt: "💎 Брокер проверяет страховку для high-value. Назовите: сумму ($100K+), компанию, срок, покрывает ли theft/damage. Предложите отправить certificate. High-value = высокая страховка!", suggestions: [
                    { text: "Yes, $150K cargo insurance through Progressive Commercial. Certificate current, expires June 2027. Coverage includes theft and damage for electronics. I can email certificate right now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! $150K (выше minimum), компания, срок, theft/damage coverage, готовность отправить!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Progressive. Includes theft/damage. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо! Сумма, компания, coverage, готовность.", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально. Сумма, но нет деталей.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал! Недостаточно!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're well-equipped for high-value. Let's talk rate. What do you need for 2,995 miles?", dispatcherPrompt: "💎 ТОРГ! Posted $7,200 ($2.41/mile) - просите $7,800-8,100 ($2.61-2.71/mile). High-value electronics платят premium! Обоснуйте: GPS tracking, secure parking, climate control, experienced driver. ЧЕМ БОЛЬШЕ - ТЕМ ЛУЧШЕ!", suggestions: [
                    { text: "For 2,995 miles with high-value electronics, I'm looking at $8,100. That's $2.71/mile, fair for GPS tracking, secure parking only, climate control, and experienced driver with clean background. Zero theft/damage record.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $8,100 - это $900 БОЛЬШЕ posted! Обоснование полное!", path: "master" },
                    { text: "$7,800 for this load. That's $2.60/mile for high-value with GPS and secure parking.", quality: "good", analytics: "✔️ Хорошо! Просит $7,800 - $600 больше!", path: "master" },
                    { text: "I'm looking at $7,600 for 2,995 miles.", quality: "normal", analytics: "⚪ Нормально. $7,600 - только $400 больше.", path: "master" },
                    { text: "Can you do $7,400?", quality: "weak", analytics: "⚠️ Слабо! Только $200 больше!", path: "master" },
                    { text: "I need $9,000 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $9,000 = $3.01/mile - нереально!", path: "reject4" },
                    { text: "I'll take $7,200!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $7,600. That's $2.54/mile.", dispatcherPrompt: "💎 Встречное $7,600 (вы $8,100, posted $7,200). Варианты: 1) $7,800-7,850 (посередине), 2) $7,600 + detention $75/hr, 3) $7,600. НЕ стойте на $8,100!", suggestions: [
                    { text: "Can we meet at $7,850? Fair for both - middle ground. GPS tracking, secure parking, zero incidents record.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $7,850 - посередине! Обоснование!", path: "master" },
                    { text: "$7,600 works if detention is $75/hr after 2 hours.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$7,600 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально. Принимает.", path: "master" },
                    { text: "Okay, $7,600 I guess...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность.", path: "master" },
                    { text: "$7,850 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно! Ультиматум.", path: "reject4" },
                    { text: "No, I need $8,100!", quality: "fail", analytics: "❌ Провал! Не гибкий!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$7,700 final. That's $2.57/mile. Detention $75/hr. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $7,700 (вы $8,100, posted $7,200). ЗАРАБОТАЛИ $500 БОЛЬШЕ! Detention $75/hr! ПОСЛЕДНИЙ шанс - ПРИНИМАЙТЕ! 'Deal!' и factoring!", suggestions: [
                    { text: "$7,700 works! Deal! Which factoring? I'll send GPS tracking setup details too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $500 больше! 'Deal!', factoring, GPS details!", path: "master" },
                    { text: "Perfect! $7,700 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $500!", path: "master" },
                    { text: "$7,700 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально. Заработал $500.", path: "master" },
                    { text: "Okay, $7,700...", quality: "weak", analytics: "⚠️ Слабо. Без энтузиазма.", path: "master" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно! Новые требования!", path: "reject4" },
                    { text: "Can we do $7,800?", quality: "fail", analytics: "❌ ПРОВАЛ! Торгуется после финала!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $7,700 all-in, detention $75/hr. Which factoring? Send GPS tracking contact too.", dispatcherPrompt: "💎 Финализация! Дайте: factoring (название + email), GPS tracking contact (dispatch 24/7). Предложите insurance certificate. Быстро = профессионально!", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. GPS tracking: dispatch 24/7 at (555) 789-0123, gps@techfreight.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, GPS contact (phone + email), insurance, вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Dispatch 24/7: (555) 789-0123 for GPS alerts. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо! Factoring, dispatch, insurance.", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com. Dispatch: (555) 789-0123.", quality: "normal", analytics: "⚪ Нормально. Factoring и phone.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо. Не знает email!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup, send BOL, photos, and GPS tracking link. If this goes well, I have 4-5 electronics loads weekly on various lanes. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 4-5 electronics loads WEEKLY! Это $30,800-38,500/неделю потенциал! Поблагодарите, подтвердите: rate con, BOL/photos/GPS link, интерес к weekly loads. High-value relationships = premium rates!", suggestions: [
                    { text: "Thank you Jennifer! We'll sign rate con immediately. Driver will send BOL, photos, and GPS tracking link at pickup. We're very interested in 4-5 weekly electronics loads - our specialty! Looking forward to partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия, энтузиазм weekly loads, partnership!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all documentation. Very interested in more electronics loads!", quality: "good", analytics: "✔️ Хорошо! Благодарность, подтверждение, интерес.", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально. Вежливо.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо. Короткий ответ.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно. Грубость.", path: "master" },
                    { text: "What was pickup time?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил детали!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Sign and return. Safe travels and keep that cargo secure!", outcome: { type: "success", quality: "excellent", rate: "$7,700", ratePerMile: "$2.57/mile", relationship: "strengthened", dialogueTime: "6-7 minutes", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "4-5 electronics loads weekly ($30,800-38,500/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $500 больше ($7,700 vs $7,200 posted).\n\n💡 УРОК: High-value electronics требуют GPS tracking, secure parking, climate control, background check. Торг: Posted $7,200 → Вы $8,100 → Встречное $7,600 → Финал $7,700 ($2.57/mile). Заработали $500 = 6.9% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Electronics loads платят premium rates ($2.50-2.70/mile) из-за high value и security requirements. Ваш профессионализм = 4-5 loads weekly ($30,800-38,500/неделю = $123,200-154,000/месяц потенциал)!` } }
        ],
        reject1: [{}, { brokerResponse: "I need professional carrier. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕПРОФЕССИОНАЛИЗМ\n\nЧТО НУЖНО: MC, компания, GPS tracking для high-value, точное местоположение." } }],
        reject2: [{}, { brokerResponse: "I need carrier who can meet schedule. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕ МОЖЕТ ЗАБРАТЬ ВОВРЕМЯ" } }],
        reject3: [{}, { brokerResponse: "I need carrier with proper equipment and insurance. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ GPS/СТРАХОВКИ\n\nЧТО НУЖНО: GPS tracking, $100K+ insurance, secure parking protocol." } }],
        reject4: [{}, { brokerResponse: "That rate doesn't work. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "5-6 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ" } }]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario7);
    console.log('✅ Scenario 7 (Dry Van Electronics Seattle-Miami) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
