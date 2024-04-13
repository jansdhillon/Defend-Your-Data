import React, { useState, useEffect } from "react";
import { IQuestion } from "@/lib/types";
import { Button } from "./ui/button";
import { Check, RotateCw, X } from "lucide-react";

const Quiz = ({ questions }: { questions: IQuestion[] }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!quizSubmitted) {
      setAnswers({});
      setKey((prev) => prev + 1);
    }
  }, [quizSubmitted]);

  const handleOptionChange = (question: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [question]: optionId }));
  };

  const handleSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleReset = () => {
    setQuizSubmitted(false);
  };

  const isCorrectAnswer = (question: string, optionId: string): boolean => {
    return (
      questions.find((q) => q.question === question)?.correctAnswer === optionId
    );
  };

  return (
    <div
      key={key}
      className="flex flex-col space-y-4 items-start justify-center"
    >
      {" "}

      {questions.map((q, index) => (
        <div key={index} className="flex flex-col ">
          <div className="font-semibold italic">{q.question}</div>
          {q.options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name={q.question}
                value={option.id}
                onChange={() => handleOptionChange(q.question, option.id)}
                disabled={quizSubmitted}
                className="accent-primary"
              />
              <span>{option.text}</span>
            </label>
          ))}
        </div>
      ))}
      {!quizSubmitted ? (
        <Button onClick={handleSubmit}>Check Answer</Button>
      ) : (
        <>
          <div>
            {Object.entries(answers).map(([question, optionId], index) => (
              <div
                key={index}
                className={`${
                  isCorrectAnswer(question, optionId)
                    ? "text-green-500"
                    : "text-red-500"
                } font-bold p-0 `}
              >
                {isCorrectAnswer(question, optionId) ? (
                  <div className="flex gap-2">
                    <Check />
                    <>Correct</>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <X />
                    Incorrect
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button onClick={handleReset} className="font-bold flex gap-2">
            <RotateCw size={15} />
            Reset Quiz
          </Button>
        </>
      )}
    </div>
  );
};

export default Quiz;
