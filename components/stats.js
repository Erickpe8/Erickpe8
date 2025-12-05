class StatsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-20 px-4 bg-white fade-in min-h-screen flex items-center justify-center">
            <div class="max-w-6xl mx-auto text-center">

                <h2 class="text-4xl font-bold mb-12 gradient-text">Estadísticas GitHub</h2>

                <div class="flex flex-col items-center justify-center gap-8">

                    <img src="https://github-readme-streak-stats.herokuapp.com?user=Erickpe8&theme=meta-light&border_radius=12.5&locale=es"
                        class="w-full max-w-2xl rounded-xl shadow-lg" />

                    <img src="./github-metrics.svg"
                        class="w-full max-w-3xl rounded-xl shadow-lg" />

                </div>

            </div>
        </section>`;
    }
}

customElements.define("stats-section", StatsSection);
