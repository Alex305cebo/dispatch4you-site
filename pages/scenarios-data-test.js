// СИМУЛЬ - База диалогов для обучения диспетчеров
// Версия: 2.3
// Дата: 2026-03-03
// ПРАВИЛО: ВСЕГДА 3 варианта ответа в каждом шаге!

const allScenarios = [
    // ============================================
    // ДИАЛОГ #0: Chicago IL → Miami FL (REEFER)
    // Стиль: 🎓 Опытный брокер
    // Расстояние: 1,380 миль
    // ============================================
    {
        id: 0,
        route: "Chicago IL → Miami FL",
        distance: 1380,
        equipment: "Reefer",
        brokerStyle: "Опытный",
        difficulty: "medium",

        paths: {
            // МАСТЕР ПУТЬ (8 шагов)
            master: [
                {
                    brokerQuestion: "Yes, still available!\nThis is high-value produce load, needs experienced reefer carrier.\nWhat's your MC number and tell me about your reefer equipment?",
                    dispatcherPrompt: "💎 Брокер ищет опытного перевозчика. Покажите свою экспертизу.",
                    suggestions: [
                        {
                            text: "MC 445566, we specialize in temperature-controlled produce with 12 years experience.\n2023 Carrier reefer unit with multi-temp zones and real-time monitoring.\nDriver HACCP certified, currently empty in Chicago ready to load.",
                            quality: "master",
                            analytics: "Отлично! Показали специализацию, опыт и готовность."
                        },
                        {
                            text: "MC 445566, we have 2023 Carrier reefer, 53ft trailer with temperature control.\nDriver is in Chicago now, ready for immediate pickup tomorrow morning.",
                            quality: "good",
                            analytics: "Хорошо, но не показали опыт с produce."
                        },
                        {
                            text: "MC 445566, reefer trailer available in Chicago area, ready to go.",
                            quality: "weak",
                            analytics: "Слишком мало информации."
                        }
                    ]
                },
                {
                    brokerResponse: "Perfect! Verified MC 445566 - 99% safety score, excellent produce history.\nThis is 44,000 lbs fresh strawberries, must maintain 34-36°F constant.\nPickup tomorrow 6 AM Chicago cold storage, delivery Miami in 48 hours.\nWith your experience, what rate are you looking at?",
                    dispatcherPrompt: "💎 Брокер впечатлен и дал детали груза. Назовите обоснованную ставку.",
                    suggestions: [
                        { text: "For 1,380 miles with fresh produce and strict temperature control, I'm at $3,900 all-in.\nThat covers fuel, experienced driver, continuous temp monitoring, guaranteed delivery.\nMarket rate for this lane is $2.75-$3.00/mile.", quality: "master", analytics: "Отлично! Обоснованная ставка." },
                        { text: "I'm looking at $3,750 for this load, that's $2.72/mile with all services.\nWe can handle the tight timeline and temperature requirements professionally.", quality: "good", analytics: "Хорошо, но ниже рынка." },
                        { text: "I need $4,200 for this distance with reefer equipment and tight timeline.", quality: "aggressive", analytics: "Слишком высоко без обоснования." }
                    ]
                },
                {
                    brokerResponse: "I appreciate the detailed breakdown - that's what I need to hear.\nPosted rate is $3,450, but I have budget flexibility for reliable carrier.\nStrawberries are time-sensitive, shipper is very strict about temperature.\nCan you meet me at $3,700?",
                    dispatcherPrompt: "💎 Брокер ценит профессионализм и идет навстречу. Торгуйтесь умно.",
                    suggestions: [
                        { text: "I understand the urgency and shipper requirements, meet me at $3,850.\nYou get 12 years produce experience, temp logs every 2 hours, my personal guarantee.\nThat's $2.79/mile - fair for the service level you need.", quality: "master", analytics: "Отлично! Обоснование ценности." },
                        { text: "Can you do $3,800? That's my bottom line for this distance and requirements.\nWe'll provide all temp logs and updates you need throughout transit.", quality: "good", analytics: "Хорошо, но можно было лучше." },
                        { text: "$3,700 works for us, let's book it and send rate confirmation now.", quality: "weak", analytics: "Сдались слишком быстро." }
                    ]
                },
                {
                    brokerResponse: "You make a strong case and I see you understand produce logistics.\nLet me call shipper about budget increase for $3,850.\nIf approved, do we have a deal with temp logs every 2 hours?",
                    dispatcherPrompt: "💎 Брокер почти согласен. Подтвердите обязательства.",
                    suggestions: [
                        { text: "Absolutely, $3,850 and it's yours! You'll get temp logs every 2 hours via email.\nGPS tracking link and check calls every 6 hours included.\nI'll send NOA immediately, driver will pre-cool unit tonight to 34°F.", quality: "master", analytics: "Отлично! Подтвердили и проактивны." },
                        { text: "$3,850 works, yes we'll provide temp logs every 2 hours as discussed.\nSend rate confirmation when ready, we'll handle everything on our end.", quality: "good", analytics: "Хорошо, подтвердили." },
                        { text: "Deal at $3,850, send the paperwork over and we'll get started.", quality: "weak", analytics: "Слишком коротко." }
                    ]
                },
                {
                    brokerResponse: "Excellent! Shipper approved $3,850 based on your service commitment.\nSending rate con now, what's your factoring company?",
                    dispatcherPrompt: "💎 Груз ваш! Дайте factoring информацию быстро.",
                    suggestions: [
                        { text: "Perfect! We work with RTS Financial, sending NOA to your email right now.\nDriver will contact shipper tonight to confirm 6 AM pickup.\nWhat's shipper contact number and exact address?", quality: "master", analytics: "Отлично! Проактивность." },
                        { text: "Great! RTS Financial is our factoring company, NOA coming your way.\nShould arrive in your inbox within a few minutes, let me know if you need anything else.", quality: "good", analytics: "Хорошо." },
                        { text: "RTS Financial, sending NOA now to your email address.", quality: "weak", analytics: "Слишком коротко." }
                    ]
                },
                {
                    brokerResponse: "Love the proactive approach! Shipper: Mike at 312-555-0145.\nAddress: 1234 Industrial Way, Chicago IL 60601, dock 7.\nThey're very particular - driver must arrive exactly at 6 AM, no delays.\nPre-cool confirmation required before arrival.",
                    dispatcherPrompt: "💎 Брокер дал важные детали. Покажите что понимаете серьезность.",
                    suggestions: [
                        { text: "Understood - 6 AM sharp, no delays! Driver will pre-cool tonight, send temp confirmation by 10 PM.\nWill call Mike at 5:30 AM to confirm arrival at dock 7.\nHow long does loading typically take? Any special handling requirements?", quality: "master", analytics: "Отлично! Понимание требований." },
                        { text: "Got it, 6 AM sharp at dock 7, will pre-cool tonight and send confirmation.\nHow long for loading? Any special instructions for handling strawberries?", quality: "good", analytics: "Хорошо." },
                        { text: "Ok, 6 AM at dock 7, will pre-cool the unit tonight.", quality: "weak", analytics: "Слишком коротко." }
                    ]
                },
                {
                    brokerResponse: "Perfect! You clearly understand produce logistics.\nLoading takes 2-3 hours, they're very careful with strawberries, shipper covers $200 lumper.\nDelivery: Miami Fresh Distribution, 8901 Ocean Drive, receiver Carlos 305-555-0198.\nDelivery window 48 hours from pickup, FCFS.",
                    dispatcherPrompt: "💎 Все основные детали получены. Уточните последние важные моменты.",
                    suggestions: [
                        { text: "Excellent, all noted! Two quick questions: any routing restrictions or preferred route?\nWhat's detention policy at delivery if they're backed up?\nAlso your 24/7 contact in case any issues on the road?", quality: "master", analytics: "Отлично! Планирование проблем." },
                        { text: "Got it, all clear! Any routing restrictions I should know about?\nAnd who to call if any issues during transit? Want to have all contacts ready.", quality: "good", analytics: "Хорошо, базовые вопросы." },
                        { text: "All clear, thank you for all the information provided.", quality: "weak", analytics: "Упущена возможность." }
                    ]
                },
                {
                    brokerResponse: "Great questions! Avoid I-10 through Louisiana - construction delays, take I-75 instead.\nDetention at delivery: $75/hour after 2 hours free time.\nMy cell 24/7: 312-555-9876, also shipper requires seal number photo before leaving.",
                    dispatcherPrompt: "💎 Брокер дал все детали. Подтвердите возможности и завершите.",
                    suggestions: [
                        { text: "Absolutely! Driver will take seal photo and text it immediately after loading.\nWe'll route through I-75 to avoid I-10 construction as you suggested.\nI'll add your cell to driver's priority contact list, we're all set!", quality: "master", analytics: "Отлично! Подтвердили все." },
                        { text: "Yes, driver can send seal photo right after loading, no problem.\nWe'll avoid I-10 and take I-75 as recommended, all set on our end.", quality: "good", analytics: "Хорошо." },
                        { text: "Yes, we can do seal photo and avoid I-10 route.", quality: "weak", analytics: "Слишком коротко." }
                    ]
                },
                {
                    brokerResponse: "Perfect! I'm really impressed with your professionalism.\nThis is exactly the kind of carrier I need for my produce loads.\nI'll be sending you more opportunities - I have 3-4 Chicago to Florida lanes weekly.\nSafe travels!",
                    outcome: {
                        type: "success",
                        quality: "master",
                        rate: "$3,850",
                        ratePerMile: "$2.79/mile",
                        relationship: "Excellent - Preferred carrier, future loads guaranteed",
                        feedback: "🏆 МАСТЕР УРОВЕНЬ!\n\n✅ Показали экспертизу с первого ответа\n✅ Получили на $400 больше posted rate\n✅ Обосновали ценность сервиса\n✅ Задали все правильные вопросы\n✅ Проактивная коммуникация\n✅ Построили долгосрочные отношения"
                    }
                }
            ]
];

// ============================================
// ДИАЛОГ #1: Los Angeles CA → New York NY (DRY VAN)
// Стиль: 😊 Дружелюбный + 🎓 Опытный брокер
// Расстояние: 2,790 миль (LONG HAUL)
// БОЛЕЕ ПОДРОБНЫЙ И КАЧЕСТВЕННЫЙ ДИАЛОГ
// ============================================
{
    id: 1,
        route: "Los Angeles CA → New York NY",
            distance: 2790,
                equipment: "Dry Van",
                    brokerStyle: "Дружелюбный + Опытный",
                        difficulty: "hard",

                            paths: {
        // МАСТЕР ПУТЬ (12 шагов) - самый подробный
        master: [
            {
                brokerQuestion: "Hey there! Yes, this load is still available and I'm glad you called.\nThis is a cross-country run, so I need a reliable team or experienced solo driver.\nWhat's your MC number, and tell me about your equipment and driver situation?",
                dispatcherPrompt: "💎 Брокер дружелюбный но серьезный. Покажите что готовы к long haul.",
                suggestions: [
                    { text: "Good to hear! MC 778899, we run team drivers for cross-country lanes.\n2022 Freightliner with 53ft Great Dane dry van, swing doors, air ride suspension.\nTeam has 8 years OTR experience together, currently finishing delivery in LA, empty by tonight.", quality: "master", analytics: "Отлично! Показали team drivers и опыт." },
                    { text: "MC 778899, we have 53ft dry van with experienced driver in LA area.\nTruck is 2022 model, well-maintained, ready for long haul cross-country.", quality: "good", analytics: "Хорошо, но не указали team или solo." },
                    { text: "MC 778899, dry van available in Los Angeles, ready to go.", quality: "weak", analytics: "Слишком мало информации для long haul." }
                ]
            },
            {
                brokerResponse: "Excellent! Team drivers - that's exactly what I was hoping for.\nJust verified MC 778899, you guys have a solid 97% on-time delivery rate, impressive!\nThis is 42,000 lbs electronics equipment, high value cargo, needs careful handling.\nPickup tomorrow 8 AM at LA distribution center, delivery New York in 4 days max.\nWhat rate are you thinking for this cross-country run?",
                dispatcherPrompt: "💎 Брокер очень доволен team drivers. Назовите обоснованную ставку для long haul.",
                suggestions: [
                    { text: "Thank you! For 2,790 miles cross-country with high-value electronics, I'm at $8,400 all-in.\nThat's $3.01/mile covering fuel, team drivers, insurance, and guaranteed 4-day delivery.\nMarket rate for this lane with teams is $2.90-$3.10/mile right now.", quality: "master", analytics: "Отлично! Детальное обоснование." },
                    { text: "I appreciate that! For this distance with team drivers, I'm looking at $8,100.\nThat's $2.90/mile, covers all expenses and guarantees on-time delivery to New York.", quality: "good", analytics: "Хорошо, но можно было выше." },
                    { text: "I need $9,000 for this cross-country haul with our team.", quality: "aggressive", analytics: "Слишком высоко без обоснования." }
                ]
            },
            {
                brokerResponse: "I really appreciate the detailed breakdown - shows you know the market.\nPosted rate is $7,500, that's $2.69/mile, but I have some flexibility here.\nCustomer is paying premium for reliable carrier because electronics are time-sensitive.\nThey've had issues with damaged cargo before, so they want experienced team.\nCan you work with $8,000? That's $2.87/mile.",
                dispatcherPrompt: "💎 Брокер объяснил ситуацию и предложил компромисс. Торгуйтесь умно.",
                suggestions: [
                    { text: "I understand the customer's concerns about cargo safety, that's important.\nMeet me at $8,250 and you have my personal guarantee on this load.\nOur team specializes in high-value freight, we use extra straps and padding.\nThat's $2.96/mile - fair for the service level and peace of mind you need.", quality: "master", analytics: "Отлично! Обоснование ценности и гарантии." },
                    { text: "I hear you on the customer concerns, can you do $8,150?\nThat's $2.92/mile, we'll take extra care with the electronics, guaranteed safe delivery.", quality: "good", analytics: "Хорошо, но можно было держаться $8,250." },
                    { text: "$8,000 works for us, let's book it and move forward with this load.", quality: "weak", analytics: "Сдались слишком быстро, потеряли $250." }
                ]
            },
            {
                brokerResponse: "You know what, I like your confidence and the way you present your service.\nLet me call the customer about the extra $250 for the specialized handling.\nThey're really worried about cargo damage, so your extra straps and padding might sell them.\nIf they approve $8,250, we have a deal with the extra care you mentioned, correct?",
                dispatcherPrompt: "💎 Брокер продает вашу ценность клиенту! Подтвердите обязательства детально.",
                suggestions: [
                    { text: "Absolutely, $8,250 and you have my word! Here's what we'll do:\nExtra 4 load locks, corner protectors, and blankets for all electronics.\nTeam will inspect cargo at pickup, take photos, document everything.\nYou'll get updates every 8 hours with location and ETA, plus photos at delivery.", quality: "master", analytics: "Отлично! Детальный план действий." },
                    { text: "Yes, $8,250 confirmed with extra care as discussed, no problem.\nWe'll use additional securing equipment and handle everything carefully.\nYou'll get regular updates throughout the trip, guaranteed safe delivery.", quality: "good", analytics: "Хорошо, подтвердили." },
                    { text: "Yes, deal at $8,250 with extra care for the electronics.", quality: "weak", analytics: "Слишком коротко для важного момента." }
                ]
            },
            {
                brokerResponse: "Perfect! Customer approved $8,250 - they loved hearing about the extra precautions.\nYou just earned yourself a preferred carrier status with this customer!\nSending rate con now, what's your factoring company so I can set up payment?",
                dispatcherPrompt: "💎 Отлично! Груз ваш и вы preferred carrier. Дайте factoring быстро.",
                suggestions: [
                    { text: "Fantastic news! We work with Triumph Business Capital for factoring.\nSending NOA to your email right now, should arrive within 2 minutes.\nTeam will contact shipper tonight to coordinate 8 AM pickup tomorrow.\nWhat's shipper contact and exact address with dock number?", quality: "master", analytics: "Отлично! Проактивность и запрос деталей." },
                    { text: "Great! Triumph Business Capital is our factoring company, sending NOA now.\nShould be in your inbox shortly, let me know when you receive it.\nWhat's the shipper contact information for tomorrow's pickup?", quality: "good", analytics: "Хорошо, проактивно." },
                    { text: "Triumph Business Capital, sending NOA to your email now.", quality: "weak", analytics: "Слишком коротко." }
                ]
            },
            {
                brokerResponse: "Awesome! Shipper is Pacific Electronics Distribution, contact Tom at 310-555-0167.\nAddress: 5678 Commerce Parkway, Los Angeles CA 90001, dock 12.\nPickup window is 8 AM - 11 AM, loading takes about 3 hours.\nThey'll provide load locks, but bring your own straps and blankets as you mentioned.\nAny questions about the pickup process or special requirements?",
                dispatcherPrompt: "💎 Брокер дал детали pickup. Задайте важные вопросы о грузе и процессе.",
                suggestions: [
                    { text: "Got it, all noted! Few questions: how is cargo packaged - palletized or crated?\nAny weight distribution requirements or special stacking instructions?\nDo they require specific securement photos before leaving?\nAlso, is there lumper fee or shipper loads?", quality: "master", analytics: "Отлично! Детальные вопросы о cargo handling." },
                    { text: "Understood, dock 12, 8-11 AM window! Quick questions:\nHow is the cargo packaged? Any special handling instructions?\nWho covers lumper fee if there is one?", quality: "good", analytics: "Хорошо, базовые вопросы." },
                    { text: "Got it, 8 AM at dock 12, we'll be there on time.", quality: "weak", analytics: "Упущена возможность уточнить детали." }
                ]
            },
            {
                brokerResponse: "Great questions - this is why customer approved the higher rate!\nCargo is palletized, 14 pallets total, each about 3,000 lbs.\nNo stacking above 2 pallets high, and keep heavier pallets at the front.\nYes, they require photos of securement before you leave - send to me and Tom.\nNo lumper fee, shipper loads with forklift, but you need to supervise placement.",
                dispatcherPrompt: "💎 Важные детали о cargo. Подтвердите понимание и спросите о delivery.",
                suggestions: [
                    { text: "Perfect, all clear! 14 pallets, max 2 high, heavy ones forward, got it.\nWe'll supervise loading carefully and send securement photos to both of you.\nNow for delivery: what's the receiver info, delivery window, and any special requirements?\nAny appointment needed or FCFS? Detention policy if they're backed up?", quality: "master", analytics: "Отлично! Подтвердили и планируют delivery." },
                    { text: "Understood, 14 pallets max 2 high, heavy forward, we'll supervise and send photos.\nWhat's the delivery address and receiver contact?\nAny appointment time or special delivery requirements?", quality: "good", analytics: "Хорошо, основные вопросы." },
                    { text: "Got it, we'll supervise loading and send photos before leaving.", quality: "weak", analytics: "Не спросили о delivery." }
                ]
            },
            {
                brokerResponse: "Excellent attention to detail! Delivery is Empire Electronics Warehouse in Brooklyn.\nReceiver: Sarah at 718-555-0198, address: 9012 Industrial Avenue, Brooklyn NY 11220.\nDelivery window is 4 days from pickup, but earlier is better - they prefer morning deliveries.\nAppointment required, call Sarah 24 hours before arrival to schedule.\nDetention: $100/hour after 2 hours free time, unloading takes 2-3 hours usually.",
                dispatcherPrompt: "💎 Все детали delivery получены. Уточните последние важные моменты.",
                suggestions: [
                    { text: "Perfect, all noted! Empire Electronics, Sarah 718-555-0198, Brooklyn.\nWe'll call 24 hours ahead for appointment, aim for morning delivery.\nLast questions: any routing restrictions or preferred route?\nWeather delays protocol? Your 24/7 contact for road issues?\nAny required check-in times during transit?", quality: "master", analytics: "Отлично! Планирование всех возможных ситуаций." },
                    { text: "Got it, will call Sarah 24 hours before for appointment, morning delivery preferred.\nAny routing restrictions we should know about?\nWho to contact if any issues during the 4-day transit?", quality: "good", analytics: "Хорошо, важные вопросы." },
                    { text: "Understood, will call Sarah 24 hours ahead for appointment time.", quality: "weak", analytics: "Упущены важные вопросы." }
                ]
            },
            {
                brokerResponse: "Love the thoroughness! No routing restrictions, but I recommend I-40 through the middle states.\nAvoid I-80 through Wyoming this time of year - weather can be unpredictable.\nFor weather delays, call me immediately and we'll work with receiver on new ETA.\nMy cell 24/7: 310-555-9999, also text me when you hit major checkpoints: Arizona, Texas, Tennessee.\nCustomer likes to know cargo is moving smoothly.",
                dispatcherPrompt: "💎 Брокер дал все детали и маршрут. Подтвердите план и завершите профессионально.",
                suggestions: [
                    { text: "Excellent, all documented! We'll take I-40 route avoiding I-80 Wyoming as suggested.\nTeam will text you at Arizona, Texas, Tennessee checkpoints plus daily updates.\nI'm adding your cell to team's priority contacts for immediate communication.\nWeather delays - we'll notify you right away, no surprises.\nAnything else or are we all set to roll?", quality: "master", analytics: "Отлично! Полный план с подтверждением всех деталей." },
                    { text: "Got it, I-40 route avoiding I-80, will text at checkpoints as requested.\nYour cell is saved for any issues, we'll keep you updated throughout.\nWeather delays - we'll call immediately, all clear on our end.", quality: "good", analytics: "Хорошо, подтвердили план." },
                    { text: "Understood, I-40 route, will text at checkpoints and call if issues.", quality: "weak", analytics: "Слишком коротко." }
                ]
            },
            {
                brokerResponse: "Perfect! We're all set, and I have to say - this is the most professional conversation I've had all week!\nYou guys clearly know what you're doing, and that's why customer was happy to pay premium.\nI have 5-6 LA to East Coast lanes every week, you're now my go-to carrier for these.\nI'll be calling you first when loads come up, safe travels and keep me posted!",
                dispatcherPrompt: "💎 Брокер очень впечатлен! Завершите на высокой ноте для долгосрочных отношений.",
                suggestions: [
                    { text: "Thank you so much! We really appreciate your trust and the opportunity.\nLooking forward to building a strong long-term partnership with you.\nYou'll get first text tomorrow at pickup with photos, then regular updates.\nFeel free to call anytime - we're here 24/7 to make your job easier!", quality: "master", analytics: "Отлично! Построение долгосрочных отношений." },
                    { text: "Thank you! We appreciate the confidence and look forward to more loads.\nWill keep you updated throughout this trip, talk to you from the road!", quality: "good", analytics: "Хорошо, профессионально." },
                    { text: "Thanks, we'll keep you posted during the trip.", quality: "weak", analytics: "Слишком коротко для важного момента." }
                ]
            },
            {
                brokerResponse: "Awesome! Talk soon, looking forward to working together!",
                outcome: {
                    type: "success",
                    quality: "master",
                    rate: "$8,250",
                    ratePerMile: "$2.96/mile",
                    relationship: "Excellent - Preferred carrier, 5-6 weekly loads guaranteed",
                    feedback: "🏆 МАСТЕР УРОВЕНЬ!\n\n✅ Показали team drivers - идеально для long haul\n✅ Получили на $750 больше posted rate\n✅ Обосновали ценность через extra care\n✅ Задали ВСЕ правильные вопросы о cargo, pickup, delivery, routing\n✅ Проактивная коммуникация на каждом шаге\n✅ Построили долгосрочное партнерство\n✅ Стали preferred carrier с гарантией 5-6 грузов в неделю\n\nЭто образцовый диалог!"
                }
            }
        ]
    }
}
];
