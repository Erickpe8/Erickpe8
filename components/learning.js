class LearningSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 fade-in">
            <div class="max-w-5xl mx-auto">

                <h2 class="text-5xl font-bold text-center mb-16 gradient-text">
                    Lo que estoy aprendiendo
                </h2>

                <div class="grid md:grid-cols-2 gap-10">

                    <!-- Laravel -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4 hover:shadow-xl transition shadow-blue-100">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" 
                            class="w-10 h-10 mt-1"/>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Laravel 10.x</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Profundizando en backend monolítico, arquitectura limpia, servicios, colas y optimización.
                            </p>
                        </div>
                    </div>

                    <!-- JavaScript -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4 hover:shadow-xl transition shadow-blue-100">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                            class="w-10 h-10 mt-1"/>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">JavaScript</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Manipulación del DOM, asincronía, módulos, patrones de diseño y estructuras complejas.
                            </p>
                        </div>
                    </div>

                    <!-- Docker -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4 hover:shadow-xl transition shadow-blue-100">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                            class="w-10 h-10 mt-1"/>
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Docker</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Creación de entornos replicables, imágenes eficientes, contenedores y flujos DevOps simples.
                            </p>
                        </div>
                    </div>

                    <!-- Arquitectura de Software -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4 hover:shadow-xl transition shadow-blue-100">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                            class="w-10 h-10 opacity-0"/> <!-- Ícono invisible para mantener alineación -->
                        <div>
                            <h3 class="text-xl font-semibold mb-2">Arquitectura de Software</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Patrones, principios SOLID, diseño modular, toma de decisiones técnicas y escalabilidad.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>`;
    }
}

customElements.define("learning-section", LearningSection);
