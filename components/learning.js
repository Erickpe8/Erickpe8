import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class LearningSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  learningCard(key, icon, alt) {
    return `
      <div class="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4 hover:shadow-xl transition shadow-blue-100">
        <img src="${icon}" class="w-10 h-10 mt-1" width="40" height="40" loading="lazy" decoding="async" alt="${alt}"/>
        <div>
          <h3 class="text-xl font-semibold mb-2">${t(`learning.items.${key}.title`)}</h3>
          <p class="text-gray-600 leading-relaxed">${t(`learning.items.${key}.desc`)}</p>
        </div>
      </div>`;
  }

  render() {
    this.innerHTML = `
        <section class="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 fade-in">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-5xl font-bold text-center mb-16 gradient-text">${t("learning.title")}</h2>
                <div class="grid md:grid-cols-2 gap-10">
                    ${this.learningCard("laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", "Laravel")}
                    ${this.learningCard("javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript")}
                    ${this.learningCard("docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "Docker")}
                    ${this.learningCard("architecture", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", "Software Architecture")}
                    ${this.learningCard("figma", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", "Figma")}
                    ${this.learningCard("git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "Git")}
                </div>
            </div>
        </section>`;
  }
}

customElements.define("learning-section", LearningSection);
