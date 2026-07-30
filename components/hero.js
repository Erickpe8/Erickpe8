import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class HeroSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  render() {
    const cvPdf =
      window.assetUrl?.("assets/cv/Erick-Perez-CV.pdf") ??
      "https://erickpe8.github.io/Erickpe8/assets/cv/Erick-Perez-CV.pdf";

    this.innerHTML = `
        <section class="hero-section px-4 fade-in">
            <div class="max-w-4xl mx-auto glass-card hero-glass-card">
                <div class="hero-photo-wrap">
                    <span class="hero-photo-glow" aria-hidden="true"></span>
                    <img 
                        src="https://avatars.githubusercontent.com/Erickpe8?s=256"
                        srcset="
                            https://avatars.githubusercontent.com/Erickpe8?s=128 128w,
                            https://avatars.githubusercontent.com/Erickpe8?s=256 256w,
                            https://avatars.githubusercontent.com/Erickpe8?s=352 352w
                        "
                        sizes="(min-width: 768px) 176px, 128px"
                        width="176"
                        height="176"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        class="hero-photo w-32 h-32 md:w-44 md:h-44"
                        alt="Erick Pérez"
                    />
                </div>

                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 tracking-tight">
                    <span class="wave-animation inline-block text-4xl md:text-5xl">👋</span>
                    <span class="block md:inline">${t("hero.greeting")}</span>
                    <span class="gradient-text-hero block md:inline md:ml-2">Erick Pérez</span>
                </h1>

                <p class="hero-role mb-3">${t("hero.role")}</p>
                <p class="hero-bio mb-10">${t("hero.bio")}</p>

                <div class="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mx-auto">
                    <a href="#projects" class="btn btn-projects">${t("hero.viewProjects")}</a>
                    <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="btn btn-cv">${t("hero.downloadCv")}</a>
                    <a href="https://github.com/Erickpe8" target="_blank" rel="noopener noreferrer" class="btn btn-github">GitHub</a>
                    <a href="https://www.linkedin.com/in/erick-sebastian-perez-carvajal-11a2772b6/" target="_blank" rel="noopener noreferrer" class="btn btn-linkedin">LinkedIn</a>
                </div>
            </div>
        </section>`;
  }
}

customElements.define("hero-section", HeroSection);
