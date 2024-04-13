"use client";
import React from "react";
import { ArrowLeft, ShieldCheck, SkipBack } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";
import Article from "@/components/article";
import { quizzes } from "@/lib/quizzes";
import { Nav } from "../nav";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Footer } from "../footer";

type ArticleContent = {
  title: string;
  subtitle: string;
  content: JSX.Element;
  quizzes: {
    id: number;
    name: string;
    questions: {
      question: string;
      options: { id: string; text: string }[];
      correctAnswer: string;
    }[];
  }[];
};

const articlesContent: { [key: string]: ArticleContent } = {
  "cybersecurity-basics": {
    title: "What are cybersecurity and cybercrime?",
    subtitle: "Learn the basics of cybersecurity",
    content: (
      <>
        <div>
          Cybersecurity encompasses many different topics, but it&apos;s essentially
          how you defend your data and protect yourself from cybercrime.
        </div>
        <div>
          Cybercrime is the use of computers and/or the Internet to conduct
          illegal activity, including hacking, identity theft, online fraud, and
          the distribution of malicious software.
        </div>
        <div>
          Cybercriminals will try and steal information from you that is useful
          to them, such as passwords and account numbers, in order to gain
          access to to your bank account or other important accounts.
        </div>
        <div>
          They may also steal your data so they can sell it to other parties.
        </div>
      </>
    ),
    quizzes: quizzes.filter(
      (quiz: { name: string }) => quiz.name === "Introduction to Cybersecurity"
    ),
  },
  "common-cybercrime-methods": {
    title: "Common Cybercrime Methods",
    subtitle: "Understand and protect against common threats",
    content: (
      <>
        <div>
          Understanding the most common cybercrime methods gives individuals and
          organizations a better chance of keeping their data secure. These
          methods include phishing, malware, ransomware, and social engineering
          attacks among others.
        </div>
        <div>
          By recognizing the signs of these attacks and knowing the appropriate
          actions to take, you can significantly reduce the likelihood of
          becoming a victim.
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Spam</h3>
          <p>
            Spam is an electronic message, like an email, you did not agree to
            receive. Types of spam include:
          </p>
          <ul>
            <li>
              Unsolicited advertising (e.g., Newsletters you didn’t agree to
              receive)
            </li>
            <li>
              Scams (e.g., A “Nigerian Prince” wants to give you his
              inheritance)
            </li>
            <li>Phishing (more on this next)</li>
          </ul>
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Phishing</h3>
          <p>
            Phishing is pretending to be a trusted company or organization in an
            attempt to trick victims into providing their personal details, such
            as their password or banking information. Spear phishing is phishing
            targeted at a specific individual.
          </p>
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Malware</h3>
          <p>
            Malware (malicious software) is malicious code or a program intended
            to harm your computer or grant attackers access to your system. They
            can vary in type and purpose, for example, a virus is a kind of
            malware designed to spread throughout a computer or system.
          </p>
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Social Engineering</h3>
          <p>
            Social engineering is when someone tricks you into revealing
            confidential information that they can use to gain access to your
            accounts and/or device(s). For example, someone asking you for the
            answers to common security questions, such as your mother’s maiden
            name.
          </p>
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Password Compromises</h3>
          <p>
            When a website is breached by cybercriminals, they are often able to
            access all user data, including passwords, which may be reused for
            other sites.
          </p>
        </div>
        <div className="pt-4">
          <h3 className="font-bold">Physical Device Theft</h3>
          <p>
            Physical device theft, like when someone steals your phone, USB
            drive, or laptop, can allow attackers to access your confidential
            information stored on the device.
          </p>
        </div>
      </>
    ),
    quizzes: quizzes.filter(
      (quiz: { name: string }) => quiz.name === "Recognizing Phishing Attacks"
    ),
  },
  "how-to-stay-safe": {
    title: "How to Stay Safe",
    subtitle: "Protect yourself and your data",
    content: (
      <>
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Download Antivirus Software
          </h3>
          <p className="text-sm">
            Getting antivirus software for your computer can protect you by
            blocking known threats and scanning your computer/files for malware.
          </p>
          <p className="text-sm">
            Make sure even the antivirus you download is from an official,
            trusted source. It never hurts to search “is [software/website]
            safe?”
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>Avast (free and paid)</li>
            <li>Bitdefender (free and paid)</li>
            <li>MalwareBytes (free and paid)</li>
            <li>Norton (paid)</li>
            <li>ClamAV (free)</li>
          </ul>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Backup Your Data
          </h3>
          <p className="text-sm">
            If your device or system is compromised, it may be necessary to
            remove all data on it to restore it to safety.
          </p>
          <p className="text-sm">
            It is important that you keep a backup of your data on a physical
            storage device (like a USB drive) or on a cloud storage service.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Keep Your Computer Software Up to Date
          </h3>
          <p className="text-sm">
            macOS and Windows support automatic software updates. Enabling this
            feature can help you ensure you always have the most up-to-date
            protection provided by your operating system.
          </p>
          <p className="text-sm">
            This can fix security flaws that existed in previous versions.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Enable MFA When Possible
          </h3>
          <p className="text-sm">
            Multi-factor authentication (MFA) or two-factor authentication (2FA)
            adds an extra step of security by confirming your identity
            (typically with another device) before allowing you to sign in.
          </p>
          <p className="text-sm">
            Many services offer this feature, and it helps prevent someone from
            accessing your account(s) even if they have your password.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Choose a Strong Password and Don’t Share It
          </h3>
          <p className="text-sm">
            Weak passwords make it easy for cybercriminals! Having a strong
            password is important to defend your data. Avoid reusing passwords
            and never share your password with anyone.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Weak passwords could be: less than 8 characters, names of family
              members/pets, common words, numerals, user ID, geographic places.
            </li>
            <li>
              Strong passwords have a mix of letters, numbers, and symbols, are
              at least 8 characters, and are unpredictable.
            </li>
          </ul>
          <p className="text-sm">
            Consider using a password manager like Bitwarden to keep track of
            all your passwords.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Stay Safe Online
          </h3>
          <p className="text-sm">
            Be vigilant with the links you click and the downloads you make.
            Ensure your browser is up-to-date to benefit from the latest
            security features.
          </p>
          <p className="text-sm">
            Avoid visiting and downloading content from illegal or untrusted
            websites. Be wary of unexpected emails or messages even from
            contacts if their accounts may be compromised.
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Final Thoughts
          </h3>
          <p className="text-sm">
            Think before you click. You can learn more about defending your data
            and protecting your privacy by following good security practices and
            staying informed.
          </p>
        </section>
      </>
    ),
    quizzes: quizzes.filter(
      (quiz: { name: string }) =>
        quiz.name === "Best Practices for Password Security"
    ),
  },
};

export default function Page({ params }: { params: { id: string } }) {
  const articleData = articlesContent[params.id];

  return (
    <>
      <Nav />
      <main className="flex flex-col items-start p-10 gap-3 w-full min-h-screen border-accent border-8">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <ArrowLeft className="size-4" />
          Back
        </Link>
        <Separator />
        <div className=" mt-6">
          {articleData ? (
            <Article
              title={articleData.title}
              subtitle={articleData.subtitle}
              content={articleData.content}
              quizzes={articleData.quizzes}
            />
          ) : (
            <div className="text-lg font-semibold">Article not found</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
