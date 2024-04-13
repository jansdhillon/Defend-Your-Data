"use client";
import React from "react";
import { ShieldCheck } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Nav } from "./nav";
import { Footer } from "./footer";

const cybersecurityTopics = [
  {
    title: "What is Cybersecurity?",
    subtitle: "Understanding the Basics",
    body: "Cybersecurity involves protecting internet-connected systems such as hardware, software, and data from cyber threats. It aims to protect against unauthorized access to computer systems.",
    link: "/cybersecurity-basics",
  },
  {
    title: "Common Cybercrime Methods",
    subtitle: "Recognize and Avoid Threats",
    body: "Learn about phishing, malware, spam, social engineering, and more. Understanding these common techniques can help you protect yourself from the most prevalent cyber threats.",
    link: "/common-cybercrime-methods",
  },
  {
    title: "Defend Your Data",
    subtitle: "How to Stay Safe",
    body: "Discover how to protect yourself and your data with effective strategies like using strong passwords, enabling two-factor authentication, and understanding privacy settings.",
    link: "/how-to-stay-safe",
  },
];

const resources = [
  { name: "Privacy Matters @ UBC", url: "https://privacymatters.ubc.ca/" },
  { name: "Stay Safe Online", url: "https://www.staysafeonline.org/" },
  {
    name: "Get Cyber Safe",
    url: "https://www.getcybersafe.gc.ca/index-eng.aspx",
  },
  { name: "Stop|Think|Connect", url: "https://www.stopthinkconnect.org/" },
  {
    name: "The SANS Institute",
    url: "https://www.sans.org/security-resources/",
  },
  {
    name: "The SANS Security Awareness Tip of the Day",
    url: "https://www.sans.org/tip_of_the_day.php",
  },
  {
    name: "UBC Personal Information Security Governance",
    url: "https://riskmanagement.ubc.ca/personalinfosecuritygovernance",
  },
  {
    name: "UBC Information Security Office",
    url: "https://it.ubc.ca/services/security/ubc-information-security-office",
  },
  {
    name: "RCMP Internet Safety Resources",
    url: "https://www.rcmp-grc.gc.ca/is-si/index-eng.htm",
  },
  {
    name: "Microsoft's Safety & Security Center",
    url: "https://www.microsoft.com/security/resources/cybersecurity.aspx",
  },
  {
    name: "Google's Good to Know",
    url: "https://www.google.ca/goodtoknow/online-safety/",
  },
  {
    name: "Sophos's Facebook Security Best Practices",
    url: "https://www.sophos.com/en-us/security-news-trends/best-practices/facebook.aspx",
  },
  {
    name: "Twitter's Safe Tweeting",
    url: "https://support.twitter.com/articles/76036-keeping-your-account-secure#",
  },
  { name: "Fight Cyber Stalking", url: "https://www.fightcyberstalking.org/" },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Separator />
        <div className="flex justify-center flex-col md:grid md:grid-cols-3 gap-3 p-10 overflow-scroll w-full items-center md:justify-start h-full">
          {cybersecurityTopics.map((topic, index) => (
            <Card
              key={index}
              className="w-[250px] md:w-[350px] h-[450px] m:h-[350px] flex flex-col bg-card m-2 shadow-md p-4"
            >
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm flex-grow">
                {topic.body}
              </CardContent>
              <CardFooter className="mt-auto w-full flex justify-end ">
                <Link href={topic.link}>
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
          <div className="w-full p-4shadow-md mt-4 flex flex-col gap-2">
            <h2 className="text-lg font-bold mb-3">Additional Resources</h2>
            <Separator />
            <ul className="list-disc pl-5">
              {resources.map((resource, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={resource.url}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
