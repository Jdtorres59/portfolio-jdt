import type { Locale } from "./types";

export const i18n: Record<
  Locale,
  {
    nav: {
      home: string;
      about: string;
      projects: string;
      certifications: string;
      contact: string;
    };
    profile: {
      role: string;
      tagline: string;
      summary: string;
      location: string;
      photoAlt: string;
    };
    hero: {
      headline: string;
      typewriterPhrases: string[];
      ctaPrimary: string;
      ctaSecondary: string;
      scrollCue: string;
    };
    about: {
      title: string;
      lead: string;
      body: string;
    };
    education: {
      title: string;
      subtitle: string;
      focusAreasLabel: string;
      scholarship: string;
      items: {
        uniandes: {
          degree: string;
          location: string;
        };
      };
    };
    projects: {
      title: string;
      subtitle: string;
      note: string;
      categories: {
        featured: string;
        ai: string;
        engineering: string;
      };
      status: {
        deployed: string;
        inDevelopment: string;
        academic: string;
      };
      links: {
        liveDemo: string;
        repo: string;
        caseStudy: string;
        comingSoon: string;
      };
      items: {
        ez: {
          title: string;
          description: string;
          videoAlt: string;
        };
        moviescope: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        chatgptClone: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        codebugfixer: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        astronova: {
          title: string;
          description: string;
          posterAlt: string;
        };
        quizGenerator: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        speak2send: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        powerpointGenerator: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
        solSiembra: {
          title: string;
          description: string;
          posterAlt: string;
          videoAlt: string;
        };
      };
    };
    certifications: {
      title: string;
      subtitle: string;
      empty: string;
      credentialLabel: string;
      credentialIdLabel: string;
      filters: {
        all: string;
        ai: string;
        software: string;
        systems: string;
      };
      items: {
        supervisedMl: {
          title: string;
          issuer: string;
        };
        aiForEveryone: {
          title: string;
          issuer: string;
        };
        mlWithPython: {
          title: string;
          issuer: string;
        };
      };
    };
    contact: {
      title: string;
      subtitle: string;
      cta: string;
      emailLabel: string;
      linkedinLabel: string;
      githubLabel: string;
    };
    social: {
      linkedin: string;
      github: string;
      email: string;
    };
    languages: {
      en: string;
      es: string;
    };
    accessibility: {
      languageToggle: string;
      scrollToTop: string;
    };
  }
> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    profile: {
      role: "CS & Electronics Engineering · Universidad de los Andes",
      tagline:
        "I’m interested in building technology with purpose to help create a better society.",
      summary:
        "I’m an engineering student who loves learning, teaching, and turning ideas into products that can genuinely improve everyday life.",
      location: "Bogotá, Colombia",
      photoAlt: "Portrait of Juan David Torres Casas",
    },
    hero: {
      headline: "Juan David Torres Casas",
      typewriterPhrases: [
        "I build technology that matters",
        "I build for a better world",
        "I use tech to solve real problems",
      ],
      ctaPrimary: "View projects",
      ctaSecondary: "Contact",
      scrollCue: "Scroll to explore",
    },
    about: {
      title: "About me",
      lead: "I’m driven by curiosity, empathy, and the desire to help.",
      body:
        "I’m a 4th semester Systems and Electronics Engineering student at Universidad de los Andes. I’m deeply curious and love learning new things—especially about artificial intelligence, software, and personal finance. More than writing code, I care about understanding people and building solutions that actually make their lives better. I enjoy teaching, explaining complex ideas in simple ways, and working on projects with real social impact.",
    },
    education: {
      title: "Education",
      subtitle: "4th semester student.",
      focusAreasLabel: "Focus Areas",
      scholarship: "80% merit-based scholarship",
      items: {
        uniandes: {
          degree: "Systems Engineering & Electronics Engineering",
          location: "Bogotá, Colombia (ongoing)",
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle:
        "Projects built with purpose. Many explore AI to help people learn, support others, and solve real problems.",
      note:
        "Note: Some demos are hosted on Render. If a link feels slow at first, please give the server a moment to wake up.",
      categories: {
        featured: "Featured Projects",
        ai: "AI Tools",
        engineering: "Engineering / Hardware",
      },
      status: {
        deployed: "Deployed",
        inDevelopment: "In Development",
        academic: "Academic project",
      },
      links: {
        liveDemo: "Live Demo",
        repo: "GitHub Repo",
        caseStudy: "Case Study",
        comingSoon: "Coming Soon",
      },
      items: {
        ez: {
          title: "EZ",
          description:
            "A mobile app inspired by Duolingo that helps people build healthy financial habits and understand personal finance in a simple, motivating way.",
          videoAlt: "EZ mobile demo video",
        },
        moviescope: {
          title: "MovieScope",
          description:
            "A movie recommendation system built with machine learning and a Netflix-style interface to make discovery feel simple and personal.",
          posterAlt: "MovieScope project poster",
          videoAlt: "MovieScope demo video",
        },
        chatgptClone: {
          title: "ChatGPT Clone",
          description:
            "A conversational AI interface built to experiment, learn, and explore how people interact with language models.",
          posterAlt: "ChatGPT Clone project poster",
          videoAlt: "ChatGPT Clone demo video",
        },
        codebugfixer: {
          title: "CodeBugFixer",
          description:
            "A tool where users paste code and an error to receive a fix with a clear explanation, focused on learning—not just answers.",
          posterAlt: "CodeBugFixer project poster",
          videoAlt: "CodeBugFixer demo video",
        },
        astronova: {
          title: "AstroNova",
          description:
            "A satellite anomaly detection system built at the ActInSpace hackathon to deliver early alerts for illegal mining, deforestation, fires, and floods.",
          posterAlt: "AstroNova project poster",
        },
        quizGenerator: {
          title: "Quiz Generator",
          description:
            "An app that transforms any topic into a quiz, designed to help people study, practice, and reinforce knowledge.",
          posterAlt: "Quiz Generator project poster",
          videoAlt: "Quiz Generator demo video",
        },
        speak2send: {
          title: "Speak2Send",
          description:
            "Turn spoken Spanish into clear, professional English messages. Speak2Send records your voice, transcribes it, and rewrites it into a polished message ready to send.",
          posterAlt: "Speak2Send project poster",
          videoAlt: "Speak2Send demo video",
        },
        powerpointGenerator: {
          title: "PowerPoint Generator",
          description:
            "A tool that turns structured text into clear presentations, exploring how AI can support communication and education.",
          posterAlt: "PowerPoint Generator project poster",
          videoAlt: "PowerPoint Generator demo video",
        },
        solSiembra: {
          title: "Sol&Siembra",
          description:
            "An academic project combining hardware and software to automate irrigation and visualize sensor data in real time.",
          posterAlt: "Sol&Siembra project poster",
          videoAlt: "Sol&Siembra demo video",
        },
      },
    },
    certifications: {
      title: "Certifications",
      subtitle: "I enjoy learning and staying up to date with emerging technologies",
      empty: "No certifications listed yet.",
      credentialLabel: "View credential",
      credentialIdLabel: "Credential ID",
      filters: {
        all: "All",
        ai: "AI",
        software: "Software",
        systems: "Systems",
      },
      items: {
        supervisedMl: {
          title: "Supervised Machine Learning: Regression and Classification",
          issuer: "DeepLearning.AI",
        },
        aiForEveryone: {
          title: "AI For Everyone",
          issuer: "DeepLearning.AI",
        },
        mlWithPython: {
          title: "Machine Learning with Python",
          issuer: "IBM",
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s build something meaningful together",
      cta: "I’m open to collaborations, research, and projects focused on positive impact.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    languages: {
      en: "EN",
      es: "ES",
    },
    accessibility: {
      languageToggle: "Toggle language",
      scrollToTop: "Scroll to top",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    profile: {
      role: "Ing. de Sistemas & Electrónica · Universidad de los Andes",
      tagline:
        "Me interesa crear tecnología con propósito para ayudar a construir una mejor sociedad.",
      summary:
        "Soy estudiante de ingeniería, curioso por naturaleza, con una gran vocación por enseñar y convertir ideas en productos que aporten a la vida diaria.",
      location: "Bogotá, Colombia",
      photoAlt: "Retrato de Juan David Torres Casas",
    },
    hero: {
      headline: "Juan David Torres Casas",
      typewriterPhrases: [
        "Construyo tecnología que importa",
        "Construyo para un mundo mejor",
        "Uso la tecnología para resolver problemas reales",
      ],
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contacto",
      scrollCue: "Desliza para explorar",
    },
    about: {
      title: "Sobre mí",
      lead: "Me mueve la curiosidad, la empatía y las ganas de ayudar.",
      body:
        "Soy estudiante de cuarto semestre de Ingeniería de Sistemas e Ingeniería Electrónica en la Universidad de los Andes. Tengo una gran curiosidad por aprender y una pasión especial por la inteligencia artificial, el software y las finanzas personales. Más que programar, me importa entender a las personas y construir soluciones que realmente mejoren su vida. Disfruto enseñar, explicar ideas complejas de forma sencilla y trabajar en proyectos con impacto social real.",
    },
    education: {
      title: "Educación",
      subtitle: "Estudiante de cuarto semestre.",
      focusAreasLabel: "Áreas de enfoque",
      scholarship: "Beca por mérito del 80%",
      items: {
        uniandes: {
          degree: "Ingeniería de Sistemas e Ingeniería Electrónica",
          location: "Bogotá, Colombia (en curso)",
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Proyectos construidos con propósito. Muchos exploran la IA para ayudar a aprender, apoyar a otros y resolver problemas reales.",
      note:
        "Nota: Algunas demos están en Render. Si un enlace tarda al inicio, espera un momento mientras el servidor se activa.",
      categories: {
        featured: "Proyectos destacados",
        ai: "Herramientas de IA",
        engineering: "Ingeniería / Hardware",
      },
      status: {
        deployed: "Desplegado",
        inDevelopment: "En desarrollo",
        academic: "Proyecto académico",
      },
      links: {
        liveDemo: "Demo en vivo",
        repo: "Repositorio GitHub",
        caseStudy: "Caso de estudio",
        comingSoon: "Próximamente",
      },
      items: {
        ez: {
          title: "EZ",
          description:
            "App móvil inspirada en Duolingo que ayuda a construir hábitos financieros saludables y a entender las finanzas personales de forma simple y motivadora.",
          videoAlt: "Video demo móvil de EZ",
        },
        moviescope: {
          title: "MovieScope",
          description:
            "Sistema de recomendación de películas con machine learning y una interfaz tipo Netflix para descubrir contenido de forma simple y personal.",
          posterAlt: "Póster del proyecto MovieScope",
          videoAlt: "Video demo de MovieScope",
        },
        chatgptClone: {
          title: "ChatGPT Clone",
          description:
            "Interfaz conversacional de IA creada para experimentar, aprender y explorar cómo interactuamos con modelos de lenguaje.",
          posterAlt: "Póster del proyecto ChatGPT Clone",
          videoAlt: "Video demo de ChatGPT Clone",
        },
        codebugfixer: {
          title: "CodeBugFixer",
          description:
            "Herramienta donde las personas pegan su código y un error para recibir una corrección con explicación clara, enfocada en aprender.",
          posterAlt: "Póster del proyecto CodeBugFixer",
          videoAlt: "Video demo de CodeBugFixer",
        },
        astronova: {
          title: "AstroNova",
          description:
            "Sistema de detección de anomalías satelitales creado en el hackathon ActInSpace para generar alertas tempranas sobre minería ilegal, deforestación, incendios e inundaciones.",
          posterAlt: "Póster del proyecto AstroNova",
        },
        quizGenerator: {
          title: "Quiz Generator",
          description:
            "App que transforma cualquier tema en un quiz para estudiar, practicar y reforzar conocimiento.",
          posterAlt: "Póster del proyecto Quiz Generator",
          videoAlt: "Video demo de Quiz Generator",
        },
        speak2send: {
          title: "Speak2Send",
          description:
            "Convierte tu voz en español en mensajes claros y profesionales en inglés. Speak2Send graba el audio, lo transcribe y lo reescribe para que puedas enviar un mensaje claro y bien estructurado en segundos.",
          posterAlt: "Póster del proyecto Speak2Send",
          videoAlt: "Video demo de Speak2Send",
        },
        powerpointGenerator: {
          title: "PowerPoint Generator",
          description:
            "Herramienta que convierte texto estructurado en presentaciones claras, explorando cómo la IA puede apoyar la comunicación y la educación.",
          posterAlt: "Póster del proyecto PowerPoint Generator",
          videoAlt: "Video demo de PowerPoint Generator",
        },
        solSiembra: {
          title: "Sol&Siembra",
          description:
            "Proyecto académico que combina hardware y software para automatizar el riego y visualizar datos de sensores en tiempo real.",
          posterAlt: "Póster del proyecto Sol&Siembra",
          videoAlt: "Video demo de Sol&Siembra",
        },
      },
    },
    certifications: {
      title: "Certificaciones",
      subtitle: "Me gusta aprender y mantenerme al día con las tecnologías emergentes",
      empty: "Aún no hay certificaciones listadas.",
      credentialLabel: "Ver credencial",
      credentialIdLabel: "ID de credencial",
      filters: {
        all: "Todas",
        ai: "IA",
        software: "Software",
        systems: "Sistemas",
      },
      items: {
        supervisedMl: {
          title: "Supervised Machine Learning: Regression and Classification",
          issuer: "DeepLearning.AI",
        },
        aiForEveryone: {
          title: "AI For Everyone",
          issuer: "DeepLearning.AI",
        },
        mlWithPython: {
          title: "Machine Learning with Python",
          issuer: "IBM",
        },
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Construyamos algo que valga la pena",
      cta: "Estoy abierto a colaboraciones, investigación y proyectos con impacto positivo.",
      emailLabel: "Correo",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Correo",
    },
    languages: {
      en: "EN",
      es: "ES",
    },
    accessibility: {
      languageToggle: "Cambiar idioma",
      scrollToTop: "Ir al inicio",
    },
  },
};

export const defaultLocale: Locale = "en";
