import { ThemeSwitcher } from "@/components/theme-switcher";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="text-4xl font-bold flex items-start text-left w-full flex-col p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 justify-between w-full p-2">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <ShieldCheck size={30} className="text-blue-500" />
          <div className="text-blue-500">Defend Your Data</div>
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="text-lg text-muted-foreground font-semibold p-2">
        Explore the essentials of cybersecurity and learn about the role of
        cybersecurity in digital citizenship.
      </div>
    </div>
  );
};
