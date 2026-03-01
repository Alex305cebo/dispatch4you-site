// Advanced Dispatcher Training Scenarios - Version 2.0
// 15 Professional Broker Negotiation Scenarios with 3 Development Paths
// Distribution: 20% Short (350-650mi), 50% Medium (650-1500mi), 30% Long (1500+mi)

const allScenarios = [
  // ========================================
  // SHORT HAUL (350-650 miles) - 20% (3 scenarios)
  // Pickup today → Delivery tomorrow
  // ========================================

  // Scenario 1: Dallas TX → Houston TX (240 miles) - Dry Van
  {
    id: 1,
    route: "Dallas TX → Houston TX",
    distance: 440,
    equipment: "Dry Van",
    weight: "28,000 lbs",
    rate: 1320,
    ratePerMile: 3.00,
    pickup: "Today 8 AM-2 PM",
    delivery: "Tomorrow by 5 PM",

    initialMessage: "Dallas to Houston dry van. Still available?",

    paths: {
      good: [
        {
          brokerQuestion: "Yes. MC number?",
          suggestions: [
            { text: "MC 456789. 53' dry van, air ride. Driver in Dallas, ready at 10 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Let me check... hold on...", quality: "bad" }
          ],
          brokerResponse: "Verified. 440 miles, 28K lbs. Pickup today 8-2, deliver tomorrow by 5. $1,320. Deal?"
        },
        {
          brokerQuestion: "$1,320 flat. Yes or no?",
          suggestions: [
            { text: "Yes, deal. Let's book it.", quality: "good" },
            { text: "Can you do $1,400?", quality: "normal" },
            { text: "Too low. Need $1,600.", quality: "bad" }
          ],
          brokerResponse: "Booked. Email?"
        },
        {
          brokerQuestion: "Email for rate con?",
          suggestions: [
            { text: "dispatch@texaslogistics.com. Thanks!", quality: "good" },
            { text: "dispatch@texaslogistics.com", quality: "normal" }
          ],
          brokerResponse: "Sent. Call me at pickup.",
          isSuccess: true
        }
      ],
      normal: [
        {
          brokerQuestion: "Yes. MC number?",
          suggestions: [
            { text: "MC 456789. 53' dry van, air ride. Driver in Dallas, ready at 10 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Let me check... hold on...", quality: "bad" }
          ],
          brokerResponse: "Checking... Equipment type?"
        },
        {
          brokerQuestion: "Dry van with air ride?",
          suggestions: [
            { text: "Yes, 53' with air ride.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "Pickup today 8-2, deliver tomorrow by 5. Can you do it?"
        },
        {
          brokerQuestion: "Can you make that schedule?",
          suggestions: [
            { text: "Yes, driver ready at 10 AM today.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "$1,320 for 440 miles. Deal?"
        },
        {
          brokerQuestion: "$1,320. Deal?",
          suggestions: [
            { text: "Yes, let's book it.", quality: "good" },
            { text: "Can you do $1,400?", quality: "normal" },
            { text: "Need $1,600.", quality: "bad" }
          ],
          brokerResponse: "$1,350 final."
        }
      ],
      bad: [
        {
          brokerQuestion: "Yes. MC number?",
          suggestions: [
            { text: "MC 456789. 53' dry van, air ride. Driver in Dallas, ready at 10 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Let me check... hold on...", quality: "bad" }
          ],
          brokerResponse: "I need it now."
        }
      ]
    }
  }
];

// Scenario 2: Chicago, IL → Indianapolis, IN (185 mi) + Indianapolis → Columbus, OH (175 mi) = 360 miles - Reefer
{
  id: 2,
    route: "Chicago IL → Columbus OH",
      distance: 360,
        equipment: "Reefer",
          weight: "35,000 lbs",
            rate: 1260,
              ratePerMile: 3.50,
                pickup: "Today 6 AM-12 PM",
                  delivery: "Tomorrow by 3 PM",

                    initialMessage: "Chicago to Columbus reefer. Open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 234567. 53' reefer, temp control. Driver ready at 8 AM.", quality: "good" },
          { text: "MC 234567. Reefer available.", quality: "normal" },
          { text: "Uh... one sec...", quality: "bad" }
        ],
        brokerResponse: "Good. 360 miles, 35K lbs, keep at 34°F. Pickup today 6-12, deliver tomorrow 3 PM. $1,260. Deal?"
      },
      {
        brokerQuestion: "$1,260. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $1,350?", quality: "normal" },
          { text: "Need $1,500.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@midwestfreight.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 234567. 53' reefer, temp control. Driver ready at 8 AM.", quality: "good" },
            { text: "MC 234567. Reefer available.", quality: "normal" },
            { text: "Uh... one sec...", quality: "bad" }
          ],
          brokerResponse: "Temp control working?"
        },
        {
          brokerQuestion: "Can you maintain 34°F?",
          suggestions: [
            { text: "Yes, full temp control 0-50°F.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "Pickup today 6-12, deliver tomorrow 3 PM. Works?"
        },
        {
          brokerQuestion: "Can you do it?",
          suggestions: [
            { text: "Yes, driver ready.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "$1,260 for 360 miles. Deal?"
        },
        {
          brokerQuestion: "$1,260?",
          suggestions: [
            { text: "Deal.", quality: "good" },
            { text: "Can you do $1,350?", quality: "normal" }
          ],
          brokerResponse: "$1,300 final."
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 234567. 53' reefer, temp control. Driver ready at 8 AM.", quality: "good" },
              { text: "MC 234567. Reefer available.", quality: "normal" },
              { text: "Uh... one sec...", quality: "bad" }
            ],
            brokerResponse: "Too slow. Moving on."
          }
        ]
  }
},

// Scenario 3: Phoenix, AZ → Albuquerque, NM (450 miles) - Flatbed
{
  id: 3,
    route: "Phoenix AZ → Albuquerque NM",
      distance: 450,
        equipment: "Flatbed",
          weight: "42,000 lbs",
            rate: 1575,
              ratePerMile: 3.50,
                pickup: "Today 7 AM-1 PM",
                  delivery: "Tomorrow by 6 PM",

                    initialMessage: "Phoenix to Albuquerque flatbed. Available?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 789123. 48' flatbed, tarps and chains. Driver ready at 9 AM.", quality: "good" },
          { text: "MC 789123. Flatbed ready.", quality: "normal" },
          { text: "Hold on...", quality: "bad" }
        ],
        brokerResponse: "Verified. 450 miles, 42K lbs steel. Need tarps. Pickup today 7-1, deliver tomorrow 6 PM. $1,575. Deal?"
      },
      {
        brokerQuestion: "$1,575. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $1,700?", quality: "normal" },
          { text: "Need $1,900.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@southwesthaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 789123. 48' flatbed, tarps and chains. Driver ready at 9 AM.", quality: "good" },
            { text: "MC 789123. Flatbed ready.", quality: "normal" },
            { text: "Hold on...", quality: "bad" }
          ],
          brokerResponse: "Got tarps and chains?"
        },
        {
          brokerQuestion: "Tarps and chains?",
          suggestions: [
            { text: "Yes, full tarp kit and chains.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "Pickup today 7-1, deliver tomorrow 6 PM. Works?"
        },
        {
          brokerQuestion: "Can you do it?",
          suggestions: [
            { text: "Yes, driver ready at 9 AM.", quality: "good" },
            { text: "Yes.", quality: "normal" }
          ],
          brokerResponse: "$1,575 for 450 miles. Deal?"
        },
        {
          brokerQuestion: "$1,575?",
          suggestions: [
            { text: "Deal.", quality: "good" },
            { text: "Can you do $1,700?", quality: "normal" }
          ],
          brokerResponse: "$1,625 final."
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 789123. 48' flatbed, tarps and chains. Driver ready at 9 AM.", quality: "good" },
              { text: "MC 789123. Flatbed ready.", quality: "normal" },
              { text: "Hold on...", quality: "bad" }
            ],
            brokerResponse: "No time. Next."
          }
        ]
  }
},

// ========================================
// MEDIUM HAUL (650-1500 miles) - 50% (8 scenarios)
// Pickup today → Delivery in 2-3 days
// ========================================

// Scenario 4: Miami, FL → Atlanta, GA (650 miles) - Dry Van
{
  id: 4,
    route: "Miami FL → Atlanta GA",
      distance: 650,
        equipment: "Dry Van",
          weight: "38,000 lbs",
            rate: 1820,
              ratePerMile: 2.80,
                pickup: "Today 10 AM-4 PM",
                  delivery: "Day after tomorrow by 2 PM",

                    initialMessage: "Miami to Atlanta dry van. Open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 345678. 53' dry van, air ride. Driver in Miami, ready at noon.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Wait...", quality: "bad" }
        ],
        brokerResponse: "Good. 650 miles, 38K lbs. Pickup today 10-4, deliver day after tomorrow 2 PM. $1,820. Deal?"
      },
      {
        brokerQuestion: "$1,820. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $1,950?", quality: "normal" },
          { text: "Need $2,200.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@floridafreight.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 345678. 53' dry van, air ride. Driver in Miami, ready at noon.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Wait...", quality: "bad" }
          ],
          brokerResponse: "Equipment type?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 345678. 53' dry van, air ride. Driver in Miami, ready at noon.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Wait...", quality: "bad" }
            ],
            brokerResponse: "Too slow. Bye."
          }
        ]
  }
},

// Scenario 5: Chicago, IL → Atlanta, GA (715 miles) - Reefer
{
  id: 5,
    route: "Chicago IL → Atlanta GA",
      distance: 715,
        equipment: "Reefer",
          weight: "40,000 lbs",
            rate: 2145,
              ratePerMile: 3.00,
                pickup: "Today 5 AM-11 AM",
                  delivery: "Day after tomorrow by 4 PM",

                    initialMessage: "Chicago to Atlanta reefer. Still open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 567890. 53' reefer, multi-temp. Driver ready at 7 AM.", quality: "good" },
          { text: "One second... MC is $1. Reefer available.", quality: "normal" },
          { text: "One moment...", quality: "bad" }
        ],
        brokerResponse: "Verified. 715 miles, 40K lbs, 36°F. Pickup today 5-11, deliver day after tomorrow 4 PM. $2,145. Deal?"
      },
      {
        brokerQuestion: "$2,145. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $2,300?", quality: "normal" },
          { text: "Need $2,500.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@midwestcold.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 567890. 53' reefer, multi-temp. Driver ready at 7 AM.", quality: "good" },
            { text: "One second... MC is $1. Reefer available.", quality: "normal" },
            { text: "One moment...", quality: "bad" }
          ],
          brokerResponse: "Temp control?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 567890. 53' reefer, multi-temp. Driver ready at 7 AM.", quality: "good" },
              { text: "One second... MC is $1. Reefer available.", quality: "normal" },
              { text: "One moment...", quality: "bad" }
            ],
            brokerResponse: "Moving on."
          }
        ]
  }
},

// Scenario 6: LA, CA → Phoenix, AZ → Albuquerque, NM (800 miles) - Dry Van
{
  id: 6,
    route: "Los Angeles CA → Albuquerque NM",
      distance: 800,
        equipment: "Dry Van",
          weight: "32,000 lbs",
            rate: 2080,
              ratePerMile: 2.60,
                pickup: "Today 6 AM-12 PM",
                  delivery: "Day after tomorrow by 6 PM",

                    initialMessage: "LA to Albuquerque dry van. Available?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 678901. 53' dry van, air ride. Driver in LA, ready at 8 AM.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Let me check...", quality: "bad" }
        ],
        brokerResponse: "Good. 800 miles, 32K lbs. Pickup today 6-12, deliver day after tomorrow 6 PM. $2,080. Deal?"
      },
      {
        brokerQuestion: "$2,080. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $2,200?", quality: "normal" },
          { text: "Need $2,400.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@westcoasthaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 678901. 53' dry van, air ride. Driver in LA, ready at 8 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Let me check...", quality: "bad" }
          ],
          brokerResponse: "Equipment?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 678901. 53' dry van, air ride. Driver in LA, ready at 8 AM.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Let me check...", quality: "bad" }
            ],
            brokerResponse: "No time. Next."
          }
        ]
  }
},

// Scenario 7: Dallas, TX → Denver, CO (800 miles) - Flatbed
{
  id: 7,
    route: "Dallas TX → Denver CO",
      distance: 800,
        equipment: "Flatbed",
          weight: "44,000 lbs",
            rate: 2480,
              ratePerMile: 3.10,
                pickup: "Today 7 AM-1 PM",
                  delivery: "Day after tomorrow by 5 PM",

                    initialMessage: "Dallas to Denver flatbed. Open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 890123. 48' flatbed, tarps, chains. Driver ready at 9 AM.", quality: "good" },
          { text: "MC 890123. Flatbed ready.", quality: "normal" },
          { text: "Hold on...", quality: "bad" }
        ],
        brokerResponse: "Good. 800 miles, 44K lbs machinery. Need tarps. Pickup today 7-1, deliver day after tomorrow 5 PM. $2,480. Deal?"
      },
      {
        brokerQuestion: "$2,480. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $2,600?", quality: "normal" },
          { text: "Need $2,800.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@rockymountainhaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 890123. 48' flatbed, tarps, chains. Driver ready at 9 AM.", quality: "good" },
            { text: "MC 890123. Flatbed ready.", quality: "normal" },
            { text: "Hold on...", quality: "bad" }
          ],
          brokerResponse: "Tarps?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 890123. 48' flatbed, tarps, chains. Driver ready at 9 AM.", quality: "good" },
              { text: "MC 890123. Flatbed ready.", quality: "normal" },
              { text: "Hold on...", quality: "bad" }
            ],
            brokerResponse: "Too slow. Bye."
          }
        ]
  }
},

// Scenario 8: New York, NY → Chicago, IL (790 miles) - Dry Van
{
  id: 8,
    route: "New York NY → Chicago IL",
      distance: 790,
        equipment: "Dry Van",
          weight: "36,000 lbs",
            rate: 2133,
              ratePerMile: 2.70,
                pickup: "Today 8 AM-2 PM",
                  delivery: "Day after tomorrow by 3 PM",

                    initialMessage: "New York to Chicago dry van. Still open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 901234. 53' dry van, air ride. Driver in NYC, ready at 10 AM.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Wait...", quality: "bad" }
        ],
        brokerResponse: "Verified. 790 miles, 36K lbs. Pickup today 8-2, deliver day after tomorrow 3 PM. $2,133. Deal?"
      },
      {
        brokerQuestion: "$2,133. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $2,300?", quality: "normal" },
          { text: "Need $2,500.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@eastcoastfreight.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 901234. 53' dry van, air ride. Driver in NYC, ready at 10 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Wait...", quality: "bad" }
          ],
          brokerResponse: "Equipment type?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 901234. 53' dry van, air ride. Driver in NYC, ready at 10 AM.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Wait...", quality: "bad" }
            ],
            brokerResponse: "Moving on."
          }
        ]
  }
},

// Scenario 9: Atlanta, GA → New York, NY (870 miles) - Reefer
{
  id: 9,
    route: "Atlanta GA → New York NY",
      distance: 870,
        equipment: "Reefer",
          weight: "39,000 lbs",
            rate: 2697,
              ratePerMile: 3.10,
                pickup: "Today 6 AM-12 PM",
                  delivery: "Day after tomorrow by 6 PM",

                    initialMessage: "Atlanta to New York reefer. Available?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 012345. 53' reefer, multi-temp. Driver ready at 8 AM.", quality: "good" },
          { text: "One second... MC is $1. Reefer available.", quality: "normal" },
          { text: "One sec...", quality: "bad" }
        ],
        brokerResponse: "Good. 870 miles, 39K lbs, 35°F. Pickup today 6-12, deliver day after tomorrow 6 PM. $2,697. Deal?"
      },
      {
        brokerQuestion: "$2,697. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $2,850?", quality: "normal" },
          { text: "Need $3,000.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@southeastcold.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 012345. 53' reefer, multi-temp. Driver ready at 8 AM.", quality: "good" },
            { text: "One second... MC is $1. Reefer available.", quality: "normal" },
            { text: "One sec...", quality: "bad" }
          ],
          brokerResponse: "Temp control?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 012345. 53' reefer, multi-temp. Driver ready at 8 AM.", quality: "good" },
              { text: "One second... MC is $1. Reefer available.", quality: "normal" },
              { text: "One sec...", quality: "bad" }
            ],
            brokerResponse: "No time. Next."
          }
        ]
  }
},

// Scenario 10: Phoenix, AZ → Seattle, WA (1,420 miles) - Dry Van
{
  id: 10,
    route: "Phoenix AZ → Seattle WA",
      distance: 1420,
        equipment: "Dry Van",
          weight: "34,000 lbs",
            rate: 3692,
              ratePerMile: 2.60,
                pickup: "Today 7 AM-1 PM",
                  delivery: "In 3 days by 5 PM",

                    initialMessage: "Phoenix to Seattle dry van. Open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 123890. 53' dry van, air ride. Driver ready at 9 AM.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Hold on...", quality: "bad" }
        ],
        brokerResponse: "Verified. 1,420 miles, 34K lbs. Pickup today 7-1, deliver in 3 days by 5 PM. $3,692. Deal?"
      },
      {
        brokerQuestion: "$3,692. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $3,900?", quality: "normal" },
          { text: "Need $4,200.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@pacificnorthwest.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 123890. 53' dry van, air ride. Driver ready at 9 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Hold on...", quality: "bad" }
          ],
          brokerResponse: "Equipment?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 123890. 53' dry van, air ride. Driver ready at 9 AM.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Hold on...", quality: "bad" }
            ],
            brokerResponse: "Too slow. Bye."
          }
        ]
  }
},

// Scenario 11: Houston, TX → Los Angeles, CA (1,550 miles) - Flatbed
{
  id: 11,
    route: "Houston TX → Los Angeles CA",
      distance: 1550,
        equipment: "Flatbed",
          weight: "45,000 lbs",
            rate: 4185,
              ratePerMile: 2.70,
                pickup: "Today 6 AM-12 PM",
                  delivery: "In 3 days by 4 PM",

                    initialMessage: "Houston to LA flatbed. Still open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 234901. 48' flatbed, tarps, chains. Driver ready at 8 AM.", quality: "good" },
          { text: "MC 234901. Flatbed ready.", quality: "normal" },
          { text: "Wait...", quality: "bad" }
        ],
        brokerResponse: "Good. 1,550 miles, 45K lbs steel coils. Need tarps. Pickup today 6-12, deliver in 3 days by 4 PM. $4,185. Deal?"
      },
      {
        brokerQuestion: "$4,185. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $4,400?", quality: "normal" },
          { text: "Need $4,800.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@texaswesthaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 234901. 48' flatbed, tarps, chains. Driver ready at 8 AM.", quality: "good" },
            { text: "MC 234901. Flatbed ready.", quality: "normal" },
            { text: "Wait...", quality: "bad" }
          ],
          brokerResponse: "Tarps and chains?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 234901. 48' flatbed, tarps, chains. Driver ready at 8 AM.", quality: "good" },
              { text: "MC 234901. Flatbed ready.", quality: "normal" },
              { text: "Wait...", quality: "bad" }
            ],
            brokerResponse: "Moving on."
          }
        ]
  }
},

// ========================================
// LONG HAUL (1500+ miles) - 30% (4 scenarios)
// Pickup today → Delivery in 3-4 days
// ========================================

// Scenario 12: Los Angeles, CA → Chicago, IL (2,015 miles) - Dry Van
{
  id: 12,
    route: "Los Angeles CA → Chicago IL",
      distance: 2015,
        equipment: "Dry Van",
          weight: "40,000 lbs",
            rate: 5038,
              ratePerMile: 2.50,
                pickup: "Today 5 AM-11 AM",
                  delivery: "In 4 days by 6 PM",

                    initialMessage: "LA to Chicago dry van. Available?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 345012. 53' dry van, air ride, team drivers. Ready at 7 AM.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Let me check...", quality: "bad" }
        ],
        brokerResponse: "Verified. 2,015 miles, 40K lbs. Pickup today 5-11, deliver in 4 days by 6 PM. $5,038. Deal?"
      },
      {
        brokerQuestion: "$5,038. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $5,300?", quality: "normal" },
          { text: "Need $5,800.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@crosscountryhaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 345012. 53' dry van, air ride, team drivers. Ready at 7 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Let me check...", quality: "bad" }
          ],
          brokerResponse: "Team or solo?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 345012. 53' dry van, air ride, team drivers. Ready at 7 AM.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Let me check...", quality: "bad" }
            ],
            brokerResponse: "No time. Next."
          }
        ]
  }
},

// Scenario 13: New York, NY → Los Angeles, CA (2,790 miles) - Reefer
{
  id: 13,
    route: "New York NY → Los Angeles CA",
      distance: 2790,
        equipment: "Reefer",
          weight: "42,000 lbs",
            rate: 7533,
              ratePerMile: 2.70,
                pickup: "Today 6 AM-12 PM",
                  delivery: "In 5 days by 5 PM",

                    initialMessage: "New York to LA reefer. Open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 456123. 53' reefer, multi-temp, team drivers. Ready at 8 AM.", quality: "good" },
          { text: "One second... MC is $1. Reefer available.", quality: "normal" },
          { text: "Hold on...", quality: "bad" }
        ],
        brokerResponse: "Good. 2,790 miles, 42K lbs, 34°F. Pickup today 6-12, deliver in 5 days by 5 PM. $7,533. Deal?"
      },
      {
        brokerQuestion: "$7,533. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $8,000?", quality: "normal" },
          { text: "Need $8,500.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@coasttocoastcold.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 456123. 53' reefer, multi-temp, team drivers. Ready at 8 AM.", quality: "good" },
            { text: "One second... MC is $1. Reefer available.", quality: "normal" },
            { text: "Hold on...", quality: "bad" }
          ],
          brokerResponse: "Team drivers?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 456123. 53' reefer, multi-temp, team drivers. Ready at 8 AM.", quality: "good" },
              { text: "One second... MC is $1. Reefer available.", quality: "normal" },
              { text: "Hold on...", quality: "bad" }
            ],
            brokerResponse: "Too slow. Bye."
          }
        ]
  }
},

// Scenario 14: Miami, FL → Seattle, WA (3,300 miles) - Dry Van
{
  id: 14,
    route: "Miami FL → Seattle WA",
      distance: 3300,
        equipment: "Dry Van",
          weight: "38,000 lbs",
            rate: 7590,
              ratePerMile: 2.30,
                pickup: "Today 7 AM-1 PM",
                  delivery: "In 6 days by 4 PM",

                    initialMessage: "Miami to Seattle dry van. Still open?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 567234. 53' dry van, air ride, team drivers. Ready at 9 AM.", quality: "good" },
          { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
          { text: "Wait...", quality: "bad" }
        ],
        brokerResponse: "Verified. 3,300 miles, 38K lbs. Pickup today 7-1, deliver in 6 days by 4 PM. $7,590. Deal?"
      },
      {
        brokerQuestion: "$7,590. Deal?",
        suggestions: [
          { text: "Deal. Let's book.", quality: "good" },
          { text: "Can you do $8,000?", quality: "normal" },
          { text: "Need $8,800.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@nationwidefreight.com", quality: "good" }
        ],
        brokerResponse: "Sent. Safe trip.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 567234. 53' dry van, air ride, team drivers. Ready at 9 AM.", quality: "good" },
            { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
            { text: "Wait...", quality: "bad" }
          ],
          brokerResponse: "Team or solo?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 567234. 53' dry van, air ride, team drivers. Ready at 9 AM.", quality: "good" },
              { text: "Let me find it... OK, MC number is $1.", quality: "normal" },
              { text: "Wait...", quality: "bad" }
            ],
            brokerResponse: "Moving on."
          }
        ]
  }
},

// Scenario 15: Boston, MA → San Francisco, CA (3,100 miles) - Flatbed
{
  id: 15,
    route: "Boston MA → San Francisco CA",
      distance: 3100,
        equipment: "Flatbed",
          weight: "44,000 lbs",
            rate: 7750,
              ratePerMile: 2.50,
                pickup: "Today 6 AM-12 PM",
                  delivery: "In 5 days by 6 PM",

                    initialMessage: "Boston to San Francisco flatbed. Available?",

                      paths: {
    good: [
      {
        brokerQuestion: "Yes. MC?",
        suggestions: [
          { text: "MC 678345. 48' flatbed, tarps, chains, team drivers. Ready at 8 AM.", quality: "good" },
          { text: "MC 678345. Flatbed ready.", quality: "normal" },
          { text: "One sec...", quality: "bad" }
        ],
        brokerResponse: "Good. 3,100 miles, 44K lbs machinery. Need tarps. Pickup today 6-12, deliver in 5 days by 6 PM. $7,750. Deal?"
      },
      {
        brokerQuestion: "$7,750. Deal?",
        suggestions: [
          { text: "Deal. Book it.", quality: "good" },
          { text: "Can you do $8,200?", quality: "normal" },
          { text: "Need $9,000.", quality: "bad" }
        ],
        brokerResponse: "Booked. Email?"
      },
      {
        brokerQuestion: "Email?",
        suggestions: [
          { text: "dispatch@transcontinentalhaul.com", quality: "good" }
        ],
        brokerResponse: "Sent. Call at pickup.",
        isSuccess: true
      }
    ],
      normal: [
        {
          brokerQuestion: "Yes. MC?",
          suggestions: [
            { text: "MC 678345. 48' flatbed, tarps, chains, team drivers. Ready at 8 AM.", quality: "good" },
            { text: "MC 678345. Flatbed ready.", quality: "normal" },
            { text: "One sec...", quality: "bad" }
          ],
          brokerResponse: "Tarps and team?"
        }
      ],
        bad: [
          {
            brokerQuestion: "Yes. MC?",
            suggestions: [
              { text: "MC 678345. 48' flatbed, tarps, chains, team drivers. Ready at 8 AM.", quality: "good" },
              { text: "MC 678345. Flatbed ready.", quality: "normal" },
              { text: "One sec...", quality: "bad" }
            ],
            brokerResponse: "No time. Next."
          }
        ]
  }
}
];

// Export for use in simulator
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { allScenarios };
}
