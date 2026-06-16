import { t, getLocale, setLocale } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class NavbarComponent extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
    window.clearTimeout(this._langSwitchTimer);
    this._langResizeObserver?.disconnect();
  }

  langSwitcher() {
    return `
      <div class="lang-switcher" data-lang-track role="group" aria-label="${t("nav.langSelector")}">
        <span class="lang-switcher-indicator" data-lang-indicator aria-hidden="true"></span>
        <button type="button" data-lang="es" class="lang-switcher-btn">ES</button>
        <button type="button" data-lang="en" class="lang-switcher-btn">EN</button>
      </div>`;
  }

  setupLangSwitcher() {
    const track = this.querySelector("[data-lang-track]");
    const indicator = this.querySelector("[data-lang-indicator]");
    const buttons = this.querySelectorAll("[data-lang]");
    if (!track || !indicator || !buttons.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const moveTo = (lang, animate = true) => {
      const button = track.querySelector(`[data-lang="${lang}"]`);
      if (!button) return;

      indicator.style.transition = animate && !reduceMotion
        ? "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none";

      const trackRect = track.getBoundingClientRect();
      const btnRect = button.getBoundingClientRect();
      indicator.style.width = `${btnRect.width}px`;
      indicator.style.transform = `translateX(${btnRect.left - trackRect.left}px)`;

      buttons.forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle("lang-active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });
    };

    moveTo(getLocale(), false);

    this._langResizeObserver?.disconnect();
    this._langResizeObserver = new ResizeObserver(() => moveTo(getLocale(), false));
    this._langResizeObserver.observe(track);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        if (!lang || lang === getLocale()) return;

        moveTo(lang, true);
        window.clearTimeout(this._langSwitchTimer);
        const delay = reduceMotion ? 0 : 220;
        this._langSwitchTimer = window.setTimeout(() => setLocale(lang), delay);
      });
    });
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
                <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <a href="#" class="inline-flex items-center shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" aria-label="${t("nav.home")}">
                            <img src="${favicon}" alt="Erick Pérez" width="40" height="40" class="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" loading="eager" decoding="async" />
                        </a>
                        ${this.langSwitcher()}
                    </div>

                    <button id="menu-toggle" 
                            class="md:hidden flex flex-col justify-between w-7 h-6 focus:outline-none"
                            aria-controls="mobile-nav"
                            aria-expanded="false"
                            aria-label="${t("nav.openMenu")}">
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                    </button>

                    <div id="desktop-nav" class="hidden md:flex gap-6 text-gray-700 font-medium items-center">
                        <a href="#about" class="nav-link hover:text-blue-600">${t("nav.about")}</a>
                        <a href="#skills" class="nav-link hover:text-blue-600">${t("nav.skills")}</a>
                        <a href="#projects" class="nav-link hover:text-blue-600">${t("nav.projects")}</a>
                        <a href="#contact" class="nav-link hover:text-blue-600">${t("nav.contact")}</a>
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

    this.setupLangSwitcher();

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
