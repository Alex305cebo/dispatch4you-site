// DIALOGUE #15 - Reefer Produce (TESTED STRUCTURE)
// Phoenix AZ → Seattle WA, 1,420 miles
// Posted: $3,800 ($2.68/mile), Target: $4,200-4,400 ($2.96-3.10/mile)

console.log('🔵 Loading scenarios-data-v15.js...');

const scenario15 = {
    id: 15,
    route: "Phoenix AZ → Seattle WA",
    distance: 1420,
    equipment: "Reefer (53ft)",
    cargo: "Fresh produce (lettuce, tomatoes)",
    weight: "42,000 lbs",
    postedRate: "$3,800 ($2.68/mile)",
    deadline: "Pickup tomorrow 8 AM, Delivery in 3 days",
    brokerStyle: "Professional produce broker, time-sensitive",
    difficulty: "medium",
    initialMessage: "Good morning! This is Sarah from FreshWay Logistics.\nI'm calling about your posted reefer load Phoenix to Seattle with fresh produce.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Mike from ProduceDirect.\nYes, available.\nWhat's your MC and do you have reefer experience?",
                dispatcherPrompt: "💎 Брокер проверяет компанию и опыт с reefer. Дайте: MC, компания, опыт produce, reefer equipment!",
                suggestions: [
                    { text: "Good morning Mike! MC 334455, ColdChain Transport. We specialize in produce - 25 reefer trucks. Truck in Phoenix with working reefer unit, just serviced. Temperature-controlled experience. Where's pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 25 reefers, специализация produce, reefer serviced!", path: "master" },
                    { text: "Morning! MC 334455, ColdChain Transport. We handle produce regularly. Reefer truck in Phoenix, unit working. Ready tomorrow.", quality: "good", analytics: "✔️ Хорошо! MC, опыт produce, reefer working.", path: "master" },
                    { text: "MC 334455. We have reefer truck in Phoenix.", quality: "normal", analytics: "⚪ Нормально. Минимум информации.", path: "master" },
                    { text: "MC 334455... we have reefer somewhere...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "weak" },
                    { text: "Why all these questions? Just give rate!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_early" },
                    { text: "We don't have reefer experience...", quality: "fail", analytics: "❌ ПРОВАЛ! Нет опыта с produce!", path: "reject_early" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where exactly is your truck? Is reefer unit working and when was last service?",
                dispatcherPrompt: "💎 Местоположение и reefer status. Дайте: точный адрес, reefer working, дата service, температурный диапазон!",
                suggestions: [
                    { text: "Truck at produce terminal in Phoenix. Reefer unit working perfectly, serviced last week. Can maintain 34-38°F. Driver can be at pickup by 8 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Адрес (produce terminal), reefer serviced last week, температура, готовность!", path: "master" },
                    { text: "At produce terminal Phoenix. Reefer working, serviced recently. Can maintain temp. Ready 8 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, reefer working, готовность.", path: "master" },
                    { text: "In Phoenix. Reefer is working. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Phoenix area... reefer should work...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "weak" },
                    { text: "Just send pickup address!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_mid" },
                    { text: "Reefer hasn't been serviced in months...", quality: "fail", analytics: "❌ ПРОВАЛ! Reefer не serviced!", path: "reject_mid" }
                ]
            },
            {
                brokerQuestion: "Perfect! 1,420 miles Phoenix to Seattle. Fresh produce - lettuce and tomatoes. 42K lbs. Must maintain 34-38°F. Pickup tomorrow 8 AM, delivery in 3 days. Can you handle time-sensitive produce?",
                dispatcherPrompt: "💎 Детали produce груза. Подтвердите: 1,420 mi, produce, temp 34-38°F, 3 days. Спросите: loading/unloading time, detention!",
                suggestions: [
                    { text: "Perfect! 1,420 miles in 3 days with produce at 34-38°F. We handle time-sensitive produce regularly. Driver can pickup 8 AM, deliver day 3. What's loading/unloading time? Any detention pay?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, опыт produce, ETA, вопросы!", path: "master" },
                    { text: "Yes, 1,420 miles in 3 days. We handle produce. Reefer maintains 34-38°F. Driver ready 8 AM. Detention pay?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, temp, вопрос.", path: "master" },
                    { text: "We can do it. Driver will be on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we can handle it...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "It's just produce. What's the rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_mid" },
                    { text: "Driver can't be there until 10 AM...", quality: "fail", analytics: "❌ ПРОВАЛ! Не может забрать вовремя!", path: "reject_mid" }
                ]
            },
            {
                brokerQuestion: "Loading 2 hours, unloading 2 hours. Detention $75/hr after 2 hours. Reefer must run continuously. Any fuel surcharge?",
                dispatcherPrompt: "💎 Детали loading/detention. Подтвердите: 2h loading, 2h unloading, detention $75/hr, reefer continuous. Fuel surcharge - стандарт!",
                suggestions: [
                    { text: "Perfect! 2 hours loading/unloading, detention $75/hr works. Reefer will run continuously - we monitor temp 24/7. Fuel surcharge included in rate. Ready to discuss rate!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение всех деталей, temp monitoring, fuel included!", path: "master" },
                    { text: "2 hours loading/unloading, detention $75/hr confirmed. Reefer runs continuously. Fuel surcharge in rate.", quality: "good", analytics: "✔️ Хорошо! Подтверждение.", path: "master" },
                    { text: "Sounds good. Reefer will run. Fuel included.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I guess that works...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "Detention should be $100/hr!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "We can't monitor temp 24/7...", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo for produce.",
                dispatcherPrompt: "💎 Страховка для produce. Дайте: сумму, компанию, срок. Предложите certificate!",
                suggestions: [
                    { text: "Yes, $100K cargo insurance through Progressive Commercial. Certificate current, expires August 2027. I'll email it now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма, компания, срок, готовность!", path: "master" },
                    { text: "Yes, $100K cargo through Progressive. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо!", path: "weak" },
                    { text: "Insurance is fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "Only $50K coverage...", quality: "fail", analytics: "❌ ПРОВАЛ! Недостаточно!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Perfect! Let's talk rate. What do you need for 1,420 miles with reefer?",
                dispatcherPrompt: "💎 ТОРГ! Posted $3,800 ($2.68/mile) - просите $4,200-4,400 ($2.96-3.10/mile). Produce = premium rates. Обоснуйте: reefer, produce experience, time-sensitive!",
                suggestions: [
                    { text: "For 1,420 miles with fresh produce, I'm looking at $4,400. That's $3.10/mile - fair for time-sensitive produce with reefer, temp monitoring, and experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $4,400 - это $600 БОЛЬШЕ posted! Обоснование!", path: "master" },
                    { text: "$4,200 for this load. That's $2.96/mile for produce with reefer.", quality: "good", analytics: "✔️ Хорошо! Просит $4,200 - $400 больше!", path: "master" },
                    { text: "I'm looking at $4,000 for 1,420 miles.", quality: "normal", analytics: "⚪ Нормально. $4,000 - только $200 больше.", path: "master" },
                    { text: "Can you do $3,900?", quality: "weak", analytics: "⚠️ Слабо! Только $100 больше!", path: "weak" },
                    { text: "I need $5,000 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $5,000 = $3.52/mile - нереально!", path: "reject_late" },
                    { text: "I'll take $3,800!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high. I can do $4,000. That's $2.82/mile for reefer.",
                dispatcherPrompt: "💎 Встречное $4,000 (вы $4,400, posted $3,800). Варианты: 1) $4,200, 2) $4,000 + detention, 3) $4,000!",
                suggestions: [
                    { text: "Can we meet at $4,200? Fair middle ground for both. Reefer produce, temp monitoring, time-sensitive delivery.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $4,200 - посередине!", path: "master" },
                    { text: "$4,000 works if detention is $100/hr after 2 hours.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$4,000 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $4,000 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "$4,200 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "No, I need $4,400!", quality: "fail", analytics: "❌ Провал!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "$4,100 final. That's $2.89/mile. Detention $75/hr. Deal?",
                dispatcherPrompt: "💎 ФИНАЛ! $4,100 (вы $4,400, posted $3,800). ЗАРАБОТАЛИ $300 БОЛЬШЕ! ПРИНИМАЙТЕ!",
                suggestions: [
                    { text: "$4,100 works! Deal! Which factoring?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $300 больше!", path: "master" },
                    { text: "Perfect! $4,100 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "$4,100 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $4,100.", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "Can we do $4,200?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Deal! $4,100 all-in, detention $75/hr. Which factoring?",
                dispatcherPrompt: "💎 Финализация! Дайте: factoring. Предложите insurance!",
                suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, insurance, вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "weak" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject_late" }
                ]
            },
            {
                brokerResponse: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup send BOL, photos, and temp logs. If this goes well, I have 6-8 produce loads weekly Phoenix-Seattle. Good luck!",
                outcome: {
                    type: "success",
                    quality: "excellent",
                    rate: "$4,100",
                    ratePerMile: "$2.89/mile",
                    relationship: "strengthened",
                    dialogueTime: "6-7 min",
                    questionsAsked: "Professional",
                    detailLevel: "high",
                    futureOpportunity: "repeat",
                    weeklyLoads: "6-8 produce loads weekly Phoenix-Seattle ($24,600-32,800/week)",
                    feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $300 больше ($4,100 vs $3,800 posted).\n\n💡 УРОК: Produce требует reefer, temp monitoring 24/7, time-sensitive delivery. Торг: Posted $3,800 → Вы $4,400 → Встречное $4,000 → Финал $4,100 ($2.89/mile). Заработали $300 = 7.9% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Produce loads - premium rates ($2.80-3.20/mile). Ваш профессионализм = 6-8 loads weekly ($24,600-32,800/неделю = $98,400-131,200/месяц потенциал)!`
                }
            }
        ],
        weak: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                brokerQuestion: "$4,000 works. Which factoring?", dispatcherPrompt: "💎 Брокер принял, но вы были неуверенны. Дайте factoring.", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com.", quality: "normal", analytics: "⚪ Нормально.", path: "weak" },
                    { text: "Let me find it...", quality: "weak", analytics: "⚠️ Слабо!", path: "weak" }
                ]
            },
            {},
            {
                brokerResponse: "Thanks, but I need more confident carrier for produce. Good luck!",
                outcome: {
                    type: "failure",
                    quality: "weak",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "neutral",
                    dialogueTime: "5-6 min",
                    questionsAsked: "Some",
                    detailLevel: "medium",
                    futureOpportunity: "possible",
                    weeklyLoads: "No loads",
                    feedback: "⚠️ ОТКАЗ: Слишком неуверенные ответы. Produce требует профессионализма и уверенности!"
                }
            }
        ],
        reject_early: [
            {},
            {
                brokerResponse: "I need professional carrier with produce experience. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "rejected",
                    dialogueTime: "1 min",
                    questionsAsked: "None",
                    detailLevel: "none",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: Нет опыта с produce или агрессивность на первом шаге!"
                }
            }
        ],
        reject_mid: [
            {},
            {},
            {},
            {
                brokerResponse: "I need carrier with working reefer and professional attitude. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "rejected",
                    dialogueTime: "2-3 min",
                    questionsAsked: "Minimal",
                    detailLevel: "low",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: Reefer не serviced или агрессивность в середине диалога!"
                }
            }
        ],
        reject_late: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                brokerResponse: "That doesn't work for me. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "poor",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "damaged",
                    dialogueTime: "5-6 min",
                    questionsAsked: "Good",
                    detailLevel: "high",
                    futureOpportunity: "unlikely",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: Нереалистичные требования или агрессивность на финальных шагах!"
                }
            }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario15);
    console.log('✅ Scenario 15 (Reefer Produce Phoenix-Seattle) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
