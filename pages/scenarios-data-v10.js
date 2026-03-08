// СИМУЛЬ - Dialogue #10 - Dry Van Building Materials (NEW SYSTEM V3.0)
// Denver → Kansas City, 600 miles
// Posted: $1,350 ($2.25/mile), Target: $1,500-1,550 ($2.50-2.58/mile)

console.log('🔵 Loading scenarios-data-v10.js...');

const scenario10 = {
    id: 10,
    route: "Denver CO → Kansas City MO",
    distance: 600,
    equipment: "Dry Van (53ft)",
    cargo: "Building materials (drywall, lumber)",
    weight: "44,000 lbs",
    deadline: "Pickup tomorrow 7 AM - 11 AM, Delivery in 2 days",
    brokerStyle: "Professional construction broker",
    difficulty: "easy",
    initialMessage: "Good morning! This is Michael Brown from BuildFreight Logistics.\nI saw your load posting for Denver to Kansas City building materials.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Carlos from BuildPro Brokers.\nYes, available.\nWhat's your MC?", dispatcherPrompt: "💎 Брокер проверяет компанию. Представьтесь: MC, компания, флот, специализация (building materials). Укажите где truck, готовность. Building materials = heavy loads!", suggestions: [
                    { text: "Good morning Carlos! BuildFreight Logistics, MC 889900. We're a 30-truck fleet handling building materials regularly. Truck's in Denver at Home Depot distribution center, empty. Ready for 7 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 30 trucks, специализация building, местоположение (Home Depot DC), готовность!", path: "master" },
                    { text: "Good morning! MC 889900, BuildFreight Logistics. We handle building materials. Truck in Denver, ready 7 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, опыт.", path: "master" },
                    { text: "MC 889900, BuildFreight Logistics. Truck in Denver.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "MC 889900... truck in Denver area...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Why MC? Rate!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your truck? Can it handle 44K lbs building materials?", dispatcherPrompt: "💎 Местоположение и capability для heavy load. Дайте адрес, статус, подтвердите weight capacity (44K lbs), trailer condition. Building materials = heavy!", suggestions: [
                    { text: "Truck's at Home Depot DC in Denver. Empty since yesterday. Trailer rated for 45K lbs, reinforced floor for heavy loads. Driver experienced with building materials - knows proper load distribution. Ready 7 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Адрес (Home Depot DC), weight capacity (45K), reinforced floor, опыт driver, load distribution!", path: "master" },
                    { text: "At Home Depot DC in Denver. Empty. Trailer rated 45K lbs. Driver experienced with building materials. Ready 7 AM.", quality: "good", analytics: "✔️ Хорошо! Местоположение, capacity, опыт.", path: "master" },
                    { text: "In Denver. Empty. Can handle 44K lbs. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Somewhere in Denver... should handle weight...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Trailer might be too light...", quality: "fail", analytics: "❌ Провал! Не может handle weight!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Perfect! 600 miles Denver to Kansas City. Building materials - drywall and lumber. 44K lbs. Pickup tomorrow 7-11 AM, delivery in 2 days. Can you handle heavy building materials?", dispatcherPrompt: "💎 Детали building materials груза. Подтвердите: 600 mi, heavy load (44K), pickup/delivery. Спросите: load locks requirements, tarps needed, special handling. Building = proper securing!", suggestions: [
                    { text: "Perfect! 600 miles in 2 days with 44K building materials. We handle heavy loads regularly with proper load locks and straps. Trailer has reinforced floor. Driver can pickup at 7 AM, deliver by end of day 2. How many load locks needed? Any tarps required for lumber?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, опыт heavy loads, load locks/straps, reinforced floor, ETA, вопросы (load locks, tarps)!", path: "master" },
                    { text: "Yes, 600 miles in 2 days. We handle building materials regularly. Driver ready 7 AM. Any special requirements?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, опыт, вопрос.", path: "master" },
                    { text: "We can do it. Driver on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we can handle it...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Yeah, whatever. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject2" },
                    { text: "Driver won't be ready until 10 AM...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Standard dry van. Need 12 load locks minimum and heavy-duty straps. Lumber is banded but needs securing. Drywall is palletized.", dispatcherPrompt: "💎 Requirements для building materials. Подтвердите: 12 load locks (есть?), heavy-duty straps, опыт с lumber/drywall. Building materials = proper securing!", suggestions: [
                    { text: "Perfect! We have 14 load locks and heavy-duty straps ready. Driver experienced with lumber and drywall - knows proper securing for banded lumber and palletized drywall. Trailer floor reinforced for heavy loads. Ready to go!", quality: "excellent", analytics: "✨ ОТЛИЧНО! 14 load locks (больше чем нужно), straps, опыт lumber/drywall, securing knowledge, reinforced floor!", path: "master" },
                    { text: "Yes, we have 12 load locks and heavy-duty straps. Driver experienced with building materials.", quality: "good", analytics: "✔️ Хорошо! Load locks, straps, опыт.", path: "master" },
                    { text: "We have load locks and straps. Driver knows building materials.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough load locks...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "It's just building materials!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "We only have 8 load locks...", quality: "fail", analytics: "❌ Провал! Недостаточно load locks!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo coverage.", dispatcherPrompt: "💎 Страховка. Назовите: сумму ($100K+), компанию, срок. Предложите certificate!", suggestions: [
                    { text: "Yes, $100K cargo insurance through Progressive. Certificate current, expires May 2027. I can email it right now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Сумма, компания, срок, готовность!", path: "master" },
                    { text: "Yes, $100K cargo coverage through Progressive. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ Провал!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! Let's talk rate. What do you need for 600 miles?", dispatcherPrompt: "💎 ТОРГ! Posted $1,350 ($2.25/mile) - просите $1,500-1,550 ($2.50-2.58/mile). Building materials = standard rates. Обоснуйте: heavy load capability, load locks, experience!", suggestions: [
                    { text: "For 600 miles with 44K building materials, I'm looking at $1,550. That's $2.58/mile, fair for heavy load with proper securing equipment and experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $1,550 - это $200 БОЛЬШЕ posted! Обоснование!", path: "master" },
                    { text: "$1,500 for this load. That's $2.50/mile for building materials.", quality: "good", analytics: "✔️ Хорошо! Просит $1,500 - $150 больше!", path: "master" },
                    { text: "I'm looking at $1,450 for 600 miles.", quality: "normal", analytics: "⚪ Нормально. $1,450 - только $100 больше.", path: "master" },
                    { text: "Can you do $1,400?", quality: "weak", analytics: "⚠️ Слабо! Только $50 больше!", path: "master" },
                    { text: "I need $1,800 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $1,800 = $3.00/mile - нереально!", path: "reject4" },
                    { text: "I'll take $1,350!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's a bit high. I can do $1,450. That's $2.42/mile.", dispatcherPrompt: "💎 Встречное $1,450 (вы $1,550, posted $1,350). Варианты: 1) $1,475-1,500 (посередине), 2) $1,450 + detention $75/hr, 3) $1,450!", suggestions: [
                    { text: "Can we meet at $1,500? Fair for both - middle ground. Heavy load capability, proper equipment.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $1,500 - посередине!", path: "master" },
                    { text: "$1,450 works if detention is $75/hr after 2 hours.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$1,450 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $1,450 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$1,500 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No, I need $1,550!", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$1,475 final. That's $2.46/mile. Detention $75/hr. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $1,475 (вы $1,550, posted $1,350). ЗАРАБОТАЛИ $125 БОЛЬШЕ! ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$1,475 works! Deal! Which factoring?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $125 больше!", path: "master" },
                    { text: "Perfect! $1,475 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "$1,475 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $1,475...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $1,500?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $1,475 all-in, detention $75/hr. Which factoring?", dispatcherPrompt: "💎 Финализация! Дайте: factoring (название + email). Предложите insurance!", suggestions: [
                    { text: "RTS Financial, factoring@rtsfin.com. Sending insurance certificate now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, insurance, вопрос!", path: "master" },
                    { text: "Triumph Factoring, factoring@triumphbc.com. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@rtsfin.com. Sign and return. After pickup, send BOL and photos. If this goes well, I have 10-12 building materials loads weekly Denver-Midwest. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 10-12 loads WEEKLY! Это $14,750-17,700/неделю! Поблагодарите, подтвердите, интерес к weekly loads!", suggestions: [
                    { text: "Thank you Carlos! We'll sign rate con immediately. Driver will send BOL and photos at pickup. We're very interested in 10-12 weekly building materials loads - our specialty! Looking forward to partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия, энтузиазм weekly loads!", path: "master" },
                    { text: "Thank you! We'll sign right away and send documentation. Very interested in more building loads!", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What was pickup time?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Safe travels!", outcome: { type: "success", quality: "excellent", rate: "$1,475", ratePerMile: "$2.46/mile", relationship: "strengthened", dialogueTime: "5-6 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "10-12 building materials loads weekly Denver-Midwest ($14,750-17,700/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $125 больше ($1,475 vs $1,350 posted).\n\n💡 УРОК: Building materials требуют load locks (12+), heavy-duty straps, reinforced trailer. Торг: Posted $1,350 → Вы $1,550 → Встречное $1,450 → Финал $1,475 ($2.46/mile). Заработали $125 = 9.3% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Building materials loads - standard rates ($2.30-2.60/mile). Ваш профессионализм = 10-12 loads weekly ($14,750-17,700/неделю = $59,000-70,800/месяц потенциал)!` } }
        ],
        reject1: [{}, { brokerResponse: "I need professional carrier. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕПРОФЕССИОНАЛИЗМ" } }],
        reject2: [{}, { brokerResponse: "I need carrier who can meet schedule. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕ МОЖЕТ ЗАБРАТЬ ВОВРЕМЯ" } }],
        reject3: [{}, { brokerResponse: "I need carrier with proper equipment. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ ОБОРУДОВАНИЯ" } }],
        reject4: [{}, { brokerResponse: "That rate doesn't work. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "4-5 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ" } }]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario10);
    console.log('✅ Scenario 10 (Dry Van Building Materials Denver-Kansas City) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
