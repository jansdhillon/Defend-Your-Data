import React from "react";
import { quizzes } from "@/components/quizzes";
import { ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Article from "@/components/article";
import CybersecurityBasicsContent from "@/components/basic-content";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  const quizToDisplay = quizzes[0];
  const content = [
    {
      title: "Cybersecurity Basics",
      subtitle: "Learn the basics of cybersecurity",
      body: <CybersecurityBasicsContent />,
      quiz: quizToDisplay,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 w-full h-screen border-accent border-8">
      <div className="text-4xl font-bold flex items-center gap-5 w-full">
        <div>
          <ShieldCheck size={30} />
        </div>
        Defend Your Data
        <ThemeSwitcher/>
      </div>

      <Separator />
      <div className=" font-semibold flex justify-start flex-col gap-3">
        <div className="text-3xl">Articles</div>
        <div className="text-muted-foreground">
          Learn about cybersecurity basics and how to protect your data
        </div>
        <Separator />
      </div>

      <Article content={content[0]} />
    </main>
  );
}
