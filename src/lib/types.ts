export type IQuiz = {
    id: number;
    name: string;
    questions: IQuestion[];
}

export type IQuestion = {
    question: string;
    options: IOption[];
    correctAnswer: string;
}

export type IOption = {
    id: string;
    text: string;
}

export type IContent = {
    title: string;
    subtitle: string;
    body: React.ReactNode;
    quiz: IQuiz;
}

export type IArticleProps = {
    content: IContent;
}
