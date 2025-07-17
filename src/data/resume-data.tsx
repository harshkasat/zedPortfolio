import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  ResumeIcon,
} from "@/components/icons";
import NotionIcon from "@/components/icons/NotionIcon";
import { projects } from "./project-data";
export const RESUME_DATA = {
  name: "Harsh Kasat",
  location: "India",
  locationLink: "https://www.google.com/maps/place/Surat",
  about:
    "Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer",
  summary: `A dev with chaotic thoughts and fluppy code, I learn by building product, breaking things is part of process.
    Mostly work remote because why not ? more into low-level and tinkering around system `,
  avatarUrl: "./pfp-image.webp",
  contact: {
    email: "harshkasat01gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshkasat",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshkasat/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/harsh__kasat",
        icon: XIcon,
      },
      {
        name: "Resume",
        url: "https://drive.google.com/file/d/1hXeKhl6NDa97uGjL6F-ZW0DyfZn69gSx/view?usp=sharing",
        icon: ResumeIcon,
      },
      {
        name: "Notion",
        url: "https://www.notion.so/Why-so-curious-1fbfcb5ecf638083bea5f99bc3d272ff",
        icon: NotionIcon,
      },
    ],
  },
  education: [
    {
      school: "Gujarat Technological University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Kliqstr",
      link: "https://kliqstr.com/",
      badges: ["Remote (USA)"],
      title: "Gen Ai Developer (Freelancer)",
      start: "February 2024",
      end: "May 2025",
      description: `Built AI agents to automate customer support and lead generation using LangChain + Superagent. 
      Developed backend API with FastAPI to serve UGI models. Created voice modulator to clone user tones for video replies. 
      Automated daily Facebook content across 30+ pages with Redis-powered pipelines — cut manual work by 90% .`,
    },
    {
      company: "Occultdiy",
      link: "https://www.occultdiy.com/",
      badges: ["Remote (London)"],
      title: "Django Developer (Contract Based)",
      start: "September 2023",
      end: "February 2024",
      description: `Rebuilt core web app frontend for smoother UX and faster load times. 
      Set up end-to-end CI/CD with GitHub Actions + Docker for zero-downtime deploys. 
      Migrated backend from SQLite to Supabase, improving DB speed 3x. 
      Sent targeted email campaigns to 15k+ users using cron + custom scripts.`,
    },
    {
      company: "AMD Telecom S.A.",
      link: "https://presentations.amdtelecom.net/",
      badges: ["Remote (Greece)"],
      title: "Software Engineer",
      start: "March 2023",
      end: "June 2024",
      description: `Designed and deployed 10+ microservices to handle Gen AI workloads using Docker + Redis. 
      Built and fine-tuned invoice parsers that converted scanned invoices to structured JSON with 95% accuracy. 
      Integrated NVIDIA RIVA to transcribe and synthesize voice calls in real time. 
      Created custom image editing tools using Stable Diffusion + ControlNet for marketing automation.`,
    },
  ],
  skills: [
    "AI/ML/DL/NLP & Agents: Pytorch, Transformers, PEFT",
    "Bitsandbytes Diffusers, HuggingFace Ecosystem",
    "Replicate, Langchain, Llamaindex",
    "Python Libraries: NLTK, OpenCV, BeautifulSoup",
    "Selenium, Pandas",
    "Web Frameworks: FastAPI, Flask, Django",
    "Cloud: AWS, Azure Machine Learning, AWS Sagemaker",
    "Docker, Learning Terraform",
    "Databases: PostgreSQL, Firebase, Redis, MySQL, Supabase",
    "Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: JavaScript, Python, Go",
    "Logging & Monitoring: ELK, Kibana, ElasticSearch",
  ],
  projects: projects,
} as const;
