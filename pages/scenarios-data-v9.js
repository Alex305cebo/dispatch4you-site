// СИМУЛЬ - Dialogue #9 - Hazmat Chemicals (NEW SYSTEM V3.0)
// Houston → Atlanta, 850 miles, Hazmat Class 3
// Posted: $2,900 ($3.41/mile), Target: $3,200-3,300 ($3.76-3.88/mile)

console.log('🔵 Loading scenarios-data-v9.js...');

const scenario9 = {
    id: 9,
    route: "Houston TX → Atlanta GA",
    distance: 850,
    equipment: "Tanker with Hazmat certification",
    cargo: "Chemicals (Class 3 Flammable Liquids)",
    weight: "45,000 lbs",
    deadline: "Pickup tomorrow 8 AM - 12 PM, Delivery in 2 days",
    brokerStyle: "Professional hazmat broker",
    difficulty: "hard",
    initialMessage: "Good morning! This is Kevin Anderson from SafeHaul Logistics.\nI saw your load posting for Houston to Atlanta hazmat chemicals.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good morning! This is Mike from ChemFreight Brokers.\nYes, available.\nWhat's your MC and do you have Hazmat endorsement?", dispatcherPrompt: "💎 Брокер проверяет Hazmat capability! Представьтесь: MC, компания, флот (tankers), Hazmat + Tanker endorsements, опыт с Class 3. Hazmat = специальные требования!", suggestions: [
                    { text: "Good morning Mike! SafeHaul Logistics, MC 667788. We're a 18-truck fleet specializing in hazmat transport. 10 tankers. Driver has current Hazmat and Tanker endorsements, 8 years experience with Class 3 flammables. Truck's in Houston at chemical terminal, empty. Ready for 8 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 18 trucks (10 tankers), Hazmat + Tanker endorsements, 8 years Class 3, местоположение (chemical terminal)!", path: "master" },
                    { text: "Good morning! MC 667788, SafeHaul Logistics. We specialize in hazmat. Driver has Hazmat and Tanker endorsements. Truck in Houston, ready 8 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, hazmat, endorsements.", path: "master" },
                    { text: "MC 667788, SafeHaul Logistics. We have hazmat endorsement. Truck in Houston.", quality: "normal", analytics: "⚪ Нормально. Базовая информация.", path: "master" },
                    { text: "MC 667788... I think driver has hazmat...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в endorsements - критично!", path: "master" },
                    { text: "Why so many questions?", quality: "aggressive", analytics: "🔴 Агрессивно! Hazmat требует строгой проверки!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал! Не упомянул hazmat capability!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Confirm driver has current Hazmat and Tanker endorsements? TSA background check current? Experience with Class 3 flammables?", dispatcherPrompt: "💎 Брокер проверяет Hazmat qualifications. Подтвердите: Hazmat endorsement (когда expires), Tanker endorsement, TSA background check (когда renewed), опыт с Class 3 (сколько лет). Hazmat = zero tolerance!", suggestions: [
                    { text: "Yes, driver has current Hazmat endorsement expires December 2026, Tanker endorsement current. TSA background check renewed 6 months ago. 8 years experience hauling Class 3 flammables - knows all placarding requirements, emergency procedures, routing restrictions. Zero incidents record.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Hazmat expires (Dec 2026), Tanker current, TSA (6 months ago), 8 years Class 3, placarding, procedures, routing, zero incidents!", path: "master" },
                    { text: "Yes, Hazmat and Tanker endorsements current. TSA background check current. 8 years experience with Class 3 flammables.", quality: "good", analytics: "✔️ Хорошо! Endorsements, TSA, опыт.", path: "master" },
                    { text: "Yes, driver has Hazmat and Tanker endorsements. TSA check done. Experience with Class 3.", quality: "normal", analytics: "⚪ Нормально. Есть endorsements.", path: "master" },
                    { text: "I think endorsements are current...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в critical qualifications!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "No Tanker endorsement...", quality: "fail", analytics: "❌ Провал! Нет Tanker - required!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Good! 850 miles Houston to Atlanta. Class 3 Flammable Liquids. 45K lbs. Pickup tomorrow 8-12, delivery in 2 days. Confirm you have emergency response kit and know placarding requirements?", dispatcherPrompt: "💎 Детали Hazmat груза. Подтвердите: 850 mi, Class 3, pickup/delivery. Спросите: UN number, emergency contact (CHEMTREC), routing restrictions, tunnel prohibitions. Hazmat = детальные вопросы!", suggestions: [
                    { text: "Perfect! 850 miles in 2 days for Class 3. We have complete emergency response kit: 20-lb ABC fire extinguisher, spill containment kit, emergency triangles, first aid kit, ERG guidebook. Driver knows placarding requirements for Class 3 - red diamond placards. What's the UN number? Any routing restrictions or tunnel prohibitions? CHEMTREC contact number?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, emergency kit (детальный список), placarding (red diamond), вопросы: UN number, routing, tunnels, CHEMTREC!", path: "master" },
                    { text: "Yes, 850 miles in 2 days. We have emergency response kit and know Class 3 placarding. What's the UN number? Any routing restrictions?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, kit, placarding, вопросы.", path: "master" },
                    { text: "We can do it. Have emergency kit. Know placarding.", quality: "normal", analytics: "⚪ Нормально. Базовое подтверждение.", path: "master" },
                    { text: "I think we have emergency kit...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в safety equipment!", path: "master" },
                    { text: "It's just chemicals. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение hazmat safety!", path: "reject2" },
                    { text: "Driver won't be ready...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Excellent! UN1993, CHEMTREC 1-800-424-9300. No tunnel restrictions on this route. Insurance current? We need $1M cargo coverage for hazmat.", dispatcherPrompt: "💎 Страховка для Hazmat. Назовите: сумму ($1M+), компанию, срок, покрывает ли hazmat incidents. Предложите certificate. Hazmat = высокая страховка!", suggestions: [
                    { text: "Yes, $1M cargo insurance through Northland specialized in hazmat. Certificate current, expires October 2027. Coverage includes hazmat incidents, spills, and environmental cleanup. I can email certificate right now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! $1M, компания (Northland hazmat), срок, hazmat incidents coverage, spills, cleanup, готовность!", path: "master" },
                    { text: "Yes, $1M cargo coverage through Northland. Includes hazmat incidents. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо! Сумма, компания, hazmat coverage.", path: "master" },
                    { text: "Yes, $1M cargo insurance. Certificate current.", quality: "normal", analytics: "⚪ Нормально. Сумма есть.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $500K...", quality: "fail", analytics: "❌ Провал! Недостаточно для hazmat!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're fully qualified for hazmat. Let's talk rate. What do you need for 850 miles Class 3?", dispatcherPrompt: "💎 ТОРГ! Posted $2,900 ($3.41/mile) - просите $3,200-3,300 ($3.76-3.88/mile). Hazmat платит САМЫЕ ВЫСОКИЕ rates! Обоснуйте: endorsements, experience, emergency kit, zero incidents!", suggestions: [
                    { text: "For 850 miles with Class 3 hazmat, I'm looking at $3,300. That's $3.88/mile, fair for hazmat with full endorsements, 8 years Class 3 experience, complete emergency response kit, zero incidents record. Hazmat premium rate.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $3,300 - это $400 БОЛЬШЕ posted! Обоснование: endorsements, experience, kit, zero incidents!", path: "master" },
                    { text: "$3,200 for this load. That's $3.76/mile for Class 3 hazmat with full qualifications.", quality: "good", analytics: "✔️ Хорошо! Просит $3,200 - $300 больше!", path: "master" },
                    { text: "I'm looking at $3,100 for 850 miles hazmat.", quality: "normal", analytics: "⚪ Нормально. $3,100 - только $200 больше.", path: "master" },
                    { text: "Can you do $3,000?", quality: "weak", analytics: "⚠️ Слабо! Только $100 больше для hazmat!", path: "master" },
                    { text: "I need $3,800 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $3,800 = $4.47/mile - нереально!", path: "reject4" },
                    { text: "I'll take $2,900!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга для hazmat!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $3,100. That's $3.65/mile.", dispatcherPrompt: "💎 Встречное $3,100 (вы $3,300, posted $2,900). Варианты: 1) $3,175-3,200 (посередине), 2) $3,100 + detention $100/hr, 3) $3,100. Hazmat = гибкость!", suggestions: [
                    { text: "Can we meet at $3,200? Fair for both - middle ground. Full hazmat qualifications, zero incidents, complete emergency response capability.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $3,200 - посередине! Обоснование!", path: "master" },
                    { text: "$3,100 works if detention is $100/hr after 2 hours for hazmat.", quality: "good", analytics: "✔️ Хорошо! Принимает + detention!", path: "master" },
                    { text: "$3,100 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально. Принимает.", path: "master" },
                    { text: "Okay, $3,100 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$3,200 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No, I need $3,300!", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$3,150 final. That's $3.71/mile. Detention $100/hr. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $3,150 (вы $3,300, posted $2,900). ЗАРАБОТАЛИ $250 БОЛЬШЕ! Hazmat premium! ПОСЛЕДНИЙ шанс - ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$3,150 works! Deal! Which factoring? I'll send driver's Hazmat/Tanker endorsement copies and emergency kit inventory too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $250 больше! 'Deal!', factoring, endorsements, kit inventory!", path: "master" },
                    { text: "Perfect! $3,150 with detention. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $250!", path: "master" },
                    { text: "$3,150 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $3,150...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $125/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $3,200?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $3,150 all-in, detention $100/hr. Which factoring? Send copies of Hazmat/Tanker endorsements and emergency kit inventory.", dispatcherPrompt: "💎 Финализация Hazmat! Дайте: factoring, подтвердите отправите endorsements copies, emergency kit inventory, insurance certificate. Hazmat = документация!", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. I'm sending now: driver's Hazmat endorsement (expires Dec 2026), Tanker endorsement, TSA background check, emergency kit inventory (fire extinguisher, spill kit, ERG, etc.), and $1M insurance certificate. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, все документы (Hazmat, Tanker, TSA, kit, insurance), вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Sending Hazmat/Tanker endorsements, emergency kit inventory, and insurance certificate now.", quality: "good", analytics: "✔️ Хорошо! Factoring, документы.", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com. I'll send endorsements and insurance.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup, send BOL, photos, and confirm placards are displayed. If this goes well, I have 3-4 hazmat loads weekly on various lanes. Good luck and stay safe!", dispatcherPrompt: "💎 УСПЕХ! 3-4 hazmat loads WEEKLY! Это $9,450-12,600/неделю! Поблагодарите, подтвердите: rate con, BOL/photos/placards, интерес к weekly hazmat loads. Hazmat relationships = premium rates!", suggestions: [
                    { text: "Thank you Mike! We'll sign rate con immediately. Driver will send BOL, photos, and placard confirmation at pickup. We're very interested in 3-4 weekly hazmat loads - our specialty! Looking forward to long-term partnership on hazmat freight!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия (BOL/photos/placards), энтузиазм weekly hazmat, partnership!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all documentation. Very interested in more hazmat loads!", quality: "good", analytics: "✔️ Хорошо! Благодарность, интерес.", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What was the UN number?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил UN number!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Stay safe and keep those placards visible!", outcome: { type: "success", quality: "excellent", rate: "$3,150", ratePerMile: "$3.71/mile", relationship: "strengthened", dialogueTime: "7-8 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "3-4 hazmat loads weekly ($9,450-12,600/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $250 больше ($3,150 vs $2,900 posted).\n\n💡 УРОК: Hazmat требует Hazmat + Tanker endorsements, TSA background check, emergency response kit, $1M insurance. Торг: Posted $2,900 → Вы $3,300 → Встречное $3,100 → Финал $3,150 ($3.71/mile). Заработали $250 = 8.6% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Hazmat loads платят САМЫЕ ВЫСОКИЕ rates ($3.00-3.50/mile) из-за special requirements и liability. Ваш профессионализм + endorsements = 3-4 loads weekly ($9,450-12,600/неделю = $37,800-50,400/месяц потенциал)!` } }
        ],
        reject1: [{}, { brokerResponse: "I need qualified hazmat carrier. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕТ HAZMAT QUALIFICATIONS" } }],
        reject2: [{}, { brokerResponse: "I need carrier who can handle hazmat properly. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕ МОЖЕТ HANDLE HAZMAT" } }],
        reject3: [{}, { brokerResponse: "I need carrier with proper hazmat insurance. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "none", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕДОСТАТОЧНАЯ СТРАХОВКА" } }],
        reject4: [{}, { brokerResponse: "That rate doesn't work. Thanks.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "6-7 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "unlikely", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ" } }]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario9);
    console.log('✅ Scenario 9 (Hazmat Chemicals Houston-Atlanta) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
