const messages = {
  es: {
    meta: {
      title: "Erick Pérez | Desarrollador Fullstack",
      description:
        "Portafolio de Erick Pérez, desarrollador fullstack con enfoque backend. Proyectos, habilidades, experiencia y contacto.",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "CV",
      downloadCv: "Descargar CV",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      langSelector: "Seleccionar idioma",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack en formación",
      bio: "Me apasiona la gestión de proyectos de software, la toma de requerimientos, la documentación técnica y el trabajo con equipos ágiles.",
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy desarrollador <strong>Full Stack</strong> con enfoque en backend, apasionado por la construcción de sistemas sólidos, escalables y alineados con buenas prácticas de ingeniería de software. Actualmente curso <strong>octavo semestre de Ingeniería de Software en la FESC</strong>, soy <strong>tecnólogo en Desarrollo de Software</strong> y cuento con formación complementaria en <strong>Arquitecturas de Software</strong>, fortaleciendo constantemente mis conocimientos en desarrollo, análisis y diseño de soluciones tecnológicas.",
      p2: "Llevo <strong>{{experience}}</strong> de experiencia en el <strong>Laboratorio de Software de la FESC</strong>, donde me desempeñé como practicante y actualmente como <strong>Técnico Asistente en Desarrollo de Software</strong>. Disfruto participar en todas las etapas del ciclo de vida del software, desde el <strong>levantamiento de requerimientos</strong> y el <strong>análisis funcional</strong> hasta la implementación, <strong>documentación</strong> y trabajo en <strong>equipos ágiles</strong>, siempre enfocado en crear soluciones eficientes, mantenibles y de valor para las organizaciones.",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas que uso para crear soluciones claras y mantenibles.",
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de Datos",
      productivity: "Productividad y Suites",
      devTools: "Herramientas de Desarrollo",
      softSkills: "Habilidades Blandas",
      softSkillsTag: "Soft Skills",
      items: {
        adaptability: "Adaptabilidad",
        communication: "Comunicación",
        timeManagement: "Gestión del tiempo",
        aiIntegration: "Integración de modelos IA",
        leadership: "Liderazgo",
        teamwork: "Trabajo en equipo",
        efficientAi: "Uso eficiente de la IA",
      },
    },
    learning: {
      title: "Lo que estoy aprendiendo",
      items: {
        laravel: {
          title: "Laravel 12.x y 13.x",
          desc: "Profundizando en nuevas versiones del framework, arquitectura limpia, servicios, colas y optimización.",
        },
        javascript: {
          title: "JavaScript",
          desc: "Manipulación del DOM, asincronía, módulos, patrones de diseño y estructuras complejas.",
        },
        docker: {
          title: "Docker",
          desc: "Creación de entornos replicables, imágenes eficientes, contenedores y flujos DevOps simples.",
        },
        architecture: {
          title: "Arquitectura de Software",
          desc: "Patrones, principios SOLID, diseño modular, toma de decisiones técnicas y escalabilidad.",
        },
        figma: {
          title: "Figma",
          desc: "Maquetación, prototipado y diseño de interfaces para planear mejor antes de desarrollar.",
        },
        git: {
          title: "Control de versiones (Git/GitHub)",
          desc: "Ramas, commits claros, pull requests y flujo colaborativo para proyectos reales.",
        },
      },
    },
    projects: {
      title: "Proyectos destacados",
      subtitle:
        "Selección representativa de productos reales desarrollados con enfoque en resultados, experiencia de usuario y tecnologías modernas.",
      carousel: "Carrusel de proyectos",
      viewOnGithub: "Ver proyecto en GitHub",
      viewAll: "Ver todos los repositorios",
      previewAlt: "Vista previa de",
      items: {
        entreSabores: {
          title: "Entre-Sabores",
          desc: "Red social gastronómica orientada al intercambio cultural: publicaciones con etiquetas, muro con exploración y modo siguiendo, likes, comentarios en hilos, perfiles públicos, notificaciones y análisis de maridaje asistido por IA.",
        },
        smartCalc: {
          title: "SmartDifferentialCalc",
          desc: "Aplicación web para resolver ecuaciones diferenciales ordinarias con apoyo de IA. Integra Flask, DeepSeek y una interfaz en HTML/CSS/JS para generar soluciones paso a paso, con validaciones simbólicas que refuerzan la precisión del resultado.",
        },
        crudArch: {
          title: "Arquitecturas CRUD Autores/Libros",
          desc: "Proyecto en Laravel que implementa un mismo CRUD comparando siete patrones arquitectónicos. Mantiene la misma lógica de negocio en todos los enfoques para evaluar organización, claridad y mantenibilidad del código.",
        },
        taskflow: {
          title: "TaskFlow Manager",
          desc: "Sistema full-stack tipo todo-list con tablero Kanban interactivo. Desarrollado en colaboración, permite autoasignar tareas y visualizar pendiente, en progreso y completado, con enfoque en arquitectura limpia.",
        },
        qrStudio: {
          title: "QR Studio",
          desc: "Generador de QR con 9 tipos (URL, texto, WiFi, vCard, WhatsApp, email, SMS, ubicación y eventos), con personalización de colores y estilo. Permite previsualizar cambios y descargar el resultado en PNG.",
        },
        portfolio: {
          title: "Portafolio automatizado",
          desc: "Portafolio web automatizado con habilidades, proyectos y contacto. Se despliega con GitHub Pages y se actualiza al hacer push y de forma programada para mantener métricas al día.",
        },
      },
    },
    stats: {
      title: "Estadísticas GitHub",
      loading: "Actualizando métricas...",
      error: "No se pudo cargar. Reintentando...",
      alt: "Métricas de GitHub actualizadas cada 30 minutos",
    },
    contact: {
      title: "Conéctate conmigo",
      subtitle: "¿Tienes un proyecto, una idea o colaboración en mente? Podemos hablar.",
      downloadCv: "Descargar currículum (PDF)",
      email: "Correo",
      mailSubject: "Contacto desde tu portafolio",
      mailBody: "Hola Erick, vi tu portafolio y me gustaría hablar contigo.\n\nNombre:\nMotivo:\n",
    },
    footer: {
      text: "© {{year}} Erick Pérez — Construyendo software con propósito.",
    },
    time: {
      year: "año",
      years: "años",
      month: "mes",
      months: "meses",
      and: "y",
      lessThanMonth: "menos de 1 mes",
    },
  },
  en: {
    meta: {
      title: "Erick Pérez | Fullstack Developer",
      description:
        "Portfolio of Erick Pérez, fullstack developer with a backend focus. Projects, skills, experience, and contact.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cv: "CV",
      downloadCv: "Download CV",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langSelector: "Select language",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer in training",
      bio: "I'm passionate about software project management, requirements gathering, technical documentation, and working with agile teams.",
      viewProjects: "View projects",
      downloadCv: "Download CV",
    },
    about: {
      title: "About me",
      p1: "I'm a <strong>Full Stack</strong> developer focused on the backend, passionate about building solid, scalable systems aligned with software engineering best practices. I'm currently in my <strong>eighth semester of Software Engineering at FESC</strong>, hold a <strong>Associate Degree in Software Development</strong>, and have complementary training in <strong>Software Architectures</strong>, constantly strengthening my skills in development, analysis, and solution design.",
      p2: "I have <strong>{{experience}}</strong> of experience at the <strong>FESC Software Laboratory</strong>, where I worked as an intern and now serve as a <strong>Software Development Technical Assistant</strong>. I enjoy every stage of the software lifecycle, from <strong>requirements gathering</strong> and <strong>functional analysis</strong> to implementation, <strong>documentation</strong>, and <strong>agile teamwork</strong>, always focused on efficient, maintainable, high-value solutions.",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I use to build clear, maintainable solutions.",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      productivity: "Productivity & Suites",
      devTools: "Development Tools",
      softSkills: "Soft Skills",
      softSkillsTag: "Soft Skills",
      items: {
        adaptability: "Adaptability",
        communication: "Communication",
        timeManagement: "Time management",
        aiIntegration: "AI model integration",
        leadership: "Leadership",
        teamwork: "Teamwork",
        efficientAi: "Efficient use of AI",
      },
    },
    learning: {
      title: "Currently learning",
      items: {
        laravel: {
          title: "Laravel 12.x & 13.x",
          desc: "Deepening knowledge of new framework versions, clean architecture, services, queues, and optimization.",
        },
        javascript: {
          title: "JavaScript",
          desc: "DOM manipulation, async patterns, modules, design patterns, and complex data structures.",
        },
        docker: {
          title: "Docker",
          desc: "Reproducible environments, efficient images, containers, and simple DevOps workflows.",
        },
        architecture: {
          title: "Software Architecture",
          desc: "Patterns, SOLID principles, modular design, technical decisions, and scalability.",
        },
        figma: {
          title: "Figma",
          desc: "Layout, prototyping, and interface design to plan better before coding.",
        },
        git: {
          title: "Version control (Git/GitHub)",
          desc: "Branches, clear commits, pull requests, and collaborative workflows on real projects.",
        },
      },
    },
    projects: {
      title: "Featured projects",
      subtitle:
        "A representative selection of real products built with a focus on outcomes, user experience, and modern technologies.",
      carousel: "Projects carousel",
      viewOnGithub: "View project on GitHub",
      viewAll: "View all repositories",
      previewAlt: "Preview of",
      items: {
        entreSabores: {
          title: "Entre-Sabores",
          desc: "Culinary social network for cultural exchange: tagged posts, explore and following feeds, likes, threaded comments, public profiles, notifications, and AI-assisted pairing analysis.",
        },
        smartCalc: {
          title: "SmartDifferentialCalc",
          desc: "Web app to solve ordinary differential equations with AI support. Integrates Flask, DeepSeek, and an HTML/CSS/JS UI for step-by-step solutions with symbolic validation.",
        },
        crudArch: {
          title: "CRUD Architectures Authors/Books",
          desc: "Laravel project implementing the same CRUD across seven architectural patterns, keeping the same business logic to compare organization, clarity, and maintainability.",
        },
        taskflow: {
          title: "TaskFlow Manager",
          desc: "Full-stack todo system with an interactive Kanban board. Built collaboratively; supports self-assigned tasks and clear pending, in-progress, and done views with clean architecture.",
        },
        qrStudio: {
          title: "QR Studio",
          desc: "QR generator with 9 types (URL, text, WiFi, vCard, WhatsApp, email, SMS, location, events), color and style customization, live preview, and PNG export.",
        },
        portfolio: {
          title: "Automated portfolio",
          desc: "Automated web portfolio with skills, projects, and contact. Deployed on GitHub Pages and updated on push and on a schedule to keep metrics current.",
        },
      },
    },
    stats: {
      title: "GitHub stats",
      loading: "Updating metrics...",
      error: "Could not load. Retrying...",
      alt: "GitHub metrics updated every 30 minutes",
    },
    contact: {
      title: "Get in touch",
      subtitle: "Have a project, idea, or collaboration in mind? Let's talk.",
      downloadCv: "Download resume (PDF)",
      email: "Email",
      mailSubject: "Contact from your portfolio",
      mailBody: "Hi Erick, I saw your portfolio and would like to talk.\n\nName:\nReason:\n",
    },
    footer: {
      text: "© {{year}} Erick Pérez — Building software with purpose.",
    },
    time: {
      year: "year",
      years: "years",
      month: "month",
      months: "months",
      and: "and",
      lessThanMonth: "less than 1 month",
    },
  },
};

let currentLocale = "es";
const listeners = new Set();
let initialized = false;
const STORAGE_KEY = "portfolio-locale";

function resolveMessage(locale, key) {
  const parts = key.split(".");
  let value = messages[locale];
  for (const part of parts) {
    value = value?.[part];
  }
  return value;
}

export function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && messages[saved]) return saved;

  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || "es"];
  for (const lang of langs) {
    const code = String(lang).toLowerCase().split("-")[0];
    if (messages[code]) return code;
  }
  return "es";
}

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  if (!messages[locale] || locale === currentLocale) return;
  currentLocale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  applyDocumentLocale();
  listeners.forEach((callback) => {
    try {
      callback(currentLocale);
    } catch (error) {
      console.error("Error al cambiar idioma:", error);
    }
  });
}

export function t(key, vars = {}) {
  let value = resolveMessage(currentLocale, key) ?? resolveMessage("es", key);
  if (typeof value !== "string") return key;
  return value.replace(/\{\{(\w+)\}\}/g, (_, name) => String(vars[name] ?? ""));
}

export function onLocaleChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function applyDocumentLocale() {
  document.documentElement.lang = currentLocale;
  document.title = t("meta.title");

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.description"));
}

export function initI18n() {
  if (initialized) return;
  initialized = true;
  currentLocale = detectLocale();
  applyDocumentLocale();
}

export function formatExperience(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${t(years === 1 ? "time.year" : "time.years")}`);
  }
  if (months > 0) {
    parts.push(`${months} ${t(months === 1 ? "time.month" : "time.months")}`);
  }

  return parts.length ? parts.join(` ${t("time.and")} `) : t("time.lessThanMonth");
}

initI18n();
