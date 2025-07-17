import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from './providers'

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Harsh Kasat",
  description: "Harsh Kasat Portfolio",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = "https://whoisharsh.space";
  const avatarUrl = "/pfp-image.webp";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harsh Kasat",
    "url": siteUrl,
    "image": `${siteUrl}${avatarUrl}`,
    "sameAs": [
      "https://github.com/harshkasat",
      "https://www.linkedin.com/in/harshkasat/",
      "https://x.com/harsh__kasat",
      "https://drive.google.com/file/d/1hXeKhl6NDa97uGjL6F-ZW0DyfZn69gSx/view?usp=sharing",
      "https://www.notion.so/Why-so-curious-1fbfcb5ecf638083bea5f99bc3d272ff"
    ],
    "email": "harshkasat01gmail.com",
    "jobTitle": "Software Engineer",
    "description": "A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process. Mostly work remote because why not ? more into low-level and tinkering around system ",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "Harsh Kasat | Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer",
    "description": "A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process. Mostly work remote because why not ? more into low-level and tinkering around system "
  };
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Harsh Kasat | Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer</title>
        <meta name="description" content="A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process. Mostly work remote because why not ? more into low-level and tinkering around system " />
        <meta name="keywords" content="Harsh Kasat, Django, Machine Learning, GenAI, Software Engineer, Freelancer, Python, AI, ML, DL, NLP, FastAPI, Flask, HuggingFace, Langchain, Llamaindex, AWS, Azure, Docker, Terraform, PostgreSQL, Firebase, Redis, MySQL, Supabase, JavaScript, Go, ELK, Kibana, ElasticSearch" />
        <meta property="og:title" content="Harsh Kasat | Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer" />
        <meta property="og:description" content="A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process. Mostly work remote because why not ? more into low-level and tinkering around system " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}${avatarUrl}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harsh Kasat | Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer" />
        <meta name="twitter:description" content="A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process. Mostly work remote because why not ? more into low-level and tinkering around system " />
        <meta name="twitter:image" content={`${siteUrl}${avatarUrl}`} />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </head>
      <body>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            <div className="theme-transition bg-background text-foreground duration-1000">
              {children}
            </div>
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
