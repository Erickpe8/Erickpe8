import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class ContactSection extends HTMLElement {
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

    const email = "ericksperezc@gmail.com";
    const subject = t("contact.mailSubject");
    const body = t("contact.mailBody");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.innerHTML = `
        <section id="contact" class="py-8 md:py-10 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 fade-in">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-5xl font-bold mb-6 gradient-text">${t("contact.title")}</h2>
                <p class="text-xl text-gray-700 mb-14">${t("contact.subtitle")}</p>

                <div class="mb-10">
                    <a href="${cvPdf}" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        ${t("contact.downloadCv")}
                    </a>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    ${this.card(t("contact.email"), email, gmailUrl, "mail")}
                    ${this.card("GitHub", "@Erickpe8", "https://github.com/Erickpe8", "github")}
                    ${this.card("Instagram", "@erickperez_8", "https://instagram.com/erickperez_8", "instagram")}
                    ${this.card("LinkedIn", "Erick Sebastián Pérez Carvajal", "https://www.linkedin.com/in/erick-sebastian-perez-carvajal-11a2772b6/", "linkedin")}
                    ${this.card("X", "@Erickperez_8", "https://x.com/Erickperez_8", "x")}
                    ${this.card("YouTube", "ErickPerez_8", "https://youtube.com/@ErickPerez_8", "youtube")}
                </div>
            </div>
        </section>`;
  }

  card(label, value, link, iconType) {
    return `
        <a href="${link}" target="_blank" rel="noopener noreferrer"
            class="card-hover bg-white rounded-2xl p-8 shadow-lg flex items-center gap-4 hover:shadow-xl transition shadow-blue-100">
            <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    ${this.renderIcon(iconType)}
                </div>
            </div>
            <div class="text-left">
                <p class="text-gray-600 text-sm">${label}</p>
                <p class="text-gray-900 font-semibold break-all">${value}</p>
            </div>
        </a>`;
  }

  renderIcon(type) {
    switch (type) {
      case "mail":
        return `<svg viewBox="0 0 24 24" class="w-7 h-7" fill="none" stroke="#1f2933" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect><path d="M4 7l8 6 8-6"></path></svg>`;
      case "github":
        return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="w-7 h-7 object-contain" width="28" height="28" loading="lazy" decoding="async" />`;
      case "instagram":
        return `<img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" class="w-7 h-7 object-contain" width="28" height="28" loading="lazy" decoding="async" />`;
      case "linkedin":
        return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="w-7 h-7 object-contain" width="28" height="28" loading="lazy" decoding="async" />`;
      case "x":
        return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="X" class="w-7 h-7 object-contain" width="28" height="28" loading="lazy" decoding="async" />`;
      case "youtube":
        return `<svg viewBox="0 0 24 24" class="w-7 h-7"><circle cx="12" cy="12" r="11" fill="#ff0000"></circle><polygon points="10,8 16,12 10,16" fill="#ffffff"></polygon></svg>`;
      default:
        return `<div class="w-6 h-6 bg-gray-300 rounded-full"></div>`;
    }
  }
}

customElements.define("contact-section", ContactSection);
