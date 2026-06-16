import { t, getLocale, setLocale } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class NavbarComponent extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  langSwitcher() {
    const locale = getLocale();
    const btnClass = (code) =>
      `px-2.5 py-1 rounded-full transition ${locale === code ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`;

    return `
      <div class="flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-semibold"
           role="group" aria-label="${t("nav.langSelector")}">
        <button type="button" data-lang="es" class="${btnClass("es")}" aria-pressed="${locale === "es"}">ES</button>
        <button type="button" data-lang="en" class="${btnClass("en")}" aria-pressed="${locale === "en"}">EN</button>
      </div>`;
  }

  render() {
    const cvPdf =
      window.assetUrl?.("assets/cv/Erick-Perez-CV.pdf") ??
      "https://erickpe8.github.io/Erickpe8/assets/cv/Erick-Perez-CV.pdf";
    const favicon =
      window.assetUrl?.("assets/images/favicon.png") ??
      "https://erickpe8.github.io/Erickpe8/assets/images/favicon.png";

    this.innerHTML = `
            <nav class="navbar fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
                <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
                    <a href="#" class="inline-flex items-center shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" aria-label="${t("nav.home")}">
                        <img src="${favicon}" alt="Erick Pérez" width="40" height="40" class="h-10 w-10 object-contain" loading="eager" decoding="async" />
                    </a>

                    <div class="flex items-center gap-3 md:hidden">
                        ${this.langSwitcher()}
                        <button id="menu-toggle" 
                                class="flex flex-col justify-between w-7 h-6 focus:outline-none"
                                aria-controls="mobile-nav"
                                aria-expanded="false"
                                aria-label="${t("nav.openMenu")}">
                            <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                            <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                            <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                        </button>
                    </div>

                    <div id="desktop-nav" class="hidden md:flex gap-5 text-gray-700 font-medium items-center">
                        <a href="#about" class="nav-link hover:text-blue-600">${t("nav.about")}</a>
                        <a href="#skills" class="nav-link hover:text-blue-600">${t("nav.skills")}</a>
                        <a href="#projects" class="nav-link hover:text-blue-600">${t("nav.projects")}</a>
                        <a href="#contact" class="nav-link hover:text-blue-600">${t("nav.contact")}</a>
                        ${this.langSwitcher()}
                        <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">${t("nav.cv")}</a>
                    </div>
                </div>

                <div id="mobile-nav" class="md:hidden hidden border-t bg-white shadow-md">
                    <a href="#about" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">${t("nav.about")}</a>
                    <a href="#skills" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">${t("nav.skills")}</a>
                    <a href="#projects" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">${t("nav.projects")}</a>
                    <a href="#contact" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">${t("nav.contact")}</a>
                    <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="block py-3 px-4 font-semibold text-blue-600 hover:bg-gray-50">${t("nav.downloadCv")}</a>
                </div>
            </nav>`;

    this.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => setLocale(button.dataset.lang));
    });

    const toggle = this.querySelector("#menu-toggle");
    const mobileNav = this.querySelector("#mobile-nav");
    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
      const isOpen = !mobileNav.classList.contains("hidden");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? t("nav.closeMenu") : t("nav.openMenu"));
    });
  }
}

customElements.define("navbar-component", NavbarComponent);
