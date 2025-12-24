const projects = [
  {
    title: "SmartDifferentialCalc",
    gradient: "from-sky-500 to-indigo-600",
    description:
      "Aplicación web para resolver ecuaciones diferenciales ordinarias con apoyo de IA. Integra Flask, DeepSeek y una interfaz en HTML/CSS/JS para generar soluciones paso a paso, con validaciones simbólicas que refuerzan la precisión del resultado.",
    tech: [
      ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
      ["Flask", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"],
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
      ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
    ],
    url: "https://github.com/Erickpe8/SmartDifferentialCalc",
  },
  {
    title: "Arquitecturas CRUD Autores/Libros",
    gradient: "from-rose-500 to-orange-500",
    description:
      "Proyecto en Laravel que implementa un mismo CRUD comparando siete importantes patrones arquitectónicos. Mantiene la misma lógica de negocio en todos los enfoques para evaluar organización, claridad y mantenibilidad del código.",
    tech: [
      ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"],
      ["Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"],
      ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
    ],
    url: "https://github.com/Erickpe8/arquitecturas-crud-autores-libros",
  },
  {
    title: "TaskFlow Manager",
    gradient: "from-emerald-500 to-teal-600",
    description:
      "Sistema full-stack tipo todo-list con tablero Kanban interactivo. Desarrollado en colaboración con un compañero, permite autoasignarme tareas y visualizar fácilmente lo pendiente, en progreso y completado, con enfoque en arquitectura limpia.",
    tech: [
      [".NET", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"],
      ["Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"],
      ["TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
    ],
    url: "https://github.com/Erickpe8/TaskFlow-Manager",
  },
  {
    title: "QR Studio",
    gradient: "from-fuchsia-500 to-pink-600",
    description:
      "Generador de QR con 9 tipos (URL, texto, WiFi, vCard, WhatsApp, email, SMS, ubicación y eventos), con personalización de colores y estilo del QR. Permite previsualizar cambios y descargar el resultado en PNG de forma rápida y sencilla.",
    tech: [
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"],
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
    ],
    url: "https://github.com/Erickpe8/QR-STUDIO",
  },
  {
    title: "Portafolio automatizado",
    gradient: "from-cyan-500 to-blue-600",
    description:
      "Portafolio web automatizado que reúne mis habilidades, proyectos y formas de contacto. Se despliega automáticamente y se actualiza al hacer push a main y también de forma programada (cada hora) para mantener métricas y estadísticas siempre al día.",
    tech: [
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"],
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
      ["GitHub Actions", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
    ],
    url: "https://github.com/Erickpe8/Erickpe8",
  },
];

class ProjectsSection extends HTMLElement {
  connectedCallback() {
    const groupA = projects.map((p, i) => this.projectCard(p, i)).join("");
    const groupB = projects.map((p, i) => this.projectCard(p, i, { ariaHidden: true })).join("");

    const durationSeconds = Math.max(22, projects.length * 7);

    this.innerHTML = `
      <section id="projects" class="py-4 px-4 fade-in">
        <div class="max-w-6xl mx-auto space-y-10">
          <div class="space-y-3 text-center">
            <h2 class="text-4xl font-bold gradient-text">Proyectos destacados</h2>
            <p class="text-sm text-slate-600 max-w-2xl mx-auto">
              Selección representativa de productos reales desarrollados con enfoque en resultados, experiencia de usuario y tecnologías modernas.
            </p>
          </div>

          <div class="carousel relative overflow-hidden px-2 sm:px-4" aria-label="Carrusel infinito de proyectos">
            <div
              class="carousel-track flex w-max items-stretch gap-6"
              style="--duration:${durationSeconds}s;"
            >
              <div class="carousel-group flex items-stretch gap-6 pr-6">
                ${groupA}
              </div>

              <div class="carousel-group flex items-stretch gap-6 pr-6" aria-hidden="true">
                ${groupB}
              </div>
            </div>
          </div>

          <div class="text-center">
            <a
              href="https://github.com/Erickpe8?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Ver todos los repositorios
            </a>
          </div>
        </div>

        <style>
          .clamp-6{
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .carousel-track{
            animation: marquee var(--duration) linear infinite;
            will-change: transform;
          }

          @keyframes marquee{
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .carousel:hover .carousel-track,
          .carousel:focus-within .carousel-track{
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce){
            .carousel-track{ animation: none; }
          }
        </style>
      </section>
    `;
  }

  projectCard(project, index, { ariaHidden = false } = {}) {
    return `
      <article
        class="
          card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
          flex-none
          w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]
          min-h-[380px] h-auto
        "
      >
        <div class="h-20 sm:h-24 bg-gradient-to-br ${project.gradient} flex items-center justify-center px-5">
          <span class="text-white font-semibold text-base sm:text-lg tracking-tight text-center leading-tight">
            ${project.title}
          </span>
        </div>

        <div class="flex flex-col flex-1 gap-4 p-5">
          <p class="text-gray-700 text-sm leading-relaxed clamp-6">
            ${project.description}
          </p>

          <div class="flex flex-wrap gap-2">
            ${project.tech.map(([name, icon]) => this.techBadge(name, icon)).join("")}
          </div>

          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            Ver proyecto en GitHub
            <span aria-hidden="true" class="text-sm">&rarr;</span>
          </a>
        </div>
      </article>
    `;
  }

  techBadge(name, iconUrl) {
    return `
    <span class="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-slate-100 text-slate-800 text-xs font-medium whitespace-nowrap">
      <img
        src="${iconUrl}"
        alt="${name}"
        class="w-4 h-4 object-contain shrink-0"
        width="16"
        height="16"
        loading="lazy"
        decoding="async"
      />
      <span class="leading-none">${name}</span>
    </span>
  `;
  }
}
customElements.define("projects-section", ProjectsSection);

export default ProjectsSection;
