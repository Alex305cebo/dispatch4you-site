// СИМУЛЬ - Dialogue #1 - Reefer Produce (NEW SYSTEM V3.0)
// Los Angeles CA → New York NY, 2,800 miles, Reefer
// Posted: $7,500 ($2.68/mile), Target: $8,200-8,500 ($2.93-3.04/mile)

console.log('🔵 Loading scenarios-data-v1.js...');

const scenario1 = {
    id: 1,
    route: "Los Angeles CA → New York NY",
    distance: 2800,
    equipment: "53' Reefer (temperature controlled)",
    cargo: "Fresh produce (avocados, berries)",
    weight: "42,000 lbs",
    deadline: "Pickup tomorrow 6 AM, Delivery in 3 days (72 hours)",
    brokerStyle: "Experienced produce broker - strict on temperature",
    difficulty: "hard",
    initialMessage: "Good morning! This is Amanda Brooks from ProduceLine Logistics.\nI'm calling about your posted reefer load Los Angeles to New York with fresh produce.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning Amanda! This is Carlos Martinez from CrossCountry Reefer Transport.\nYes, we have reefer available.\nWhat's your company, and where exactly is the pickup?",
                dispatcherPrompt: "💎 Диспетчер отвечает на груз брокера! Представьтесь: MC, компания, местоположение reefer (точный адрес), статус (empty/loaded), когда освободился. Спросите детали груза. Produce = time-sensitive!",
                suggestions: [
                    { text: "Good morning Amanda! CrossCountry Reefer Transport, MC 887766. Yes, we have reefer available - it's at Sysco distribution center in Los Angeles, empty since yesterday evening. Reefer unit operational, last serviced 2 weeks ago. Driver ready for 6 AM pickup tomorrow. What's the cargo and exact pickup address?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Приветствие по имени, MC, компания, точное местоположение (Sysco DC LA), статус (empty yesterday), reefer operational, last service, готовность, вопрос о грузе!", path: "master" },
                    { text: "Good morning! MC 887766, CrossCountry Reefer Transport. Reefer in Los Angeles at distribution center, empty. Ready for 6 AM pickup. What's the cargo?", quality: "good", analytics: "✔️ Хорошо! MC, компания, местоположение, готовность, вопрос.", path: "master" },
                    { text: "MC 887766. Reefer in LA area, empty. What's the load?", quality: "normal", analytics: "⚪ Нормально. Минимум информации.", path: "master" },
                    { text: "MC 887766... somewhere in LA... what's the cargo?", quality: "weak", analytics: "⚠️ Слабо. Неточное местоположение!", path: "master" },
                    { text: "Just send pickup address!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Reefer available. Details?", quality: "fail", analytics: "❌ Провал! Не дал MC и местоположение!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! ProduceLine Logistics, we specialize in produce transport. Your MC verified.\n\nNow I need to verify your reefer capability. Is your reefer unit operational? What temperature range can you maintain? This is fresh produce - needs constant 34-36°F.",
                dispatcherPrompt: "💎 Брокер проверяет reefer capability для produce! Подтвердите: unit operational, температурный диапазон (34-36°F), когда last serviced, fuel level. Produce = strict temperature!",
                suggestions: [
                    { text: "Yes, reefer unit fully operational. Can maintain 34-36°F constant temperature, no problem. Unit was serviced 2 weeks ago - compressor, coolant, all systems checked. Fuel tank full, can run continuous for 72+ hours. We haul produce regularly, understand temperature requirements.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Operational, 34-36°F confirmed, last service (2 weeks), fuel (72+ hours), produce experience!", path: "master" },
                    { text: "Yes, reefer operational. Can maintain 34-36°F. Serviced recently, fuel full. We haul produce.", quality: "good", analytics: "✔️ Хорошо! Operational, temp, service, fuel, experience.", path: "master" },
                    { text: "Yes, reefer works. Can do 34-36°F.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I think it works... should be fine...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в reefer!", path: "master" },
                    { text: "It's just a reefer! What's the rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение produce requirements!", path: "reject2" },
                    { text: "Reefer broken but we can fix...", quality: "fail", analytics: "❌ Провал! Reefer не operational!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Perfect! Your reefer qualifications look solid. Here are the load details:\n\n2,800 miles Los Angeles to New York. Fresh produce - 42,000 lbs of avocados and berries. [IMPORTANT]Pickup tomorrow 6 AM at produce warehouse in LA, delivery required in 72 hours (3 days) to Hunts Point Market NYC.[/IMPORTANT]\n\n[IMPORTANT]This is time-sensitive perishable cargo. Temperature must stay 34-36°F the entire trip.[/IMPORTANT] Do you have temperature monitoring system? Can your driver send temperature readings every 4-6 hours?",
                dispatcherPrompt: "💎 Детали produce груза. Подтвердите: 2,800 mi, 42K lbs, 72 hours delivery. Спросите: temperature monitoring (GPS tracking, temp sensors), reporting frequency, emergency protocol. Produce = temperature monitoring!",
                suggestions: [
                    { text: "Perfect! 2,800 miles in 72 hours with fresh produce - no problem. Yes, we have GPS tracking with built-in temperature sensors. Driver will send temperature readings every 4 hours via mobile app - you'll get real-time alerts if temp goes outside 34-36°F range. Driver experienced with produce, knows emergency protocols if any issues. Can pickup at 6 AM sharp. What's the exact warehouse address?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, GPS + temp sensors, 4-hour readings, real-time alerts, emergency protocols, produce experience, вопрос!", path: "master" },
                    { text: "Yes, 2,800 miles in 72 hours. We have temperature monitoring system. Driver will send readings every 4-6 hours. Experienced with produce. Ready 6 AM. Address?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, monitoring, readings, experience, вопрос.", path: "master" },
                    { text: "We can do it. Driver will check temperature. Ready 6 AM.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I think driver can check temp...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в monitoring!", path: "master" },
                    { text: "72 hours is tight! What's the rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Сомнение в deadline!", path: "reject3" },
                    { text: "No monitoring system...", quality: "fail", analytics: "❌ Провал! Нет temp monitoring!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Excellent! Temperature monitoring is critical for produce. Now, do you have $100K cargo insurance minimum? Fresh produce claims can be expensive if temperature fails. I'll need certificate before booking.",
                dispatcherPrompt: "💎 Страховка для produce. Назовите: сумму ($100K+), компанию, срок, покрывает ли perishable/produce. Предложите certificate. Produce = high insurance!",
                suggestions: [
                    { text: "Yes, $250K cargo insurance through Northland specialized in perishable goods. Certificate current, expires March 2027. Coverage includes produce and temperature-related claims. I can email certificate right now - what's your email? We understand produce is high-risk, that's why we carry extra coverage.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $250K (больше минимума), компания (Northland perishable), срок, produce coverage, temp claims, готовность, понимание риска!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current. Covers perishable goods. I'll send certificate now.", quality: "good", analytics: "✔️ Хорошо! $100K, perishable coverage, готовность.", path: "master" },
                    { text: "Yes, $100K insurance. Certificate available.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I think we have enough insurance...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Insurance is fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Отказ обсуждать insurance!", path: "reject4" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал! Недостаточно для produce!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're fully qualified for produce transport. Let's discuss rate. What do you need for 2,800 miles with fresh produce in 72 hours?",
                dispatcherPrompt: "💎 ТОРГ! Posted $7,500 ($2.68/mile) - просите $8,200-8,500 ($2.93-3.04/mile). Produce платит premium! Обоснуйте: reefer operational, 34-36°F, temp monitoring, $250K insurance, 72-hour deadline!",
                suggestions: [
                    { text: "For 2,800 miles with fresh produce in 72 hours, I'm looking at $8,500. That's $3.04/mile, which is fair for reefer with temperature monitoring, $250K insurance, tight 72-hour deadline, and produce experience. This is time-sensitive perishable cargo requiring constant attention.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $8,500 - это $1,000 БОЛЬШЕ posted! Полное обоснование: monitoring, insurance, deadline, produce!", path: "master" },
                    { text: "$8,200 for this load. That's $2.93/mile for reefer produce with 72-hour delivery and temperature monitoring.", quality: "good", analytics: "✔️ Хорошо! Просит $8,200 - $700 больше!", path: "master" },
                    { text: "I'm looking at $7,900 for 2,800 miles produce.", quality: "normal", analytics: "⚪ Нормально. $7,900 - только $400 больше.", path: "master" },
                    { text: "Can you do $7,700?", quality: "weak", analytics: "⚠️ Слабо! Только $200 больше для produce!", path: "master" },
                    { text: "I need $9,500 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $9,500 = $3.39/mile - нереально!", path: "reject5" },
                    { text: "I'll take $7,500!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга для produce!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $7,900. That's $2.82/mile.",
                dispatcherPrompt: "💎 Встречное $7,900 (вы $8,500, posted $7,500). Варианты: 1) $8,100-8,200 (посередине), 2) $7,900 + fuel surcharge, 3) $7,900. Produce = гибкость!",
                suggestions: [
                    { text: "Can we meet at $8,200? Fair middle ground. Reefer with temp monitoring, $250K insurance, 72-hour tight deadline, produce experience.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $8,200 - посередине! Обоснование!", path: "master" },
                    { text: "$7,900 works if we add $150 fuel surcharge for 2,800 miles.", quality: "good", analytics: "✔️ Хорошо! Принимает + fuel surcharge!", path: "master" },
                    { text: "$7,900 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $7,900 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$8,200 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject5" },
                    { text: "No, I need $8,500!", quality: "fail", analytics: "❌ Провал!", path: "reject5" }
                ]
            },
            {
                brokerQuestion: "$8,000 final. That's $2.86/mile. Deal?",
                dispatcherPrompt: "💎 ФИНАЛ! $8,000 (вы $8,500, posted $7,500). ЗАРАБОТАЛИ $500 БОЛЬШЕ! Produce premium! ПРИНИМАЙТЕ!",
                suggestions: [
                    { text: "$8,000 works! Deal! Which factoring? I'll send temperature monitoring app details and insurance certificate too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $500 больше! 'Deal!', factoring, documentation!", path: "master" },
                    { text: "Perfect! $8,000. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $500!", path: "master" },
                    { text: "$8,000 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $8,000...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $8,200!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject5" },
                    { text: "Can we do $8,100?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject5" }
                ]
            },
            {
                brokerQuestion: "Deal! $8,000 all-in. Which factoring? Send insurance certificate and temperature monitoring app details.",
                dispatcherPrompt: "💎 Финализация produce! Дайте: factoring, подтвердите отправите insurance certificate, temp monitoring app details. Produce = документация!",
                suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. Sending now: $250K insurance certificate, temperature monitoring app details (GPS tracking, temp sensors, 4-hour readings). Driver will start sending temp updates immediately after pickup. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, все документы (insurance, app details, GPS, sensors, readings), вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Sending insurance certificate and monitoring app details now.", quality: "good", analytics: "✔️ Хорошо! Factoring, документы.", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com. I'll send insurance and app details.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject5" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject5" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup, start sending temperature readings every 4 hours. If temp goes outside 34-36°F, call me immediately. If this goes well, I have 8-12 produce loads weekly LA-East Coast. Good luck!",
                dispatcherPrompt: "💎 УСПЕХ! 8-12 produce loads WEEKLY! Это $64,000-96,000/неделю! Поблагодарите, подтвердите: rate con, temp readings (4 hours), emergency call, интерес к weekly loads. Produce relationships = premium rates!",
                suggestions: [
                    { text: "Thank you Amanda! We'll sign rate con immediately. Driver will send temperature readings every 4 hours starting at pickup. If any temp issues, I'll call you right away. We're very interested in 8-12 weekly produce loads LA-East Coast - our specialty! Looking forward to long-term partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия (temp readings, emergency call), энтузиазм weekly loads, partnership!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all temperature updates. Will call immediately if any issues. Very interested in more produce loads!", quality: "good", analytics: "✔️ Хорошо! Благодарность, подтверждение, интерес.", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What was pickup time?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил детали!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Keep that produce cold!", outcome: { type: "success", quality: "excellent", rate: "$8,000", ratePerMile: "$2.86/mile", relationship: "strengthened", dialogueTime: "7-8 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "8-12 produce loads weekly LA-East Coast ($64,000-96,000/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $500 больше ($8,000 vs $7,500 posted).\n\n💡 УРОК: Produce требует reefer operational (34-36°F), temperature monitoring (GPS + sensors, 4-hour readings), $100K+ insurance, tight deadline (72 hours). Торг: Posted $7,500 → Вы $8,500 → Встречное $7,900 → Финал $8,000 ($2.86/mile). Заработали $500 = 6.7% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Produce loads платят premium rates ($2.80-3.10/mile) из-за perishable nature и temperature requirements. Ваш профессионализм = 8-12 loads weekly ($64,000-96,000/неделю = $256,000-384,000/месяц потенциал)!` } }
        ],
        reject1: [
            {
                brokerQuestion: "Hold on. I need you to understand - this is urgent fresh produce worth $150K+ that needs to be in NYC in 72 hours. My questions about your MC, reefer location, and operational status are mandatory for booking this load.\n\nI'm willing to continue if you can provide the information professionally. So let me ask again: What's your MC number, where exactly is your reefer truck right now (specific location), and is it operational? Please answer specifically.",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил о неприемлемом тоне. Теперь ОБЯЗАТЕЛЬНО дайте: MC, точное местоположение (warehouse/DC name), статус (empty since when), operational status. Это ваш шанс исправиться!",
                suggestions: [
                    { text: "You're absolutely right, I apologize for the tone. MC 887766, CrossCountry Reefer Transport. Reefer is at Sysco distribution center in Los Angeles, empty since yesterday evening. Unit operational, last serviced 2 weeks ago - compressor, coolant checked. Driver ready for 6 AM pickup. Can I provide our service records?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали (MC, Sysco DC LA, empty yesterday, last service 2 weeks, systems checked), готовность!", path: "master" },
                    { text: "Sorry about that. MC 887766, CrossCountry Reefer Transport. Reefer at distribution center in LA, empty. Serviced recently. Ready 6 AM.", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, готовность.", path: "master" },
                    { text: "MC 887766. Reefer in LA, empty.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "Look, I said it's in LA...", quality: "weak", analytics: "⚠️ Слабо. Продолжает грубить!", path: "reject1_final" },
                    { text: "Why are you making this difficult?", quality: "aggressive", analytics: "🔴 Агрессивно! Не понял предупреждение!", path: "reject1_final" }
                ]
            },
            { brokerResponse: "I'm sorry, but I need carriers who can communicate professionally and provide basic information about their equipment. This is $150K+ perishable cargo with a 72-hour deadline. I'll find someone else. Good luck.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕПРОФЕССИОНАЛЬНОЕ ПОВЕДЕНИЕ\n\n💡 УРОК: Грубость недопустима в produce transport. Брокеры работают с perishable cargo ($150K+) и tight deadlines (72 hours). Фраза 'Just send pickup!' показывает неуважение.\n\n🎯 РЕАЛЬНОСТЬ: Produce brokers имеют список проверенных carriers. Одна грубость = потеря доступа к premium produce loads ($8,000+ per load). Профессионализм = деньги!" } }
        ],
        reject1_final: [
            {},
            { brokerResponse: "I gave you a chance to correct your approach, but you're continuing with unprofessional attitude. I don't have time for this with urgent produce. I'll find someone else. Good luck.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "none", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ИГНОРИРОВАНИЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер дал ВТОРОЙ ШАНС, но вы продолжили грубить. Produce - это time-sensitive cargo, брокеры не будут тратить время на непрофессиональных carriers.\n\n🎯 РЕАЛЬНОСТЬ: Потеря: $8,000 сейчас + $64,000-96,000/неделю в будущем = $256,000-384,000/месяц потенциал. Blacklist навсегда." } }
        ],
        reject2: [
            {
                brokerQuestion: "I need to stop you right there. This is NOT 'just a reefer' - this is fresh produce worth $150K+ that will spoil if temperature goes above 36°F. Avocados and berries are extremely temperature-sensitive.\n\nIf you want this load, I need you to take it seriously. Is your reefer unit operational, can it maintain 34-36°F constant, when was it last serviced, and is fuel tank full for 72-hour run? Please answer professionally.",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил о пренебрежении produce requirements. Теперь ОБЯЗАТЕЛЬНО подтвердите: operational, 34-36°F constant, last service (когда), fuel (72+ hours). Покажите серьезность!",
                suggestions: [
                    { text: "You're absolutely right, I apologize. Fresh produce requires strict temperature control. Yes, reefer unit fully operational - can maintain 34-36°F constant. Serviced 2 weeks ago: compressor, coolant, all systems checked. Fuel tank full, can run continuous 72+ hours. We haul produce regularly, understand it's perishable and temperature-critical.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали (operational, 34-36°F constant, service 2 weeks, systems, fuel 72+, produce experience)!", path: "master" },
                    { text: "Sorry, you're right. Yes, reefer operational. Can maintain 34-36°F. Serviced recently, fuel full. We understand produce requirements.", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, понимание.", path: "master" },
                    { text: "Yes, reefer works. Can do 34-36°F.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "Fine, it works...", quality: "weak", analytics: "⚠️ Слабо. Неохотно!", path: "reject2_final" },
                    { text: "It's still just produce. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Продолжает пренебрегать!", path: "reject2_final" }
                ]
            },
            { brokerResponse: "I need a carrier who understands that produce is perishable and temperature-critical. 'Just a reefer' tells me you don't take this seriously. I'll find someone else. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРЕНЕБРЕЖЕНИЕ PRODUCE REQUIREMENTS\n\n💡 УРОК: Фраза 'It's just a reefer' показывает непонимание produce transport. $150K+ cargo требует strict temperature (34-36°F), monitoring, experience.\n\n🎯 РЕАЛЬНОСТЬ: Produce brokers не работают с carriers, которые не понимают perishable nature. Потеря: $8,000 + weekly loads." } }
        ],
        reject2_final: [
            {},
            { brokerResponse: "I explained the temperature requirements and produce value, but you're still not taking this seriously. Produce transport requires attention to detail. I'll pass. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "low", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРОДОЛЖЕНИЕ ПРЕНЕБРЕЖЕНИЯ\n\n💡 УРОК: Брокер объяснил produce requirements ($150K+, 34-36°F, perishable), но вы продолжили пренебрегать. Это показывает, что вы не подходите для produce.\n\n🎯 РЕАЛЬНОСТЬ: Produce требует особого отношения. Потеря: $8,000 + $64,000-96,000/неделю." } }
        ],
        reject3: [
            {
                brokerQuestion: "Let me be clear - temperature monitoring is not optional for produce, it's mandatory. This is $150K+ perishable cargo that will spoil if temp goes above 36°F. I need real-time monitoring to protect both of us.\n\nI'm willing to continue if you have monitoring. Do you have GPS tracking with temperature sensors? Can your driver send temperature readings every 4-6 hours? What happens if temp goes outside range? Please answer.",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер требует temp monitoring. Дайте: GPS + temp sensors, reading frequency (4-6 hours), emergency protocol. Это обязательно для produce!",
                suggestions: [
                    { text: "You're absolutely right, I apologize. Yes, we have GPS tracking with built-in temperature sensors. Driver will send readings every 4 hours via mobile app - real-time alerts if temp goes outside 34-36°F. If any issues, driver knows emergency protocols: find nearest repair, call broker immediately. We understand produce is perishable.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали (GPS + sensors, 4-hour readings, real-time alerts, emergency protocols), понимание!", path: "master" },
                    { text: "Sorry. Yes, we have temperature monitoring system. Driver sends readings every 4-6 hours. Emergency protocols in place.", quality: "good", analytics: "✔️ Хорошо! Извинение, monitoring, readings, protocols.", path: "master" },
                    { text: "Yes, we have monitoring. Driver will check temperature.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I told you driver can check...", quality: "weak", analytics: "⚠️ Слабо. Продолжает уклоняться!", path: "reject3_final" },
                    { text: "This is too complicated!", quality: "aggressive", analytics: "🔴 Агрессивно! Отказ от требований!", path: "reject3_final" }
                ]
            },
            { brokerResponse: "Temperature monitoring is mandatory for produce. Without it, I can't track cargo condition and protect against claims. I'll find a carrier with proper monitoring. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ TEMPERATURE MONITORING\n\n💡 УРОК: Produce требует GPS + temp sensors, 4-6 hour readings, real-time alerts. Без monitoring = нет produce loads. Это защита от $150K+ claims.\n\n🎯 РЕАЛЬНОСТЬ: Профессиональные produce carriers имеют monitoring systems. Потеря: $8,000 + weekly loads." } }
        ],
        reject3_final: [
            {},
            { brokerResponse: "I explained why temperature monitoring is mandatory for $150K+ perishable cargo, but you're refusing. I can't risk produce spoilage without monitoring. I'll find someone else. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "4-5 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ОТКАЗ ОТ MONITORING ПОСЛЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер объяснил важность monitoring для perishable cargo, но вы отказались. Это критическая ошибка для produce.\n\n🎯 РЕАЛЬНОСТЬ: Без monitoring = нет produce loads. Потеря: $8,000 + $64,000-96,000/неделю." } }
        ],
        reject4: [
            {
                brokerQuestion: "Let me be clear - insurance verification is mandatory for produce. This is $150K+ perishable cargo. If temperature fails and produce spoils, claims are expensive. I need to verify proper coverage.\n\nI'm willing to continue if you can provide details. What is your cargo insurance amount, which company, when does it expire, and does it cover perishable goods? I'll need certificate. Can you provide this?",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер требует insurance details. Дайте: сумму ($100K+), компанию, срок, perishable coverage. Предложите certificate. Это обязательно!",
                suggestions: [
                    { text: "You're absolutely right, I apologize. $250K cargo insurance through Northland specialized in perishable goods. Certificate current, expires March 2027. Coverage includes produce and temperature-related claims. I can email certificate right now - what's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали ($250K, Northland perishable, срок, temp claims), готовность!", path: "master" },
                    { text: "Sorry. $100K cargo insurance. Certificate current. Covers perishable goods. I'll send it now.", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, готовность.", path: "master" },
                    { text: "Yes, $100K insurance. Certificate available.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I told you we have insurance...", quality: "weak", analytics: "⚠️ Слабо. Уклоняется!", path: "reject4_final" },
                    { text: "Too much paperwork!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4_final" }
                ]
            },
            { brokerResponse: "Insurance verification is mandatory for produce. Without proper coverage, I can't book $150K+ perishable cargo. I'll find a carrier with verified insurance. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ОТКАЗ ПРЕДОСТАВИТЬ INSURANCE\n\n💡 УРОК: Produce требует $100K+ insurance covering perishable/temperature claims. Без certificate = нет produce loads.\n\n🎯 РЕАЛЬНОСТЬ: Профессиональные carriers имеют $250K+ insurance и с гордостью предоставляют certificates. Потеря: $8,000 + weekly loads." } }
        ],
        reject4_final: [
            {},
            { brokerResponse: "I explained why insurance verification is mandatory for $150K+ perishable cargo, but you're refusing. I can't risk produce without verified coverage. I'll find someone else. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "4-5 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ОТКАЗ ОТ INSURANCE ПОСЛЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер объяснил важность insurance для perishable cargo, но вы отказались предоставить детали.\n\n🎯 РЕАЛЬНОСТЬ: Отказ = blacklist. Потеря: $8,000 + $64,000-96,000/неделю." } }
        ],
        reject5: [
            {
                brokerQuestion: "Hold on. I don't appreciate ultimatums. We were negotiating professionally - I offered $7,900, you countered, we were working toward fair rate.\n\nIf you want to continue, let's negotiate professionally. My offer is $7,900 ($2.82/mile). You can counter with reasonable rate and justification, or we can meet in middle. But threats won't work. What's your professional counter-offer?",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил об ультиматумах. Дайте ПРОФЕССИОНАЛЬНЫЙ counter: $8,000-8,100 с обоснованием (reefer, monitoring, insurance, 72-hour deadline). Торг должен быть уважительным!",
                suggestions: [
                    { text: "You're absolutely right, I apologize for aggressive approach. Let me counter professionally: $8,100 would work. That's $2.89/mile, fair for reefer with temperature monitoring, $250K insurance, tight 72-hour deadline, and produce experience. Can we meet at $8,100?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, профессиональный counter ($8,100), полное обоснование!", path: "master" },
                    { text: "Sorry about that. How about $8,000? Fair middle ground for produce with monitoring and insurance.", quality: "good", analytics: "✔️ Хорошо! Извинение, разумный counter, обоснование.", path: "master" },
                    { text: "$7,950 would work for us.", quality: "normal", analytics: "⚪ Нормально. Минимальный counter.", path: "master" },
                    { text: "Fine, $7,900 then...", quality: "weak", analytics: "⚠️ Слабо. Неохотно!", path: "master" },
                    { text: "My rate or nothing!", quality: "aggressive", analytics: "🔴 Агрессивно! Продолжает ультиматумы!", path: "reject5_final" }
                ]
            },
            { brokerResponse: "I don't appreciate ultimatums. We had fair discussion going, but demanding rates shows you're not someone I want to work with. I have 8-12 produce loads weekly and need professional partners. This isn't going to work. Good luck.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "6-7 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: УЛЬТИМАТУМЫ\n\n💡 УРОК: Ультиматумы недопустимы. Брокеры ищут долгосрочных партнеров для 8-12 loads weekly ($64,000-96,000/неделю).\n\n🎯 РЕАЛЬНОСТЬ: Produce brokers blacklist агрессивных carriers. Потеря: $8,000 + $64,000-96,000/неделю = $256,000-384,000/месяц." } }
        ],
        reject5_final: [
            {},
            { brokerResponse: "I gave you chance to negotiate professionally, but you're continuing with ultimatums. I don't work this way. I have 8-12 produce loads weekly worth $64,000-96,000, and I need professional partners. You're not it. Good luck.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "7-8 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРОДОЛЖЕНИЕ АГРЕССИИ\n\n💡 УРОК: Брокер дал шанс, но вы продолжили ультиматумы. Produce brokers работают только с профессионалами.\n\n🎯 РЕАЛЬНОСТЬ: Permanent blacklist. Потеря: $8,000 + $64,000-96,000/неделю = $256,000-384,000/месяц. Репутация испорчена." } }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario1);
    console.log('✅ Scenario 1 (Reefer Produce LA-NYC) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
