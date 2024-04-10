import { IQuiz } from "@/lib/types";

export const quizzes: IQuiz[] = [
  {
    id: 1,
    name: "Cybersecurity Basics",
    questions: [
      {
        question: "What is cybersecurity?",
        options: [
          {
            id: "a",
            text: "The practice of protecting systems, networks, and programs from digital attacks.",
          },
          {
            id: "b",
            text: "The practice of protecting physical assets from digital attacks.",
          },
          {
            id: "c",
            text: "Ensuring public safety.",
          },
          {
            id: "d",
            text: "I'm not sure.",
          },
        ],
        correctAnswer: 'a',
      },
    ],
  },
];
