import React, { ReactNode } from "react";
import { IArticleProps, IQuiz } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import Quiz from "./quiz";

const Article = ({ content }: IArticleProps) => {
  return (
    <div className="flex flex-col items-start space-y-4 max-h-[80%] w-[70%] ">
      <div className="text-2xl font-semibold text-primary">{content.title}</div>
      <div className="text-muted-foreground">{content.subtitle}</div>
      <ScrollArea className="rounded-md border p-4">{content.body}</ScrollArea>
      <Quiz questions={content.quiz.questions} />
    </div>
  );
};

export default Article;
