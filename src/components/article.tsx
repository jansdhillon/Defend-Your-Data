import React from "react";
import { IArticle } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import Quiz from "./quiz";
import { Separator } from "./ui/separator";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

const Article = ({ title, content, quizzes }: IArticle) => {
  return (
    <div className="flex flex-col items-start space-y-4 max-h-[80%] w-full">
      <div className="text-2xl font-semibold text-primary pt-12 pb-8">{title}</div>
      <ScrollArea className="border p-4 overflow-auto">{content}</ScrollArea>
      <Separator />
      <div className="text-lg font-bold mt-4 mb-2 flex gap-2 items-center">
        Knowledge Check <QuestionMarkCircledIcon className="text-blue-500 size-5" />
      </div>
      <Separator />
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} questions={quiz.questions} />
      ))}
    </div>
  );
};

export default Article;
