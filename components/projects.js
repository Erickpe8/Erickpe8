const projects = [
  {
    title: "SmartDifferentialCalc",
    gradient: "from-sky-500 to-indigo-600",
    description:
      "Aplicación web para resolver ecuaciones diferenciales ordinarias con IA. Combina Flask, DeepSeek, HTML/CSS/JS y validaciones simbólicas para entregar soluciones paso a paso.",
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
      "Comparativa de arquitecturas en Laravel para un CRUD de autores y libros, enfocada en mantener la misma lógica de negocio mientras se prueba la mantenibilidad del código.",
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
      "Sistema full-stack con tablero Kanban interactivo para gestionar tareas y flujos de trabajo, enfocado en arquitectura limpia, escalabilidad y experiencia visual para equipos.",
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
      "Generador de 9 tipos de QR, con edición y personalización rápida para distintos formatos de contenido y uso comercial.",
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
      "Portafolio con despliegue automático y actualización de métricas por hora o por push a main, manteniéndolo siempre al día con estadísticas recientes.",
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

    // Duración: entre más cards, más tiempo (ajústalo si lo quieres más rápido/lento)
    const durationSeconds = Math.max(18, projects.length * 6);

    this.innerHTML = `
      <section id="projects" class="py-24 px-4 fade-in">
        <div class="max-w-6xl mx-auto space-y-10">
          <div class="space-y-3 text-center">
            <h2 class="text-4xl font-bold gradient-text">Proyectos destacados</h2>
            <p class="text-sm text-slate-600 max-w-2xl mx-auto">
              Selección representativa de productos reales desarrollados con enfoque en resultados, experiencia de usuario y tecnologías modernas.
            </p>
          </div>

          <!-- Carrusel infinito tipo A B C A B C -->
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
          /* Clamp para que las cards queden compactas */
          .clamp-4{
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Animación infinita: mueve el track la mitad (porque hay 2 grupos iguales) */
          .carousel-track{
            animation: marquee var(--duration) linear infinite;
            will-change: transform;
          }

          @keyframes marquee{
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Pausar al hover o al focus dentro (links/botones) */
          .carousel:hover .carousel-track,
          .carousel:focus-within .carousel-track{
            animation-play-state: paused;
          }

          /* Si el usuario prefiere menos movimiento, no animamos */
          @media (prefers-reduced-motion: reduce){
            .carousel-track{ animation: none; }
          }
        </style>
      </section>
    `;
  }

  projectCard(project, index, { ariaHidden = false } = {}) {
    // Nota: las duplicadas quedan aria-hidden en el contenedor, no hace falta aquí.
    return `
      <article
        class="
          card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
          flex-none
          w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px]
        "
      >
        <div class="h-20 sm:h-24 bg-gradient-to-br ${project.gradient} flex items-center justify-center px-4">
          <span class="text-white font-semibold text-base sm:text-lg tracking-tight text-center leading-tight">
            ${project.title}
          </span>
        </div>

        <div class="flex flex-col flex-1 gap-3 p-3 sm:p-4 min-h-[220px]">
          <p class="text-gray-700 text-sm leading-relaxed min-h-[84px] clamp-4">
            ${project.description}
          </p>

          <div class="flex flex-wrap gap-1.5 text-[10px] min-h-[32px]">
            ${project.tech.map(([name, icon]) => this.techBadge(name, icon)).join("")}
          </div>

          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
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
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 text-[10px] font-medium">
        <img src="${iconUrl}" alt="${name}" class="w-4 h-4 object-contain" width="16" height="16" loading="lazy" decoding="async"/>
        <span>${name}</span>
      </span>
    `;
  }
}

customElements.define("projects-section", ProjectsSection);

customElements.define("projects-section", ProjectsSection);

export default ProjectsSection; 
