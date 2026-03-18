// ============================================================
// REALISTIC DISPATCHER-BROKER SCENARIOS 2026
// Based on real industry practices and negotiations
// 15-20 step dialogues with authentic flow
// ============================================================

console.log('🟢 Loading realistic scenarios 2026...');

// ─────────────────────────────────────────────────────────────
// SCENARIO 1 — Dry Van | Chicago → Dallas | 1,000 miles
// Standard negotiation with detention and payment terms
// ─────────────────────────────────────────────────────────────
const scenario_chicago_dallas = {
    id: 101,
    title: "Electronics — Chicago to Dallas",
    route: "Chicago IL → Dallas TX",
    distance: 1000,
    equipment: "Dry Van (53ft)",
    cargo: "Packaged electronics",
    weight: "42,000 lbs (24 pallets)",
    postedRate: "$2,400 ($2.40/mile)",
    deadline: "Pickup tomorrow 8 AM-12 PM, Delivery Thursday 2 PM",
    brokerStyle: "Professional, market-aware, willing to negotiate",
    difficulty: "standard",
    brokerName: "Sarah",
    brokerCompany: "Midwest Freight Solutions",
    initialMessage: "Good morning, this is Sarah from Midwest Freight Solutions. I'm calling about load reference CH-2847, Chicago to Dallas. Is this still available?",

    paths: {
        master: [
            {
                brokerQuestion: "Yes, it's available. Can you confirm your company name and MC number?",
                dispatcherPrompt: "💡 Представьтесь профессионально с MC номером",
                suggestions: [
                    { text: "Sure, this is Alex from Star Transport, MC 445566. We run 25 dry vans in the Midwest region, been in business 8 years with excellent safety rating.", quality: "excellent", path: "master" },
                    { text: "Star Transport, MC 445566. We have dry vans available.", quality: "good", path: "master" },
                    { text: "MC 445566, Star Transport.", quality: "normal", path: "warning" },
                    { text: "Let me find my MC number...", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "Great. Let me pull up the details. Pickup is at 2450 West Fulton Street, Chicago, tomorrow between 8 AM and 12 PM. Delivery to Dallas at 3500 Maple Avenue, appointment on Thursday at 2 PM. Can you make that schedule?",
                dispatcherPrompt: "💡 Подтвердите возможность выполнить график",
                suggestions: [
                    { text: "Yes, we can make that schedule. My driver is currently in the Chicago area with zero deadhead. He can be at the pickup location tomorrow at 8 AM sharp. What's the commodity and any special handling requirements?", quality: "excellent", path: "master" },
                    { text: "Yes, driver is in Chicago area, zero deadhead. Can make 8 AM pickup. What's the commodity?", quality: "good", path: "master" },
                    { text: "We can make that schedule. What's the cargo?", quality: "normal", path: "warning" },
                    { text: "Should be able to make it...", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "It's packaged electronics, 42,000 pounds, 24 pallets. Standard dry van, no special requirements. Just need to maintain normal temperature, no extreme heat or cold.",
                dispatcherPrompt: "💡 Уточните детали и спросите о ставке",
                suggestions: [
                    { text: "Understood. Electronics, 42K lbs, 24 pallets, standard handling. My driver has experience with electronics - knows to avoid rough roads and secure properly. What rate are you offering for this load?", quality: "excellent", path: "master" },
                    { text: "Got it. Electronics, 42K lbs. What's your rate?", quality: "good", path: "master" },
                    { text: "Okay. What's the rate?", quality: "normal", path: "warning" },
                    { text: "Rate?", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "We're looking at $2,400 all-in for this one.",
                dispatcherPrompt: "💡 ТОРГ! $2,400 = $2.40/mile. Просите $2,700-2,800",
                suggestions: [
                    { text: "I appreciate the offer Sarah, but for 1,000 miles with electronics, I need to make this work for my driver. Can you do $2,800? That's $2.80 per mile, which is fair for both of us considering we have zero deadhead and a reliable driver.", quality: "excellent", path: "master" },
                    { text: "That's $2.40/mile. Can you do $2,700? We have zero deadhead and reliable service.", quality: "good", path: "master" },
                    { text: "Can you do better than $2,400?", quality: "normal", path: "warning" },
                    { text: "$2,400 is too low.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "That's too high for this lane. The market is soft this week. I can maybe go to $2,500, but that's pushing it.",
                dispatcherPrompt: "💡 Брокер предлагает $2,500. Обоснуйте свою ставку",
                suggestions: [
                    { text: "I understand the market, but look at what you're getting: my driver is in the area right now - zero deadhead. He can pick up tomorrow morning, no problem. Plus, electronics - I know your customer values reliability. How about we meet at $2,700?", quality: "excellent", path: "master" },
                    { text: "Zero deadhead, reliable driver, electronics experience. Can we do $2,650?", quality: "good", path: "master" },
                    { text: "How about $2,600?", quality: "normal", path: "warning" },
                    { text: "Okay, $2,500 works.", quality: "weak", path: "reject_weak_final" }
                ]
            },
            {
                brokerQuestion: "I hear you on the reliability. Let me check with my manager... *pause* ... Okay, I can do $2,600, but that's my absolute max.",
                dispatcherPrompt: "💡 Брокер на $2,600. Добавьте условия или согласитесь",
                suggestions: [
                    { text: "Alright Sarah, $2,600 works if we can add detention pay. What's your policy on that? I want to make sure my driver is protected if there are delays at pickup or delivery.", quality: "excellent", path: "master" },
                    { text: "$2,600 works. What's your detention policy?", quality: "good", path: "master" },
                    { text: "Okay, $2,600 is acceptable.", quality: "normal", path: "master" },
                    { text: "Fine, $2,600.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "Standard detention is $50 per hour after 2 hours free time, both pickup and delivery.",
                dispatcherPrompt: "💡 Уточните условия оплаты",
                suggestions: [
                    { text: "Perfect, $50/hour after 2 hours works. And what are your payment terms? Do you offer QuickPay?", quality: "excellent", path: "master" },
                    { text: "Good. Payment terms?", quality: "good", path: "master" },
                    { text: "Okay. How do we get paid?", quality: "normal", path: "warning" },
                    { text: "Fine.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "We're on QuickPay - you can get paid in 24 hours for 3% fee, or standard NET 30.",
                dispatcherPrompt: "💡 Спросите о дополнительных остановках и инструкциях",
                suggestions: [
                    { text: "QuickPay works for us. Are there any additional stops or special instructions we should know about?", quality: "excellent", path: "master" },
                    { text: "QuickPay is fine. Any additional stops?", quality: "good", path: "master" },
                    { text: "Okay. Anything else?", quality: "normal", path: "warning" },
                    { text: "Fine.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "No, it's a direct load. Just need to call the receiver 2 hours before delivery for dock assignment.",
                dispatcherPrompt: "💡 Уточните необходимые документы",
                suggestions: [
                    { text: "Understood. What documents do you need from us? BOL, POD, anything else?", quality: "excellent", path: "master" },
                    { text: "Got it. What documents do you need?", quality: "good", path: "master" },
                    { text: "Okay. Documents?", quality: "normal", path: "warning" },
                    { text: "Fine.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "Standard - signed BOL, POD with receiver stamp, and photos of the seal at pickup and delivery.",
                dispatcherPrompt: "💡 Подтвердите страховку",
                suggestions: [
                    { text: "No problem. Our cargo insurance is $100K. Is that sufficient for this load?", quality: "excellent", path: "master" },
                    { text: "We have $100K cargo insurance. Sufficient?", quality: "good", path: "master" },
                    { text: "We have insurance.", quality: "normal", path: "warning" },
                    { text: "Okay.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "Yes, that's fine. I'll need a copy of your insurance certificate though.",
                dispatcherPrompt: "💡 Финальное подтверждение всех условий",
                suggestions: [
                    { text: "Perfect. So we're confirmed at $2,600, detention $50/hour after 2 hours, QuickPay available. I'll send you our MC number and insurance certificate right now. Can you send me the rate confirmation?", quality: "excellent", path: "master" },
                    { text: "Confirmed at $2,600, detention $50/hour. Sending insurance cert now.", quality: "good", path: "master" },
                    { text: "Okay, sending documents.", quality: "normal", path: "warning" },
                    { text: "Fine.", quality: "weak", path: "warning" }
                ]
            },
            {
                brokerQuestion: "Sounds good. Let me get your truck and driver info.",
                dispatcherPrompt: "💡 Предоставьте информацию о водителе и траке",
                suggestions: [
                    { text: "Truck number is 2847, driver is John Smith, phone 555-0123. He'll be there tomorrow at 8 AM sharp. John has 12 years experience and excellent safety record.", quality: "excellent", path: "success_booked" },
                    { text: "Truck 2847, driver John Smith, 555-0123. Will be there at 8 AM.", quality: "good", path: "success_booked" },
                    { text: "Truck 2847, driver John Smith.", quality: "normal", path: "success_booked" },
                    { text: "I'll send that later.", quality: "weak", path: "warning" }
                ]
            }
        ],
        warning: [
            {
                brokerQuestion: "I need more details from you. This is a high-value load and I need to make sure you're professional.",
                dispatcherPrompt: "💡 Брокер сомневается. Будьте более профессиональны",
                suggestions: [
                    { text: "I apologize for being brief. Let me give you complete information: Star Transport, MC 445566, 25 dry vans, 8 years in business, excellent safety rating. My driver John Smith has 12 years experience, truck 2847 is a 2021 Freightliner with current DOT inspection. We're fully insured with $100K cargo coverage. How can I help you feel confident about this load?", quality: "excellent", path: "master" },
                    { text: "Sorry, let me be more detailed. MC 445566, Star Transport, experienced driver, fully insured. What else do you need?", quality: "good", path: "master" },
                    { text: "What information do you need?", quality: "normal", path: "warning" },
                    { text: "I gave you my MC number.", quality: "weak", path: "reject_unprofessional" }
                ]
            }
        ],
        warning_strict: [
            {
                brokerQuestion: "Look, I need a professional carrier for this load. If you can't provide basic information upfront, I'm moving on to the next call.",
                dispatcherPrompt: "💡 ПОСЛЕДНИЙ ШАНС! Будьте максимально профессиональны",
                suggestions: [
                    { text: "Sarah, I apologize for the confusion. Let me start over professionally: Alex from Star Transport, MC 445566. We're a reliable carrier with 25 dry vans, 8 years in business, excellent safety rating. Driver John Smith, 12 years experience, truck 2847, zero deadhead from Chicago. $100K cargo insurance, current certificates. We can make your 8 AM pickup tomorrow and deliver Thursday at 2 PM. I'm looking for $2,700 for this load. Can we work together?", quality: "excellent", path: "master" },
                    { text: "I apologize. MC 445566, Star Transport, experienced driver, zero deadhead, can make schedule. Looking for $2,700.", quality: "good", path: "master" },
                    { text: "Sorry, what do you need from me?", quality: "normal", path: "reject_unprofessional" },
                    { text: "Fine, forget it.", quality: "weak", path: "reject_unprofessional" }
                ]
            }
        ],
        reject_rate_final: [
            {
                brokerQuestion: "That rate is way too high. I can't work with that. Thanks anyway.",
                dispatcherPrompt: "❌ Груз потерян - слишком высокая ставка",
                suggestions: [
                    { text: "Understood. Thanks for your time.", quality: "normal", path: "end" }
                ]
            }
        ],
        reject_weak_final: [
            {
                brokerQuestion: "Okay, we're booked at $2,500. Send me your info.",
                dispatcherPrompt: "⚠️ Груз забронирован, но вы оставили деньги на столе",
                suggestions: [
                    { text: "Great, sending info now.", quality: "normal", path: "end" }
                ]
            }
        ],
        reject_unprofessional: [
            {
                brokerQuestion: "I'm going to pass on this. I need a more professional carrier. Good luck.",
                dispatcherPrompt: "❌ Груз потерян - непрофессиональное поведение",
                suggestions: [
                    { text: "Understood. Have a good day.", quality: "normal", path: "end" }
                ]
            }
        ],
        success_booked: [
            {
                brokerQuestion: "Perfect. I'm sending you the rate confirmation now. Check your email in 2 minutes. Have John call me when he's loaded.",
                dispatcherPrompt: "✅ УСПЕХ! Груз забронирован по хорошей ставке",
                suggestions: [
                    { text: "Excellent. I'll have John call you when he's loaded. Thanks for working with me on the rate, Sarah.", quality: "excellent", path: "end" },
                    { text: "Great, will do. Thanks Sarah.", quality: "good", path: "end" }
                ]
            }
        ]
    }
};

// Add to allScenarios array
if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario_chicago_dallas);
    console.log('✅ Added realistic scenario: Chicago → Dallas');
}

console.log('✅ Realistic scenarios 2026 loaded successfully');
