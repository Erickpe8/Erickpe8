class StatsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-24 px-4 bg-white fade-in min-h-screen flex items-center justify-center">
            <div class="max-w-6xl mx-auto text-center">

                <h2 class="text-4xl font-bold mb-12 gradient-text">Estadísticas GitHub</h2>

                <div class="flex flex-col items-center justify-center gap-8" aria-live="polite">
                    <div data-metrics-placeholder
                        class="flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/70 px-5 py-3 text-sky-900 shadow-sm">
                        <span data-metrics-placeholder-dot
                            class="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                        <span data-metrics-placeholder-text>Actualizando métricas...</span>
                    </div>
                    <div class="w-full max-w-3xl">
                        <img data-metrics-img
                            class="w-full h-auto block transition-opacity duration-700 opacity-0"
                            alt="Métricas de GitHub actualizadas cada 30 minutos" />
                    </div>
                </div>

            </div>
        </section>`;

        const img = this.querySelector("[data-metrics-img]");
        const placeholder = this.querySelector("[data-metrics-placeholder]");
        if (!img) return;

        const metricsPath = "./github-metrics.svg";
        const refreshIntervalMs = 30 * 60 * 1000;
        const placeholderText = this.querySelector("[data-metrics-placeholder-text]");
        const placeholderDot = this.querySelector("[data-metrics-placeholder-dot]");
        const setPlaceholderState = isError => {
            if (!placeholder) return;
            const baseClasses = ["border-sky-100", "bg-sky-50/70", "text-sky-900"];
            const errorClasses = ["border-red-200", "bg-red-50/70", "text-red-700"];
            placeholder.classList.remove(...baseClasses, ...errorClasses);
            placeholder.classList.add(...(isError ? errorClasses : baseClasses));
            if (placeholderDot) {
                placeholderDot.classList.remove("bg-sky-500", "bg-red-500");
                placeholderDot.classList.add(isError ? "bg-red-500" : "bg-sky-500");
            }
            if (placeholderText) {
                placeholderText.textContent = isError
                    ? "No se pudo cargar. Reintentando..."
                    : "Actualizando métricas...";
            }
        };
        const updateMetricsSrc = () => {
            if (!navigator.onLine) {
                this._metricsPendingRefresh = true;
                return;
            }
            const halfHourKey = Math.floor(Date.now() / refreshIntervalMs);
            setPlaceholderState(false);
            img.classList.remove("opacity-100");
            img.classList.add("opacity-0");
            img.src = `${metricsPath}?v=${halfHourKey}`;
        };

        const revealImage = () => {
            if (placeholder) placeholder.classList.add("hidden");
            img.classList.remove("opacity-0");
            img.classList.add("opacity-100");
        };

        const handleError = () => {
            if (placeholder) placeholder.classList.remove("hidden");
            setPlaceholderState(true);
        };

        const clearTimers = () => {
            if (this._metricsInterval) clearInterval(this._metricsInterval);
            if (this._metricsTimeout) clearTimeout(this._metricsTimeout);
        };

        const startInterval = () => {
            if (this._metricsInterval) clearInterval(this._metricsInterval);
            this._metricsInterval = setInterval(updateMetricsSrc, refreshIntervalMs);
        };

        const scheduleNextTick = () => {
            clearTimers();
            const now = Date.now();
            const nextTick = Math.ceil(now / refreshIntervalMs) * refreshIntervalMs;
            const delay = Math.max(0, nextTick - now);
            this._metricsTimeout = setTimeout(() => {
                updateMetricsSrc();
                startInterval();
            }, delay);
        };

        this._handleVisibility = () => {
            if (document.hidden) {
                clearTimers();
                return;
            }
            updateMetricsSrc();
            scheduleNextTick();
        };

        this._handleOnline = () => {
            if (!this._metricsPendingRefresh) return;
            this._metricsPendingRefresh = false;
            updateMetricsSrc();
        };

        img.addEventListener("load", revealImage);
        img.addEventListener("error", handleError);
        document.addEventListener("visibilitychange", this._handleVisibility);
        window.addEventListener("online", this._handleOnline);

        updateMetricsSrc();
        scheduleNextTick();
    }

    disconnectedCallback() {
        if (this._metricsInterval) clearInterval(this._metricsInterval);
        if (this._metricsTimeout) clearTimeout(this._metricsTimeout);
        if (this._handleVisibility) {
            document.removeEventListener("visibilitychange", this._handleVisibility);
        }
        if (this._handleOnline) {
            window.removeEventListener("online", this._handleOnline);
        }
    }
}

customElements.define("stats-section", StatsSection);



