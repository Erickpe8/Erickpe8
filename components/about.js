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
                    Soy desarrollador <strong>Full Stack</strong> con enfoque en backend, apasionado por la construcción de sistemas sólidos, escalables y alineados con buenas prácticas de ingeniería de software. Actualmente curso <strong>octavo semestre de Ingeniería de Software en la FESC</strong>, soy <strong>tecnólogo en Desarrollo de Software</strong> y cuento con formación complementaria en <strong>Arquitecturas de Software</strong>, fortaleciendo constantemente mis conocimientos en desarrollo, análisis y diseño de soluciones tecnológicas.
                </p>

                <p class="text-lg text-gray-700">
                    Llevo <strong>${experience}</strong> de experiencia en el <strong>Laboratorio de Software de la FESC</strong>, donde me desempeñé como practicante y actualmente como <strong>Técnico Asistente en Desarrollo de Software</strong>. Disfruto participar en todas las etapas del ciclo de vida del software, desde el <strong>levantamiento de requerimientos</strong> y el <strong>análisis funcional</strong> hasta la implementación, <strong>documentación</strong> y trabajo en <strong>equipos ágiles</strong>, siempre enfocado en crear soluciones eficientes, mantenibles y de valor para las organizaciones.
                </p>

            </div>
        </section>`;
    }
}

customElements.define("about-section", AboutSection);
