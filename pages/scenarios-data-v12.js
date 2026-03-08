// СИМУЛЬ - Dialogue #12 - Auto Transport Luxury (NEW SYSTEM V3.0)
// Detroit MI → Phoenix AZ, 1,900 miles, Enclosed carrier
// Posted: $5,000 ($2.63/mile), Target: $5,500-5,700 ($2.89-3.00/mile)

console.log('🔵 Loading scenarios-data-v12.js...');

const scenario12 = {
    id: 12,
    route: "Detroit MI → Phoenix AZ",
    distance: 1900,
    equipment: "Enclosed car carrier (9-car capacity)",
    cargo: "Luxury vehicles (3 Tesla Model S)",
    weight: "15,000 lbs (3 vehicles)",
    deadline: "Pickup tomorrow 9 AM - 1 PM, Delivery in 4 days",
    brokerStyle: "Professional auto transport broker",
    difficulty: "hard",
    initialMessage: "Good afternoon! This is Jennifer Williams from Premier Auto Transport.\nI saw your load posting for Detroit to Phoenix luxury vehicles.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good afternoon! This is Rachel from LuxuryAuto Brokers.\nYes, available.\nWhat's your MC and do you have enclosed carrier?", dispatcherPrompt: "💎 Брокер проверяет auto transport capability! Представьтесь: MC, компания, флот (enclosed carriers), специализация (luxury vehicles). Auto = специализация!", suggestions: [
                    { text: "Good afternoon Rachel! Premier Auto Transport, MC 998877. We're a 12-truck fleet specializing in luxury vehicle transport. 8 enclosed carriers (hard-sided, not tarp). Carrier's in Detroit at dealership, empty. Ready for 9 AM pickup. Where's the pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 12 trucks (8 enclosed), специализация luxury, hard-sided (не tarp), местоположение (dealership)!", path: "master" },
                    { text: "Good afternoon! MC 998877, Premier Auto Transport. We specialize in luxury vehicles. 8 enclosed carriers. Carrier in Detroit, ready 9 AM.", quality: "good", analytics: "✔️ Хорошо! MC, компания, специализация, enclosed.", path: "master" },
                    { text: "MC 998877, Premier Auto Transport. We have enclosed carriers. Carrier in Detroit.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "MC 998877... I think we have enclosed...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в enclosed!", path: "master" },
                    { text: "Why so many questions?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Провал! Не упомянул enclosed capability!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "MC verified. Confirm you have enclosed carrier - hard-sided, not tarp? Insurance $1M+ for luxury vehicles? Experience with Tesla?", dispatcherPrompt: "💎 Брокер проверяет luxury vehicle qualifications. Подтвердите: enclosed hard-sided (не tarp!), insurance ($1M+, per-vehicle limit), опыт с Tesla (battery maintenance). Luxury = zero tolerance!", suggestions: [
                    { text: "Yes, enclosed hard-sided carrier - aluminum walls, not tarp. $1.5M cargo insurance with $200K per-vehicle limit. Driver experienced with Tesla - knows battery maintenance (keep >20%), proper tie-down points, no damage record. Zero claims on luxury vehicles.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Hard-sided (aluminum), $1.5M insurance ($200K per-vehicle), Tesla experience (battery >20%, tie-down), zero claims!", path: "master" },
                    { text: "Yes, enclosed hard-sided carrier. $1M+ insurance with per-vehicle coverage. Driver experienced with Tesla and luxury vehicles.", quality: "good", analytics: "✔️ Хорошо! Hard-sided, insurance, Tesla experience.", path: "master" },
                    { text: "Yes, enclosed carrier. $1M insurance. Driver knows luxury vehicles.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enclosed... insurance should be enough...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в critical qualifications!", path: "master" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject1" },
                    { text: "We only have open carrier...", quality: "fail", analytics: "❌ Провал! Нет enclosed для luxury!", path: "reject1" }
                ]
            },
            {
                brokerQuestion: "Excellent! Your qualifications look solid for luxury auto transport. Now let me give you the load details:\n\n1,900 miles Detroit to Phoenix. 3 Tesla Model S luxury vehicles - total value $300K. Pickup tomorrow 9 AM - 1 PM at Tesla dealership in Detroit, delivery required in 4 days to Phoenix customer.\n\nThis customer is very particular about their vehicles. Do you perform complete 360-degree inspection with detailed photos at pickup and delivery? How many photos per vehicle do you typically take?", dispatcherPrompt: "💎 Детали luxury auto груза. Подтвердите: 1,900 mi, 3 Tesla, pickup/delivery. Спросите: inspection process (сколько photos), customer signature requirements, delivery notification. Luxury auto = детальная документация!", suggestions: [
                    { text: "Perfect! 1,900 miles in 4 days with 3 Tesla Model S. We do complete 360-degree inspection: 20-30 photos per vehicle, detailed condition report, customer signature at pickup and delivery. Mobile app with timestamps and GPS location. Driver can pickup at 9 AM. Any specific inspection requirements from customer?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, 360° inspection (20-30 photos per vehicle), condition report, signatures, mobile app, timestamps, GPS, ETA, вопрос!", path: "master" },
                    { text: "Yes, 1,900 miles in 4 days. We do 360-degree inspection with photos and condition reports. Customer signatures at pickup/delivery. Driver ready 9 AM. Any special requirements?", quality: "good", analytics: "✔️ Хорошо! Подтверждение, inspection, photos, signatures, вопрос.", path: "master" },
                    { text: "We can do it. We do inspections with photos. Driver on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we do inspections...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность в inspection process!", path: "master" },
                    { text: "It's just 3 cars. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Пренебрежение luxury vehicles!", path: "reject2" },
                    { text: "Driver won't be ready...", quality: "fail", analytics: "❌ Провал!", path: "reject2" }
                ]
            },
            {
                brokerQuestion: "Excellent! Customer wants daily location updates and 24 hours notice before delivery. Insurance current? We need $1M+ with per-vehicle limit for Tesla.", dispatcherPrompt: "💎 Страховка для luxury auto. Назовите: сумму ($1M+), per-vehicle limit ($150K+), компанию, срок, покрывает ли luxury/Tesla. Предложите certificate. Luxury auto = высокая страховка!", suggestions: [
                    { text: "Yes, $1.5M cargo insurance through Northland specialized in luxury auto. Per-vehicle limit $200K. Certificate current, expires November 2027. Coverage includes Tesla and luxury vehicles. We provide daily GPS location updates via mobile app and will call customer 24 hours before delivery. I can email certificate now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО! $1.5M, per-vehicle $200K, компания (Northland luxury), срок, Tesla coverage, daily updates, 24hr notice, готовность!", path: "master" },
                    { text: "Yes, $1M+ cargo insurance with $150K per-vehicle limit. Includes luxury vehicles. Certificate current. We provide daily updates and 24hr delivery notice. I'll send certificate.", quality: "good", analytics: "✔️ Хорошо! Insurance, per-vehicle, luxury coverage, updates, notice.", path: "master" },
                    { text: "Yes, $1M cargo insurance. Certificate current. We provide updates.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough insurance...", quality: "weak", analytics: "⚠️ Слабо. Неуверенность!", path: "master" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject3" },
                    { text: "Only $500K total...", quality: "fail", analytics: "❌ Провал! Недостаточно для luxury!", path: "reject3" }
                ]
            },
            {
                brokerQuestion: "Perfect! You're fully qualified for luxury auto. Let's talk rate. What do you need for 1,900 miles with 3 Tesla?", dispatcherPrompt: "💎 ТОРГ! Posted $5,000 ($2.63/mile) - просите $5,500-5,700 ($2.89-3.00/mile). Luxury auto платит premium! Обоснуйте: enclosed hard-sided, $1.5M insurance, 360° inspection, Tesla experience, zero damage!", suggestions: [
                    { text: "For 1,900 miles with 3 Tesla Model S in enclosed carrier, I'm looking at $5,700. That's $3.00/mile, fair for hard-sided enclosed, $1.5M insurance, complete 360-degree inspection, Tesla-experienced driver, zero damage record. White-glove service.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $5,700 - это $700 БОЛЬШЕ posted! Обоснование полное: enclosed, insurance, inspection, Tesla, zero damage, white-glove!", path: "master" },
                    { text: "$5,500 for this load. That's $2.89/mile for luxury auto with enclosed carrier and full inspection.", quality: "good", analytics: "✔️ Хорошо! Просит $5,500 - $500 больше!", path: "master" },
                    { text: "I'm looking at $5,300 for 1,900 miles luxury auto.", quality: "normal", analytics: "⚪ Нормально. $5,300 - только $300 больше.", path: "master" },
                    { text: "Can you do $5,200?", quality: "weak", analytics: "⚠️ Слабо! Только $200 больше для luxury!", path: "master" },
                    { text: "I need $6,500 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $6,500 = $3.42/mile - нереально!", path: "reject4" },
                    { text: "I'll take $5,000!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга для luxury!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high for this lane. I can do $5,300. That's $2.79/mile.", dispatcherPrompt: "💎 Встречное $5,300 (вы $5,700, posted $5,000). Варианты: 1) $5,450-5,500 (посередине), 2) $5,300 + premium inspection fee, 3) $5,300. Luxury = гибкость!", suggestions: [
                    { text: "Can we meet at $5,500? Fair for both - middle ground. Enclosed hard-sided, $1.5M insurance, 360-degree inspection, zero damage record on luxury vehicles.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $5,500 - посередине! Обоснование!", path: "master" },
                    { text: "$5,300 works if we add $100 premium inspection fee for 3 vehicles.", quality: "good", analytics: "✔️ Хорошо! Принимает + inspection fee!", path: "master" },
                    { text: "$5,300 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $5,300 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "$5,500 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No, I need $5,700!", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "$5,400 final. That's $2.84/mile. Deal?", dispatcherPrompt: "💎 ФИНАЛ! $5,400 (вы $5,700, posted $5,000). ЗАРАБОТАЛИ $400 БОЛЬШЕ! Luxury premium! ПРИНИМАЙТЕ!", suggestions: [
                    { text: "$5,400 works! Deal! Which factoring? I'll send driver's luxury auto experience documentation and insurance certificate too.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Заработал $400 больше! 'Deal!', factoring, documentation!", path: "master" },
                    { text: "Perfect! $5,400. Deal! Factoring info?", quality: "good", analytics: "✔️ Хорошо! Заработал $400!", path: "master" },
                    { text: "$5,400 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $5,400...", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "I want $5,500!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "Can we do $5,500?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Deal! $5,400 all-in. Which factoring? Send insurance certificate and driver's luxury auto experience documentation.", dispatcherPrompt: "💎 Финализация luxury auto! Дайте: factoring, подтвердите отправите insurance certificate, driver documentation, inspection app details. Luxury = документация!", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. Sending now: $1.5M insurance certificate, driver's luxury auto experience record (zero damage claims), mobile inspection app details (GPS tracking, photo timestamps). Customer will receive app link for real-time tracking. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Factoring, все документы (insurance, driver record, app details), customer tracking, вопрос!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. Sending insurance certificate and driver documentation now. Customer will get tracking app link.", quality: "good", analytics: "✔️ Хорошо! Factoring, документы, tracking.", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com. I'll send insurance and documentation.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Let me find email...", quality: "weak", analytics: "⚠️ Слабо!", path: "master" },
                    { text: "Just send rate con!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject4" },
                    { text: "No factoring.", quality: "fail", analytics: "❌ Провал!", path: "reject4" }
                ]
            },
            {
                brokerQuestion: "Perfect! Rate con sent to factoring@triumphbc.com. Sign and return. After pickup, send 360-degree inspection photos and condition reports. Customer expects daily location updates and 24hr delivery notice. If this goes well, I have 5-7 luxury auto loads weekly Detroit-Southwest. Good luck!", dispatcherPrompt: "💎 УСПЕХ! 5-7 luxury auto loads WEEKLY! Это $27,000-37,800/неделю! Поблагодарите, подтвердите: rate con, inspection photos, daily updates, 24hr notice, интерес к weekly loads. Luxury auto relationships = premium rates!", suggestions: [
                    { text: "Thank you Rachel! We'll sign rate con immediately. Driver will send complete 360-degree inspection photos and condition reports at pickup. Customer will receive daily GPS location updates via app and we'll call 24 hours before delivery. We're very interested in 5-7 weekly luxury auto loads Detroit-Southwest - our specialty! Looking forward to long-term partnership!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Благодарность по имени, все действия (inspection, daily updates, 24hr notice), энтузиазм weekly loads, partnership!", path: "master" },
                    { text: "Thank you! We'll sign right away and send all inspection documentation. Customer will get daily updates and 24hr notice. Very interested in more luxury auto loads!", quality: "good", analytics: "✔️ Хорошо! Благодарность, подтверждение, интерес.", path: "master" },
                    { text: "Thank you, we'll take care of it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, thanks.", quality: "weak", analytics: "⚠️ Слабо.", path: "master" },
                    { text: "Yeah, got it.", quality: "aggressive", analytics: "🔴 Агрессивно.", path: "master" },
                    { text: "What was pickup time?", quality: "fail", analytics: "❌ ПРОВАЛ! Не запомнил детали!", path: "master" }
                ]
            },
            { brokerResponse: "Perfect! Rate con sent. Handle those Teslas with care!", outcome: { type: "success", quality: "excellent", rate: "$5,400", ratePerMile: "$2.84/mile", relationship: "strengthened", dialogueTime: "7-8 min", questionsAsked: "Professional", detailLevel: "high", futureOpportunity: "repeat", weeklyLoads: "5-7 luxury auto loads weekly Detroit-Southwest ($27,000-37,800/week)", feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $400 больше ($5,400 vs $5,000 posted).\n\n💡 УРОК: Luxury auto требует enclosed hard-sided carrier, $1M+ insurance ($150K+ per-vehicle), 360° inspection (20-30 photos), Tesla experience (battery >20%), zero damage record. Торг: Posted $5,000 → Вы $5,700 → Встречное $5,300 → Финал $5,400 ($2.84/mile). Заработали $400 = 8% прибавка!\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto loads платят premium rates ($2.75-3.00/mile) из-за high value и white-glove service. Ваш профессионализм = 5-7 loads weekly ($27,000-37,800/неделю = $108,000-151,200/месяц потенциал)!` } }
        ],
        reject1: [
            {
                brokerQuestion: "Hold on. I need you to understand something - this is a $300K luxury auto load with 3 Tesla vehicles. My questions about enclosed carrier, insurance, and qualifications are not optional, they're mandatory for this type of cargo.\n\nI'm willing to continue if you can provide the information professionally. So let me ask again: Do you have enclosed hard-sided carrier (not tarp), $1M+ cargo insurance with per-vehicle limits, and experience with luxury vehicles? Please answer specifically.",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил о неприемлемом тоне. Теперь ОБЯЗАТЕЛЬНО дайте детали: enclosed hard-sided (aluminum walls), insurance ($1M+, per-vehicle $150K+), опыт с luxury/Tesla. Это ваш шанс исправиться!",
                suggestions: [
                    { text: "You're absolutely right, I apologize for the tone. Yes, we have enclosed hard-sided carrier with aluminum walls, not tarp. $1.5M cargo insurance with $200K per-vehicle limit through Northland. Driver has 5 years experience with luxury vehicles including Tesla - knows battery maintenance, proper tie-down points. Zero damage claims. Can I provide our insurance certificate?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали (hard-sided aluminum, $1.5M, $200K per-vehicle, Northland, Tesla experience, zero claims), готовность!", path: "master" },
                    { text: "Sorry about that. Yes, enclosed hard-sided carrier. $1M+ insurance with per-vehicle coverage. Driver experienced with luxury vehicles. I can send certificate.", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, готовность.", path: "master" },
                    { text: "Yes, we have enclosed carrier and insurance.", quality: "normal", analytics: "⚪ Нормально. Минимальный ответ.", path: "master" },
                    { text: "Look, I said we have it...", quality: "weak", analytics: "⚠️ Слабо. Продолжает грубить!", path: "reject1_final" },
                    { text: "Why are you making this so difficult?", quality: "aggressive", analytics: "🔴 Агрессивно! Не понял предупреждение!", path: "reject1_final" }
                ]
            },
            { brokerResponse: "I'm sorry, but that's not how we work with carriers on luxury auto loads. These are $300K vehicles that require proper qualifications, insurance verification, and professional communication. I need a carrier who takes this seriously and can answer basic questions about their equipment and capabilities. I'll pass on this one. Good luck.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "1-2 min", questionsAsked: "None", detailLevel: "none", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: НЕПРОФЕССИОНАЛЬНОЕ ПОВЕДЕНИЕ\n\n💡 УРОК: Грубость и агрессия НЕДОПУСТИМЫ в переговорах, особенно с luxury loads. Брокеры работают с дорогими грузами ($300K+) и требуют профессионального общения. Фраза 'Just send pickup!' показывает неуважение и нежелание отвечать на законные вопросы о квалификации.\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto brokers имеют список проверенных carriers и НЕМЕДЛЕННО отказывают грубым диспетчерам. Одна такая ошибка = потеря доступа к premium loads ($5,000-7,000 per load). Профессионализм = деньги!" } }
        ],
        reject1_final: [
            {},
            { brokerResponse: "I gave you a chance to correct your approach, but you're continuing with the same unprofessional attitude. I don't have time for this. I need carriers who understand that luxury auto transport requires detailed communication and mutual respect. I'll find someone else. Good luck.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "none", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ИГНОРИРОВАНИЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер дал ВТОРОЙ ШАНС, но вы продолжили грубить. Это показывает полное непонимание профессионализма. Luxury auto brokers не будут работать с carriers, которые не могут вести себя уважительно даже после предупреждения.\n\n🎯 РЕАЛЬНОСТЬ: Вы получили предупреждение и шанс исправиться, но проигнорировали его. Результат: blacklist навсегда. Потеря: $5,400 сейчас + $27,000-37,800/неделю в будущем = $108,000-151,200/месяц потенциал. Одна ошибка = конец карьеры в luxury auto." } }
        ],
        reject2: [
            {
                brokerQuestion: "I need to stop you right there. These are not 'just 3 cars' - these are 3 Tesla Model S luxury vehicles worth $100K each, $300K total value. This requires complete 360-degree inspection with 20-30 photos per vehicle, detailed condition reports, customer signatures, and professional handling.\n\nIf you want this load, I need you to take it seriously. Can you perform complete 360-degree inspection with detailed photo documentation, condition reports, and provide customer with inspection app for real-time tracking? Please answer professionally.",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил о пренебрежительном отношении. Теперь ОБЯЗАТЕЛЬНО подтвердите: 360° inspection (20-30 photos per vehicle), condition reports, customer signatures, mobile app tracking. Покажите серьезность!",
                suggestions: [
                    { text: "You're absolutely right, I apologize. These are high-value vehicles that deserve proper care. Yes, we perform complete 360-degree inspection: 20-30 photos per vehicle covering all angles, detailed condition report documenting every scratch or mark, customer signature at pickup and delivery. We use mobile app with GPS timestamps so customer can see real-time inspection photos and location. Driver experienced with luxury vehicles. Is there anything specific the customer wants documented?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали (20-30 photos, condition report, signatures, mobile app, GPS, timestamps), вопрос!", path: "master" },
                    { text: "Sorry, you're right. Yes, we do complete 360-degree inspection with photos, condition reports, and customer signatures. Mobile app for tracking. Any special requirements?", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, вопрос.", path: "master" },
                    { text: "Yes, we do inspections with photos and reports.", quality: "normal", analytics: "⚪ Нормально. Минимальный ответ.", path: "master" },
                    { text: "Fine, we'll do inspections...", quality: "weak", analytics: "⚠️ Слабо. Неохотно!", path: "reject2_final" },
                    { text: "It's still just cars. What's the rate?", quality: "aggressive", analytics: "🔴 Агрессивно! Продолжает пренебрегать!", path: "reject2_final" }
                ]
            },
            { brokerResponse: "I don't think this is a good fit. These are high-value luxury vehicles worth $300K total, not 'just 3 cars'. I need a carrier who understands the responsibility and can discuss inspection procedures professionally. I'll find someone else who takes this seriously. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "2-3 min", questionsAsked: "Minimal", detailLevel: "low", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРЕНЕБРЕЖИТЕЛЬНОЕ ОТНОШЕНИЕ К LUXURY CARGO\n\n💡 УРОК: Фраза 'It's just 3 cars' показывает непонимание ценности груза. 3 Tesla Model S = $300K! Luxury auto brokers требуют уважительного отношения к грузу и готовности обсуждать inspection procedures, insurance, documentation.\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto - это специализированная ниша с высокими требованиями. Пренебрежение = немедленный отказ. Профессиональные carriers зарабатывают $5,000-7,000 per load, потому что относятся серьезно к каждой детали." } }
        ],
        reject2_final: [
            {},
            { brokerResponse: "I explained the value and requirements clearly, but you're still not taking this seriously. Luxury auto transport is not for everyone - it requires attention to detail and respect for high-value cargo. I need someone who understands that. I'll pass. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "low", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРОДОЛЖЕНИЕ ПРЕНЕБРЕЖЕНИЯ ПОСЛЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер объяснил ценность груза ($300K) и требования (360° inspection, photos, reports), но вы продолжили пренебрегать. Это показывает, что вы не подходите для luxury auto transport.\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto требует особого отношения. Carriers, которые не понимают разницу между 'just cars' и '$300K luxury vehicles', не получают эти loads. Потеря: $5,400 + weekly loads $27,000-37,800." } }
        ],
        reject3: [
            {
                brokerQuestion: "Let me be clear - insurance verification is not optional for luxury auto loads, it's mandatory. I'm transporting $300K worth of Tesla vehicles and I need to verify proper coverage before booking.\n\nI'm willing to continue if you can provide the details. So let me ask again: What is your cargo insurance amount, what is the per-vehicle limit, which company provides it, and when does it expire? I'll need the certificate before we proceed. Can you provide this information?",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер требует insurance details. Дайте: сумму ($1M+), per-vehicle limit ($150K+), компанию, срок действия. Предложите отправить certificate. Это обязательно для luxury auto!",
                suggestions: [
                    { text: "You're absolutely right, I apologize. Our cargo insurance is $1.5M through Northland Insurance specialized in luxury auto. Per-vehicle limit is $200K. Certificate current, expires November 2027. Coverage specifically includes Tesla and luxury vehicles. I can email the certificate right now - what's your email address?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, все детали ($1.5M, Northland, $200K per-vehicle, срок, Tesla coverage), готовность отправить!", path: "master" },
                    { text: "Sorry. $1M+ cargo insurance with $150K per-vehicle limit. Certificate current. I'll send it now.", quality: "good", analytics: "✔️ Хорошо! Извинение, детали, готовность.", path: "master" },
                    { text: "Yes, $1M cargo insurance. Certificate available.", quality: "normal", analytics: "⚪ Нормально. Минимум.", path: "master" },
                    { text: "I told you we have insurance...", quality: "weak", analytics: "⚠️ Слабо. Продолжает уклоняться!", path: "reject3_final" },
                    { text: "This is too much paperwork!", quality: "aggressive", analytics: "🔴 Агрессивно! Отказ от требований!", path: "reject3_final" }
                ]
            },
            { brokerResponse: "Insurance verification is not optional for luxury auto loads - it's mandatory. Saying 'insurance fine' without providing details tells me you either don't have proper coverage or don't understand the requirements. I need $1M+ with per-vehicle limits for Tesla transport. I'll pass. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "rejected", dialogueTime: "3-4 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ОТКАЗ ПРЕДОСТАВИТЬ INSURANCE DETAILS\n\n💡 УРОК: Luxury auto требует $1M+ cargo insurance с per-vehicle limit $150K-200K. Фраза 'Insurance fine! Rate?' показывает нежелание обсуждать критичные детали. Брокеры ОБЯЗАНЫ проверить insurance перед бронированием $300K груза.\n\n🎯 РЕАЛЬНОСТЬ: Без proper insurance certificate = нет luxury loads. Профессиональные carriers всегда готовы предоставить: сумму, per-vehicle limit, компанию, срок действия, coverage details. Это не 'лишние вопросы' - это защита всех сторон." } }
        ],
        reject3_final: [
            {},
            { brokerResponse: "I explained why insurance verification is mandatory for $300K cargo, but you're still refusing to provide details. This tells me you either don't have adequate coverage or don't understand luxury auto requirements. Either way, I can't work with you. I'll find a carrier who has proper insurance and is willing to verify it. Thanks.", outcome: { type: "failure", quality: "fail", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "4-5 min", questionsAsked: "Some", detailLevel: "medium", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ОТКАЗ ПРЕДОСТАВИТЬ INSURANCE ПОСЛЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер объяснил важность insurance verification для $300K груза, но вы продолжили уклоняться. Это критическая ошибка. Luxury auto brokers НЕ МОГУТ работать без verified insurance - это их юридическая ответственность.\n\n🎯 РЕАЛЬНОСТЬ: Отказ предоставить insurance details = автоматический blacklist. Профессиональные carriers имеют $1.5M+ insurance и с гордостью предоставляют certificates. Потеря: $5,400 + weekly loads." } }
        ],
        reject4: [
            {
                brokerQuestion: "Hold on. I don't appreciate ultimatums or aggressive tactics. We were having a professional negotiation - I offered $5,300, you countered, and we were working toward a fair rate.\n\nIf you want to continue, let's negotiate professionally. My offer is $5,300 ($2.79/mile) for this load. You can counter with a reasonable rate and justification, or we can meet in the middle. But threats and ultimatums won't work with me. What's your professional counter-offer?",
                dispatcherPrompt: "⚠️ ПОСЛЕДНИЙ ШАНС! Брокер предупредил об ультиматумах. Теперь дайте ПРОФЕССИОНАЛЬНЫЙ counter-offer: $5,400-5,500 с обоснованием (enclosed, insurance, inspection, Tesla experience). Торг должен быть уважительным!",
                suggestions: [
                    { text: "You're absolutely right, I apologize for the aggressive approach. Let me counter professionally: $5,450 would work for us. That's $2.87/mile, which is fair for enclosed hard-sided carrier, $1.5M insurance with $200K per-vehicle limit, complete 360-degree inspection with 20-30 photos, and Tesla-experienced driver with zero damage record. Can we meet at $5,450?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Извинение, профессиональный counter ($5,450), полное обоснование!", path: "master" },
                    { text: "Sorry about that. How about $5,400? Fair middle ground for luxury auto with full inspection and insurance.", quality: "good", analytics: "✔️ Хорошо! Извинение, разумный counter, обоснование.", path: "master" },
                    { text: "$5,350 would work for us.", quality: "normal", analytics: "⚪ Нормально. Минимальный counter.", path: "master" },
                    { text: "Fine, $5,300 then...", quality: "weak", analytics: "⚠️ Слабо. Неохотно!", path: "master" },
                    { text: "My rate or nothing!", quality: "aggressive", analytics: "🔴 Агрессивно! Продолжает ультиматумы!", path: "reject4_final" }
                ]
            },
            { brokerResponse: "I don't appreciate ultimatums or aggressive negotiation tactics. We had a fair discussion going, but demanding rates or threatening to walk shows you're not someone I want to work with long-term. I have 5-7 luxury auto loads weekly and need reliable, professional partners. This isn't going to work. Good luck.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "damaged", dialogueTime: "6-7 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: АГРЕССИВНЫЕ ПЕРЕГОВОРЫ И УЛЬТИМАТУМЫ\n\n💡 УРОК: Фразы '$5,500 or I walk!', 'I want $5,500!', 'Just send rate con!' показывают агрессию и неуважение. Брокеры ищут ДОЛГОСРОЧНЫХ партнеров для 5-7 loads weekly ($27,000-37,800/неделю). Один агрессивный диалог = потеря доступа к premium loads навсегда.\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto brokers имеют список проверенных carriers и НЕМЕДЛЕННО blacklist агрессивных диспетчеров. Торг должен быть профессиональным: обоснование, встречные предложения, компромисс. Ультиматумы = конец отношений. Вы потеряли $5,400 сейчас + $27,000-37,800/неделю в будущем = $108,000-151,200/месяц потенциал!" } }
        ],
        reject4_final: [
            {},
            { brokerResponse: "I gave you a chance to negotiate professionally, but you're continuing with ultimatums and aggressive tactics. I don't work this way, and I don't want carriers who do. I have 5-7 luxury auto loads weekly worth $27,000-37,800, and I need professional partners I can trust. You're not it. Good luck finding loads with that attitude.", outcome: { type: "failure", quality: "poor", rate: "$0", ratePerMile: "$0/mile", relationship: "blacklisted", dialogueTime: "7-8 min", questionsAsked: "Good", detailLevel: "high", futureOpportunity: "blacklisted", weeklyLoads: "No loads", feedback: "❌ ОТКАЗ: ПРОДОЛЖЕНИЕ АГРЕССИИ ПОСЛЕ ПРЕДУПРЕЖДЕНИЯ\n\n💡 УРОК: Брокер дал шанс вести переговоры профессионально, объяснил важность долгосрочных отношений (5-7 loads weekly), но вы продолжили ультиматумы. Это показывает полное непонимание бизнеса.\n\n🎯 РЕАЛЬНОСТЬ: Luxury auto brokers работают только с профессиональными carriers. Агрессия после предупреждения = permanent blacklist. Потеря: $5,400 сейчас + $27,000-37,800/неделю = $108,000-151,200/месяц потенциал. Ваша репутация испорчена - брокеры делятся информацией о проблемных carriers." } }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario12);
    console.log('✅ Scenario 12 (Auto Transport Luxury Detroit-Phoenix) added');
} else {
    console.warn('⚠️ allScenarios not found');
}
