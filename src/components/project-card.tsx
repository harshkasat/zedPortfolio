"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useEffect, useId, useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  index: number;
}

const CATEGORY_TAGS_TO_EXCLUDE = [
  "ai",
  "website",
  "scraping",
  "side project",
  "web3",
];

export function ProjectCard({ title, description, tags, link, index }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const displayTags = tags.filter(
    (tag) => !CATEGORY_TAGS_TO_EXCLUDE.includes(tag.toLowerCase())
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling when popup is open
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      // Restore scrolling when popup is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <>
      <Card
        onClick={() => setIsOpen(true)}
        className="flex flex-col overflow-hidden border-2 p-3 h-full hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer "
      >
        <CardHeader className="p-0">
          <div className="space-y-1">
        <CardTitle className="text-base">
          {link ? (
            <span className="inline-flex items-center gap-1">
          {title}
          <span className="h-2 w-2 rounded-full bg-green-500" />
            </span>
          ) : (
            title
          )}
        </CardTitle>
        <div className="hidden font-mono text-xs underline print:visible">
          {link?.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <CardDescription className="font-mono text-xs print:text-[10px]">
          {description}
        </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto p-0">
          {displayTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {displayTags.map((tag) => (
            <Badge
          key={tag}
          variant="secondary"
          className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            >
          {tag}
            </Badge>
          ))}
        </div>
          )}
        </CardContent>
      </Card>

      {/* Portal for Popup Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 999999 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-lg p-4"
              style={{ zIndex: 1000000 }}
            >
              <Card className="relative border border-muted bg-white dark:bg-neutral-900 p-6 shadow-xl rounded-xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                >
                  <CloseIcon />
                </button>
                <div className="pr-8">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {description}
                  </p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
                    >
                      View Project
                    </a>
                  )}
                  {displayTags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {displayTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="px-2 py-1 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);
