// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: "I am task oriented in order to achieve certain goals.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "Strongly Agree",
      },
      {
        type: "J,Brown,D",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "J,Brown,D,No",
        content: "Disagree",
      },
      {
        type: "J,Brown,D,No",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #2
  {
    question: "I get bored easily when disscussing abstract concepts.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Green,C",
        content: "Strongly Agree",
      },
      {
        type: "N,Green,C",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "N,Green,C,No",
        content: "Disagree",
      },
      {
        type: "N,Green,C,No",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #3
  {
    question: "I like to try things out myself.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "S,Red,A",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "S,Red,A,No",
        content: "Disagree",
      },
      {
        type: "S,Red,A,No",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #4
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        type: "J,Brown,D",
        content: "Strongly Agree",
      },
      {
        type: "J,Brown,D",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "J,Brown,D,No",
        content: "Disagree",
      },
      {
        type: "J,Brown,D,No",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #5
  {
    question: "I believe there is a logical explanation for everything.",
    answers: [
      {
        type: "T,Brown,C",
        content: "Strongly Agree",
      },
      {
        type: "T,Brown,C",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "T,Brown,C,No",
        content: "Disagree",
      },
      {
        type: "T,Brown,C,No",
        content: "Strongly Disagree",
      },
    ],
  },

  // // question #6
  // {
  //   question: "I tend to keep my social circle small.",
  //   answers: [
  //     {
  //       type: "I,Green,C",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "I,Green,C",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "I,Green,C,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "I,Green,C,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #7
  // {
  //   question: "I like to share my ideas with others.",
  //   answers: [
  //     {
  //       type: "E,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "E,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #8
  // {
  //   question: "I enjoy using social media.",
  //   answers: [
  //     {
  //       type: "E,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "E,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #9
  // {
  //   question: "I always express concern for others when making decisions.",
  //   answers: [
  //     {
  //       type: "F,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "F,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "F,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "F,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #10
  // {
  //   question: "I like to try new things.",
  //   answers: [
  //     {
  //       type: "P,Red,A",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "P,Red,A",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #11
  // {
  //   question: "I can easily adjust to a change in decision.",
  //   answers: [
  //     {
  //       type: "P,Red,A",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "P,Red,A",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #12
  // {
  //   question:
  //     "I solve problems by working through facts until I understand the problem.",
  //   answers: [
  //     {
  //       type: "S,Brown,C",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "S,Brown,C",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "S,Brown,C,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "S,Brown,C,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #13
  // {
  //   question: "I rely on logic rather than intuition when making a decision.",
  //   answers: [
  //     {
  //       type: "T,Green,C",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "T,Green,C",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "T,Green,C,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "T,Green,C,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #14
  // {
  //   question: "I make decisions with my heart.",
  //   answers: [
  //     {
  //       type: "F,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "F,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "F,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "F,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #15
  // {
  //   question: "I learn best by seeing step by step instructions.",
  //   answers: [
  //     {
  //       type: "S,Brown,D",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "S,Brown,D",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "S,Brown,D,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "S,Brown,D,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #16
  // {
  //   question:
  //     "I sometimes move onto another task before completing my current one.",
  //   answers: [
  //     {
  //       type: "P,Red,A",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "P,Red,A",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #17
  // {
  //   question: "I prefer a flexible and spontaneous way of life.",
  //   answers: [
  //     {
  //       type: "P,Red,A",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "P,Red,A",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "P,Red,A,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #18
  // {
  //   question: "I like to keep my options open when making decisions.",
  //   answers: [
  //     {
  //       type: "P,Green,D",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "P,Green,D",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "P,Green,D,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "P,Green,D,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #19
  // {
  //   question: "I feel comfortable in crowds.",
  //   answers: [
  //     {
  //       type: "E,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "E,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  // // question #20
  // {
  //   question: "I like to share my feelings with others.",
  //   answers: [
  //     {
  //       type: "E,Blue,B",
  //       content: "Strongly Agree",
  //     },
  //     {
  //       type: "E,Blue,B",
  //       content: "Agree",
  //     },
  //     {
  //       type: " ",
  //       content: "Neutral",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Disagree",
  //     },
  //     {
  //       type: "E,Blue,B,No",
  //       content: "Strongly Disagree",
  //     },
  //   ],
  // },

  //   // question #21
  //   {
  //     question: 'I prefer to work/do right away rather than spend time making a plan.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'S,Brown,A',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'S,Brown,A,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #22
  //   {
  //     question: 'I know my priorities.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'S,Brown,A',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'S,Brown,A,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #23
  //   {
  //     question: 'I tend to work alone.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'I,Green,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'I,Green,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #24
  //   {
  //     question: "I don't like going to parties.",
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'I,Green,C',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'I,Green,C,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #25
  //   {
  //     question: 'I am in tune with my own emotions and let them guide me in life.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'F,Blue,B',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'F,Blue,B,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #26
  //   {
  //     question: 'I rely on my intution and experience more than facts.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'N,Red,A',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'N,Red,A,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #27
  //   {
  //     question: 'I like to think things through.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'T,Green,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'T,Green,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #28
  //   {
  //     question: 'I am a visual learner.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'S,Red,A',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'S,Red,A,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #29
  //   {
  //     question: 'I think carefully before I make decisions.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'J,Brown,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'J,Brown,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #30
  //   {
  //     question: 'I feel uneasy if my actions disrupt harmony in my social circle.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'F,Blue,B',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'F,Blue,B,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #31
  //   {
  //     question: 'I put my personal opinions aside in pursuit of fairness and justice.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'T,Brown,C',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'T,Brown,C,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #32
  //   {
  //     question: 'I tend to sit at the back or corner of the room.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'I,Green,C',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'I,Green,C,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #33
  //   {
  //     question: 'I like being the centre of attention.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'E,Red,B',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'E,Red,B,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #34
  //   {
  //     question: 'I solve problems by leaping between different ideas and possibilities.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'N,Green,C',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'N,Green,C,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #35
  //   {
  //     question: 'I like to complete my work before playing.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'J,Red,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'J,Red,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #36
  //   {
  //     question: "I don't let other people influence my thoughts or actions.",
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'T,Red,A',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'T,Red,A,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #37
  //   {
  //     question: 'I use my sense of smell to help remember memories.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'N,Blue,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'N,Blue,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #38
  //   {
  //     question: 'I make decisions based on my emotions.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'F,Blue,B',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'F,Blue,B,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #39
  //   {
  //     question: 'I need time alone to recharge.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'I,Green,C',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'I,Green,C,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   },
  //   // question #40
  //   {
  //     question: 'I like to keep my room organized and clean.',
  //     answers: [
  //       {
  //         // briggs, color, letter
  //         type: 'J,Brown,D',
  //         content: 'YEP! THAT IS ME!'
  //       },
  //       {
  //         type: ' ',
  //         content: 'I HAVE NO IDEA!'
  //       },
  //       {
  //         type: 'J,Brown,D,No',
  //         content: "NAH, THAT CAN'T BE ME!"
  //       }
  //     ]
  //   }
];

export default quizQuestions;
