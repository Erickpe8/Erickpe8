class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 class="text-2xl font-bold gradient-text">EP</h1>
                <div class="flex gap-6">
                    <a href="#about" class="text-gray-700 hover:text-blue-600">Sobre mí</a>
                    <a href="#skills" class="text-gray-700 hover:text-blue-600">Habilidades</a>
                    <a href="#projects" class="text-gray-700 hover:text-blue-600">Proyectos</a>
                    <a href="#contact" class="text-gray-700 hover:text-blue-600">Contacto</a>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("navbar-component", Navbar);
