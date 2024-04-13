// lib/types.ts
export interface IOption {
    id: string;
    text: string;
  }

  export interface IQuestion {
    question: string;
    options: IOption[];
    correctAnswer: string;
  }

  export interface IQuiz {
    id: number;
    name: string;
    questions: IQuestion[];
  }

  export interface IArticle {
    title: string;
    subtitle?: string;
    content: JSX.Element;
    quizzes: IQuiz[];
  }
