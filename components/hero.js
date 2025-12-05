class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="hero-gradient pt-32 pb-20 px-4 text-center fade-in">
            <div class="max-w-6xl mx-auto">

                <!-- Foto -->
                <div class="flex justify-center mb-6">
                    <img 
                        src="https://github.com/Erickpe8.png" 
                        class="w-36 h-36 rounded-full shadow-xl border-4 border-white object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <!-- Saludo -->
                <h1 class="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
                    <span class="wave-animation inline-block text-6xl">👋</span>
                    Hola, soy <span class="gradient-text ml-2">Erick Pérez</span>
                </h1>


                <p class="text-xl text-gray-700 mb-4">
                    Fullstack Developer en formación
                </p>

                <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Me apasiona la gestión de proyectos de software, la toma de requerimientos, la documentación técnica y el trabajo con equipos ágiles. 
                </p>

                <div class="flex flex-wrap justify-center gap-3 mb-8">
                    <a href="https://www.youtube.com/@ErickPerez_8" class="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">YouTube</a>
                    <a href="https://github.com/Erickpe8" class="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800">GitHub</a>
                    <a href="https://www.instagram.com/erickperez_8/" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90">Instagram</a>
                </div>

            </div>
        </section>`;
    }
}

customElements.define("hero-section", HeroSection);
