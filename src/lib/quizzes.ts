// lib/quizzes.ts
import { IQuiz } from "./types";

export const quizzes: IQuiz[] = [
    {
        id: 1,
        name: "Introduction to Cybersecurity",
        questions: [
            {
                question: "What is the primary goal of cybersecurity?",
                options: [
                    { id: "a", text: "To protect systems from unauthorized access" },
                    { id: "b", text: "To speed up computer networks" },
                    { id: "c", text: "To market security software" },
                    { id: "d", text: "None of the above" }
                ],
                correctAnswer: "a"
            }
        ]
    },
    {
        id: 2,
        name: "Recognizing Phishing Attacks",
        questions: [
            {
                question: "Which of the following is a sign of a phishing attack?",
                options: [
                    { id: "a", text: "An email from a known colleague" },
                    { id: "b", text: "A request for sensitive information via email" },
                    { id: "c", text: "Regular advertisements on a website" },
                    { id: "d", text: "All of the above" }
                ],
                correctAnswer: "b"
            }
        ]
    },
    {
        id: 3,
        name: "Best Practices for Password Security",
        questions: [
            {
                question: "What is considered a strong password?",
                options: [
                    { id: "a", text: "Your birthdate" },
                    { id: "b", text: "Your pet's name" },
                    { id: "c", text: "A mixture of letters, numbers, and symbols" },
                    { id: "d", text: "Your favorite movie" }
                ],
                correctAnswer: "c"
            }
        ]
    }
];
