const allScenarios = [
    {
        id: 1,
        route: "Dallas TX → Houston TX",
        distance: 440,
        equipment: "Dry Van",
        initialMessage: "Dallas TX to Houston TX dry van. Still available?",
        paths: {
            good: [
                {
                    brokerQuestion: "Yeah, it's still open. What's your MC number?",
                    suggestions: [
                        { text: "MC 456789. We're a Texas-based carrier, run this lane regularly. Got a 53-foot dry van with air ride, driver's in Dallas right now.", quality: "good" },
                        { text: "Hold on, let me grab it. OK, MC 456789. We have a dry van.", quality: "normal" },
                        { text: "Uh... give me a second, I need to find it...", quality: "bad" }
                    ],
                    brokerResponse: [
                        "Perfect, let me pull you up real quick.",
                        "OK, I see you, you're verified.",
                        "So this is 440 miles, 28,000 pounds.",
                        "You good with that weight?"
                    ]
                }
            ],
            normal: [
                {
                    brokerQuestion: "Yeah, it's still open. What's your MC number?",
                    suggestions: [
                        { text: "MC 456789. We're a Texas-based carrier, run this lane regularly.", quality: "good" },
                        { text: "Hold on, let me grab it. OK, MC 456789. We have a dry van.", quality: "normal" },
                        { text: "Uh... give me a second...", quality: "bad" }
                    ],
                    brokerResponse: [
                        "Alright, checking you now.",
                        "OK, you're verified.",
                        "What type of trailer?",
                        "Is it a 53-footer with air ride?"
                    ]
                }
            ],
            bad: [
                {
                    brokerQuestion: "Yeah, it's still open. What's your MC number?",
                    suggestions: [
                        { text: "MC 456789.", quality: "good" },
                        { text: "Hold on, let me grab it.", quality: "normal" },
                        { text: "Uh... give me a second...", quality: "bad" }
                    ],
                    brokerResponse: [
                        "Come on man, I got other calls.",
                        "You don't have your MC ready?",
                        "That's pretty basic stuff."
                    ]
                }
            ]
        }
    }
];
