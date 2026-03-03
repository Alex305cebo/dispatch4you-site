// СИМУЛЬ - База диалогов для обучения диспетчеров
// Версия: 2.1
// Дата: 2026-03-03

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
            // МАСТЕР ПУТЬ (12 шагов)
            master: [
                {
                    brokerQuestion: "Yes, still available!\nThis is high-value produce load, needs experienced reefer carrier.\nWhat's your MC number and tell me about your reefer equipment?",
                    dispatcherPrompt: "💎 Брокер ищет опытного перевозчика. Покажите свою экспертизу.",
                    suggestions: [
                        {
                            text: "MC 445566.\nWe specialize in temperature-controlled produce, 12 years experience.\n2023 Carrier reefer unit with multi-temp zones and real-time monitoring.\nDriver HACCP certified, currently empty in Chicago ready to load.",
                            quality: "master",
                            analytics: "Отлично! Показали специализацию, опыт, современное оборудование и готовность."
                        },
                        {
                            text: "MC 445566.\n2023 Carrier reefer, 53ft.\nDriver in Chicago now.",
                            quality: "good",
                            analytics: "Хорошо, но не показали опыт с produce и сертификации."
                        },
                        {
                            text: "MC 445566.\nReefer available.",
                            quality: "weak",
                            analytics: "Слишком мало информации для серьезного груза."
                        }
                    ]
                },
                {
                    brokerResponse: "Perfect! I just verified MC 445566 - 99% safety score, excellent produce history.\nThis is 44,000 lbs fresh strawberries from California, must maintain 34-36°F constant.\nPickup tomorrow morning 6 AM at Chicago cold storage, delivery Miami in 48 hours max.\nWith your experience, what rate are you looking at for this lane?",
                    dispatcherPrompt: "💎 Брокер впечатлен и дал полные детали груза. Назовите обоснованную ставку.",
                    suggestions: [
                        {
                            text: "For 1,380 miles with fresh produce and strict temperature control, market rate is $2.75-$3.00/mile.\nI'm at $3,900 all-in.\nThat covers fuel, experienced driver, continuous temp monitoring, and guaranteed 48-hour delivery.",
                            quality: "master",
                            analytics: "Отлично! Обоснованная ставка с детальным объяснением ценности."
                        },
                        {
                            text: "$3,800 for this load.\nWe can handle the tight timeline.",
                            quality: "good",
                            analytics: "Хорошо, но добавьте обоснование рыночной ставки."
                        },
                        {
                            text: "$4,200.",
                            quality: "aggressive",
                            analytics: "Слишком высоко без обоснования."
                        }
                    ]
                },
                {
                    brokerResponse: "I appreciate the detailed breakdown - that's exactly what I need to hear.\nPosted rate is $3,450, that's $2.50/mile, but I have budget flexibility for reliable carrier.\nStrawberries are time-sensitive, shipper is very strict about temperature.\nCan you meet me at $3,700?",
                    dispatcherPrompt: "💎 Брокер ценит профессионализм и идет навстречу. Торгуйтесь умно.",
                    suggestions: [
                        {
                            text: "I understand the urgency and shipper requirements.\nFor this critical produce load, meet me at $3,850.\nYou get 15 years produce experience, temp logs every 2 hours, and my personal guarantee.\nThat's $2.79/mile - fair for the service level you need.",
                            quality: "master",
                            analytics: "Отлично! Обоснование ценности сервиса, не просто цена."
                        },
                        {
                            text: "Can you do $3,800?\nThat's my bottom line for this distance.",
                            quality: "good",
                            analytics: "Хорошо, но можно было лучше обосновать."
                        },
                        {
                            text: "$3,700 works.\nLet's book it.",
                            quality: "weak",
                            analytics: "Сдались слишком быстро, могли получить больше."
                        }
                    ]
                },
                {
                    brokerResponse: "You make a strong case and I can see you understand produce logistics.\nLet me call shipper about budget increase.\nIf I can get approval for $3,800, do we have a deal with temp logs every 2 hours as you mentioned?",
                    dispatcherPrompt: "💎 Брокер почти согласен и проверяет детали. Подтвердите обязательства.",
                    suggestions: [
                        {
                            text: "Absolutely, $3,800 and it's yours!\nYou'll get temp logs every 2 hours via email, GPS tracking link, and check calls every 6 hours.\nI'll send NOA immediately and driver will pre-cool unit tonight to 34°F.\nWhen can you send rate confirmation?",
                            quality: "master",
                            analytics: "Отлично! Подтвердили обязательства и проактивно двигаете процесс вперед."
                        },
                        {
                            text: "$3,800 works.\nYes, we'll provide temp logs.\nSend rate con when ready.",
                            quality: "good",
                            analytics: "Хорошо, но можно было добавить больше деталей сервиса."
                        },
                        {
                            text: "Deal at $3,800.",
                            quality: "weak",
                            analytics: "Слишком коротко, не подтвердили детали."
                        }
                    ]
                },
                {
                    brokerResponse: "Excellent! Shipper approved $3,800 based on your service commitment.\nSending rate con now to your email.\nWhat's your factoring company so I can set up payment?",
                    dispatcherPrompt: "💎 Груз ваш! Дайте factoring информацию быстро.",
                    suggestions: [
                        {
                            text: "Perfect!\nWe work with RTS Financial.\nSending NOA to your email right now - should arrive in 2 minutes.\nDriver will contact shipper tonight to confirm 6 AM pickup.\nWhat's shipper contact number?",
                            quality: "master",
                            analytics: "Отлично! Быстрая реакция, проактивность, запрос контакта."
                        },
                        {
                            text: "Great!\nRTS Financial.\nSending NOA now.",
                            quality: "good",
                            analytics: "Хорошо, все необходимое."
                        },
                        {
                            text: "RTS.",
                            quality: "weak",
                            analytics: "Слишком коротко."
                        }
                    ]
                },
                {
                    brokerResponse: "Love the proactive approach!\nShipper contact: Mike at Chicago Cold Storage, 312-555-0145.\nAddress: 1234 Industrial Way, Chicago IL 60601.\nThey're very particular - driver must arrive exactly at 6 AM, they won't wait.\nPre-cool confirmation required before arrival.\nAny questions about pickup process?",
                    dispatcherPrompt: "💎 Брокер дал важные детали о строгом shipper. Покажите что понимаете серьезность.",
                    suggestions: [
                        {
                            text: "Understood - 6 AM sharp, no delays.\nDriver will pre-cool tonight and send you temp confirmation by 10 PM.\nWill call Mike tomorrow at 5:30 AM to confirm arrival.\nIs pickup FCFS or do they assign dock?\nHow long does loading typically take?",
                            quality: "master",
                            analytics: "Отлично! Показали понимание требований и задали важные вопросы."
                        },
                        {
                            text: "Got it, 6 AM sharp.\nWill pre-cool tonight.\nHow long for loading?",
                            quality: "good",
                            analytics: "Хорошо, но можно было показать больше понимания."
                        },
                        {
                            text: "Ok, 6 AM.",
                            quality: "weak",
                            analytics: "Слишком коротко, не показали понимание серьезности."
                        }
                    ]
                },
                {
                    brokerResponse: "Perfect! You clearly understand produce logistics.\nPickup is appointment-based, dock 7 will be assigned.\nLoading takes 2-3 hours - they're very careful with strawberries.\nShipper covers $200 lumper fee.\nDelivery is Miami Fresh Distribution, 8901 Ocean Drive, Miami FL 33139.\nReceiver: Carlos at 305-555-0198, delivery window is 48 hours from pickup, FCFS.\nWhat else do you need from me?",
                    dispatcherPrompt: "💎 Все основные детали получены. Уточните последние важные моменты.",
                    suggestions: [
                        {
                            text: "Excellent, all noted!\nTwo quick questions: any routing restrictions or preferred route?\nAnd what's detention policy at delivery if they're backed up?\nAlso, your 24/7 contact in case any issues on the road?",
                            quality: "master",
                            analytics: "Отлично! Планирование на случай проблем - признак опыта."
                        },
                        {
                            text: "Got it.\nAny routing restrictions?\nWho to call if issues?",
                            quality: "good",
                            analytics: "Хорошо, базовые вопросы."
                        },
                        {
                            text: "All clear, thanks.",
                            quality: "weak",
                            analytics: "Упущена возможность уточнить важные детали."
                        }
                    ]
                },
                {
                    brokerResponse: "Great questions - this is why I wanted experienced carrier!\nNo routing restrictions, but avoid I-10 through Louisiana if possible - construction delays.\nDetention at delivery: $75/hour after 2 hours free time.\nMy cell 24/7: 312-555-9876.\nAlso, shipper requires seal number photo before leaving - can your driver handle that?",
                    dispatcherPrompt: "💎 Брокер дал все детали и последнее требование. Подтвердите возможности.",
                    suggestions: [
                        {
                            text: "Absolutely!\nDriver will take seal photo and text it to you immediately after loading.\nWe'll route through I-75 to avoid I-10 construction.\nI'll add your cell to driver's contact list as priority.\nAnything else or are we all set?",
                            quality: "master",
                            analytics: "Отлично! Подтвердили все требования и показали готовность."
                        },
                        {
                            text: "Yes, driver can send seal photo.\nWe'll avoid I-10.\nAll set.",
                            quality: "good",
                            analytics: "Хорошо, подтвердили требования."
                        },
                        {
                            text: "Yes, can do.",
                            quality: "weak",
                            analytics: "Слишком коротко."
                        }
                    ]
                },
                {
                    brokerResponse: "Perfect! We're all set then.\nI'm really impressed with your professionalism and attention to detail.\nThis is exactly the kind of carrier I need for my produce loads.\nI'll be sending you more opportunities - I have 3-4 Chicago to Florida lanes weekly.\nSafe travels and keep me posted!",
                    dispatcherPrompt: "💎 Брокер очень доволен! Завершите на высокой ноте.",
                    suggestions: [
                        {
                            text: "Thank you! We appreciate the opportunity and your trust.\nLooking forward to building long-term partnership.\nYou'll get first update tomorrow at pickup, then every 6 hours.\nFeel free to call anytime - we're here 24/7!",
                            quality: "master",
                            analytics: "Отлично! Построение долгосрочных отношений."
                        },
                        {
                            text: "Thank you!\nLooking forward to more loads.\nWill keep you updated.",
                            quality: "good",
                            analytics: "Хорошо, профессионально."
                        },
                        {
                            text: "Thanks, bye.",
                            quality: "weak",
                            analytics: "Слишком коротко для важного момента."
                        }
                    ]
                },
                {
                    brokerResponse: "Excellent! Talk soon.",
                    outcome: {
                        type: "success",
                        quality: "master",
                        rate: "$3,800",
                        ratePerMile: "$2.75/mile",
                        relationship: "Excellent - Preferred carrier, future loads guaranteed",
                        feedback: "🏆 МАСТЕР УРОВЕНЬ!\n\n✅ Показали экспертизу с первого ответа\n✅ Отличные переговоры - получили на $350 больше posted rate\n✅ Обосновали ценность сервиса\n✅ Задали все правильные вопросы\n✅ Проактивная коммуникация на каждом шаге\n✅ Построили долгосрочные отношения\n\nБрокер будет звонить вам первым с новыми грузами!"
                    }
                }
            ],

            // ХОРОШИЙ ПУТЬ (7 шагов)
            good: [
                {
                    brokerQuestion: "Yes, still available!\nThis is high-value produce load, needs experienced reefer carrier.\nWhat's your MC number and tell me about your reefer equipment?",
                    dispatcherPrompt: "💎 Брокер ищет опытного перевозчика.",
                    suggestions: [
                        {
                            text: "MC 445566.\n2023 Carrier reefer, 53ft.\nDriver in Chicago now.",
                            quality: "good",
                            analytics: "Хорошо, но не показали опыт с produce."
                        }
                    ]
                },
                {
                    brokerResponse: "Good. Verified MC 445566 - clean record.\nThis is 44,000 lbs fresh strawberries, must maintain 34-36°F constant.\nPickup tomorrow 6 AM Chicago, delivery Miami in 48 hours.\nWhat's your rate?",
                    dispatcherPrompt: "💎 Брокер дал детали. Назовите ставку.",
                    suggestions: [
                        {
                            text: "$3,750 for this load.\nWe can handle the timeline.",
                            quality: "good",
                            analytics: "Хорошо."
                        }
                    ]
                },
                {
                    brokerResponse: "Posted rate is $3,450.\nI can go up to $3,600 for reliable carrier.\nFinal offer.",
                    dispatcherPrompt: "💎 Финальное предложение.",
                    suggestions: [
                        {
                            text: "$3,600 works.\nSend rate con.",
                            quality: "good",
                            analytics: "Приняли предложение."
                        }
                    ]
                },
                {
                    brokerResponse: "Great! Sending rate con.\nFactoring company?",
                    dispatcherPrompt: "💎 Дайте factoring.",
                    suggestions: [
                        {
                            text: "RTS Financial.\nSending NOA now.",
                            quality: "good",
                            analytics: "Хорошо."
                        }
                    ]
                },
                {
                    brokerResponse: "Perfect.\nPickup: Chicago Cold Storage, 1234 Industrial Way, 6 AM sharp.\nDelivery: Miami Fresh Distribution, 8901 Ocean Drive.\nShipper contact: Mike 312-555-0145.\nPre-cool to 34°F before arrival.",
                    dispatcherPrompt: "💎 Подтвердите детали.",
                    suggestions: [
                        {
                            text: "Understood.\nDriver will pre-cool tonight and arrive at 6 AM.\nThank you!",
                            quality: "good",
                            analytics: "Хорошо."
                        }
                    ]
                },
                {
                    brokerResponse: "Good. Call if issues.",
                    outcome: {
                        type: "success",
                        quality: "good",
                        rate: "$3,600",
                        ratePerMile: "$2.61/mile",
                        relationship: "Good - Will call again",
                        feedback: "✅ ХОРОШИЙ РЕЗУЛЬТАТ!\n\n✅ Груз получен\n✅ Получили на $150 больше posted rate\n✅ Профессиональная коммуникация\n\nМогли получить еще $200 с лучшим обоснованием ставки и более детальной информацией о возможностях."
                    }
                }
            ],

            // НОРМАЛЬНЫЙ ПУТЬ (4 шага)
            normal: [
                {
                    brokerQuestion: "Yes, still available!\nThis is high-value produce load, needs experienced reefer carrier.\nWhat's your MC number and tell me about your reefer equipment?",
                    dispatcherPrompt: "💎 Брокер ищет опытного перевозчика.",
                    suggestions: [
                        {
                            text: "MC 445566.\nReefer available.",
                            quality: "weak",
                            analytics: "Слишком мало информации."
                        }
                    ]
                },
                {
                    brokerResponse: "I need more details for produce load.\nWhat year is reefer unit?\nDriver location?\nAny produce experience?",
                    dispatcherPrompt: "💎 Брокер не впечатлен, нужно больше информации.",
                    suggestions: [
                        {
                            text: "2023 Carrier reefer.\nDriver in Chicago.\nYes, we haul produce.",
                            quality: "normal",
                            analytics: "Лучше, но поздно."
                        }
                    ]
                },
                {
                    brokerResponse: "Ok. 44,000 lbs strawberries, 34-36°F, pickup tomorrow 6 AM, delivery Miami 48 hours.\nRate $3,450.\nYes or no?",
                    dispatcherPrompt: "💎 Брокер торопится, низкая ставка.",
                    suggestions: [
                        {
                            text: "Yes, we'll take it.",
                            quality: "weak",
                            analytics: "Приняли posted rate."
                        }
                    ]
                },
                {
                    brokerResponse: "Sending rate con.\nFactoring to my email.\nPre-cool to 34°F.",
                    outcome: {
                        type: "success",
                        quality: "normal",
                        rate: "$3,450",
                        ratePerMile: "$2.50/mile",
                        relationship: "Neutral - Backup carrier",
                        feedback: "⚪ НОРМАЛЬНЫЙ РЕЗУЛЬТАТ\n\n✅ Груз получен\n⚠️ Приняли posted rate без переговоров\n⚠️ Не показали экспертизу\n⚠️ Минимальная коммуникация\n⚠️ Не уточнили важные детали\n\nВы могли получить на $150-350 больше с правильным подходом."
                    }
                }
            ]
        }
    }
];
