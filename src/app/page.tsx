"use client";
import { useState, useMemo } from "react";
import Head from "next/head";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { ModeToggle } from "@/components/ModeToggle";
import Component from "@/components/ui/linear-card";

// export const metadata = {
//   title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
//   description: RESUME_DATA.summary,
// };

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // Define your project categories here.
  // You could also derive them dynamically from your project data if needed.
  const categories = useMemo(() => {
    const allTech = RESUME_DATA.projects.reduce((acc, project) => {
      project.techStack.forEach((tech) => acc.add(tech.toLowerCase()));
      return acc;
    }, new Set());
    // Add specific categories you want to filter by.
    // For simplicity, I'm using a predefined list, but you can customize this.
    const predefinedCategories = ["AI", "website", "scraping"];
    // You could also intersect `allTech` with a list of known categories if techStack contains them.
    return predefinedCategories;
  }, []);

  const filteredProjects = useMemo(() => {
    return RESUME_DATA.projects.filter((project) => {
      const matchesCategory =
        selectedCategory.toUpperCase() === "ALL" ||
        project.techStack.some(
          (tech) => tech.toLowerCase() === selectedCategory.toLowerCase(),
        );

      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);
  const siteUrl = "https://whoisharsh.space";
  const avatarUrl = RESUME_DATA.avatarUrl.startsWith("./") ? `/pfp-image.webp` : RESUME_DATA.avatarUrl;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": RESUME_DATA.name,
    "url": siteUrl,
    "image": `${siteUrl}${avatarUrl}`,
    "sameAs": RESUME_DATA.contact.social.map(s => s.url),
    "email": RESUME_DATA.contact.email,
    "jobTitle": "Software Engineer",
    "description": RESUME_DATA.summary,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": RESUME_DATA.location
    }
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    "description": RESUME_DATA.summary
  };
  return (
    <>
      <Head>
        <title>{`${RESUME_DATA.name} | ${RESUME_DATA.about}`}</title>
        <meta name="description" content={RESUME_DATA.summary} />
        <meta name="keywords" content={RESUME_DATA.skills.join(", ")} />
        <meta property="og:title" content={`${RESUME_DATA.name} | ${RESUME_DATA.about}`} />
        <meta property="og:description" content={RESUME_DATA.summary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}${avatarUrl}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${RESUME_DATA.name} | ${RESUME_DATA.about}`} />
        <meta name="twitter:description" content={RESUME_DATA.summary} />
        <meta name="twitter:image" content={`${siteUrl}${avatarUrl}`} />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </Head>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        {/* <BackgroundLines> */}
        <section className="mx-auto w-full max-w-4xl space-y-8 print:space-y-4">
          <div className="flex flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold text-primary-foreground">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none "
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={`mailto:${RESUME_DATA.contact.email}`}
                      target="_blank"
                    >
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold text-primary-foreground">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-bold text-primary-foreground">
              Work Experience
            </h2>
            {RESUME_DATA.work.map((work) => (
              <Card
                key={work.company}
                className="bg-transparent mb-6 shadow-none border-none"
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-2 gap-x-2 text-base">
                    <div className="flex flex-col gap-y-1">
                      <h3 className="inline-flex items-center gap-x-2 font-semibold leading-none">
                        <a
                          className="hover:text-primary-foreground"
                          href={work.link}
                        >
                          {work.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <h4 className="font-mono text-sm leading-none text-muted-foreground print:text-[12px]">
                        {work.title}
                      </h4>
                    </div>
                    <div className="text-sm tabular-nums text-muted-foreground text-right min-w-[180px]">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 bg-transparent text-muted-foreground print:text-[10px]">
                  <p className="whitespace-pre-line leading-relaxed text-[15px]">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </Section>
          <Section>
            <h2 className="text-xl font-bold text-primary-foreground">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge
                    className="bg-secondary text-sm text-secondary-foreground hover:bg-primary-foreground/100 print:text-[10px]"
                    key={skill}
                  >
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold text-secondary">Projects</h2>
            <div className="my-4">
              <Component
                items={filteredProjects.map((project, idx) => ({
                  id: idx + 1,
                  url: {
                    src: "project-background-image.png",
                  },
                  title: project.title,
                  description: project.description,
                  tags: project.techStack || [],
                  githubUrl:
                    typeof project.link === "string"
                      ? project.link
                      : project.link?.href ?? "",
                }))}
              />
            </div>
          </Section>
        </section>
      </main>
    </>
  );
}
