// СИМУЛЬ - Dialogue #14 - Dry Van Food/Beverage (NEW SYSTEM V3.0)
// Atlanta GA → Miami FL, 650 miles
// Posted: $1,450 ($2.23/mile), Target: $1,600-1,650 ($2.46-2.54/mile)

console.log('🔵 Loading scenarios-data-v14.js...');

const scenario14 = {
    id: 14,
    route: "Atlanta GA → Miami FL",
    distance: 650,
    equipment: "Dry Van (53ft)",
    cargo: "Food and beverage (non-perishable)",
    weight: "43,000 lbs",
    deadline: "Pickup tomorrow 6 AM - 10 AM, Delivery in 2 days",
    brokerStyle: "Professional food/beverage broker",
    difficulty: "easy",
    initialMessage: "Good morning! This is Lisa Chen from FoodFreight Solutions.\nI saw your load posting for Atlanta to Miami food and beverage.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Daniel from FreshFood Brokers.\nYes, available.\nWhat's your MC?", dispatcherPrompt: "💎 Брокер проверяет компанию. Представьтесь: MC, компания, флот, специализация (food/beverage). Food = clean trailer!", suggestions: [
                    { text: "Good morning Daniel! MC 223344, FoodFreight Solutions. 38-truck fleet, food/beverage specialist. Truck at Atlanta food DC, empty. Trailer clean, dry, no odors. Ready 6 AM. Where's pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 38 trucks, специализация food, местоположение (food DC), trailer clean/dry/no odors, готовность!", path: "master" },
                    { text: "Good morning! MC 223344, FoodFreight Solutions. We handle food regularly. Truck in Atlanta, trailer clean. Ready 6 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, опыт food, trailer clean.", path: "master" },
                    { text: "MC 223344, FoodFreight Solutions. Truck in Atlanta.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "MC 223344... truck in Atlanta area...", quality: "weak", analytics: "⚠️ Слабо. Неточно!", path: "master" },
                    { text: "Why MC? Rate!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your truck? Is trailer clean and dry for food?", dispatcherPrompt: "💎 Местоположение и trailer condition для food. Дайте адрес, статус, подтвердите trailer clean/dry/no odors. Food = strict cleanliness!", suggestions: [
                    { text: "At Sysco food DC in Atlanta. Empty since yesterday. Trailer cleaned yesterday - dry, no odors, food-grade. Driver ready 6 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Адрес (Sysco food DC), trailer cleaned yesterday, dry, no odors, food-grade, готовность!", path: "master" },
                    { text: "At food DC in Atlanta. Empty. Trailer clean, dry, no odors. Ready 6 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, trailer clean.", path: "master" },
                    { text: "In Atlanta. Empty. Trailer is clean. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Somewhere in Atlanta... trailer should be clean...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Trailer hasn't been cleaned...", quality: "fail", analytics: "❌ Провал! Trailer не clean для food!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 650 miles Atlanta to Miami. Food and beverage - non-perishable items. 43K lbs. Pickup tomorrow 6-10 AM, delivery in 2 days. Can you handle food freight?", dispatcherPrompt: "💎 Детали food груза. Подтвердите: 650 mi, non-perishable, pickup/delivery. Спросите: special handling, trailer requirements!", suggestions: [
                    { text: "Perfect! 650 miles in 2 days. We handle food freight regularly, clean dry trailers. Pickup 6 AM, deliver day 2. Any special handling for food?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, опыт food, clean trailers, ETA, вопрос!", path: "master" },
                    { text: "Yes, 650 miles in 2 days. We handle food regularly. Driver ready 6 AM. Special requirements?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, опыт, вопрос.", path: "master" },
                    { text: "We can do it. Driver on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we can handle it...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "It's just food. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject2" },
                    { text: "Driver won't be ready until 9 AM...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Standard dry van. Trailer must be clean, dry, no odors. Load locks and straps required. Food-grade cleanliness.", dispatcherPrompt: "💎 Requirements для food. Подтвердите: trailer clean/dry/no odors, load locks, straps, food-grade. Food = cleanliness!", suggestions: [
                    { text: "Perfect! Trailer is food-grade clean - cleaned and inspected yesterday, completely dry, no odors. We have load locks and straps ready. Driver experienced with food freight. Ready to go!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Food-grade clean (cleaned yesterday), dry, no odors, load locks/straps, опыт food!", path: "master" },
                    { text: "Yes, trailer clean and dry, no odors. We have load locks and straps. Driver knows food freight.", quality: "good", analytics: "✔️ Хорошо! Trailer clean, оборудование, опыт.", path: "master" },
                    { text: "Trailer is clean. We have load locks and straps.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think trailer is clean...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "It's just non-perishable!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Trailer has some odor...", quality: "fail", analytics: "❌ Провал! Odor недопустим для food!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo coverage for food.", dispatcherPrompt: "💎 Страховка для food. Назовите: сумму, компанию, срок. Предложите certificate!", suggestions: [
                    { text: "Yes, $100K cargo insurance through Progressive. Certificate current, expires July 2027. I can email it right now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма, компания, срок, готовность!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Progressive. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! Let's talk rate. What do you need for 650 miles?", dispatcherPrompt: "💎 ТОРГ! Posted $1,450 ($2.23/mile) - просите $1,600-1,650 ($2.46-2.54/mile). Food/beverage = standard rates. Обоснуйте: clean trailer, food-grade, experience!", suggestions: [
                    { text: "For 650 miles with food/beverage, I'm looking at $1,650. That's $2.54/mile, fair for food freight with food-grade clean trailer and experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $1,650 - это $200 БОЛЬШЕ posted! Обоснование!", path: "master" },
                    { text: "$1,600 for this load. That's $2.46/mile for food freight.", quality: "good", analytics: "✔️ Хорошо! Просит $1,600 - $150 больше!", path: "master" },
                    { text: "I'm looking at $1,550 for 650 miles.", quality: "normal", analytics: "⚪ Нормально. $1,550 - только $100 больше.", path: "master" },
                    { text: "Can you do $1,500?", quality: "weak", analytics: "⚠️ Слабо! Только $50 больше!", path: "master" },
                    { text: "I need $1,900 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $1,900 = $2.92/mile - нереально!", path: "reject4" },
                    { text: "I'll take $1,450!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's a bit high. I can do $1,550. That's $2.38/mile.", dispatcherPrompt: "💎 Встречное $1,550 (вы $1,650, posted $1,450). Варианты: 1) $1,575-1,600, 2) $1,550 + detention, 3) $1,550!", suggestions: [
                    { text: "Can we meet at $1,600? Fair for both - middle ground. Food-grade clean trailer, experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $1,600 - посередине!", path: "master" },
                    { text: "$1,550 works if detention is $75/hr after 2 hours.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$1,550 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $1,550 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$1,600 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No, I need $1,650!", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$1,575 final. That's $2.42/mile. Detention $75/hr. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $1,575 (вы $1,650, posted $1,450). ЗАРАБОТАЛИ $125 БОЛЬШЕ! ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$1,575 works! Deal! Which factoring?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $125 больше!", path: "master" },
                    { text: "Perfect! $1,575 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "$1,575 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $1,575.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $1,600?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $1,575 all-in, detention $75/hr. Which factoring?", dispatcherPrompt: "💎 Финализация! Дайте: factoring. Предложите insurance!", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, insurance, вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup send BOL and photos. If this goes well, I have 9-11 food/beverage loads weekly Atlanta-Florida. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 9-11 loads WEEKLY! Это $14,175-17,325/неделю! Поблагодарите, подтвердите, интерес!", suggestions: [
                    { text: "Thank you Daniel! We'll sign rate con immediately. Driver will send BOL and photos at pickup. We're very interested in 9-11 weekly food/beverage loads Atlanta-Florida - our specialty! Looking forward to partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, подтверждение, энтузиазм weekly loads!", path: "master" },
                    { text: "Thank you! We'll sign right away and send documentation. Very interested in more food loads!", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What was pickup time?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Safe travels!", outcome: { type: "success", quality: "excellent", rate: "$1,575", ratePerMile: "$2.42/mile", relationship: "strengthened", dialogueTime: "5-6 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "9-11 food/beverage loads weekly Atlanta-Florida ($14,175-17,325/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $125 больше ($1,575 vs $1,450 posted).\n\n💡 УРОК: Food/beverage требует clean, dry trailer, no odors, food-grade cleanliness. Торг: Posted $1,450 → Вы $1,650 → Встречное $1,550 → Финал $1,575 ($2.42/mile). Заработали $125 = 8.6% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Food/beverage loads - standard rates ($2.30-2.60/mile). Ваш профессионализм = 9-11 loads weekly ($14,175-17,325/неделю = $56,700-69,300/месяц потенциал)!` } }
        ],
        reject1: [
            {},
            {},
            {},
            { brokerResponse: "I need professional carrier with clean trailer for food. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: Trailer не clean для food или непрофессионализм" } }
        ],
        reject2: [
            {},
            {},
            { brokerResponse: "I need carrier who can meet pickup schedule. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: Не может забрать вовремя или агрессивность" } }
        ],
        reject3: [
            {},
            {},
            {},
            { brokerResponse: "I need carrier with proper equipment and insurance for food. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: Нет proper equipment или insurance для food" } }
        ],
        reject4: [
            {},
            {},
            {},
            {},
            {},
            {},
            { brokerResponse: "That rate doesn't work for me. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "4-5 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: Нереалистичные требования по rate" } }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario14);
    console.log('✅ Scenario 14 (Dry Van Food/Beverage Atlanta-Miami) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
