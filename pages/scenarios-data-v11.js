// СИМУЛЬ - Dialogue #11 - Reefer Produce (NEW SYSTEM V3.0)
// Salinas CA → Boston MA, 2,900 miles
// Posted: $7,500 ($2.59/mile), Target: $8,100-8,300 ($2.79-2.86/mile)

console.log('🔵 Loading scenarios-data-v11.js...');

const scenario11 = {
    id: 11,
    route: "Salinas CA → Boston MA",
    distance: 2900,
    equipment: "Reefer (53ft refrigerated)",
    cargo: "Fresh produce (lettuce, tomatoes, peppers)",
    weight: "42,000 lbs",
    deadline: "Pickup tomorrow 5 AM - 8 AM, Delivery in 5 days",
    brokerStyle: "Professional produce broker",
    difficulty: "hard",
    initialMessage: "Good morning! This is Maria Garcia from FreshProduce Logistics.\nI saw your load posting for Salinas to Boston fresh produce.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Amanda from ProduceFresh Brokers.\nYes, available.\nWhat's your MC?", dispatcherPrompt: "💎 Брокер проверяет компанию. Представьтесь: MC, компания, флот (reefer trucks), специализация (produce/temp-controlled). Produce = специализация!", suggestions: [
                    { text: "Good morning Amanda! FreshProduce Logistics, MC 112233. We're a 25-truck fleet specializing in fresh produce transport. 18 reefer units. Truck's in Salinas at produce distribution center, empty. Reefer unit operational, pre-cooled to 34°F. Ready for 5 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 25 trucks (18 reefers), специализация produce, местоположение (produce DC), reefer operational, pre-cooled 34°F!", path: "master" },
                    { text: "Good morning! MC 112233, FreshProduce Logistics. We specialize in produce. 18 reefer trucks. Truck in Salinas, reefer working, pre-cooled. Ready 5 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, специализация, reefers, operational.", path: "master" },
                    { text: "MC 112233, FreshProduce Logistics. We have reefer trucks. Truck in Salinas.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "MC 112233... truck in Salinas area... reefer should work...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Why so many questions?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your reefer? Is it pre-cooled to 34-36°F for produce?", dispatcherPrompt: "💎 Местоположение и temp для produce. Дайте адрес (produce facility), reefer status, pre-cooled (34-36°F), готовность. Produce temp = критично!", suggestions: [
                    { text: "Truck's at Taylor Farms produce facility in Salinas. Empty since yesterday. Reefer unit operational, last serviced 2 weeks ago. Pre-cooled to 34°F, perfect for fresh produce. Driver can be there by 5 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Адрес (Taylor Farms), reefer operational, last service, pre-cooled 34°F, готовность!", path: "master" },
                    { text: "At produce facility in Salinas. Empty. Reefer working, pre-cooled to 34°F. Ready 5 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, reefer, temp.", path: "master" },
                    { text: "In Salinas, near produce facility. Reefer working. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Somewhere in Salinas... reefer should be cold...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Reefer not working...", quality: "fail", analytics: "❌ Провал!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 2,900 miles Salinas to Boston. Fresh produce - lettuce, tomatoes, peppers. 42K lbs. Must maintain 34-36°F constant. Pickup tomorrow 5-8 AM, delivery in 5 days. Can you handle fresh produce cross-country?", dispatcherPrompt: "💎 Детали produce груза. Подтвердите: 2,900 mi, temp 34-36°F constant, pickup 5-8 AM, delivery 5 days. ETA. Спросите: temp monitoring, door opening limits, fuel stop procedures. Produce = strict!", suggestions: [
                    { text: "Perfect! 2,900 miles in 5 days maintaining 34-36°F constant. We have GPS temp monitoring, send logs every 6 hours. Driver experienced with fresh produce - knows to minimize door openings, fuel stops max 20 minutes. Can pickup at 5 AM, deliver by end of day 5. Any specific temp monitoring requirements for produce?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение temp, GPS monitoring, logs, опыт produce, door/fuel protocols, ETA, вопрос!", path: "master" },
                    { text: "Yes, we handle produce regularly. 2,900 miles in 5 days, maintaining 34-36°F. GPS temp monitoring. Driver experienced. Any requirements?", quality: "good", analytics: "✔️ Хорошо! Опыт produce, temp, GPS.", path: "master" },
                    { text: "We can do it. Will maintain 34-36°F. Driver on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we can keep it cold...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "It's just produce. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject2" },
                    { text: "Driver won't be ready until 7 AM...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Good! Reefer must maintain 34-36°F constant. GPS temp monitoring required - send logs every 6 hours. Minimize door openings. Fuel stops max 30 minutes. Call if temp rises above 38°F. This is fresh produce - very sensitive!", dispatcherPrompt: "💎 СТРОГИЕ requirements для produce. Подтвердите: GPS monitoring (система), logs, driver знает procedures. Produce = zero tolerance!", suggestions: [
                    { text: "Perfect! We have PeopleNet GPS temp monitoring with real-time alerts. I'll send logs every 6 hours. Driver trained on produce protocols: door openings only at pickup/delivery, fuel stops under 20 minutes, emergency contact if temp rises. 24/7 dispatch monitoring. Ready!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Система (PeopleNet), real-time, logs, training, protocols, 24/7 dispatch!", path: "master" },
                    { text: "Yes, GPS temp monitoring. Will send logs every 6 hours. Driver knows produce procedures - minimal doors, quick fuel, call if temp rises.", quality: "good", analytics: "✔️ Хорошо! GPS, logs, procedures.", path: "master" },
                    { text: "We have GPS monitoring. Driver will follow procedures.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have GPS...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Too many rules!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "No GPS monitoring...", quality: "fail", analytics: "❌ Провал!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Excellent! Insurance current? We need $100K cargo coverage for produce.", dispatcherPrompt: "💎 Страховка для produce. Назовите: сумму ($100K+), компанию, срок, temp failure coverage. Produce = high value!", suggestions: [
                    { text: "Yes, $100K cargo insurance through Northland. Certificate current, expires September 2027. Coverage includes temperature failure claims for produce. I can email certificate now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма, компания, срок, temp failure coverage, готовность!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Northland. Includes temp failure. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're well-equipped for produce. Let's talk rate. What do you need for 2,900 miles cross-country?", dispatcherPrompt: "💎 ТОРГ! Posted $7,500 ($2.59/mile) - просите $8,100-8,300 ($2.79-2.86/mile). Produce reefer платит premium! Обоснуйте: GPS, temp control, experienced, cross-country!", suggestions: [
                    { text: "For 2,900 miles cross-country with fresh produce, I'm looking at $8,300. That's $2.86/mile, fair for temp-controlled produce with GPS monitoring, experienced driver, strict protocols. Zero temp failures on produce.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $8,300 - это $800 БОЛЬШЕ posted! Обоснование полное!", path: "master" },
                    { text: "$8,100 for this load. That's $2.79/mile for produce with GPS monitoring.", quality: "good", analytics: "✔️ Хорошо! Просит $8,100 - $600 больше!", path: "master" },
                    { text: "I'm looking at $7,900 for 2,900 miles produce.", quality: "normal", analytics: "⚪ Нормально. $7,900 - только $400 больше.", path: "master" },
                    { text: "Can you do $7,700?", quality: "weak", analytics: "⚠️ Слабо! Только $200 больше!", path: "master" },
                    { text: "I need $9,000 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $9,000 = $3.10/mile - нереально!", path: "reject4" },
                    { text: "I'll take $7,500!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $7,900. That's $2.72/mile.", dispatcherPrompt: "💎 Встречное $7,900 (вы $8,300, posted $7,500). Варианты: 1) $8,050-8,100 (посередине), 2) $7,900 + detention $100/hr, 3) $7,900!", suggestions: [
                    { text: "Can we meet at $8,100? Fair for both - middle ground. GPS monitoring, zero produce temp failures, experienced cross-country driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $8,100 - посередине! Обоснование!", path: "master" },
                    { text: "$7,900 works if detention is $100/hr after 2 hours for produce.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$7,900 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $7,900 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$8,100 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No, I need $8,300!", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$8,000 final. That's $2.76/mile. Detention $100/hr after 2 hours. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $8,000 (вы $8,300, posted $7,500). ЗАРАБОТАЛИ $500 БОЛЬШЕ! Detention $100/hr! ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$8,000 works! Deal! Which factoring? I'll send temp monitoring setup details too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $500 больше! 'Deal!', factoring, temp monitoring!", path: "master" },
                    { text: "Perfect! $8,000 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $500!", path: "master" },
                    { text: "$8,000 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $8,000...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $125/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $8,100?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $8,000 all-in, detention $100/hr. Which factoring? Send temp monitoring contact too.", dispatcherPrompt: "💎 Финализация! Дайте: factoring, temp monitoring contact (dispatch 24/7). Предложите insurance!", suggestions: [
                    { text: "OTR Capital, factoring@otrcapital.com. Temp monitoring: dispatch 24/7 at (555) 345-6789, alerts@freshproduce.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, temp contact (phone + email), insurance, вопрос!", path: "master" },
                    { text: "Triumph Factoring, factoring@triumphbc.com. Dispatch 24/7: (555) 345-6789 for temp alerts. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Dispatch: (555) 345-6789.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@otrcapital.com. Sign and return. After pickup, send BOL, photos, and first temp log. If this goes well, I have 4-5 produce loads weekly Salinas-East Coast. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 4-5 produce loads WEEKLY! Это $32,000-40,000/неделю! Поблагодарите, подтвердите все, интерес к weekly loads!", suggestions: [
                    { text: "Thank you Amanda! We'll sign rate con immediately. Driver will send BOL, photos, and temp logs starting at pickup. We're very interested in 4-5 weekly produce loads Salinas-East Coast - our specialty! Looking forward to partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия, энтузиазм weekly loads!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all documentation. Very interested in more produce loads!", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What temp should I maintain?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил temp!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Keep that produce fresh!", outcome: { type: "success", quality: "excellent", rate: "$8,000", ratePerMile: "$2.76/mile", relationship: "strengthened", dialogueTime: "7-8 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "4-5 produce loads weekly Salinas-East Coast ($32,000-40,000/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $500 больше ($8,000 vs $7,500 posted).\n\n💡 УРОК: Fresh produce требует GPS temp monitoring 34-36°F, strict procedures, cross-country experience. Торг: Posted $7,500 → Вы $8,300 → Встречное $7,900 → Финал $8,000 ($2.76/mile). Заработали $500 = 6.7% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Produce reefer loads платят premium ($2.75-3.20/mile) для cross-country. Ваш профессионализм = 4-5 loads weekly ($32,000-40,000/неделю = $128,000-160,000/месяц потенциал)!` } }
        ],
        reject1: [{}, { brokerResponse: "I need professional reefer carrier. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ REEFER CAPABILITY" } }],
        reject2: [{}, { brokerResponse: "I need carrier who can handle produce properly. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕ МОЖЕТ HANDLE PRODUCE" } }],
        reject3: [{}, { brokerResponse: "I need carrier with GPS monitoring and insurance. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ GPS/СТРАХОВКИ" } }],
        reject4: [{}, { brokerResponse: "That rate doesn't work. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "6-7 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ" } }]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario11);
    console.log('✅ Scenario 11 (Reefer Produce Salinas-Boston) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
