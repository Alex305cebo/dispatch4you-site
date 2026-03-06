// Scenario #5: Paper Products - Portland ME → Boston MA
// Easy difficulty, short haul (100 miles)
// NEW DIALOG SYSTEM V2.0

const scenario5 = {
    id: 5,
    title: "Portland ME → Boston MA",
    distance: "100 miles",
    equipment: "Dry Van 53ft",
    cargo: "Paper rolls, 44,000 lbs",
    difficulty: "Easy",
    rate: "$350 ($3.50/mile)",

    initialMessage: "This is Sarah from ABC Logistics. We have a load posting for Portland ME to Boston MA. Can you tell me more about this load?",

    paths: {
        master: [
            // Step 1: Broker responds + MC verification
            {
                brokerQuestion: "Good morning! Yes, this is a dry van load. Portland ME to Boston MA. 100 miles. 44,000 lbs paper rolls. Pickup today 2-5 PM, delivery tomorrow by 10 AM. What's your MC number?",
                dispatcherPrompt: "💡 Брокер дал информацию по грузу и спрашивает MC номер. Представьтесь профессионально.",
                suggestions: [
                    // Excellent (A)
                    "MC 778899. We can do this load. What's the rate?",
                    // Good (A)
                    "Our MC is 778899. We're interested. What rate are you offering?",
                    // Normal (B)
                    "MC 778899. Tell me the rate please.",
                    // Weak (B)
                    "778899. How much you pay?",
                    // Aggressive (C) → reject1
                    "MC 778899. This better pay good for such heavy load.",
                    // Fail (C) → reject1
                    "What rate? I need to know rate first before MC."
                ]
            },

            // Step 2: Rate offer
            {
                brokerQuestion: "Great! MC verified. For this load, I'm offering $350 all-in. That's $3.50 per mile. Pickup is at Portland Paper Mill, delivery to Boston Distribution Center. Interested?",
                dispatcherPrompt: "💡 Брокер предложил $350 ($3.50/mile). Это хорошая ставка для короткого рейса. Можете принять или попробовать торговаться.",
                suggestions: [
                    // Excellent (A)
                    "$350 works for us. Can you send me the rate confirmation?",
                    // Good (A)
                    "That's acceptable. Please send the details.",
                    // Normal (B)
                    "OK, $350 is fine. What's next?",
                    // Weak (B)
                    "Can you do $375? It's heavy load.",
                    // Aggressive (C) → reject2
                    "$350 is too low. I need at least $450 for this.",
                    // Fail (C) → reject2
                    "No way. $350 for 44,000 lbs? You're crazy."
                ]
            },

            // Step 3: Pickup details
            {
                brokerQuestion: "Perfect! Pickup is at Portland Paper Mill, 123 Industrial Way, Portland ME. Contact: Mike Johnson, (207) 555-0100. Pickup window: today 2-5 PM. They'll load you with forklift. Any questions?",
                dispatcherPrompt: "💡 Брокер дал детали погрузки. Подтвердите информацию и спросите про delivery.",
                suggestions: [
                    // Excellent (A)
                    "Got it. Portland Paper Mill, 2-5 PM today. What's the delivery address?",
                    // Good (A)
                    "Understood. Mike Johnson (207) 555-0100. Where's delivery?",
                    // Normal (B)
                    "OK, pickup today 2-5 PM. Delivery info?",
                    // Weak (B)
                    "Pickup Portland. Where delivery?",
                    // Aggressive (C) → reject3
                    "2-5 PM is too tight. I need until 6 PM.",
                    // Fail (C) → reject3
                    "Forklift loading? How long that takes? I don't have time to wait."
                ]
            },

            // Step 4: Delivery details
            {
                brokerQuestion: "Delivery is at Boston Distribution Center, 456 Warehouse Blvd, Boston MA. Contact: Tom Williams, (617) 555-0200. Delivery tomorrow by 10 AM. They unload with forklift, takes about 30 minutes. Dock #5.",
                dispatcherPrompt: "💡 Брокер дал детали разгрузки. Подтвердите и спросите про документы.",
                suggestions: [
                    // Excellent (A)
                    "Perfect. Boston Distribution, tomorrow by 10 AM, Dock #5. What documents do I need?",
                    // Good (A)
                    "Got it. Tom Williams (617) 555-0200, delivery by 10 AM. Any special paperwork?",
                    // Normal (B)
                    "OK, delivery tomorrow 10 AM. Documents?",
                    // Weak (B)
                    "Boston tomorrow. What papers?",
                    // Aggressive (C) → reject4
                    "10 AM is early. Can we do afternoon?",
                    // Fail (C) → reject4
                    "30 minutes unloading? That's too long. I need faster."
                ]
            },

            // Step 5: Documentation
            {
                brokerQuestion: "You'll need BOL (Bill of Lading) from pickup, POD (Proof of Delivery) at delivery. Both facilities will provide. Also, make sure to get weight tickets - paper is heavy. Any other questions?",
                dispatcherPrompt: "💡 Брокер объяснил документы. Подтвердите понимание и спросите про payment.",
                suggestions: [
                    // Excellent (A)
                    "Understood. BOL at pickup, POD at delivery, weight tickets. What's the payment terms?",
                    // Good (A)
                    "Got it. BOL, POD, weight tickets. How about payment?",
                    // Normal (B)
                    "OK, documents clear. Payment?",
                    // Weak (B)
                    "BOL, POD. When you pay?",
                    // Aggressive (C) → reject5
                    "Weight tickets? Why do I need those? That's extra work.",
                    // Fail (C) → reject5
                    "Too many documents. Can't we skip some?"
                ]
            },

            // Step 6: Payment terms
            {
                brokerQuestion: "Payment is NET 30 days after delivery. We can also offer quick pay for 3% fee - you get paid in 3 business days. Which option works for you?",
                dispatcherPrompt: "💡 Брокер предложил NET 30 или quick pay (3% fee). Выберите вариант.",
                suggestions: [
                    // Excellent (A)
                    "NET 30 is fine. Please send the rate confirmation and I'll book the truck.",
                    // Good (A)
                    "We'll take NET 30. Send me the paperwork.",
                    // Normal (B)
                    "OK, NET 30. What's next?",
                    // Weak (B)
                    "Quick pay better. Send confirmation.",
                    // Aggressive (C) → reject6
                    "3% fee is too high. Can you do 1%?",
                    // Fail (C) → reject6
                    "NET 30? That's too long. I need payment in 7 days."
                ]
            },

            // Step 7: Final confirmation
            {
                brokerResponse: "Excellent! I'm sending the rate confirmation to your email now. Load is booked. Truck should arrive at Portland Paper Mill today between 2-5 PM. Please confirm when driver is on the way. Thank you!",
                outcome: {
                    success: true,
                    title: "✅ ОТЛИЧНО! Груз забронирован",
                    rate: "$350",
                    feedback: "Вы успешно забронировали груз! Профессиональная коммуникация, быстрое принятие решений.",
                    lessons: [
                        "✅ Короткие рейсы (100 миль) - хорошая ставка $3.50/mile",
                        "✅ Тяжелые грузы (44,000 lbs) требуют внимания к весовым талонам",
                        "✅ NET 30 - стандартные условия оплаты",
                        "✅ Быстрая погрузка/разгрузка с forklift - экономит время"
                    ]
                }
            }
        ],

        // Reject path 1: Aggressive about MC or rate inquiry
        reject1: [
            {},
            {
                brokerResponse: "I understand you want to know the rate, but we need to verify your MC first for compliance. If you're not comfortable sharing your MC, I'll have to pass on this. Thanks anyway.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Непрофессиональное поведение",
                    feedback: "Брокер отказался работать из-за агрессивного тона или отказа предоставить MC номер.",
                    lessons: [
                        "❌ Всегда предоставляйте MC номер при запросе - это стандартная процедура",
                        "❌ Избегайте агрессивного тона в начале разговора",
                        "❌ Брокеры проверяют MC для compliance и безопасности",
                        "💡 Профессионализм с первых секунд - ключ к успеху"
                    ]
                }
            }
        ],

        // Reject path 2: Unreasonable rate negotiation
        reject2: [
            {},
            {},
            {
                brokerResponse: "$350 is our best rate for this short haul. It's $3.50 per mile which is above market average. If that doesn't work, I'll need to find another carrier. Thanks for your time.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Неразумные требования по ставке",
                    feedback: "Брокер отказался из-за завышенных требований по ставке.",
                    lessons: [
                        "❌ $3.50/mile для 100 миль - это хорошая ставка",
                        "❌ Короткие рейсы обычно имеют выше ставку per mile",
                        "❌ Агрессивные требования отпугивают брокеров",
                        "💡 Знайте рыночные ставки для вашего региона"
                    ]
                }
            }
        ],

        // Reject path 3: Pickup time issues
        reject3: [
            {},
            {},
            {},
            {
                brokerResponse: "The pickup window is 2-5 PM today - that's what the shipper requires. If you can't make that window, I'll need to find another truck. Thanks anyway.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Не можете выполнить pickup window",
                    feedback: "Брокер отказался из-за невозможности выполнить требования по времени погрузки.",
                    lessons: [
                        "❌ Pickup windows устанавливаются shipper'ом, не брокером",
                        "❌ Если не можете выполнить требования - лучше отказаться сразу",
                        "❌ Жалобы на время погрузки выглядят непрофессионально",
                        "💡 Планируйте маршруты заранее с учетом pickup windows"
                    ]
                }
            }
        ],

        // Reject path 4: Delivery time issues
        reject4: [
            {},
            {},
            {},
            {},
            {
                brokerResponse: "Delivery by 10 AM tomorrow is the requirement from the consignee. If you can't meet that deadline, I'll have to pass. Thanks for your interest.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Не можете выполнить delivery deadline",
                    feedback: "Брокер отказался из-за невозможности выполнить требования по времени доставки.",
                    lessons: [
                        "❌ Delivery deadlines критичны для consignee",
                        "❌ 100 миль за ночь - легко выполнимо",
                        "❌ Жалобы на unloading time показывают неопытность",
                        "💡 Для 100 миль delivery next day by 10 AM - стандарт"
                    ]
                }
            }
        ],

        // Reject path 5: Documentation complaints
        reject5: [
            {},
            {},
            {},
            {},
            {},
            {
                brokerResponse: "BOL, POD, and weight tickets are standard documentation for freight. If you're not willing to handle basic paperwork, I can't work with you. Thanks anyway.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Отказ от стандартной документации",
                    feedback: "Брокер отказался из-за нежелания работать со стандартными документами.",
                    lessons: [
                        "❌ BOL и POD - обязательные документы для любого груза",
                        "❌ Weight tickets важны для тяжелых грузов (44,000 lbs)",
                        "❌ Жалобы на документацию показывают непрофессионализм",
                        "💡 Документация - неотъемлемая часть работы диспетчера"
                    ]
                }
            }
        ],

        // Reject path 6: Payment terms issues
        reject6: [
            {},
            {},
            {},
            {},
            {},
            {},
            {
                brokerResponse: "NET 30 is our standard payment term. Quick pay fee is 3% - that's industry standard. If these terms don't work for you, I'll need to find another carrier. Thanks for your time.",
                outcome: {
                    success: false,
                    title: "❌ Отказ: Неразумные требования по оплате",
                    feedback: "Брокер отказался из-за неразумных требований по условиям оплаты.",
                    lessons: [
                        "❌ NET 30 - стандартные условия в индустрии",
                        "❌ Quick pay fee 3% - рыночная ставка",
                        "❌ Требование NET 7 нереалистично для большинства брокеров",
                        "💡 Если нужны быстрые деньги - используйте factoring"
                    ]
                }
            }
        ]
    }
};

// Add to global scenarios array
if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario5);
    console.log('✅ Scenario #5 loaded: Paper Products - Portland ME → Boston MA');
}
