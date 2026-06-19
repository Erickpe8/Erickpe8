import { t, formatExperience } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class AboutSection extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  render() {
    const experience = formatExperience(new Date("2025-08-04"));

    this.innerHTML = `
        <section id="about" class="pt-8 pb-16 md:pt-10 md:pb-20 px-4 fade-in">
            <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                <h2 class="text-4xl font-bold text-center mb-8 gradient-text">${t("about.title")}</h2>
                <p class="text-lg text-gray-700 mb-6">${t("about.p1")}</p>
                <p class="text-lg text-gray-700">${t("about.p2", { experience })}</p>
            </div>
        </section>`;
  }
}

customElements.define("about-section", AboutSection);
