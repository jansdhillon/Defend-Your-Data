"use client"
import React, { useState } from 'react';
import { IQuestion } from '../lib/types'; // Adjust the import path as needed

interface ModuleProps {
  name: string;
  questions: IQuestion[];
}

const Module: React.FC<ModuleProps> = ({ name, questions }) => {
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

  const isCorrectAnswer = (question: string, optionId: string): boolean => {
    return questions.find(q => q.question === question)?.correctAnswer === optionId;
  };

  return (
    <div className="container">
      <div className="text-3xl">{name}</div>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <div className="font-bold">{q.question}</div>
          {q.options.map(option => (
            <label key={option.id}>
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
        <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded">Submit Quiz</button>
      ) : (
        <div>
          {Object.entries(answers).map(([question, optionId], index) => (
            <div key={index}>
              {question}: {isCorrectAnswer(question, optionId) ? "Correct" : "Incorrect"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Module;
