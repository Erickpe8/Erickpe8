import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

const projects = [
  {
    i18nKey: "entreSabores",
    gradient: "from-amber-500 to-red-500",
    image: "https://opengraph.githubassets.com/1/Erickpe8/Entre-Sabores",
    fallbackImage: "assets/projects/project-entre-sabores.png",
    tech: [
      ["Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"],
      ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"],
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
    ],
    url: "https://github.com/Erickpe8/Entre-Sabores",
  },
  {
    i18nKey: "smartCalc",
    gradient: "from-sky-500 to-indigo-600",
    image: "https://opengraph.githubassets.com/1/Erickpe8/SmartDifferentialCalc",
    fallbackImage: "assets/projects/project-smart-differential-calc.png",
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
    i18nKey: "crudArch",
    gradient: "from-rose-500 to-orange-500",
    image: "https://opengraph.githubassets.com/1/Erickpe8/arquitecturas-crud-autores-libros",
    fallbackImage: "assets/projects/project-arquitecturas-crud.png",
    tech: [
      ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"],
      ["Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"],
      ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
    ],
    url: "https://github.com/Erickpe8/arquitecturas-crud-autores-libros",
  },
  {
    i18nKey: "taskflow",
    gradient: "from-emerald-500 to-teal-600",
    image: "https://opengraph.githubassets.com/1/Erickpe8/TaskFlow-Manager",
    fallbackImage: "assets/projects/project-taskflow-manager.png",
    tech: [
      [".NET", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"],
      ["Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"],
      ["TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
    ],
    url: "https://github.com/Erickpe8/TaskFlow-Manager",
  },
  {
    i18nKey: "qrStudio",
    gradient: "from-fuchsia-500 to-pink-600",
    image: "https://opengraph.githubassets.com/1/Erickpe8/QR-STUDIO",
    fallbackImage: "assets/projects/project-qr-studio.png",
    tech: [
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"],
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
    ],
    url: "https://github.com/Erickpe8/QR-STUDIO",
  },
  {
    i18nKey: "portfolio",
    gradient: "from-cyan-500 to-blue-600",
    image: "https://opengraph.githubassets.com/1/Erickpe8/Erickpe8",
    fallbackImage: "assets/projects/project-portfolio-automation.png",
    tech: [
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"],
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
      ["GitHub Actions", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
    ],
    url: "https://github.com/Erickpe8/Erickpe8",
  },
];

function localizedProject(project) {
  const key = project.i18nKey;
  return {
    ...project,
    title: t(`projects.items.${key}.title`),
    description: t(`projects.items.${key}.desc`),
  };
}

class ProjectsSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  render() {
    const items = projects.map(localizedProject);
    const list = items.map((p, i) => this.projectCard(p, i, { compact: true })).join("");
    const groupA = items.map((p, i) => this.projectCard(p, i)).join("");
    const groupB = items.map((p) => this.projectCard(p, null, { duplicate: true })).join("");
    const durationSeconds = Math.max(22, items.length * 7);

    this.innerHTML = `
      <section id="projects" class="py-4 px-4 fade-in">
        <div class="max-w-6xl mx-auto space-y-10">
          <div class="space-y-3 text-center">
            <h2 class="text-4xl font-bold gradient-text">${t("projects.title")}</h2>
            <p class="text-sm text-slate-600 max-w-2xl mx-auto">${t("projects.subtitle")}</p>
          </div>

          <div class="space-y-6 lg:hidden">${list}</div>

          <div class="carousel relative overflow-x-hidden overflow-y-visible py-4 pb-10 px-2 sm:px-4 hidden lg:block" aria-label="${t("projects.carousel")}">
            <div class="carousel-track flex w-max items-stretch gap-6 py-2" style="--duration:${durationSeconds}s;">
              <div class="carousel-group flex items-stretch gap-6 pr-6">${groupA}</div>
              <div class="carousel-group flex items-stretch gap-6 pr-6" aria-hidden="true">${groupB}</div>
            </div>
          </div>

          <div class="text-center">
            <a href="https://github.com/Erickpe8?tab=repositories" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
              ${t("projects.viewAll")}
            </a>
          </div>
        </div>

        <style>
          .clamp-6{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}
          .carousel-track{animation:marquee var(--duration) linear infinite;will-change:transform}
          @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
          .carousel:hover .carousel-track,.carousel:focus-within .carousel-track{animation-play-state:paused}
          @media (prefers-reduced-motion:reduce){.carousel-track{animation:none}}
          .carousel{overflow-x:clip;overflow-y:visible}
          .carousel article{margin-bottom:.25rem}
        </style>
      </section>`;

    this.setupProjectImageFallbacks();
  }

  setupProjectImageFallbacks() {
    const timeoutMs = 1400;
    this.querySelectorAll("[data-project-image]").forEach((img) => {
      const primarySrc = img.dataset.primarySrc;
      const fallbackSrc = img.dataset.fallbackSrc;
      if (!primarySrc || !fallbackSrc) return;

      let settled = false;
      let usingFallback = false;

      const applyFallback = () => {
        if (usingFallback) return;
        usingFallback = true;
        img.src = fallbackSrc;
      };

      const timeoutId = window.setTimeout(() => {
        if (!settled) applyFallback();
      }, timeoutMs);

      const probe = new Image();
      probe.decoding = "async";
      probe.onload = () => {
        settled = true;
        window.clearTimeout(timeoutId);
        img.src = primarySrc;
        usingFallback = false;
      };
      probe.onerror = () => {
        settled = true;
        window.clearTimeout(timeoutId);
        applyFallback();
      };

      img.addEventListener("error", applyFallback);
      probe.src = primarySrc;
    });
  }

  projectCard(project, index, { compact = false } = {}) {
    const sizeClasses = compact
      ? "w-full"
      : "flex-none w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]";

    return `
      <article class="card-hover bg-white rounded-2xl shadow-lg flex flex-col h-full ${sizeClasses}">
        <div class="h-32 sm:h-36 relative overflow-hidden rounded-t-2xl bg-slate-800 shrink-0">
          <img src="${project.image}" alt="${t("projects.previewAlt")} ${project.title}"
            class="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" decoding="async"
            data-project-image data-primary-src="${project.image}" data-fallback-src="${project.fallbackImage}" />
          <div class="absolute inset-0 bg-slate-900/20"></div>
        </div>
        <div class="flex flex-col flex-1 gap-4 p-5 pb-6">
          <h3 class="text-lg font-semibold text-slate-900 leading-tight">${project.title}</h3>
          <p class="text-gray-700 text-sm leading-relaxed clamp-6">${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tech.map(([name, icon]) => this.techBadge(name, icon)).join("")}
          </div>
          <a href="${project.url}" target="_blank" rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm">
            ${t("projects.viewOnGithub")}
            <span aria-hidden="true" class="text-sm">&rarr;</span>
          </a>
        </div>
      </article>`;
  }

  techBadge(name, iconUrl) {
    return `
      <span class="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-slate-100 text-slate-800 text-xs font-medium whitespace-nowrap">
        <img src="${iconUrl}" alt="${name}" class="w-4 h-4 object-contain shrink-0" width="16" height="16" loading="lazy" decoding="async" />
        <span class="leading-none">${name}</span>
      </span>`;
  }
}

customElements.define("projects-section", ProjectsSection);
export default ProjectsSection;
