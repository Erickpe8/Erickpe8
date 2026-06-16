import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class SkillsSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  render() {
    const s = (key) => t(`skills.items.${key}`);

    this.innerHTML = `
        <section id="skills" class="py-24 px-4 bg-white fade-in">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center gradient-text">${t("skills.title")}</h2>
                <p class="mt-4 text-center text-base text-slate-600 max-w-2xl mx-auto">${t("skills.subtitle")}</p>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-100 lg:max-w-[520px] lg:mx-auto">
                        <h3 class="text-2xl font-bold mb-4">${t("skills.languages")}</h3>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg")}
                            ${this.badge("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg")}
                            ${this.badge("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg")}
                            ${this.badge("PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg")}
                        </div>
                    </div>

                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-200 lg:max-w-[520px] lg:mx-auto">
                        <h3 class="text-2xl font-bold mb-4">${t("skills.frameworks")}</h3>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge("Flowbite", "https://flowbite.com/docs/images/logo.svg")}
                            ${this.badge("Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg")}
                            ${this.badge("TailwindCSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg")}
                        </div>
                    </div>

                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-300 lg:max-w-[520px] lg:mx-auto">
                        <h3 class="text-2xl font-bold mb-4">${t("skills.databases")}</h3>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge("DBeaver", "https://image.pngaaa.com/94/6692094-middle.png")}
                            ${this.badge("MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg")}
                            ${this.badge("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg")}
                        </div>
                    </div>

                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-500 lg:max-w-[520px] lg:mx-auto">
                        <h3 class="text-2xl font-bold mb-4">${t("skills.productivity")}</h3>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge("Google Workspace", "https://truecontext.com/wp-content/uploads/2023/10/logo_google-workspace_big.png")}
                            ${this.badge("Microsoft Office", "https://e7.pngegg.com/pngimages/434/143/png-clipart-microsoft-office-365-patch-tuesday-service-pack-microsoft-angle-rectangle-thumbnail.png")}
                        </div>
                    </div>

                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-700 lg:max-w-[520px] lg:mx-auto">
                        <h3 class="text-2xl font-bold mb-4">${t("skills.devTools")}</h3>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge("Cursor", "https://img.icons8.com/?size=100&id=4gUIAQbx9oh5&format=png&color=000000")}
                            ${this.badge("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg")}
                            ${this.badge("Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg")}
                            ${this.badge("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg")}
                            ${this.badge("GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg")}
                            ${this.badge("Herd", "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-laravel.svg")}
                            ${this.badge("Laragon", "https://media.imgcdn.org/repo/2025/07/laragon/6889e2c12df61-laragon-Icon.webp")}
                            ${this.badge("Trello", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg")}
                            ${this.badge("VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg")}
                            ${this.badge("XAMPP", "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg")}
                        </div>
                    </div>

                    <div class="w-full h-full rounded-2xl border border-slate-200/70 bg-white/40 p-6 sm:p-7 shadow-sm fade-in delay-1000 lg:max-w-[520px] lg:mx-auto">
                        <div class="flex flex-wrap items-center gap-3 mb-4">
                            <h3 class="text-2xl font-bold">${t("skills.softSkills")}</h3>
                            <span class="inline-flex items-center rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">${t("skills.softSkillsTag")}</span>
                        </div>
                        <div class="flex flex-wrap gap-3 sm:gap-4">
                            ${this.badge(s("adaptability"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/refresh.svg")}
                            ${this.badge(s("communication"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/message-circle.svg")}
                            ${this.badge(s("timeManagement"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/clock.svg")}
                            ${this.badge(s("aiIntegration"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/cpu.svg")}
                            ${this.badge(s("leadership"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users.svg")}
                            ${this.badge(s("teamwork"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users-group.svg")}
                            ${this.badge(s("efficientAi"), "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/robot.svg")}
                        </div>
                    </div>
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
