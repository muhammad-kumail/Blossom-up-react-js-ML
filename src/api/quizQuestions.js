// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: "I consider myself to be a creative person.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "Strongly Agree",
      },
      {
        type: "J,Brown,D1",
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
        type: "J,Brown,D,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #2
  {
    question:
      "I would describe my style of creativity as erratic or nonsystematic.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Green,C",
        content: "Strongly Agree",
      },
      {
        type: "N,Green,C1",
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
        type: "N,Green,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #3
  {
    question:
      "I believe in unconscious processes that facilitate my creative work.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "S,Red,A1",
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
        type: "S,Red,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #4
  {
    question:
      "I have had insights, the sources of which I am unable to explain or understand.",
    answers: [
      {
        type: "J,Brown,D",
        content: "Strongly Agree",
      },
      {
        type: "J,Brown,D1",
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
        type: "J,Brown,D,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #5
  {
    question: "I am engaged in creative type work on a regular basis.",
    answers: [
      {
        type: "T,Brown,C",
        content: "Strongly Agree",
      },
      {
        type: "T,Brown,C1",
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
        type: "T,Brown,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #6
  {
    question:
      "After reading it, I check important information, even if it seems to be true.",
    answers: [
      {
        type: "I,Green,C",
        content: "Strongly Agree",
      },
      {
        type: "I,Green,C1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "I,Green,C,No",
        content: "Disagree",
      },
      {
        type: "I,Green,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #7
  {
    question: "I am willing to share the newly gained information.",
    answers: [
      {
        type: "E,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "E,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "E,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "E,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #8
  {
    question: "When I talk, I give many examples.",
    answers: [
      {
        type: "E,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "E,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "E,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "E,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #9
  {
    question:
      "I like to collate different opinions and compare them with each other.",
    answers: [
      {
        type: "F,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "F,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "F,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "F,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #10
  {
    question: "I must be emotionally moved in order to be creative.",
    answers: [
      {
        type: "P,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "P,Red,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "P,Red,A,No",
        content: "Disagree",
      },
      {
        type: "P,Red,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #11
  {
    question: "I believe that creativity comes from hard work and persistence.",
    answers: [
      {
        type: "P,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "P,Red,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "P,Red,A,No",
        content: "Disagree",
      },
      {
        type: "P,Red,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #12
  {
    question: "I have to be in the right mood or feeling to do creative work.",
    answers: [
      {
        type: "S,Brown,C",
        content: "Strongly Agree",
      },
      {
        type: "S,Brown,C1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "S,Brown,C,No",
        content: "Disagree",
      },
      {
        type: "S,Brown,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #13
  {
    question:
      "I typically wait for a flash of inspiration before I begin working",
    answers: [
      {
        type: "T,Green,C",
        content: "Strongly Agree",
      },
      {
        type: "T,Green,C1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "T,Green,C,No",
        content: "Disagree",
      },
      {
        type: "T,Green,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #14
  {
    question: "I try to use the information I have learned in everyday life.",
    answers: [
      {
        type: "F,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "F,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "F,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "F,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #15
  {
    question:
      "I pay attention to the contexts, nuances and overtones of the statements.",
    answers: [
      {
        type: "S,Brown,D",
        content: "Strongly Agree",
      },
      {
        type: "S,Brown,D1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "S,Brown,D,No",
        content: "Disagree",
      },
      {
        type: "S,Brown,D,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #16
  {
    question: "I have difficulties with paraphrasing.",
    answers: [
      {
        type: "P,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "P,Red,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "P,Red,A,No",
        content: "Disagree",
      },
      {
        type: "P,Red,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #17
  {
    question: "To evaluate the information, I check many sources.",
    answers: [
      {
        type: "P,Red,A",
        content: "Strongly Agree",
      },
      {
        type: "P,Red,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "P,Red,A,No",
        content: "Disagree",
      },
      {
        type: "P,Red,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #18
  {
    question: "I do not remember much from what I was learning at school.",
    answers: [
      {
        type: "P,Green,D",
        content: "Strongly Agree",
      },
      {
        type: "P,Green,D1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "P,Green,D,No",
        content: "Disagree",
      },
      {
        type: "P,Green,D,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #19
  {
    question:
      "I physically isolate myself from other people when I am working on creative ideas.",
    answers: [
      {
        type: "E,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "E,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "E,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "E,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #20
  {
    question:
      "Everything already exists, so nothing completely new can be created.",
    answers: [
      {
        type: "E,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "E,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "E,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "E,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },

  // question #21
  {
    question:
      "I like finding dependencies between seemingly different phenomena",
    answers: [
      {
        type: "S,Brown,A",
        content: "Strongly Agree",
      },
      {
        type: "S,Brown,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "S,Brown,A,No",
        content: "Disagree",
      },
      {
        type: "S,Brown,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #22
  {
    question:
      "I think a final product that is not readily observable through the senses can emerge in a creative act",
    answers: [
      {
        type: "S,Brown,A",
        content: "Strongly Agree",
      },
      {
        type: "S,Brown,A1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "S,Brown,A,No",
        content: "Disagree",
      },
      {
        type: "S,Brown,A,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #23
  {
    question:
      "When I have a new idea, I tend to discuss it with someone to determine its potential for success.",
    answers: [
      {
        type: "I,Green,D",
        content: "Strongly Agree",
      },
      {
        type: "I,Green,D1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "I,Green,D,No",
        content: "Disagree",
      },
      {
        type: "I,Green,D,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #24
  {
    question: "I usually have a lot of both workable and unworkable ideas.",
    answers: [
      {
        type: "I,Green,C",
        content: "Strongly Agree",
      },
      {
        type: "I,Green,C1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "I,Green,C,No",
        content: "Disagree",
      },
      {
        type: "I,Green,C,No1",
        content: "Strongly Disagree",
      },
    ],
  },
  // question #25
  {
    question: "I work most creatively when I have deadlines.",
    answers: [
      {
        type: "F,Blue,B",
        content: "Strongly Agree",
      },
      {
        type: "F,Blue,B1",
        content: "Agree",
      },
      {
        type: " ",
        content: "Neutral",
      },
      {
        type: "F,Blue,B,No",
        content: "Disagree",
      },
      {
        type: "F,Blue,B,No1",
        content: "Strongly Disagree",
      },
    ],
  },
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
