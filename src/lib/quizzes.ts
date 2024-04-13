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
            },
            {
                question: "What is a common cyber threat?",
                options: [
                    { id: "a", text: "Phishing" },
                    { id: "b", text: "Social media" },
                    { id: "c", text: "Online shopping" },
                    { id: "d", text: "All of the above" }
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
            },
            {
                question: "What should you do if you suspect a phishing attack?",
                options: [
                    { id: "a", text: "Click on the links in the email" },
                    { id: "b", text: "Reply to the email with your personal information" },
                    { id: "c", text: "Delete the email and report it" },
                    { id: "d", text: "Forward the email to all your contacts" }
                ],
                correctAnswer: "c"
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
            },
            {
              question: "Which of the following would be considered a strong password?",
              options: [
                  { id: "a", text: "dannythedog" },
                  { id: "b", text: "iLiveInKelowna" },
                  { id: "c", text: "kevinh2000" },
                  { id: "d", text: "#iL0v3_K4hLoHN4!" }
              ],
              correctAnswer: "d"
          },

        ]
    }
];
