import { t } from "./i18n.js";
import { bindLocale, unbindLocale } from "./section-i18n.js";

class FooterComponent extends HTMLElement {
  connectedCallback() {
    bindLocale(this, this.render);
  }

  disconnectedCallback() {
    unbindLocale(this);
  }

  render() {
    this.innerHTML = `
        <footer class="py-6 bg-gray-900 text-gray-300 text-center">
            <p class="text-sm">${t("footer.text", { year: new Date().getFullYear() })}</p>
        </footer>`;
  }
}

customElements.define("footer-component", FooterComponent);
