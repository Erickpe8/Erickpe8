import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

const skillGroups = [
  {
    key: "languages",
    delay: 100,
    items: [
      ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
      ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"],
    ],
  },
  {
    key: "frameworksAndLibraries",
    delay: 200,
    items: [
      ["Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"],
      ["TailwindCSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
      ["Flowbite", "https://flowbite.com/docs/images/logo.svg"],
    ],
  },
  {
    key: "databases",
    delay: 300,
    items: [
      ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
      ["PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"],
    ],
  },
  {
    key: "productivity",
    delay: 400,
    items: [
      ["Google Workspace", "https://truecontext.com/wp-content/uploads/2023/10/logo_google-workspace_big.png"],
      ["Microsoft Office", "https://e7.pngegg.com/pngimages/434/143/png-clipart-microsoft-office-365-patch-tuesday-service-pack-microsoft-angle-rectangle-thumbnail.png"],
      ["Trello", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"],
    ],
  },
  {
    key: "devTools",
    delay: 500,
    items: [
      ["Cursor", "https://img.icons8.com/?size=100&id=4gUIAQbx9oh5&format=png&color=000000"],
      ["DBeaver", "https://image.pngaaa.com/94/6692094-middle.png"],
      ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"],
      ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
      ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
      ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
      ["GitHub Actions", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg"],
      ["Herd", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-laravel.svg"],
      ["Laragon", "https://media.imgcdn.org/repo/2025/07/laragon/6889e2c12df61-laragon-Icon.webp"],
      ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"],
      ["XAMPP", "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg"],
    ],
  },
  {
    key: "softSkills",
    delay: 600,
    soft: true,
    items: [
      ["adaptability", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/refresh.svg"],
      ["communication", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/message-circle.svg"],
      ["timeManagement", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/clock.svg"],
      ["aiIntegration", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/cpu.svg"],
      ["leadership", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users.svg"],
      ["teamwork", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users-group.svg"],
      ["efficientAi", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/robot.svg"],
    ],
  },
];

class SkillsSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  card(title, badges, { delay = 0, headerExtra = "" } = {}) {
    return `
      <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-${delay}">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <h3 class="text-2xl font-bold">${title}</h3>
          ${headerExtra}
        </div>
        <div class="flex flex-wrap gap-3 sm:gap-4">${badges}</div>
      </div>`;
  }

  render() {
    const cards = skillGroups
      .map((group) => {
        const badges = group.soft
          ? group.items.map(([key, icon]) => this.badge(t(`skills.items.${key}`), icon)).join("")
          : group.items.map(([name, icon]) => this.badge(name, icon)).join("");

        const headerExtra = group.soft
          ? `<span class="inline-flex items-center rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">${t("skills.softSkillsTag")}</span>`
          : "";

        return this.card(t(`skills.${group.key}`), badges, {
          delay: group.delay,
          headerExtra,
        });
      })
      .join("");

    this.innerHTML = `
        <section id="skills" class="py-24 px-4 bg-white fade-in">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center gradient-text">${t("skills.title")}</h2>
                <p class="mt-4 text-center text-base text-slate-600 max-w-2xl mx-auto">${t("skills.subtitle")}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-stretch">
                    ${cards}
                </div>
            </div>
        </section>`;
  }

  badge(name, icon) {
    return `
        <span class="skill-badge inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-full bg-slate-100/70 border border-slate-200/60 text-slate-800 text-sm font-medium transition hover:bg-slate-100 hover:border-slate-300/70 shadow-sm">
            <img src="${icon}" class="w-5 h-5 shrink-0 object-contain" alt="${name}" width="20" height="20" loading="lazy" decoding="async" />
            ${name}
        </span>`;
  }
}

customElements.define("skills-section", SkillsSection);
