import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Nav } from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Defend Your Data",
  description:
    "Explore the essentials of cybersecurity and learn about the role of cybersecurity in digital citizenship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <Nav />
        <body className={`${inter.className} min-h-screen h-screen mt-48`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
