import { GitHubIcon, LinkedInIcon, XIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Harsh Kasat",
  location: "Surat - Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Surat",
  about:
    "Django Dev | Machine Learning | Freelancer | GenAI Dev | Software Engineer",
  summary:
    "Software engineer specializing in crafting cutting-edge generative AI solutions. Proficient in guiding products from concept to completion, adept in team leadership. Experienced in AI, ML, and DL technologies, as well as web development and cloud computing",
  avatarUrl: "./harsh.jpg",
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
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1px9GCYnJotPAP0v7bGuNeaUJRNB_Aair/view?usp=sharing',
        icon: ResumeIcon,
      }
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
      description:
        "Developed multiple LLM agents using Hugging Face, Stable Diffusion, LlamaIndex, and Langchain, and implemented RAG models for context-free applications. Designed APIs with FastAPI for efficient model execution, utilizing Google Cloud Platform for authentication. Key technologies include Transformers and Google Cloud Platform.",
    },
    {
      company: "Occultdiy",
      link: "https://www.occultdiy.com/",
      badges: ["Remote (London)"],
      title: "Django Developer (Contract Based)",
      start: "September 2023",
      end: "February 2024",
      description:
        "Maintained frontend HTML, CSS, and JavaScript, managed email broadcasts, and handled server deployments. Developed scalable Django backend with Supabase and SQLite, implemented CI/CD pipelines with GitHub Actions, and optimized applications using Docker, load balancers, and Redis.",
    },
    {
      company: "AMD Telecom S.A.",
      link: "https://presentations.amdtelecom.net/",
      badges: ["Remote (Greece)"],
      title: "Software Engineer",
      start: "March 2023",
      end: "June 2024",
      description:"Implemented real-time car and people counting, and car number plate detection using OpenCV and deep learning. Developed scalable invoice-to-JSON conversion with large language models, created generative fills with Stable Diffusion and ControlNet, and architected microservices for production LLM models, optimizing performance to handle millions of requests."

    },
  ],
  skills: [
    "AI/ML/DL/NLP: Pytorch, Transformers, PEFT, Bitsandbytes, Diffusers, HuggingFace Ecosystem, Agents, Replicate" ,
    "Python Libraries: NLTK, FastAPI, Flask, Django, OpenCV, BeautifulSoup, Selenium, Pandas, Langchain, Llamaindex" ,
    "Web Framework: React.js, Next.js, Django, Bootstrap, Tailwind",
    "Cloud: AWS, Azure Machine Learning, AWS Sagemaker, Docker, Learning Terraform",
    "Database: PostgreSQL, Firebase, Redis, MySQL, Supabase, Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: JavaScript, TypeScript, Python, C/C++, SQL, Java, ELK, Kibana, ElasticSearch",
  ],
  projects: [
    {
      title: "InscribeAI",
      techStack: [
        "Full Stack Developer",
        "JS",
        "React",
        "Redis",
        "Senty",
        "Docker",
        "FastApi"
      ],
      description:
        "Seamlessly craft compelling blogs in minutes with AI-powered ease.",
      link: {
        label: "github.com",
        href: "https://github.com/harshkasat/InscribeAI",
      },
    },
    {
      title: "Eudaimonia",
      techStack: [
        "Fastapi",
        "Notion",
        "Slack",
        "Facebook API",
        "Docker",
        "LLM",
      ],
      description:
        "Effortlessly generate, publish, and organize blogs using AI with FastAPI, Notion, and the Facebook Graph API.",
      link: {
        label: "github.com",
        href: "https://github.com/harshkasat/Eudaimonia",
      },
    },
    {
      title: "Occultdiy",
      techStack: ["Company Project", "HTML", "Celery", "Django", "Supabase", "GitHubAction", "Docker"]  ,
      description:
        "Numerology, or the science of numbers, is all about numbers, and their vibrational bent aids the numerologists to predict the future of the person.",
      link: {
        label: "website",
        href: "https://www.occultdiy.com/",
      },
    },
    {
      title: "Hand Gesture Game Controller",
      techStack: ["Side Project", "Python", "OpenCV", "MediaPipe", "DirectInput (pywin32)"]      ,
      description: "Hand gesture-based game controller using OpenCV, MediaPipe, and keyboard emulation in Python.",
      link: {
        label: "github.com",
        href: "https://github.com/harshkasat/hand-gesture-game-controller",
      },
    },
    {
      title: "Lesson Plan",
      techStack: ["Side Project", "Python", "Fastapi", "Agent", "LLM", "Duck Duck Go"],
      description: "A FastAPI application that uses an LLM to generate customized, subject-specific lesson plans for students.",
      link: {
        label: "github.com",
        href: "https://github.com/harshkasat/LessonPlan",
      }
    },
  ],
} as const;
