// СИМУЛЬ - База диалогов для обучения диспетчеров
// Версия: Dialogue #7 - Refrigerated Produce (NEW DIALOG SYSTEM V2.0)
// Дата: 2026-03-07
// ПРАВИЛО: Диспетчер звонит первым! 6 вариантов качества в каждом шаге!

console.log('🔵 Loading scenarios-data-v7.js...');

// Dialogue #7: Refrigerated Produce - Fresno CA → Boston MA
// Hard difficulty, temperature-controlled, time-sensitive produce
// NEW DIALOG SYSTEM V2.0

const scenario7 = {
    id: 7,
    route: "Fresno CA → Boston MA",
    distance: 3050,
    equipment: "Refrigerated Trailer (53ft, multi-temp)",
    cargo: "Fresh produce (strawberries, lettuce, broccoli)",
    weight: "42,000 lbs (21 pallets)",
    deadline: "Pickup tomorrow 6 AM, Delivery in 4 days (96 hours max)",
    brokerStyle: "Experienced produce broker, detail-oriented",
    difficulty: "hard",

    initialMessage: "Good morning! This is Alex from Fresh Express Logistics.\nI saw your load posting for Fresno to Boston reefer load.\nWe specialize in temperature-controlled produce transport.\nIs this load still available?",

    paths: {
        master: [
            // ШАГ 1: MC verification + reefer availability
            {
                brokerQuestion: "Good morning! This is David from Coast to Coast Produce Brokers.\nYes, the load is available.\nWhat's your MC number and do you have a reefer available in California right now?",
                dispatcherPrompt: "💎 Брокер проверяет MC и наличие рефрижератора. Дайте точную информацию.",
                suggestions: [
                    {
                        text: "Morning David! This is Alex from Fresh Express, MC 889900. We have a 2022 Kenworth T680 with 53-foot Thermo King reefer unit available right now in Bakersfield, about 110 miles from Fresno. Just finished delivering citrus to a distribution center this morning at 4 AM. Trailer is empty, pre-cooled, and reefer unit serviced last week. We run produce lanes regularly. Can pick up tomorrow morning. What are the temperature requirements?",
                        quality: "excellent",
                        analytics: "✨ Отлично! MC, точное местоположение, reefer details, опыт с produce, готовность.",
                        path: "master"
                    },
                    {
                        text: "Hi David! MC 889900, Fresh Express Logistics. We have a 53-foot reefer in Bakersfield, about 110 miles from Fresno. Empty since this morning, reefer unit working perfectly. Available for pickup tomorrow. What's the temperature setting?",
                        quality: "good",
                        analytics: "✔️ Хорошо! MC, местоположение, reefer готов.",
                        path: "master"
                    },
                    {
                        text: "MC 889900. We have a reefer trailer in California, near Fresno. Empty and ready for tomorrow pickup.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовая информация.",
                        path: "master"
                    },
                    {
                        text: "MC 889900. We have a reefer somewhere in Central California. Should be available tomorrow.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неточное местоположение, неуверенность.",
                        path: "master"
                    },
                    {
                        text: "Why do you need all these details? Just give me the rate and pickup address!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Грубый тон, нет профессионализма.",
                        path: "master"
                    },
                    {
                        text: "Uh... let me check the MC number. And I need to call driver to see where the truck is. Can I call you back in 20 minutes?",
                        quality: "fail",
                        analytics: "❌ Провал. Не знает базовую информацию о компании и оборудовании.",
                        path: "master"
                    }
                ]
            },
            // ШАГ 2: Reefer unit specifications
            {
                brokerQuestion: "MC verified, good safety rating.\nBakersfield location works - that's close enough.\nWhat's the reefer unit brand and when was it last serviced?\nProduce loads require reliable temperature control.",
                dispatcherPrompt: "💎 Брокер проверяет reefer unit. Дайте детали обслуживания.",
                suggestions: [
                    {
                        text: "It's a 2021 Thermo King Precedent S-600 unit with 6,000 hours. Last full service was March 1st - just 6 days ago. Oil changed, belts checked, refrigerant topped off. We have service records and can email them. Unit maintains temperature within +/- 1 degree. We also carry backup generator and extra fuel for continuous cooling. Temperature monitoring system with real-time alerts to dispatch.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Детальная информация о unit, service records, backup systems, monitoring.",
                        path: "master"
                    },
                    {
                        text: "Thermo King Precedent unit, serviced March 1st - 6 days ago. All maintenance current, runs perfectly. We have service records available. Temperature monitoring system installed.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Ключевая информация о unit и service.",
                        path: "master"
                    },
                    {
                        text: "Thermo King unit, serviced recently. Runs well, no issues.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовая информация.",
                        path: "master"
                    },
                    {
                        text: "It's a Thermo King. I think it was serviced last month or maybe two months ago.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неточная информация о критическом обслуживании.",
                        path: "master"
                    },
                    {
                        text: "The reefer works fine! We've been running it for months without problems! Why all these questions?",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Пренебрежение важными требованиями.",
                        path: "reject1"
                    },
                    {
                        text: "I'm not sure about the service date. Let me ask the mechanic and get back to you.",
                        quality: "fail",
                        analytics: "❌ Провал. Не знает критическую информацию о reefer maintenance.",
                        path: "reject1"
                    }
                ]
            },
            // ШАГ 3: Temperature requirements and produce experience
            {
                brokerQuestion: "Excellent equipment and maintenance.\nThis is mixed produce: strawberries at 34°F, lettuce at 36°F, broccoli at 32°F.\nDo you have experience with multi-temperature produce loads?",
                dispatcherPrompt: "💎 Брокер спрашивает о multi-temp опыте. Покажите знание produce transport.",
                suggestions: [
                    {
                        text: "Absolutely! We run multi-temp produce regularly. For this load, we'll set zones: strawberries 34°F (front), lettuce 36°F (middle), broccoli 32°F (rear). Our reefer has three-zone capability. Driver will check temps every 2 hours and log readings. We know strawberries are extremely sensitive - any temp above 36°F starts deterioration. Lettuce needs airflow. Broccoli requires coldest setting. We've hauled berries from California to East Coast many times with zero claims.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Детальное знание produce requirements, multi-temp setup, опыт, zero claims.",
                        path: "master"
                    },
                    {
                        text: "Yes, we handle multi-temp produce loads regularly. We'll set strawberries at 34°F, lettuce 36°F, broccoli 32°F in separate zones. Driver checks temps every 2 hours. We've done California berry runs before with no issues.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Знание temperatures и опыт с produce.",
                        path: "master"
                    },
                    {
                        text: "Yes, we can handle different temperatures. We'll set the reefer accordingly and monitor during transport.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое подтверждение.",
                        path: "master"
                    },
                    {
                        text: "We've done some produce loads. Can we just set it to 34°F for everything? That should work.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Не понимает multi-temp requirements.",
                        path: "master"
                    },
                    {
                        text: "Multi-temp? Just set it cold! Produce is produce! Why make it complicated?",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает produce sensitivity.",
                        path: "reject2"
                    },
                    {
                        text: "This would be our first produce load. But we're good with reefers! How hard can it be?",
                        quality: "fail",
                        analytics: "❌ Провал. Нет опыта с produce, не понимает сложность.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 4: Pre-cooling and loading procedures
            {
                brokerQuestion: "Great produce knowledge!\nThe shipper requires trailer to be pre-cooled to 34°F before loading.\nHow long does your unit need to pre-cool an empty trailer?",
                dispatcherPrompt: "💎 Брокер спрашивает о pre-cooling. Дайте реалистичное время.",
                suggestions: [
                    {
                        text: "Our Thermo King unit pre-cools empty 53-foot trailer from ambient to 34°F in about 90 minutes in current weather. Since pickup is tomorrow 6 AM, driver will arrive at 4:30 AM to start pre-cooling by 4:45 AM. That gives us 75 minutes before 6 AM appointment. If shipper wants trailer colder, driver can arrive at 4 AM. We always pre-cool before produce loading - it's standard procedure for us.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Точное время, план arrival, понимание процедуры, flexibility.",
                        path: "master"
                    },
                    {
                        text: "Takes about 90 minutes to pre-cool to 34°F. Driver will arrive at 4:30 AM to start cooling before 6 AM pickup. We always pre-cool for produce loads.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Реалистичное время и план.",
                        path: "master"
                    },
                    {
                        text: "About 90 minutes for pre-cooling. Driver will arrive early to start the unit.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовая информация.",
                        path: "master"
                    },
                    {
                        text: "Maybe an hour? Driver will turn it on when he gets there.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неточное время, нет плана.",
                        path: "master"
                    },
                    {
                        text: "Pre-cooling? Can't we just turn it on and start loading? This wastes time!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает produce requirements.",
                        path: "reject2"
                    },
                    {
                        text: "I don't know how long it takes. Driver will figure it out when he's there.",
                        quality: "fail",
                        analytics: "❌ Провал. Не знает свое оборудование.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 5: Transit time and route planning
            {
                brokerQuestion: "Perfect pre-cooling plan.\nThis is 3,050 miles, pickup tomorrow 6 AM Friday.\nDelivery must be Monday by 6 AM - that's 96 hours maximum.\nCan you make this tight schedule with team drivers or solo?",
                dispatcherPrompt: "💎 Брокер дал tight deadline. Объясните как выполните.",
                suggestions: [
                    {
                        text: "We'll run team drivers for this time-sensitive produce load. 3,050 miles in 96 hours is 31.8 mph average including all stops. With team, we can drive 20 hours per day at 60 mph = 1,200 miles/day. Day 1: 1,200 miles to Utah. Day 2: 1,200 miles to Nebraska. Day 3: 650 miles to Boston, arrive Sunday evening with buffer time. We'll take I-40 to I-44 to I-70 to I-80 - fastest route, avoid mountains. Fuel stops every 500 miles, 30 minutes each. Driver swap every 10 hours. We'll send location updates every 6 hours. This schedule is achievable with professional team.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Team drivers, детальная математика, route plan, timeline, updates.",
                        path: "master"
                    },
                    {
                        text: "We'll use team drivers. 3,050 miles in 96 hours is doable - about 32 mph average. Team can drive 20 hours per day. We'll take I-40 to I-70 to I-80 route. Arrive Sunday evening with time to spare. Location updates every 6 hours.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Team drivers, математика, route, updates.",
                        path: "master"
                    },
                    {
                        text: "We'll run team drivers for this load. 96 hours is enough time for 3,050 miles. We'll take the fastest route and keep you updated.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое подтверждение team.",
                        path: "master"
                    },
                    {
                        text: "We can try with solo driver if he pushes hard. Maybe 11 hours per day driving?",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Solo driver не может выполнить, нарушение HOS.",
                        path: "master"
                    },
                    {
                        text: "96 hours for 3,000 miles? That's impossible! You need to give us 5 days minimum!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает team driver capabilities.",
                        path: "reject3"
                    },
                    {
                        text: "Solo driver can do it if he drives fast and skips some breaks.",
                        quality: "fail",
                        analytics: "❌ Провал. Нарушение HOS regulations, unrealistic.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 6: Rate negotiation
            {
                brokerQuestion: "Excellent planning with team drivers!\nFor this load: 3,050 miles, reefer, produce, team drivers, 96-hour delivery.\nI'm offering $7,500 all-in. That's $2.46 per mile.\nWhat do you think?",
                dispatcherPrompt: "💎 Брокер предложил ставку. Оцените и ответьте профессионально.",
                suggestions: [
                    {
                        text: "Thank you for the offer, David. $7,500 is a starting point. Let me break down our costs: team drivers cost $0.85/mile ($2,593), fuel at $0.65/mile ($1,983), reefer fuel $0.15/mile ($458), insurance and overhead $0.35/mile ($1,068). That's $6,102 in costs. At $7,500, our margin is $1,398 or 18.6%. For time-sensitive produce with team drivers and 96-hour deadline, market rate is typically $2.60-$2.75/mile. Could we do $8,000? That's $2.62/mile, which reflects the team driver premium, reefer operation, and tight timeline. We guarantee on-time delivery with temperature logs and real-time tracking.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Детальный cost breakdown, рыночные ставки, обоснование, профессиональные переговоры.",
                        path: "master"
                    },
                    {
                        text: "I appreciate the offer. For team drivers on time-sensitive produce with reefer, could we do $8,000? That's $2.62/mile, which is fair for this specialized service. We guarantee on-time delivery with full temperature monitoring.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Вежливые переговоры с обоснованием.",
                        path: "master"
                    },
                    {
                        text: "Can we do $8,000? That would work better for team drivers and reefer operation.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовая попытка переговоров.",
                        path: "master"
                    },
                    {
                        text: "Hmm, $7,500 seems low for teams. Maybe $7,800?",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неуверенность, слабое обоснование.",
                        path: "master"
                    },
                    {
                        text: "$7,500? That's insulting for 3,000 miles with teams! I need at least $9,500 or forget it!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Грубость, нереалистичные требования.",
                        path: "reject3"
                    },
                    {
                        text: "I'll take it! $7,500 works! When do we pick up?",
                        quality: "fail",
                        analytics: "❌ Провал. Принял первое предложение без переговоров, потерял $500.",
                        path: "master"
                    }
                ]
            },
            // ШАГ 7: Detention and temperature failure penalties
            {
                brokerQuestion: "I can do $7,800 final. That's $2.56/mile for team reefer produce.\nDetention is $100/hour after 2 hours free time.\nLayover $300/day if needed.\nBut I need to mention: if produce arrives with temperature failure, there's a $2,000 penalty.\nSound fair?",
                dispatcherPrompt: "💎 Брокер дал финальную ставку и условия. Обсудите temperature penalty.",
                suggestions: [
                    {
                        text: "Thank you! $7,800 at $2.56/mile works for us. Detention $100/hour after 2 hours, layover $300/day - understood. Regarding temperature penalty: we accept it because we're confident in our equipment and procedures. Our Thermo King unit has backup systems, we monitor temps every 2 hours, and we have 7 years of produce transport with zero temperature failures. We'll provide complete temperature logs from pickup to delivery. Just to clarify: the penalty applies only if temperature failure is our fault, not due to shipper loading warm product or receiver delays, correct? We'll document all temps at loading.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Принятие ставки, уверенность в equipment, уточнение penalty terms, защита интересов.",
                        path: "master"
                    },
                    {
                        text: "Great! $7,800 works. Detention and layover terms accepted. We understand the temperature penalty - we're confident in our reefer unit and monitoring. We'll provide full temperature logs. Just to confirm: penalty applies only if failure is our fault during transport, correct?",
                        quality: "good",
                        analytics: "✔️ Хорошо! Принятие условий с важным уточнением.",
                        path: "master"
                    },
                    {
                        text: "Yes, $7,800 is acceptable. We understand the temperature penalty. Our equipment is reliable.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое согласие.",
                        path: "master"
                    },
                    {
                        text: "Okay, I guess that's acceptable. The temperature thing makes me nervous though.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неуверенность в своем equipment.",
                        path: "master"
                    },
                    {
                        text: "$2,000 penalty? That's ridiculous! What if the shipper loads warm product? We're not taking that risk!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Отказ от стандартных produce terms.",
                        path: "reject3"
                    },
                    {
                        text: "Wait, temperature penalty? Nobody told me about that! I need to talk to my boss first.",
                        quality: "fail",
                        analytics: "❌ Провал. Не знает стандартные produce contract terms.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 8: Shipper details and loading procedures
            {
                brokerQuestion: "Correct - penalty only applies if temperature failure happens during your transport, not shipper or receiver issues.\nShipper details:\nFresno Valley Farms\n8800 S Elm Ave, Fresno CA 93706\nContact: Warehouse Manager Carlos Martinez 559-555-0300\nPickup tomorrow Friday 6 AM - 8 AM\nWhat questions do you have about pickup?",
                dispatcherPrompt: "💎 Брокер дал shipper детали. Задайте важные вопросы о produce loading.",
                suggestions: [
                    {
                        text: "Perfect! I have: Fresno Valley Farms, 8800 S Elm Ave, Carlos Martinez 559-555-0300, Friday 6-8 AM. Questions: How long does loading take for 21 pallets? Do they load by temperature zones or do we need to organize? Are pallets wrapped and ready? Do they provide load locks and straps? Should driver arrive at 4:30 AM to pre-cool? Will Carlos do initial temperature check and sign off on temps? Any special handling for strawberries? Do they provide pulp thermometers to verify product temps?",
                        quality: "excellent",
                        analytics: "✨ Отлично! Подтверждение деталей + 8 критических вопросов о produce loading.",
                        path: "master"
                    },
                    {
                        text: "Got it. Carlos 559-555-0300, Friday 6-8 AM. How long is loading? Do they load by temperature zones? Are pallets ready? Should driver arrive at 4:30 AM to pre-cool? Will they verify product temps at loading?",
                        quality: "good",
                        analytics: "✔️ Хорошо! Подтверждение + важные produce вопросы.",
                        path: "master"
                    },
                    {
                        text: "Okay, I have the address and contact. How long does loading take? Should driver arrive early to pre-cool?",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовые вопросы.",
                        path: "master"
                    },
                    {
                        text: "Got the address. We'll be there at 6 AM. What's the delivery info?",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Не задал вопросы о produce procedures.",
                        path: "master"
                    },
                    {
                        text: "Just send me the rate confirmation! Driver will handle everything at pickup!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Нет интереса к критическим деталям.",
                        path: "reject1"
                    },
                    {
                        text: "Okay, we'll be there. What's next?",
                        quality: "fail",
                        analytics: "❌ Провал. Не задал ни одного вопроса о produce loading.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 9: Loading procedures and temperature verification
            {
                brokerQuestion: "Great questions!\nLoading takes 90 minutes for 21 pallets.\nThey load by zones: strawberries front, lettuce middle, broccoli rear.\nPallets wrapped, ready, they provide 8 load locks.\nYes, arrive 4:30 AM to pre-cool.\nCarlos will check product temps with pulp thermometer and document on BOL.\nStrawberries are in ventilated boxes - don't block airflow.\nAny questions about temperature monitoring during transport?",
                dispatcherPrompt: "💎 Брокер дал loading детали. Спросите о temperature monitoring.",
                suggestions: [
                    {
                        text: "Perfect! 90 min loading, zones organized by shipper, 8 load locks provided, arrive 4:30 AM, Carlos verifies temps with pulp thermometer, strawberries need airflow - all clear. For temperature monitoring: Our system logs temps every 15 minutes automatically. Driver will manually check and record temps every 2 hours at front, middle, and rear zones. We'll email you temperature reports twice daily. If any zone varies more than 2 degrees from target, driver gets automatic alert and will adjust immediately. We also check temps at every fuel stop. Should we send temp reports to you or directly to receiver? Any specific temperature documentation format you need?",
                        quality: "excellent",
                        analytics: "✨ Отлично! Подтверждение loading + детальный monitoring plan + проактивные вопросы.",
                        path: "master"
                    },
                    {
                        text: "Understood on loading. For monitoring: we log temps every 15 minutes automatically, driver checks manually every 2 hours. We'll send you temperature reports twice daily. Driver gets alerts if temps vary. Should reports go to you or receiver?",
                        quality: "good",
                        analytics: "✔️ Хорошо! Хороший monitoring plan.",
                        path: "master"
                    },
                    {
                        text: "Got it on loading. We'll monitor temperatures during transport and send you updates.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое подтверждение.",
                        path: "master"
                    },
                    {
                        text: "Okay. Driver will check temperatures when he remembers.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Нет системного monitoring плана.",
                        path: "master"
                    },
                    {
                        text: "Temperature monitoring? The reefer has a thermostat! It maintains temp automatically! Why all this checking?",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает produce monitoring requirements.",
                        path: "reject2"
                    },
                    {
                        text: "We'll just set it and forget it. The reefer does its job.",
                        quality: "fail",
                        analytics: "❌ Провал. Не понимает необходимость constant monitoring для produce.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 10: Delivery details and receiver requirements
            {
                brokerQuestion: "Excellent monitoring plan! Send reports to me and I'll forward to receiver.\nDelivery:\nBoston Fresh Market\n250 New Market Square, Boston MA 02118\nContact: Receiving Manager Jennifer O'Brien 617-555-0400\nDelivery Monday 4 AM - 6 AM (before market opens)\nCall Jennifer Sunday evening with ETA.\nThey'll inspect temps and product condition before unloading.\nAny questions about delivery?",
                dispatcherPrompt: "💎 Брокер дал delivery детали. Задайте вопросы о receiver procedures.",
                suggestions: [
                    {
                        text: "Perfect! Boston Fresh Market, 250 New Market Square, Jennifer O'Brien 617-555-0400, Monday 4-6 AM. Driver calls Sunday evening with ETA. Questions: How long does unloading take? Do they have dock appointments or first-come-first-served? Where should driver park if he arrives early Sunday night? Will they provide temperature inspection report that we can keep for records? If they find any issues, what's the dispute process? Do they need any special paperwork besides BOL and temp logs? Any access restrictions or security procedures at 4 AM? Should driver bring the temp logs in printed form or digital is okay?",
                        quality: "excellent",
                        analytics: "✨ Отлично! Подтверждение + 8 детальных вопросов о delivery procedures и documentation.",
                        path: "master"
                    },
                    {
                        text: "Got it! Jennifer 617-555-0400, Monday 4-6 AM, call Sunday evening. How long is unloading? Do we need dock appointment? Where to park if early? Will they provide temp inspection report? Any special paperwork needed?",
                        quality: "good",
                        analytics: "✔️ Хорошо! Важные вопросы о delivery.",
                        path: "master"
                    },
                    {
                        text: "Understood. Monday 4-6 AM in Boston. How long does unloading take? Any parking restrictions?",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовые вопросы.",
                        path: "master"
                    },
                    {
                        text: "Okay. Monday morning delivery. We'll call Sunday. What else?",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Минимальный интерес к деталям.",
                        path: "master"
                    },
                    {
                        text: "4 AM delivery? That's way too early! Can we deliver at normal business hours like 9 AM?",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает produce market requirements.",
                        path: "reject2"
                    },
                    {
                        text: "Just give me the address. Driver will figure it out when he gets there.",
                        quality: "fail",
                        analytics: "❌ Провал. Не собирает критическую информацию.",
                        path: "reject2"
                    }
                ]
            },
            // ШАГ 11: Unloading procedures and inspection
            {
                brokerQuestion: "Unloading takes 60 minutes.\nNo appointment needed - first come first served, but 4-6 AM window is required.\nParking lot available, can arrive Sunday 11 PM if needed.\nYes, they provide signed temp inspection report.\nIf dispute, they call me immediately before unloading.\nJust BOL and temp logs needed.\nSecurity guard at gate - show BOL and driver's license.\nDigital temp logs are fine, but printed backup is good practice.\nMake sense?",
                dispatcherPrompt: "💎 Брокер дал unloading детали. Подтвердите и резюмируйте.",
                suggestions: [
                    {
                        text: "Perfect! Let me confirm everything: Pickup Friday 6 AM at Fresno Valley Farms, Carlos 559-555-0300. Driver arrives 4:30 AM to pre-cool to 34°F. Loading 90 min, 21 pallets by zones, 8 load locks provided. Temps: strawberries 34°F, lettuce 36°F, broccoli 32°F. Team drivers, 3,050 miles via I-40/I-70/I-80. Delivery Monday 4-6 AM Boston Fresh Market, Jennifer 617-555-0400. Call Sunday evening. Unloading 60 min, security at gate. $7,800 at $2.56/mile, detention $100/hr, layover $300/day, temp failure penalty $2,000. We'll send temp reports twice daily. Printed and digital logs. We're 100% confirmed! Sending NOA and insurance certificate now.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Полное профессиональное резюме всех критических деталей. МАСТЕР!",
                        path: "master"
                    },
                    {
                        text: "Confirmed! Friday 6 AM Fresno pickup, Carlos 559-555-0300, arrive 4:30 AM to pre-cool. Monday 4-6 AM Boston delivery, Jennifer 617-555-0400, call Sunday. Team drivers, multi-temp zones, $7,800 all-in. Temp monitoring every 2 hours, reports twice daily. Sending NOA now. Thank you!",
                        quality: "good",
                        analytics: "✔️ Хорошо! Хорошее резюме ключевых деталей.",
                        path: "master"
                    },
                    {
                        text: "Got it. Friday pickup Fresno, Monday delivery Boston. Team drivers, $7,800. Temp monitoring. Sending NOA.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое подтверждение.",
                        path: "master"
                    },
                    {
                        text: "Okay, I think I have everything. We'll be there. Sending confirmation.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Нет резюме, неуверенность.",
                        path: "master"
                    },
                    {
                        text: "Yeah, we got it all. Just send the rate con already!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Грубость в конце диалога.",
                        path: "reject1"
                    },
                    {
                        text: "Wait, what was the pickup time again? And the temperature settings?",
                        quality: "fail",
                        analytics: "❌ Провал. Не запомнил критическую информацию.",
                        path: "reject1"
                    }
                ]
            },
            // ШАГ 12: Insurance and final documentation
            {
                brokerQuestion: "Excellent! One last thing - insurance certificate.\nFor produce loads, I need $1M auto liability and $100K cargo coverage.\nAlso, do you have reefer breakdown coverage?\nCan you email certificates to david@coastproducebrokers.com?",
                dispatcherPrompt: "💎 Брокер запрашивает insurance. Подтвердите coverage и отправьте.",
                suggestions: [
                    {
                        text: "Absolutely! We have $1M auto liability with Progressive Commercial and $100K cargo with Great American Insurance. Both policies current, expire November 2026. We also carry $50K reefer breakdown coverage with Thermo King - covers mechanical failure and product loss. Emailing all certificates to david@coastproducebrokers.com right now from dispatch@freshexpresslogistics.com. Also attaching W9, reefer service records from March 1st, and our produce transport safety record. You'll have everything in 60 seconds. Is there anything else you need for this load?",
                        quality: "excellent",
                        analytics: "✨ Отлично! Полная insurance info, reefer breakdown coverage, проактивная отправка всех документов.",
                        path: "master"
                    },
                    {
                        text: "Yes! $1M auto liability and $100K cargo, both current. We also have $50K reefer breakdown coverage. Emailing all certificates to david@coastproducebrokers.com now. Also sending W9 and reefer service records. You'll have it in a minute.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Полная insurance info и быстрая отправка.",
                        path: "master"
                    },
                    {
                        text: "Yes, we have $1M liability and $100K cargo. Also reefer breakdown coverage. Sending certificates now.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовое подтверждение.",
                        path: "master"
                    },
                    {
                        text: "I think we have reefer breakdown coverage. Let me check and send certificates later today.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Неуверенность, задержка.",
                        path: "master"
                    },
                    {
                        text: "Why do you need reefer breakdown coverage? We have regular insurance! That's enough!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Не понимает produce insurance requirements.",
                        path: "reject1"
                    },
                    {
                        text: "Insurance certificates? I don't have access to those. Can my boss send them tomorrow?",
                        quality: "fail",
                        analytics: "❌ Провал. Нет доступа к критическим документам.",
                        path: "reject1"
                    }
                ]
            },
            // ШАГ 13: Team driver details and communication plan
            {
                brokerQuestion: "Perfect, received all documents!\nLast thing - team driver names and cell phones?\nI like to have direct contact for this time-sensitive produce load.\nAlso, how will they communicate during the 4-day transit?",
                dispatcherPrompt: "💎 Брокер запрашивает team driver контакты. Дайте полную информацию.",
                suggestions: [
                    {
                        text: "Of course! Team drivers are Miguel Santos (lead) 559-555-0777 and Robert Chen 559-555-0888. Miguel has 12 years experience, Robert 8 years, both specialized in produce transport. They've run California to East Coast together for 3 years. Communication plan: They'll call me every 6 hours with location and temp readings. I'll text you updates every 6 hours. They have my dispatch number 559-555-0999 24/7. If any issues - traffic, weather, mechanical, temperature - they call me immediately and I call you within 5 minutes. They'll also call Carlos before pickup and Jennifer 24 hours before delivery. I'm texting you both driver contacts right now. They know this is time-sensitive produce and will treat it as priority #1.",
                        quality: "excellent",
                        analytics: "✨ Отлично! Полная team info, опыт, детальный communication plan, emergency procedures.",
                        path: "master"
                    },
                    {
                        text: "Team drivers are Miguel Santos 559-555-0777 and Robert Chen 559-555-0888. Both experienced with produce transport. They'll call every 6 hours with location and temps. I'll update you every 6 hours. They have my dispatch number 24/7. I'm texting you their contacts now.",
                        quality: "good",
                        analytics: "✔️ Хорошо! Четкая информация и communication plan.",
                        path: "master"
                    },
                    {
                        text: "Drivers are Miguel Santos 559-555-0777 and Robert Chen 559-555-0888. They'll stay in touch during transit.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовая информация.",
                        path: "master"
                    },
                    {
                        text: "I'll get you the driver names and numbers later today. They'll call if there are any problems.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Задержка с критической информацией.",
                        path: "master"
                    },
                    {
                        text: "Why do you need driver contacts? Just call me if you need anything! I'm the dispatcher!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Отказ дать direct contact для time-sensitive load.",
                        path: "reject1"
                    },
                    {
                        text: "I don't have their phone numbers with me. Can I send them tomorrow?",
                        quality: "fail",
                        analytics: "❌ Провал. Не имеет контактов своих drivers.",
                        path: "reject1"
                    }
                ]
            },
            // ШАГ 14: Final confirmation and relationship building
            {
                brokerQuestion: "Excellent! Miguel and Robert sound like a solid team.\nI really appreciate your professionalism and attention to detail.\nThis is exactly what we need for produce loads.\nOne more question: do you run California produce regularly?\nI have 3-4 loads per week on this lane and similar routes.",
                dispatcherPrompt: "💎 Брокер спрашивает о regular business. Покажите интерес к partnership.",
                suggestions: [
                    {
                        text: "Thank you, David! Yes, California produce is one of our core lanes. We run Fresno/Salinas/Bakersfield to East Coast 8-10 times per month. We have 4 team-equipped reefer trucks dedicated to produce transport. Besides strawberries, we regularly haul grapes, citrus, lettuce, broccoli, and stone fruit. We understand seasonal variations and peak harvest times. We'd love to be your go-to carrier for California produce. If this load goes smoothly - and it will - please keep us in mind for your weekly loads. We can offer consistent service, same drivers, same quality. Can we exchange direct numbers? I'm available 24/7 at 559-555-0999. Looking forward to building a long-term partnership with Coast to Coast Produce Brokers!",
                        quality: "excellent",
                        analytics: "✨ Отлично! Детальная информация о produce operations, partnership interest, профессионализм. МАСТЕР!",
                        path: "master"
                    },
                    {
                        text: "Yes! California produce is our specialty. We run this lane 8-10 times per month with 4 reefer teams. We'd love to handle your weekly loads. If this delivery goes well, please keep us in mind. I'm available 24/7 at 559-555-0999. Looking forward to working together regularly!",
                        quality: "good",
                        analytics: "✔️ Хорошо! Хороший интерес к partnership.",
                        path: "master"
                    },
                    {
                        text: "Yes, we run California produce regularly. We'd be interested in your weekly loads if this goes well.",
                        quality: "normal",
                        analytics: "⚪ Нормально. Базовый интерес.",
                        path: "master"
                    },
                    {
                        text: "We do some produce loads. Maybe we can work together more.",
                        quality: "weak",
                        analytics: "⚠️ Слабо. Слабый интерес к partnership.",
                        path: "master"
                    },
                    {
                        text: "Let's see how this load goes first. I don't commit to anything until I see your rates are competitive!",
                        quality: "aggressive",
                        analytics: "🔴 Агрессивно. Негативный подход к partnership.",
                        path: "master"
                    },
                    {
                        text: "I don't know about regular loads. Let me talk to my boss about that.",
                        quality: "fail",
                        analytics: "❌ Провал. Нет authority для business development.",
                        path: "master"
                    }
                ]
            },
            // OUTCOME: Final result
            {
                brokerResponse: "Perfect! I'm really impressed with your operation, Fresh Express Logistics.\nYou have the right equipment, experienced team drivers, solid monitoring procedures, and professional communication.\nYour attention to produce-specific details - pre-cooling, temperature zones, airflow for strawberries - shows you really understand this business.\n\nRate confirmation sent to Fresh Express Logistics MC 889900 for $7,800.\nI'm adding you to my preferred carrier list for California produce.\nIf Miguel and Robert deliver this load on time with good temps, I'll have 3-4 loads per week for you.\nThese are consistent lanes: Fresno/Salinas to Boston/NYC/Philadelphia.\nRates typically $2.50-$2.70/mile depending on season and urgency.\n\nI'll be watching this load closely. Call me immediately if any issues.\nLooking forward to a long and profitable partnership!\nGood luck with the transport!",
                outcome: {
                    type: "success",
                    quality: "excellent",
                    rate: "$7,800",
                    ratePerMile: "$2.56/mile",
                    relationship: "Excellent - Added to preferred carrier list, 3-4 weekly loads opportunity",
                    dialogueTime: "14-16 minutes",
                    questionsAsked: "20+ professional questions about produce procedures",
                    detailLevel: "very high",
                    futureOpportunity: "repeat",
                    weeklyLoads: "3-4 produce loads if perform well",
                    feedback: "🏆 МАСТЕР УРОВЕНЬ PRODUCE TRANSPORT!\n\n✅ ЧТО СДЕЛАНО ПРАВИЛЬНО:\n- Представились профессионально с MC номером и reefer availability в California\n- Дали детальную информацию о Thermo King unit и recent service (March 1st)\n- Продемонстрировали глубокое знание multi-temp produce requirements (34°F/36°F/32°F)\n- Объяснили детальный pre-cooling plan (arrive 4:30 AM, 90 min cooling time)\n- Предложили team drivers с реалистичным transit планом (96 hours, 31.8 mph average)\n- Провели профессиональные переговоры о ставке с cost breakdown\n- Приняли temperature penalty с уверенностью и уточнили terms\n- Задали все критические вопросы о loading procedures (zones, load locks, pulp thermometer)\n- Описали comprehensive temperature monitoring plan (every 15 min auto, every 2 hours manual)\n- Задали детальные вопросы о delivery procedures и documentation\n- Сделали полное резюме всех деталей перед финальным подтверждением\n- Предоставили insurance certificates включая reefer breakdown coverage\n- Дали полную информацию о team drivers с опытом и communication plan\n- Показали сильный интерес к long-term partnership с конкретными деталями\n\n💡 КЛЮЧЕВОЙ УРОК:\nProduce transport - это самый требовательный и высокооплачиваемый сегмент reefer перевозок. Брокеры платят premium rates ($2.50-$2.70/mile vs $2.00/mile dry van) потому что:\n1. Time-sensitive - produce теряет ценность каждый час\n2. Temperature-critical - 2 градуса разницы = испорченный продукт\n3. High liability - $2,000+ penalties за temperature failure\n4. Specialized knowledge - каждый продукт имеет свои requirements\n5. Team drivers required - tight delivery windows\n\nДетальное знание produce requirements (pre-cooling, multi-temp zones, airflow, monitoring) и уверенность в своем equipment открывает доступ к weekly produce loads с premium rates и preferred carrier status.\n\n🎯 ПРИМЕНЕНИЕ В РЕАЛЬНОСТИ:\nПри работе с produce loads всегда демонстрируйте:\n1. EQUIPMENT: Recent reefer service records, backup systems, temperature monitoring technology\n2. KNOWLEDGE: Specific temp requirements для каждого продукта, pre-cooling procedures, airflow needs\n3. EXPERIENCE: Track record с produce, zero temperature failures, team driver experience\n4. MONITORING: Detailed plan (every 15 min auto-log, every 2 hours manual check, twice daily reports)\n5. COMMUNICATION: 24/7 availability, updates every 6 hours, immediate notification of issues\n6. DOCUMENTATION: Temperature logs, inspection reports, reefer breakdown coverage\n7. PARTNERSHIP: Interest in regular business, consistency, reliability\n\nProduce brokers работают с tight margins и demanding customers (grocery chains, restaurants). Они ТРЕБУЮТ carriers которые понимают produce sensitivity и могут guarantee on-time delivery с perfect temps. Один failed load = потеря customer и reputation. Если вы можете consistently deliver produce loads без temperature failures, вы получите preferred carrier status и 3-4 loads per week на premium rates. Это строит stable, profitable business."
                }
            }
        ],
        reject1: [
            {},
            {
                brokerResponse: "I appreciate you calling, but I need to be honest with you.\n\nFor time-sensitive produce transport worth $50,000+, I need carriers who are fully prepared and professional from the first minute. Based on our conversation, I have serious concerns about your readiness for produce loads.\n\nProduce transport requires:\n- Immediate knowledge of your MC number and reefer location (not 'let me check and call back')\n- Current reefer service records readily available (not 'I'll ask the mechanic')\n- Professional communication without aggressive or defensive responses\n- Understanding that broker questions protect both of us from $2,000+ penalties\n- Access to insurance certificates immediately (not 'my boss will send tomorrow')\n- Driver contact information at your fingertips (not 'I'll get it later')\n\nI'm going to pass on this one. I'd recommend:\n1. Know your MC number, equipment location, and service dates at all times\n2. Have insurance certificates and reefer service records ready before calling\n3. Understand that produce brokers ask detailed questions because one temperature failure costs thousands\n4. Practice professional communication - we're partners, not adversaries\n5. Have driver contacts immediately available for time-sensitive loads\n\nOnce you're better prepared for produce transport, feel free to call back. This is a demanding lane that requires carriers who are organized and professional from minute one. Good luck!",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "Rejected - Unprepared or unprofessional",
                    dialogueTime: "2-4 minutes",
                    questionsAsked: "Few or defensive responses",
                    detailLevel: "none",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕ ГОТОВ К PRODUCE TRANSPORT\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Знать свой MC номер наизусть - это базовая информация о вашей компании\n- Точно знать местоположение своего reefer truck и когда он будет доступен\n- Иметь reefer service records готовыми - produce brokers ВСЕГДА спрашивают\n- Отвечать профессионально на детальные вопросы о equipment и procedures\n- Иметь insurance certificates (включая reefer breakdown) готовыми для немедленной отправки\n- Знать имена и телефоны своих drivers - особенно для time-sensitive loads\n- Никогда не быть агрессивным когда broker задает вопросы о safety и equipment\n- Понимать что 'I'll call you back' или 'I'll send it later' = потеря груза\n\n💡 КЛЮЧЕВОЙ УРОК:\nProduce brokers работают с extremely tight timelines и high-value cargo. Когда они постят load в 10 AM для pickup завтра в 6 AM, у них есть 20 hours чтобы найти qualified carrier. Они получают 50+ звонков. Если вы говорите 'let me check and call back' - они переходят к следующему carrier который готов СЕЙЧАС.\n\nProduce transport - это не обычный dry van где можно 'figure it out later'. Это:\n- $50,000+ cargo value (strawberries $2,500 per pallet x 21 pallets)\n- $2,000+ penalties за temperature failure\n- Tight delivery windows (96 hours для 3,050 miles)\n- Demanding customers (grocery chains, restaurants)\n- Zero tolerance для delays или temperature issues\n\nЕсли вы не можете ответить на базовые вопросы (MC number, reefer location, service date) немедленно, broker ОБЯЗАН отказать. Почему? Потому что если вы не организованы в phone call, вы не будете организованы в transport. Один failed produce load может стоить broker $10,000+ в claims и потерю customer.\n\n🎯 ПРИМЕНЕНИЕ В РЕАЛЬНОСТИ:\nПеред звонком по produce load:\n1. Имейте MC number, reefer location, и availability наготове\n2. Знайте когда reefer unit был serviced последний раз (date, what was done)\n3. Имейте insurance certificates готовыми для email (auto liability, cargo, reefer breakdown)\n4. Знайте имена и телефоны ваших team drivers\n5. Имейте ваш dispatch 24/7 number готовым\n6. Будьте готовы обсуждать ваш produce transport experience и track record\n\nProduce brokers оценивают вашу организованность в первые 2 минуты разговора. Если вы говорите 'let me check' больше одного раза - вы проваливаете тест. Они ищут carriers которые ГОТОВЫ, ОРГАНИЗОВАНЫ, и ПРОФЕССИОНАЛЬНЫ с первой секунды. Нет второго шанса в produce transport."
                }
            }
        ],
        reject2: [
            {},
            {
                brokerResponse: "I'm going to stop you right there.\n\nYour responses about produce handling and temperature control are major red flags. When you say things like 'just set it cold' or 'the reefer does its job automatically' or 'this would be our first produce load', you're telling me you don't understand produce transport.\n\nThis isn't regular reefer freight - this is fresh produce worth $50,000+ that loses value every hour:\n- Strawberries at wrong temp for 2 hours = $15,000 loss\n- No multi-temp zones = broccoli freezes or strawberries warm up = total loss\n- No temperature monitoring = no way to prove temps were maintained = $2,000 penalty\n- 4 AM delivery isn't 'too early' - it's when produce markets open\n- Solo driver can't make 96-hour deadline = missed delivery = $5,000+ penalty\n\nI cannot and will not book a carrier who:\n- Doesn't understand multi-temperature requirements for different produce\n- Thinks 'set it and forget it' works for produce transport\n- Lacks experience with produce loads (this isn't your training load)\n- Doesn't have temperature monitoring procedures\n- Doesn't understand produce market delivery requirements\n- Suggests HOS violations ('driver will push hard' or 'skip breaks')\n\nOne failed produce load can result in:\n- $50,000+ cargo claim for spoiled product\n- $2,000 temperature failure penalty\n- $5,000 late delivery penalty\n- Loss of my customer (grocery chain or restaurant)\n- Destroyed reputation in produce transport\n- DOT violations for HOS if you 'skip breaks'\n\nI'm passing on this load. I'd strongly recommend you gain experience with standard reefer freight (frozen food, dairy) before attempting fresh produce. Produce transport is the most demanding segment of trucking. This is not the lane for learning on the job.\n\nGood luck, but please don't call me for produce loads until you have proper experience and equipment.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "Rejected - Lack of produce experience or understanding",
                    dialogueTime: "4-6 minutes",
                    questionsAsked: "Dismissive responses to produce requirements",
                    detailLevel: "none",
                    futureOpportunity: "none",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: ОТСУТСТВИЕ PRODUCE ОПЫТА ИЛИ ПОНИМАНИЯ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Понимать что разные produce items требуют разные temperatures (strawberries 34°F, lettuce 36°F, broccoli 32°F)\n- Знать что multi-temp zones критически важны - нельзя 'just set it to 34°F for everything'\n- Иметь детальный temperature monitoring plan - не 'the reefer does its job automatically'\n- Понимать что produce markets открываются в 4-6 AM - это не 'too early'\n- Знать что 3,050 miles в 96 hours требует team drivers - solo driver физически не может\n- Демонстрировать опыт с produce transport - не говорить 'this would be our first load'\n- Понимать важность pre-cooling procedures - не 'can't we just start loading?'\n- Никогда не предлагать HOS violations ('driver will push hard' или 'skip breaks')\n\n💡 КЛЮЧЕВОЙ УРОК:\nProduce transport - это НЕ обычный reefer freight. Разница между frozen food и fresh produce:\n\nFROZEN FOOD:\n- Set to 0°F and forget\n- Temperature tolerance: +/- 5 degrees okay\n- Shelf life: months\n- Delivery windows: flexible\n- Monitoring: check once per day\n\nFRESH PRODUCE:\n- Multiple temperatures (32°F to 36°F depending on item)\n- Temperature tolerance: +/- 1 degree maximum\n- Shelf life: days or hours\n- Delivery windows: must hit produce market opening (4-6 AM)\n- Monitoring: every 2 hours minimum\n\nКогда вы говорите 'just set it cold' для produce, вы показываете что не понимаете:\n1. Strawberries выше 36°F = начинается deterioration в течение 2 hours\n2. Broccoli выше 32°F = yellowing и потеря freshness\n3. Lettuce ниже 32°F = freezing damage, выше 36°F = wilting\n4. Каждый градус разницы = сокращение shelf life на 50%\n\nProduce brokers НЕМЕДЛЕННО отказывают carriers которые показывают inexperience с produce. Почему?\n1. One temperature failure = $15,000-$50,000 cargo claim\n2. Produce customers (Whole Foods, restaurants) очень demanding\n3. Reputation в produce transport строится годами, разрушается одним load\n4. Insurance rates растут после produce claims\n5. Produce brokers несут personal liability за выбор unqualified carrier\n\n🎯 ПРИМЕНЕНИЕ В РЕАЛЬНОСТИ:\nЕсли вы хотите возить produce и получать premium rates ($2.50-$2.70/mile):\n\n1. НАЧНИТЕ С ОПЫТА: Сначала возите frozen food (6-12 months), потом dairy (3-6 months), потом produce\n2. ИЗУЧИТЕ REQUIREMENTS: Каждый produce item имеет specific temperature, humidity, airflow needs\n3. ПОЛУЧИТЕ EQUIPMENT: Multi-temp reefer unit, temperature monitoring system, backup generator\n4. ПОСТРОЙТЕ TRACK RECORD: Zero temperature failures на frozen/dairy перед produce\n5. ПОЛУЧИТЕ TRAINING: Drivers должны понимать produce sensitivity и monitoring procedures\n6. ПОЛУЧИТЕ INSURANCE: Reefer breakdown coverage обязательна для produce\n7. СОЗДАЙТЕ PROCEDURES: Pre-cooling checklist, temperature monitoring schedule, emergency protocols\n\nProduce transport - это вершина reefer industry. Highest rates, но highest requirements. Нет shortcuts. Если вы говорите 'this is our first produce load' - broker ОБЯЗАН отказать. Они не могут рисковать $50,000 cargo на вашем training. Начните с frozen food, постройте experience, потом переходите к produce."
                }
            }
        ],
        reject3: [
            {},
            {
                brokerResponse: "I understand you want a higher rate, but let me be straight with you.\n\nYou're asking for $9,500 on a 3,050-mile load. That's $3.11/mile. For context:\n- Current market rate for team reefer produce: $2.45-$2.65/mile\n- My offer of $7,800 ($2.56/mile) is already in the TOP range of the market\n- Even with team drivers and produce premium, $3.11/mile is 20% above market\n\nI appreciate that you have the equipment and team drivers, but I have a budget from my customer (produce distributor). They pay me $8,200 for this load. After my margin, I can pay $7,800 maximum. I literally cannot pay $9,500 - I would lose $1,300.\n\nIf you had said 'Could we do $8,000?' with some justification, we might have found middle ground. But demanding $9,500 or refusing the $2,000 temperature penalty shows you're either:\n1. Not familiar with current produce transport rates\n2. Not serious about the load\n3. Not understanding that temperature penalties are standard in produce contracts\n\nI'm going to move on to other carriers. Here's some advice:\n- Research current market rates for produce transport (DAT, Truckstop.com show $2.45-$2.65/mile for team reefer)\n- Understand that produce rates include risk premium - that's why they're higher than dry van\n- Temperature penalties are STANDARD in produce contracts - every carrier accepts them\n- Negotiate professionally with justification, not demands\n- Know when a rate is fair and accept it\n\nI have 3-4 produce loads per week, but I need carriers who understand market rates and accept standard produce terms. If you want to work in produce transport, you need to accept that temperature accountability comes with the premium rates.\n\nGood luck finding loads at your target rate. I'll keep your info if market rates change significantly, but right now $7,800 is top of market for this lane.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    ratePerMile: "$0/mile",
                    relationship: "Rejected - Unrealistic rate expectations or refusing standard terms",
                    dialogueTime: "6-8 minutes",
                    questionsAsked: "Some questions, but failed at negotiation or terms",
                    detailLevel: "medium",
                    futureOpportunity: "unlikely",
                    weeklyLoads: "No loads",
                    feedback: "❌ ОТКАЗ: НЕРЕАЛИСТИЧНЫЕ ТРЕБОВАНИЯ ПО СТАВКЕ ИЛИ ОТКАЗ ОТ СТАНДАРТНЫХ УСЛОВИЙ\n\n✅ ЧТО НУЖНО БЫЛО СДЕЛАТЬ:\n- Исследовать рыночные ставки ПЕРЕД переговорами (DAT, Truckstop.com показывают $2.45-$2.65/mile для team reefer produce)\n- Понимать что $7,800 ($2.56/mile) уже включает produce premium над standard reefer ($2.20/mile) и team premium над solo ($1.90/mile)\n- Вести переговоры профессионально: 'Could we do $8,000?' вместо 'I need $9,500!'\n- Обосновывать запрос: 'We have zero temperature failures in 7 years' вместо 'That's insulting!'\n- Принимать стандартные produce contract terms - temperature penalties есть у ВСЕХ produce loads\n- Понимать что temperature penalty защищает обе стороны - это не 'ridiculous'\n- Знать когда принять fair offer - $7,800 это TOP of market для этого lane\n\n💡 КЛЮЧЕВОЙ УРОК:\nProduce transport rates структурированы следующим образом:\n\nBASE DRY VAN: $1.80/mile\n+ REEFER PREMIUM: +$0.40/mile = $2.20/mile\n+ PRODUCE PREMIUM: +$0.25/mile = $2.45/mile (risk, monitoring, tight windows)\n+ TEAM PREMIUM: +$0.15/mile = $2.60/mile\n= TOTAL: $2.60/mile для team reefer produce\n\nКогда broker предлагает $7,800 ($2.56/mile), это уже включает все premiums. Если вы требуете $9,500 ($3.11/mile), вы просите на $0.51/mile или 20% выше market. Это показывает что:\n1. Вы не знаете produce transport market rates\n2. Вы не понимаете broker margins (обычно 5-8%)\n3. Вы не серьезны о получении load\n\nProduce brokers работают с extremely tight margins потому что produce distributors тоже работают с tight margins. Grocery chains диктуют цены. Broker получает $8,200 от customer, платит вам $7,800, оставляет $400 (5% margin). Если вы требуете $9,500, broker теряет $1,300. Это физически невозможно.\n\nТемпературные penalties ($2,000) - это СТАНДАРТ в produce contracts. Почему?\n1. Защищает broker от claims если вы испортите $50,000 cargo\n2. Мотивирует вас поддерживать perfect temps\n3. Покрывает часть loss если produce arrives damaged\n4. Стандартная практика в индустрии - ВСЕ produce carriers принимают\n\nЕсли вы отказываетесь от temperature penalty, вы говорите: 'Я не уверен в своем equipment' или 'Я не хочу ответственности'. Broker ОБЯЗАН отказать.\n\n🎯 ПРИМЕНЕНИЕ В РЕАЛЬНОСТИ:\nПеред переговорами по produce load:\n1. Проверьте текущие ставки на lane в DAT или Truckstop.com\n2. Поймите структуру rates: base + reefer + produce + team premiums\n3. Определите вашу minimum acceptable rate (ваши costs + 15% margin)\n4. Определите вашу target rate (5-8% выше fair market rate)\n5. Подготовьте обоснование (zero temperature failures, experienced team, monitoring systems)\n\nВо время переговоров:\n- Используйте фразы 'Based on current produce rates...' или 'Considering our track record...'\n- НЕ используйте 'I need...' или 'That's too low!' или 'That's insulting!'\n- Если broker предлагает top of market rate - БЕРИТЕ ЕГО\n- Принимайте стандартные produce terms (temperature penalties, tight delivery windows)\n- Показывайте confidence в своем equipment - 'We accept temperature penalty because we're confident'\n\nЖадность = $0 и потеря future loads. Профессионализм = $7,800 + 3-4 loads per week = $31,200/week = $1.6M/year. Что вы выбираете?"
                }
            }
        ]
    }
};

// Add to global scenarios array
if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario7);
    console.log('✅ Scenario #7 loaded: Refrigerated Produce - Fresno CA → Boston MA');
    console.log('📊 Total scenarios:', allScenarios.length);
} else {
    // For testing environment
    if (typeof module !== 'undefined' && module.exports) {
        global.allScenarios = global.allScenarios || [];
        global.allScenarios.push(scenario7);
    }
}
