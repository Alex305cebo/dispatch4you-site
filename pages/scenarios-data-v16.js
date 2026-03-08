// DIALOGUE #16 - Flatbed Construction (NEW LOGIC V3.0)
// Dallas TX → Denver CO, 780 miles
// Posted: $2,100 ($2.69/mile), Target: $2,300-2,400 ($2.95-3.08/mile)
// НОВАЯ ЛОГИКА: НЕТ ОТКАЗА НА ПЕРВОМ ШАГЕ! Брокер дает второй шанс.

console.log('🔵 Loading scenarios-data-v16.js with WARNING SYSTEM...');

const scenario16 = {
    id: 16,
    route: "Dallas TX → Denver CO",
    distance: 780,
    equipment: "Flatbed (48ft)",
    cargo: "Construction materials (steel beams)",
    weight: "45,000 lbs",
    postedRate: "$2,100 ($2.69/mile)",
    deadline: "Pickup tomorrow 7 AM, Delivery in 2 days",
    brokerStyle: "Professional construction broker",
    difficulty: "medium",
    initialMessage: "Good afternoon! This is Tom from BuildFreight Transport.\nI'm calling about your posted load Dallas to Denver with construction materials.\nIs this load still available?",
    paths: {
        master: [
            {
                brokerQuestion: "Good afternoon! This is Mark from SteelHaul Brokers.\nYes, available.\nWhat's your MC and do you have flatbed experience?",
                dispatcherPrompt: "💎 Брокер проверяет компанию и опыт с flatbed. Дайте: MC, компания, опыт construction, flatbed equipment!",
                suggestions: [
                    { text: "Good afternoon Mark! MC 445566, SteelRoad Transport. We specialize in construction materials - 15 flatbed trucks. Truck in Dallas with tarps and straps. Flatbed experience with steel. Where's pickup?", quality: "excellent", analytics: "✨ ОТЛИЧНО! MC, компания, 15 flatbeds, опыт construction, tarps/straps!", path: "master" },
                    { text: "Afternoon! MC 445566, SteelRoad Transport. We handle construction regularly. Flatbed in Dallas, tarps ready.", quality: "good", analytics: "✔️ Хорошо! MC, опыт, equipment.", path: "master" },
                    { text: "MC 445566. We have flatbed in Dallas.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "MC 445566... we have flatbed somewhere...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "Why you need all this info? Just give rate!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "warning_path" },
                    { text: "Hi, available?", quality: "fail", analytics: "❌ Непрофессионально!", path: "warning_path" }
                ]
            },
            {
                brokerQuestion: "MC verified. Where's your truck? Do you have tarps and straps for steel beams?",
                dispatcherPrompt: "💎 Местоположение и flatbed equipment. Дайте: адрес, tarps, straps, chains, готовность!",
                suggestions: [
                    { text: "Truck at construction yard in Dallas. Flatbed with heavy-duty tarps, straps, and chains. All equipment inspected. Driver experienced with steel loads. Ready 7 AM sharp.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Адрес, tarps/straps/chains, опыт steel, готовность!", path: "master" },
                    { text: "At construction yard Dallas. Flatbed with tarps, straps, chains. Equipment ready. Driver knows steel. Ready 7 AM.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "In Dallas. Flatbed has tarps and straps. Ready tomorrow.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Dallas area... should have tarps...", quality: "weak", analytics: "⚠️ Слабо!", path: "weak" },
                    { text: "Just send pickup!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_mid" },
                    { text: "We don't have tarps...", quality: "fail", analytics: "❌ ПРОВАЛ! Нет equipment!", path: "reject_mid" }
                ]
            },
            {
                brokerQuestion: "Perfect! 780 miles Dallas to Denver. Steel beams - 45K lbs. Must be secured with tarps and chains. Pickup tomorrow 7 AM, delivery in 2 days. Can you handle heavy construction materials?",
                dispatcherPrompt: "💎 Детали construction груза. Подтвердите: 780 mi, steel, tarps/chains, 2 days. Спросите: loading/unloading, detention!",
                suggestions: [
                    { text: "Perfect! 780 miles in 2 days with steel beams. We handle heavy construction regularly. Flatbed secured with tarps and chains. Driver can pickup 7 AM, deliver day 2. What's loading time? Detention pay?", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, опыт, ETA, вопросы!", path: "master" },
                    { text: "Yes, 780 miles in 2 days. We handle construction materials. Flatbed secured properly. Ready 7 AM. Detention?", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "We can do it. Driver on time.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we can handle it...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "It's just steel. Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_mid" },
                    { text: "Driver can't be there until 9 AM...", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_mid" }
                ]
            },
            {
                brokerQuestion: "Loading 3 hours, unloading 3 hours. Detention $75/hr after 3 hours. Must be secured per DOT regulations.",
                dispatcherPrompt: "💎 Детали loading/detention. Подтвердите: 3h loading, 3h unloading, detention $75/hr, DOT regulations!",
                suggestions: [
                    { text: "Perfect! 3 hours loading/unloading, detention $75/hr works. We follow DOT regulations for steel - proper tarps, chains, and securement. Driver certified. Ready to discuss rate!", quality: "excellent", analytics: "✨ ОТЛИЧНО! Подтверждение, DOT compliance, certification!", path: "master" },
                    { text: "3 hours loading/unloading, detention $75/hr confirmed. DOT compliant securement. Driver certified.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Sounds good. DOT compliant.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I guess that works...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "Detention should be $100/hr!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "We don't follow DOT...", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Good! Insurance current? We need $100K cargo for construction materials.",
                dispatcherPrompt: "💎 Страховка. Дайте: сумму, компанию, срок!",
                suggestions: [
                    { text: "Yes, $100K cargo insurance through Progressive. Certificate current, expires September 2027. I'll email it now. What's your email?", quality: "excellent", analytics: "✨ ОТЛИЧНО!", path: "master" },
                    { text: "Yes, $100K cargo through Progressive. Certificate current. I'll send it.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "Yes, $100K cargo insurance. Current.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I think we have enough...", quality: "weak", analytics: "⚠️ Слабо!", path: "weak" },
                    { text: "Insurance fine! Rate?", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "Only $50K...", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Perfect! Let's talk rate. What do you need for 780 miles with flatbed?",
                dispatcherPrompt: "💎 ТОРГ! Posted $2,100 ($2.69/mile) - просите $2,300-2,400 ($2.95-3.08/mile). Construction = premium rates!",
                suggestions: [
                    { text: "For 780 miles with steel beams, I'm looking at $2,400. That's $3.08/mile - fair for heavy construction with flatbed, tarps, chains, and experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! Просит $2,400 - $300 БОЛЬШЕ!", path: "master" },
                    { text: "$2,300 for this load. That's $2.95/mile for construction with flatbed.", quality: "good", analytics: "✔️ Хорошо! $2,300 - $200 больше!", path: "master" },
                    { text: "I'm looking at $2,200 for 780 miles.", quality: "normal", analytics: "⚪ Нормально. $2,200 - $100 больше.", path: "master" },
                    { text: "Can you do $2,150?", quality: "weak", analytics: "⚠️ Слабо! Только $50 больше!", path: "weak" },
                    { text: "I need $2,800 minimum!", quality: "aggressive", analytics: "🔴 Агрессивно! $2,800 = $3.59/mile!", path: "reject_late" },
                    { text: "I'll take $2,100!", quality: "fail", analytics: "❌ ПРОВАЛ! Без торга!", path: "master" }
                ]
            },
            {
                brokerQuestion: "That's high. I can do $2,200. That's $2.82/mile.",
                dispatcherPrompt: "💎 Встречное $2,200 (вы $2,400, posted $2,100). Варианты: 1) $2,300, 2) $2,200 + detention, 3) $2,200!",
                suggestions: [
                    { text: "Can we meet at $2,300? Fair middle ground. Flatbed construction, DOT compliant, experienced driver.", quality: "excellent", analytics: "✨ ОТЛИЧНО! $2,300 - посередине!", path: "master" },
                    { text: "$2,200 works if detention is $100/hr after 3 hours.", quality: "good", analytics: "✔️ Хорошо! + detention!", path: "master" },
                    { text: "$2,200 works. Let's book it.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $2,200 I guess...", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "$2,300 or I walk!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "No, I need $2,400!", quality: "fail", analytics: "❌ Провал!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "$2,250 final. That's $2.88/mile. Detention $75/hr. Deal?",
                dispatcherPrompt: "💎 ФИНАЛ! $2,250 (вы $2,400, posted $2,100). ЗАРАБОТАЛИ $150 БОЛЬШЕ!",
                suggestions: [
                    { text: "$2,250 works! Deal! Which factoring?", quality: "excellent", analytics: "✨ ОТЛИЧНО! +$150!", path: "master" },
                    { text: "Perfect! $2,250 with detention. Deal! Factoring?", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "$2,250 confirmed. Deal.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "Okay, $2,250.", quality: "weak", analytics: "⚠️ Слабо.", path: "weak" },
                    { text: "I want $100/hr detention!", quality: "aggressive", analytics: "🔴 Агрессивно!", path: "reject_late" },
                    { text: "Can we do $2,300?", quality: "fail", analytics: "❌ ПРОВАЛ!", path: "reject_late" }
                ]
            },
            {
                brokerQuestion: "Deal! $2,250 all-in, detention $75/hr. Which factoring?",
                dispatcherPrompt: "💎 Финализация! Factoring!",
                suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com. Sending insurance now. Anything else?", quality: "excellent", analytics: "✨ ОТЛИЧНО!", path: "master" },
                    { text: "RTS Financial, factoring@rtsfin.com. I'll send insurance.", quality: "good", analytics: "✔️ Хорошо!", path: "master" },
                    { text: "OTR Capital, factoring@otrcapital.com.", quality: "normal", analytics: "⚪ Нормально.", path: "master" }
                ]
            },
            {
                brokerResponse: "Perfect! Rate con sent. Sign and return. After pickup send BOL and photos. If this goes well, I have 5-7 construction loads weekly Dallas-Denver. Good luck!",
                outcome: {
                    type: "success",
                    quality: "excellent",
                    rate: "$2,250",
                    ratePerMile: "$2.88/mile",
                    relationship: "strengthened",
                    weeklyLoads: "5-7 construction loads weekly ($11,250-15,750/week)",
                    feedback: `✅ ОТЛИЧНЫЕ ПЕРЕГОВОРЫ! Заработали $150 больше ($2,250 vs $2,100 posted = 7.1% прибавка).\n\n💡 УРОК: Construction требует flatbed, tarps, chains, DOT compliance. Ваш профессионализм = 5-7 loads weekly ($11,250-15,750/неделю = $45,000-63,000/месяц потенциал)!`
                }
            }
        ],
        // НОВАЯ ЛОГИКА: warning_path - брокер дает второй шанс!
        warning_path: [
            {},
            {
                brokerQuestion: "I understand you're busy, but I need to verify your company for insurance and liability purposes. This is standard procedure for all carriers working with construction materials. Can you please provide your MC number and confirm you have flatbed experience? This is important for both of us.",
                dispatcherPrompt: "⚠️ ПРЕДУПРЕЖДЕНИЕ! Брокер дал второй шанс. Ответьте профессионально с MC и опытом!",
                suggestions: [
                    { text: "Sorry for that. MC 445566, SteelRoad Transport. We have 15 flatbed trucks, handle construction materials regularly. Truck in Dallas with tarps and straps. Where's pickup?", quality: "good", analytics: "✔️ Хорошо! Исправился!", path: "master" },
                    { text: "MC 445566, SteelRoad Transport. Flatbed in Dallas with equipment.", quality: "normal", analytics: "⚪ Нормально.", path: "master" },
                    { text: "I don't have MC right now...", quality: "fail", analytics: "❌ ПРОВАЛ! Второй шанс упущен!", path: "reject_early" },
                    { text: "Just send me the load info!", quality: "aggressive", analytics: "🔴 Агрессивно! Второй раз!", path: "reject_early" }
                ]
            }
        ],
        weak: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                brokerQuestion: "$2,200 works. Factoring?", dispatcherPrompt: "💎 Factoring.", suggestions: [
                    { text: "Triumph Factoring, factoring@triumphbc.com.", quality: "normal", path: "weak" }
                ]
            },
            {},
            {
                brokerResponse: "Thanks, but I need more confident carrier. Good luck!",
                outcome: {
                    type: "failure",
                    quality: "weak",
                    rate: "$0",
                    feedback: "⚠️ ОТКАЗ: Слишком неуверенные ответы."
                }
            }
        ],
        reject_early: [
            {},
            {},
            {
                brokerResponse: "I need professional carrier who takes this seriously. Construction materials require proper documentation and equipment. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    feedback: "❌ ОТКАЗ: Непрофессионализм даже после предупреждения!"
                }
            }
        ],
        reject_mid: [
            {},
            {},
            {},
            {
                brokerResponse: "I need carrier with proper flatbed equipment and professional attitude. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "fail",
                    rate: "$0",
                    feedback: "❌ ОТКАЗ: Нет equipment или агрессивность!"
                }
            }
        ],
        reject_late: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                brokerResponse: "That doesn't work for me. Thanks.",
                outcome: {
                    type: "failure",
                    quality: "poor",
                    rate: "$0",
                    feedback: "❌ ОТКАЗ: Нереалистичные требования!"
                }
            }
        ]
    }
};

if (typeof allScenarios !== 'undefined') {
    allScenarios.push(scenario16);
    console.log('✅ Scenario 16 (Flatbed Construction Dallas-Denver) added with WARNING SYSTEM');
} else {
    console.warn('⚠️ allScenarios not found');
}
