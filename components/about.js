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
        <section id="about" class="section-shell px-4 fade-in">
            <div class="max-w-4xl mx-auto glass-card glass-hover p-8 md:p-10">
                <h2 class="section-title text-center mb-8 gradient-text">${t("about.title")}</h2>
                <p class="text-lg text-slate-700 mb-6 leading-relaxed">${t("about.p1")}</p>
                <p class="text-lg text-slate-700 leading-relaxed">${t("about.p2", { experience })}</p>
            </div>
        </section>`;
  }
}

customElements.define("about-section", AboutSection);
