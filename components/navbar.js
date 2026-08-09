import { t } from "./i18n.js";
import { langPickerMarkup, setupLangPicker } from "./lang-picker.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class NavbarComponent extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
    this._langPickerCleanup?.();
    this._langPickerCleanup = null;
  }

  render() {
    const cvPdf =
      window.assetUrl?.("assets/cv/Erick-Perez-CV.pdf") ??
      "https://erickpe8.github.io/Erickpe8/assets/cv/Erick-Perez-CV.pdf";

    this.innerHTML = `
            <header class="nav-shell fixed top-0 left-0 right-0 z-50">
                <nav class="nav-glass navbar flex items-center justify-between gap-3" aria-label="Principal">
                    <div class="flex items-center gap-3 min-w-0">
                        <a href="#" class="inline-flex items-center shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" aria-label="${t("nav.home")}">
                            <img
                                src="https://avatars.githubusercontent.com/Erickpe8?s=128"
                                srcset="
                                    https://avatars.githubusercontent.com/Erickpe8?s=64 64w,
                                    https://avatars.githubusercontent.com/Erickpe8?s=128 128w,
                                    https://avatars.githubusercontent.com/Erickpe8?s=256 256w
                                "
                                sizes="40px"
                                width="40"
                                height="40"
                                alt="Erick Pérez"
                                class="h-10 w-10 rounded-full object-cover ring-2 ring-white/80 shadow-sm"
                                loading="eager"
                                decoding="async"
                            />
                        </a>
                        ${langPickerMarkup()}
                    </div>

                    <button id="menu-toggle" type="button"
                            class="nav-menu-toggle"
                            aria-controls="mobile-nav"
                            aria-expanded="false"
                            aria-label="${t("nav.openMenu")}">
                        <span class="nav-menu-toggle__bar" aria-hidden="true"></span>
                        <span class="nav-menu-toggle__bar" aria-hidden="true"></span>
                        <span class="nav-menu-toggle__bar" aria-hidden="true"></span>
                    </button>

                    <div id="desktop-nav" class="hidden md:flex gap-5 lg:gap-6 text-sm font-medium items-center">
                        <a href="#about" class="nav-link">${t("nav.about")}</a>
                        <a href="#skills" class="nav-link">${t("nav.skills")}</a>
                        <a href="#projects" class="nav-link">${t("nav.projects")}</a>
                        <a href="#contact" class="nav-link">${t("nav.contact")}</a>
                        <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="btn-nav-cv">${t("nav.cv")}</a>
                    </div>
                </nav>

                <div id="mobile-nav" class="nav-mobile-panel is-closed max-w-6xl mx-auto overflow-hidden">
                    <a href="#about" class="nav-link block py-3 px-4 border-b border-white/30 hover:bg-white/40">${t("nav.about")}</a>
                    <a href="#skills" class="nav-link block py-3 px-4 border-b border-white/30 hover:bg-white/40">${t("nav.skills")}</a>
                    <a href="#projects" class="nav-link block py-3 px-4 border-b border-white/30 hover:bg-white/40">${t("nav.projects")}</a>
                    <a href="#contact" class="nav-link block py-3 px-4 border-b border-white/30 hover:bg-white/40">${t("nav.contact")}</a>
                    <a href="${cvPdf}" target="_blank" rel="noopener noreferrer" class="block py-3 px-4 font-semibold text-blue-700 hover:bg-white/40">${t("nav.downloadCv")}</a>
                </div>
            </header>`;

    this._langPickerCleanup?.();
    this._langPickerCleanup = setupLangPicker(this);

    const toggle = this.querySelector("#menu-toggle");
    const mobileNav = this.querySelector("#mobile-nav");
    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("is-closed");
      const isOpen = !mobileNav.classList.contains("is-closed");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? t("nav.closeMenu") : t("nav.openMenu"));
    });
  }
}

customElements.define("navbar-component", NavbarComponent);
