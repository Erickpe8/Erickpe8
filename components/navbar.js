    class NavbarComponent extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <nav class="navbar fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
                <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    
                    <!-- Logo -->
                    <a href="#" class="text-2xl font-bold gradient-text" aria-label="Inicio">
                        EP
                    </a>

                    <!-- Botón hamburguesa (SOLO MOBILE) -->
                    <button id="menu-toggle" 
                            class="md:hidden flex flex-col justify-between w-7 h-6 focus:outline-none"
                            aria-controls="mobile-nav"
                            aria-expanded="false"
                            aria-label="Abrir menu">
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                        <span class="block h-[2px] bg-gray-800 rounded-full"></span>
                    </button>

                    <!-- Menú de escritorio (SOLO DESKTOP) -->
                    <div id="desktop-nav" class="hidden md:flex gap-6 text-gray-700 font-medium">
                        <a href="#about" class="nav-link hover:text-blue-600">Sobre mí</a>
                        <a href="#skills" class="nav-link hover:text-blue-600">Habilidades</a>
                        <a href="#projects" class="nav-link hover:text-blue-600">Proyectos</a>
                        <a href="#contact" class="nav-link hover:text-blue-600">Contacto</a>
                    </div>
                </div>

                <!-- Menú desplegable en móvil -->
                <div id="mobile-nav" class="md:hidden hidden border-t bg-white shadow-md">
                    <a href="#about" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">Sobre mí</a>
                    <a href="#skills" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">Habilidades</a>
                    <a href="#projects" class="nav-link block py-3 px-4 border-b hover:bg-gray-50">Proyectos</a>
                    <a href="#contact" class="nav-link block py-3 px-4 hover:bg-gray-50">Contacto</a>
                </div>
            </nav>
            `;

            const toggle = this.querySelector("#menu-toggle");
            const mobileNav = this.querySelector("#mobile-nav");

            toggle.addEventListener("click", () => {
                mobileNav.classList.toggle("hidden");
                const isOpen = !mobileNav.classList.contains("hidden");
                toggle.setAttribute("aria-expanded", String(isOpen));
                toggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
            });
        }
    }

    customElements.define("navbar-component", NavbarComponent);
