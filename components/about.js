class AboutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="about" class="py-16 md:py-20 px-4 fade-in">

            <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                
                <h2 class="text-4xl font-bold text-center mb-8 gradient-text">Sobre mí</h2>

                <p class="text-lg text-gray-700 mb-6">
                    Soy un desarrollador <strong>fullstack en formación</strong>, con especial interés en la construcción de sistemas sólidos, escalables y alineados con buenas prácticas de ingeniería. 
                    Cuento con una <strong>especialización técnica en desarrollo de software</strong>, he cursado <strong>seis semestres de Ingeniería de Software</strong>, tengo experiencia laboral en una <strong>fábrica de desarrollo de software</strong> y actualmente curso un <strong>diplomado en Arquitecturas de Software</strong>.
                </p>

                <p class="text-lg text-gray-700 mb-6">
                    Disfruto profundamente todo el ciclo de vida del software: desde la <strong>toma de requerimientos</strong> y el <strong>análisis funcional</strong>, hasta la <strong>documentación técnica</strong> y la colaboración en <strong>equipos ágiles</strong>. Me motiva crear soluciones que no solo funcionen bien, sino que tengan un propósito claro dentro de una arquitectura bien pensada.
                </p>

            </div>
        </section>`;
    }
}

customElements.define("about-section", AboutSection);
