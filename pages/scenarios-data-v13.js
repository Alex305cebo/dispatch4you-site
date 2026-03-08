// Scenario #13 - NEW CHECKBOX SYSTEM
// Flatbed Load: Chicago → Dallas (900 miles, $2,200)
// Broker: Michael Chen from FreightLink Logistics

console.log('🆕 Loading scenarios-data-v13.js with CHECKBOX SYSTEM...');

const scenario13 = {
    id: 13,
    route: "Chicago, IL → Dallas, TX",
    distance: 900,
    postedRate: 2200,
    difficulty: "medium",
    equipment: "Flatbed",

    brokerName: "Michael Chen",
    brokerCompany: "FreightLink Logistics",

    initialMessage: "Good afternoon! This is Alex from Swift Dispatch.\nI'm calling about your posted flatbed load Chicago to Dallas.\nIs this load still available?",

    paths: {
        master: [
            {
                brokerQuestion: "Good afternoon! This is Michael Chen from FreightLink Logistics. Yes, the load is still available. What's your MC number and where is your truck currently located?",

                responseComponents: {
                    greeting: {
                        label: "Приветствие по имени",
                        icon: "👋",
                        points: 20,
                        options: [
                            { text: "Good afternoon, Michael!", quality: "excellent" },
                            { text: "Hello, Michael.", quality: "good" },
                            { text: "Hi.", quality: "weak" }
                        ]
                    },
                    company: {
                        label: "Компания + специализация",
                        icon: "🏢",
                        points: 20,
                        options: [
                            { text: "This is Swift Dispatch, we specialize in flatbed transportation with a fleet of 25 trucks.", quality: "excellent" },
                            { text: "Swift Dispatch, we handle flatbed loads.", quality: "good" },
                            { text: "Swift Dispatch.", quality: "normal" }
                        ]
                    },
                    mc: {
                        label: "MC номер",
                        icon: "📋",
                        points: 15,
                        required: true,
                        options: [
                            { text: "Our MC is 334455.", quality: "excellent" }
                        ]
                    },
                    location: {
                        label: "Точное местоположение грузовика",
                        icon: "📍",
                        points: 20,
                        options: [
                            { text: "Our truck is currently in Gary, Indiana, about 30 miles from Chicago, and will be empty tomorrow morning at 8 AM.", quality: "excellent" },
                            { text: "Truck is in Gary, IN, empty tomorrow morning.", quality: "good" },
                            { text: "Near Chicago.", quality: "weak" }
                        ]
                    },
                    equipment: {
                        label: "Детали оборудования",
                        icon: "🚛",
                        points: 15,
                        options: [
                            { text: "We have a 48-foot flatbed with straps and chains, DOT inspected last week.", quality: "excellent" },
                            { text: "48-foot flatbed, fully equipped.", quality: "good" },
                            { text: "Flatbed truck.", quality: "weak" }
                        ]
                    },
                    readiness: {
                        label: "Готовность + вопрос о грузе",
                        icon: "✅",
                        points: 10,
                        options: [
                            { text: "We're ready to pick up as soon as tomorrow. Could you tell me more about the cargo dimensions and weight?", quality: "excellent" },
                            { text: "Ready to go. What's the cargo?", quality: "good" },
                            { text: "When pickup?", quality: "weak" }
                        ]
                    }
                },

                analytics: {
                    excellent: "✨ ОТЛИЧНО! Вы предоставили все необходимые детали профессионально и вежливо.",
                    good: "✔️ ХОРОШО! Вы дали основную информацию.",
                    normal: "⚪ НОРМАЛЬНО. Минимальная информация предоставлена.",
                    weak: "⚠️ СЛАБО. Недостаточно информации.",
                    fail: "❌ ПРОВАЛ."
                }
            },
            {
                brokerQuestion: "Perfect! The load is steel coils, 42,000 lbs, pickup tomorrow at 10 AM in Chicago, delivery in 2 days to Dallas. Rate is $2,200. Can you handle it?",

                responseComponents: {
                    confirmation: {
                        label: "Подтверждение возможности",
                        icon: "✅",
                        points: 40,
                        required: true,
                        options: [
                            { text: "Yes, absolutely! We have experience hauling steel coils.", quality: "excellent" },
                            { text: "Yes, we can handle it.", quality: "good" }
                        ]
                    },
                    rate_discussion: {
                        label: "Обсуждение ставки",
                        icon: "💰",
                        points: 30,
                        options: [
                            { text: "The rate of $2,200 works for us.", quality: "excellent" },
                            { text: "Rate is acceptable.", quality: "good" }
                        ]
                    },
                    timeline: {
                        label: "Подтверждение сроков",
                        icon: "⏰",
                        points: 20,
                        options: [
                            { text: "Pickup tomorrow at 10 AM works perfectly.", quality: "excellent" },
                            { text: "10 AM pickup is fine.", quality: "good" }
                        ]
                    },
                    professionalism: {
                        label: "Профессиональное закрытие",
                        icon: "🤝",
                        points: 10,
                        options: [
                            { text: "Looking forward to working with you, Michael!", quality: "excellent" },
                            { text: "Thanks!", quality: "normal" }
                        ]
                    }
                },

                analytics: {
                    excellent: "✨ ОТЛИЧНО! Вы подтвердили все детали профессионально.",
                    good: "✔️ ХОРОШО! Основные моменты подтверждены.",
                    normal: "⚪ НОРМАЛЬНО."
                }
            },
            {
                brokerQuestion: "Great! I'll send you the rate confirmation and shipper details right now. Welcome aboard!",
                outcome: {
                    type: "success",
                    title: "🎉 ГРУЗ ЗАБРОНИРОВАН!",
                    earnings: "$2,200",
                    feedback: "💡 УРОК: Полная информация создает доверие.",
                    reality: "🎯 РЕАЛЬНОСТЬ: Брокеры ценят детали.",
                    weeklyPotential: "📊 ПОТЕНЦИАЛ: $8,800/месяц от этого брокера."
                }
            }
        ]
    }
};

// Add to global scenarios array
if (typeof window.allScenarios !== 'undefined') {
    window.allScenarios.push(scenario13);
    console.log('✅ Scenario #13 (CHECKBOX SYSTEM) loaded successfully');
    console.log('Total scenarios:', window.allScenarios.length);
} else {
    console.error('❌ window.allScenarios is not defined!');
}
