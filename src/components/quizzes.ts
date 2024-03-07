import { IQuiz } from "@/lib/types";

export const quizzes: IQuiz[] = [
  {
    id: 1,
    name: "Cybersecurity Basics",
    questions: [
      {
        question: "What encompasses cybersecurity?",
        options: [
          { id: 'a', text: "Only protecting against viruses" },
          { id: 'b', text: "Defending data and protecting from cybercrime" },
          { id: 'c', text: "Just using strong passwords" },
          { id: 'd', text: "Ignoring spam emails" },
        ],
        correctAnswer: 'b',
      },
      {
        question: "What is considered cybercrime?",
        options: [
          { id: 'a', text: "Using computers and the Internet legally" },
          { id: 'b', text: "Online shopping" },
          { id: 'c', text: "Hacking, identity theft, online fraud" },
          { id: 'd', text: "Regular web browsing" },
        ],
        correctAnswer: 'c',
      },
      {
        question: "What are common methods of cybercrime?",
        options: [
          { id: 'a', text: "Spam, Phishing, Malware" },
          { id: 'b', text: "Using antivirus software" },
          { id: 'c', text: "Updating software regularly" },
          { id: 'd', text: "Safe online shopping practices" },
        ],
        correctAnswer: 'a',
      },
      {
        question: "What is the main purpose of social engineering in cybercrime?",
        options: [
          { id: 'a', text: "To improve security systems" },
          { id: 'b', text: "To trick individuals into revealing confidential information" },
          { id: 'c', text: "Social networking" },
          { id: 'd', text: "To provide social services" },
        ],
        correctAnswer: 'b',
      },
      {
        question: "What can result from a website breach?",
        options: [
          { id: 'a', text: "Better website performance" },
          { id: 'b', text: "Access to all user data including passwords" },
          { id: 'c', text: "Discounts on products" },
          { id: 'd', text: "Improved user experience" },
        ],
        correctAnswer: 'b',
      },
      // Add more questions as per the presentation content
    ],
  },
  // Add more quizzes as per different sections
];
