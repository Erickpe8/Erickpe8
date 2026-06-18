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
        <section class="hero-gradient pt-20 md:pt-24 pb-20 px-4 text-center fade-in">
            <div class="max-w-6xl mx-auto">
                <div class="flex justify-center mb-6">
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
                        class="w-32 h-32 md:w-44 md:h-44 rounded-full shadow-lg border-4 border-white object-cover hover:scale-105 transition duration-300"
                        style="box-shadow: 0 0 25px rgba(67,197,239,0.25);"
                    />
                </div>

                <h1 class="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
                    <span class="wave-animation inline-block text-5xl md:text-6xl">👋</span>
                    <span class="block md:inline">${t("hero.greeting")}</span>
                    <span class="gradient-text-hero block md:inline md:ml-2">Erick Pérez</span>
                </h1>

                <p class="text-xl text-gray-700 mb-4">${t("hero.role")}</p>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">${t("hero.bio")}</p>

                <div class="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mx-auto">
                    <a href="#projects" class="btn btn-cv">${t("hero.viewProjects")}</a>
                    <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="btn btn-cv">${t("hero.downloadCv")}</a>
                    <a href="https://github.com/Erickpe8" target="_blank" rel="noopener noreferrer" class="btn btn-github">GitHub</a>
                    <a href="https://www.linkedin.com/in/erick-sebastian-perez-carvajal-11a2772b6/" target="_blank" rel="noopener noreferrer" class="btn btn-linkedin">LinkedIn</a>
                </div>
            </div>
        </section>`;
  }
}

customElements.define("hero-section", HeroSection);
