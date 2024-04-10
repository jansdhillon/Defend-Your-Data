"use client";
import React, { useState } from "react";
import { IQuestion } from "../lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { RotateCw } from "lucide-react";
import { Button } from "./ui/button";

const Quiz = ({ questions }: { questions: IQuestion[] }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const handleOptionChange = (question: string, optionId: string): void => {
    setAnswers({
      ...answers,
      [question]: optionId,
    });
  };

  const handleSubmit = (): void => {
    setQuizSubmitted(true);
  };

  const handleReset = (): void => {
    setAnswers({});
    setQuizSubmitted(false);
  }

  const isCorrectAnswer = (question: string, optionId: string): boolean => {
    return (
      questions.find((q) => q.question === question)?.correctAnswer === optionId
    );
  };

  return (
    <div className="flex flex-col space-y-4 items-start justify-center">
      {questions.map((q, index) => (
        <div key={index} className="mb-4 flex flex-col gap-3">
          <div className="font-bold">{q.question}</div>
          {q.options.map((option) => (
            <label key={option.id} className="flex gap-3">
              <input
                type="radio"
                name={q.question}
                value={option.id}
                onChange={() => handleOptionChange(q.question, option.id)}
                disabled={quizSubmitted}
              />
              {option.text}
            </label>
          ))}
        </div>
      ))}

      {!quizSubmitted ? (
        <Button
          onClick={handleSubmit}
          variant={"default"}
        >
          Submit Quiz
        </Button>
      ) : (
        <>
          <div>
            {Object.entries(answers).map(([question, optionId], index) => (
              <div key={index}>
                {question}:{" "}
                {isCorrectAnswer(question, optionId) ? "Correct" : "Incorrect"}
              </div>
            ))}
          </div>
          <Button onClick={handleReset}>
            <RotateCw size={20} />
          </Button>
        </>
      )}
    </div>
  );
};

export default Quiz;
