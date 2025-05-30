import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  ResumeIcon,
} from "@/components/icons";
import NotionIcon from "@/components/icons/NotionIcon";
import { projects } from "./project-data";
export const RESUME_DATA = {
  name: "Harsh",
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
        url: "https://tinyurl.com/whoisharsh",
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
      end: "May 2024",
      description: `Developed multiple agents using langchain and superagent workflow, Create UGI Model
        I was one of the founding member. Build backend in fastapi to move fast and rollback fast.
        Developed Custom Voice modulation voice. Build Facebook Automation for posting content on schedule time
        Use Redis for Memory Queue, for runng small worker.`,
    },
    {
      company: "Occultdiy",
      link: "https://www.occultdiy.com/",
      badges: ["Remote (London)"],
      title: "Django Developer (Contract Based)",
      start: "September 2023",
      end: "February 2024",
      description: `Maintained frontend HTML, CSS, and JavaScript, managed email broadcasts, and handled server deployments. 
        Developed scalable Django backend with Supabase (prod) and SQLite, implemented CI/CD pipelines to push change to servers and email scheduler,
        and optimized applications using Docker, load balancers, and Redis.`,
    },
    {
      company: "AMD Telecom S.A.",
      link: "https://presentations.amdtelecom.net/",
      badges: ["Remote (Greece)"],
      title: "Software Engineer",
      start: "March 2023",
      end: "June 2024",
      description: ` Architected microservices to productionize LLM workflows, 
      optimized to handle async requests via Redis queues, Docker.
      Fine-tuned custom invoice parsing models and built scalable invoice-to-JSON pipelines using LLMs. 
      Integrated NVIDIA RIVA for high-performance STT and TTS and developed image enlargers and inpainting 
      models using Stable Diffusion + ControlNet for creative workflows. Built fast, iterated in chaos, and scaled things that started as side quests.`,
    },
  ],
  skills: [
    "AI/ML/DL/NLP & Agents: Pytorch, Transformers, PEFT",
    "Bitsandbytes Diffusers, HuggingFace Ecosystem",
    "Replicate, Langchain, Llamaindex",
    "Python Libraries: NLTK, OpenCV, BeautifulSoup",
    "Selenium, Pandas",
    "Web Frameworks: FastAPI, Flask, Django, React.js",
    "Next.js, Bootstrap, Tailwind",
    "Cloud: AWS, Azure Machine Learning, AWS Sagemaker",
    "Docker, Learning Terraform",
    "Databases: PostgreSQL, Firebase, Redis, MySQL, Supabase",
    "Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: JavaScript, TypeScript, Python, C/C++, SQL, Java",
    "Logging & Monitoring: ELK, Kibana, ElasticSearch",
  ],
  projects: projects
} as const;
