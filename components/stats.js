class StatsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-20 px-4 bg-white fade-in min-h-screen flex items-center justify-center">
            <div class="max-w-6xl mx-auto text-center">

                <h2 class="text-4xl font-bold mb-12 gradient-text">Estadísticas GitHub</h2>

                <div class="flex flex-col items-center justify-center gap-8">

                    <img data-metrics-img
                        class="w-full max-w-3xl rounded-xl shadow-lg"
                        alt="GitHub metrics" />

                </div>

            </div>
        </section>`;

        const img = this.querySelector("[data-metrics-img]");
        if (!img) return;

        const metricsPath = "./github-metrics.svg";
        const updateMetricsSrc = () => {
            const halfHourKey = Math.floor(Date.now() / (30 * 60 * 1000));
            img.src = `${metricsPath}?v=${halfHourKey}`;
        };

        updateMetricsSrc();

        if (this._metricsInterval) clearInterval(this._metricsInterval);
        this._metricsInterval = setInterval(updateMetricsSrc, 30 * 60 * 1000);
    }

    disconnectedCallback() {
        if (this._metricsInterval) clearInterval(this._metricsInterval);
    }
}

customElements.define("stats-section", StatsSection);
