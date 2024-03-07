import React from "react";
import Module from "@/components/module";
import { quizzes } from "@/components/quizzes";

export default function Home() {
  const quizToDisplay = quizzes[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl font-bold">Defend Your Data</div>
      <Module name={quizToDisplay.name} questions={quizToDisplay.questions} />
    </main>
  );
}
