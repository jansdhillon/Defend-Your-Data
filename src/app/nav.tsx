"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const path = usePathname();
  return (
    <>
      <div className="sticky top-0 z-50 bg-background text-lg md:text-4xl font-bold flex items-start text-left w-full flex-col p-6 rounded-lg shadow-sm border-accent border-2">
        <div className="flex items-center gap-3 justify-between w-full p-2">
          <Link href="/" className="flex items-center gap-3">
            <ShieldCheck size={30} className="text-blue-500" />
            <div className="text-blue-500">Defend Your Data</div>
          </Link>
          <ThemeSwitcher />
        </div>
        <div className="text-sm md:text-lg text-muted-foreground font-semibold p-2">
          Explore the essentials of cybersecurity and learn about the role of
          cybersecurity in digital citizenship.
        </div>
        {path !== "/" ? (
          <Link href="/">
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 font-bold mt-3"
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
        ) : null}
      </div>
    </>
  );
};
