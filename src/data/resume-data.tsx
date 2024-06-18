import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Harsh Kasat",
  location: "Surat - Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Surat",
  about:
    "Django Dev, Machine Learning Intern, Partime Freelancer, Gen Ai Dev",
  summary:
    "Software engineer specializing in crafting cutting-edge generative AI solutions. Proficient in guiding products from concept to completion, adept in team leadership. Experienced in AI, ML, and DL technologies, as well as web development and cloud computing",
  avatarUrl: "./harsh.jpg",
  contact: {
    email: "harshkasat01gmail.com",
    tel: "+91 8154007771",
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
    ],
  },
  education: [
    {
      school: "Government Engineering College, Dahod",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Kliqstr",
      link: "https://kliqstr.com/",
      badges: ["Remote"],
      title: "Gen Ai Developer (Freelancer)",
      start: "February 2024",
      end: "May 2024",
      description:
        "Developed multiple LLM agents using Hugging Face, Stable Diffusion, LlamaIndex, and Langchain, and implemented RAG models for context-free applications. Designed APIs with FastAPI for efficient model execution, utilizing Google Cloud Platform for authentication. Key technologies include Transformers and Google Cloud Platform.",
    },
    {
      company: "Occultdiy",
      link: "https://www.occultdiy.com/",
      badges: ["Remote"],
      title: "Django Developer (Contract Based)",
      start: "September 2023",
      end: "February 2024",
      description:
        "Maintained frontend HTML, CSS, and JavaScript, managed email broadcasts, and handled server deployments. Developed scalable Django backend with Supabase and SQLite, implemented CI/CD pipelines with GitHub Actions, and optimized applications using Docker, load balancers, and Redis.",
    },
    {
      company: "AMD Telecom S.A.",
      link: "https://presentations.amdtelecom.net/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "March 2023",
      end: "January 2024",
      description:"Implemented real-time car and people counting, and car number plate detection using OpenCV and deep learning. Developed scalable invoice-to-JSON conversion with large language models, created generative fills with Stable Diffusion and ControlNet, and architected microservices for production LLM models, optimizing performance to handle millions of requests."

    },
  ],
  skills: [
    "AI/ML/DL/NLP: Pytorch, Transformers, PEFT, Bitsandbytes, Diffusers, HuggingFace Ecosystem, Agents, Replicate" ,
    "Python Libraries: NLTK, FastAPI, Flask, Django, OpenCV, BeautifulSoup, Selenium, Pandas, Langchain, Llamaindex ",
    "Web Framework: React.js, Next.js, Django, Bootstrap, Tailwind",
    "Cloud: AWS, Azure Machine Learning, AWS Sagemaker, Docker, Learning Terraform",
    "Database: PostgreSQL, Firebase, Redis, MySQL, Supabase, Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: JavaScript, TypeScript, Python, C/C++, SQL, Java",
  ],
  projects: [
    {
      title: "InscribeAI",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Eudaimonia",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      link: {
        label: "LessonPlan",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Trininetra",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Diagnose",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Facial_emotions",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "ANPR",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "SignSleuth",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Gesture-Navigator",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "NotionWhizBot",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "MelodyArchive",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
  ],
} as const;
