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
        }
    }
];
