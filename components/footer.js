class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="py-6 bg-gray-900 text-gray-300 text-center">
            <p class="text-sm">© 2026 Erick Pérez — Construyendo software con propósito.</p>
        </footer>`;
    }
}

customElements.define("footer-component", FooterComponent);
