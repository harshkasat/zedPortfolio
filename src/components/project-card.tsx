import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

const CATEGORY_TAGS_TO_EXCLUDE = [
  "ai",
  "website",
  "web3",
  "scraping",
  "side project", // Added "side project" as it was in your sample techStack
  // Add any other high-level category tags you use for filtering
];


export function ProjectCard({ title, description, tags, link }: Props) {
  // Filter out the main category tags from the tech stack shown on the card
  const displayTags = tags.filter(
    (tag) => !CATEGORY_TAGS_TO_EXCLUDE.includes(tag.toLowerCase())
  );

  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 h-full">
      {" "}
      {/* Added h-full for consistent card height if in a grid */}
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer" // Added rel for security
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                {/* Consider making the green dot conditional or more dynamic if needed */}
                <span className="h-2 w-2 rounded-full bg-green-500"></span> {/* Adjusted size for visibility */}
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs print:text-[10px] flex-grow">
            {" "}
            {/* Added flex-grow to allow description to take available space */}
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        {displayTags.length > 0 && ( // Only show if there are tags to display
          <div className="mt-2 flex flex-wrap gap-1">
            {displayTags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
