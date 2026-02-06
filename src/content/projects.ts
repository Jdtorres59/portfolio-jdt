import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ez",
    titleKey: "projects.items.ez.title",
    descriptionKey: "projects.items.ez.description",
    category: "featured",
    status: "in-development",
    mediaPlacement: "below",
    tech: [
      "SwiftUI",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
      "Figma",
      "API Management",
    ],
    media: {
      video: {
        src: "/media/projects/videos/EZVideo.mp4",
        altKey: "projects.items.ez.videoAlt",
        aspect: "9/16",
      },
    },
    links: {},
  },
  {
    id: "moviescope",
    titleKey: "projects.items.moviescope.title",
    descriptionKey: "projects.items.moviescope.description",
    category: "featured",
    status: "deployed",
    mediaPlacement: "below",
    tech: ["Python", "Machine Learning", "scikit-learn", "TF-IDF", "cosine similarity"],
    media: {
      poster: {
        src: "/media/projects/posters/CineScope.png",
        altKey: "projects.items.moviescope.posterAlt",
      },
      video: {
        src: "/media/projects/videos/CineScopeVideo.mp4",
        posterSrc: "/media/projects/posters/CineScope.png",
        altKey: "projects.items.moviescope.videoAlt",
      },
    },
    links: {
      demo: "https://cinescopeml.onrender.com/",
    },
  },
  {
    id: "chatgpt-clone",
    titleKey: "projects.items.chatgptClone.title",
    descriptionKey: "projects.items.chatgptClone.description",
    category: "ai",
    status: "deployed",
    tech: ["LLM", "API Management", "Chat UI", "Web App"],
    media: {
      poster: {
        src: "/media/projects/posters/ChatGPTClone.png",
        altKey: "projects.items.chatgptClone.posterAlt",
      },
      video: {
        src: "/media/projects/videos/ChatGPTCloneVideo.mp4",
        posterSrc: "/media/projects/posters/ChatGPTClone.png",
        altKey: "projects.items.chatgptClone.videoAlt",
      },
    },
    links: {
      demo: "https://chatgpt-clone-rp4j.onrender.com",
    },
  },
  {
    id: "codebugfixer",
    titleKey: "projects.items.codebugfixer.title",
    descriptionKey: "projects.items.codebugfixer.description",
    category: "ai",
    status: "deployed",
    tech: ["LLM", "API Management", "Code Review", "Web App"],
    media: {
      poster: {
        src: "/media/projects/posters/CodeBugFixer.png",
        altKey: "projects.items.codebugfixer.posterAlt",
      },
      video: {
        src: "/media/projects/videos/CodeBugFixerVideo.mp4",
        posterSrc: "/media/projects/posters/CodeBugFixer.png",
        altKey: "projects.items.codebugfixer.videoAlt",
      },
    },
    links: {
      demo: "http://codebugfixer-aura-jdt-001.azurewebsites.net",
    },
  },
  {
    id: "astronova",
    titleKey: "projects.items.astronova.title",
    descriptionKey: "projects.items.astronova.description",
    category: "engineering",
    status: "in-development",
    tech: [
      "Satellite Imagery",
      "Anomaly Detection",
      "Machine Learning",
      "Geospatial Analytics",
      "Early Warning",
    ],
    media: {
      poster: {
        src: "/media/projects/posters/AstroNova.png",
        altKey: "projects.items.astronova.posterAlt",
      },
    },
    links: {
      demo: "https://astronova-plum.vercel.app",
    },
  },
  {
    id: "quiz-generator",
    titleKey: "projects.items.quizGenerator.title",
    descriptionKey: "projects.items.quizGenerator.description",
    category: "ai",
    status: "deployed",
    tech: ["LLM", "API Management", "Content Generation", "Web App"],
    media: {
      poster: {
        src: "/media/projects/posters/QuizApp.png",
        altKey: "projects.items.quizGenerator.posterAlt",
      },
      video: {
        src: "/media/projects/videos/QuizGeneratorVideo.mp4",
        posterSrc: "/media/projects/posters/QuizApp.png",
        altKey: "projects.items.quizGenerator.videoAlt",
      },
    },
    links: {
      demo: "https://quizapp-v159.onrender.com",
    },
  },
  {
    id: "speak2send",
    titleKey: "projects.items.speak2send.title",
    descriptionKey: "projects.items.speak2send.description",
    category: "ai",
    status: "deployed",
    tech: [
      "Speech-to-Text",
      "AI Rewriting",
      "UX",
      "Production Demo",
      "Web App",
    ],
    media: {
      poster: {
        src: "/media/projects/posters/Speak2Send.png",
        altKey: "projects.items.speak2send.posterAlt",
      },
      video: {
        src: "/media/projects/videos/Speak2SendVideo.mp4",
        posterSrc: "/media/projects/posters/Speak2Send.png",
        altKey: "projects.items.speak2send.videoAlt",
      },
    },
    links: {
      demo: "https://speak2send.vercel.app",
    },
  },
  {
    id: "powerpoint-generator",
    titleKey: "projects.items.powerpointGenerator.title",
    descriptionKey: "projects.items.powerpointGenerator.description",
    category: "ai",
    status: "deployed",
    tech: ["LLM", "API Management", "Automation", "Web App"],
    media: {
      poster: {
        src: "/media/projects/posters/PowerpointGenerator.png",
        altKey: "projects.items.powerpointGenerator.posterAlt",
      },
      video: {
        src: "/media/projects/videos/PowerPointGeneratorVideo.mp4",
        posterSrc: "/media/projects/posters/PowerpointGenerator.png",
        altKey: "projects.items.powerpointGenerator.videoAlt",
      },
    },
    links: {
      demo: "https://powerpoint-generator-6cks.onrender.com/",
    },
  },
  {
    id: "sol-siembra",
    titleKey: "projects.items.solSiembra.title",
    descriptionKey: "projects.items.solSiembra.description",
    category: "engineering",
    status: "academic",
    tech: ["ESP32", "IoT", "Sensors", "Web Dashboard"],
    media: {
      poster: {
        src: "/media/projects/posters/Sol&Siembra.png.jpeg",
        altKey: "projects.items.solSiembra.posterAlt",
      },
      video: {
        src: "/media/projects/videos/Sol&SiembraVideo.mp4",
        posterSrc: "/media/projects/posters/Sol&Siembra.png.jpeg",
        altKey: "projects.items.solSiembra.videoAlt",
        muted: true,
        lockMuted: true,
      },
    },
    links: {},
  },
];
