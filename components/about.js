class AboutSection extends HTMLElement {
    getExperienceFrom(startDate) {
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();

        if (now.getDate() < startDate.getDate()) {
            months -= 1;
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        const parts = [];
        if (years > 0) parts.push(`${years} año${years === 1 ? "" : "s"}`);
        if (months > 0) parts.push(`${months} mes${months === 1 ? "" : "es"}`);

        return parts.length ? parts.join(" y ") : "menos de 1 mes";
    }

    connectedCallback() {
        const startDate = new Date("2025-08-04");
        const experience = this.getExperienceFrom(startDate);

        this.innerHTML = `
        <section id="about" class="py-16 md:py-20 px-4 fade-in">

            <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                
                <h2 class="text-4xl font-bold text-center mb-8 gradient-text">Sobre mí</h2>

                <p class="text-lg text-gray-700 mb-6">
                    Soy un desarrollador <strong>fullstack</strong>, con especial interés en la construcción de sistemas sólidos, escalables y alineados con buenas prácticas de ingeniería. 
                    Soy <strong>tecnólogo en desarrollo de software</strong>, he cursado <strong>siete semestres de Ingeniería de Software</strong>, tengo <strong>${experience}</strong> de experiencia laboral en una <strong>fábrica de desarrollo de software</strong> y cuento con un <strong>diplomado en Arquitecturas de Software</strong>.
                </p>

                <p class="text-lg text-gray-700 mb-6">
                    Disfruto profundamente todo el ciclo de vida del software: desde la <strong>toma de requerimientos</strong> y el <strong>análisis funcional</strong>, hasta la <strong>documentación técnica</strong> y la colaboración en <strong>equipos ágiles</strong>. Me motiva crear soluciones que no solo funcionen bien, sino que tengan un propósito claro dentro de una arquitectura bien pensada.
                </p>

            </div>
        </section>`;
    }
}

customElements.define("about-section", AboutSection);
