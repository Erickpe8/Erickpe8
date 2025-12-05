class ProjectsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="projects" class="py-20 px-4 fade-in">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Proyectos destacados</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <!-- SmartDifferentialCalc -->
                    <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        <div class="h-40 bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                            <span class="text-white font-semibold text-lg tracking-wide">
                                SmartDifferentialCalc
                            </span>
                        </div>
                        <div class="p-6 flex flex-col gap-4 flex-1">
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Aplicación web para resolver ecuaciones diferenciales ordinarias con apoyo de IA. 
                                Combina Flask, DeepSeek, HTML/CSS/JS y validaciones simbólicas para ofrecer soluciones explicadas paso a paso en español.
                            </p>

                            <div class="flex flex-wrap gap-2">
                                ${this.techBadge("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg")}
                                ${this.techBadge("Flask", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg")}
                                ${this.techBadge("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg")}
                                ${this.techBadge("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg")}
                                ${this.techBadge("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg")}
                            </div>

                            <a href="https://github.com/Erickpe8/SmartDifferentialCalc" target="_blank"
                                class="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Ver proyecto en GitHub
                                <span class="ml-1">↗</span>
                            </a>
                        </div>
                    </div>

                    <!-- Arquitecturas CRUD Autores/Libros -->
                    <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        <div class="h-40 bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                            <span class="text-white font-semibold text-lg tracking-wide text-center px-4">
                                Arquitecturas CRUD Autores/Libros
                            </span>
                        </div>
                        <div class="p-6 flex flex-col gap-4 flex-1">
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Proyecto en Laravel que implementa un CRUD de autores y libros usando 
                                diferentes arquitecturas de software para comparar organización del código, 
                                responsabilidades y mantenibilidad con la misma lógica de negocio.
                            </p>

                            <div class="flex flex-wrap gap-2">
                                ${this.techBadge("PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg")}
                                ${this.techBadge("Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg")}
                                ${this.techBadge("MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg")}
                            </div>

                            <a href="https://github.com/Erickpe8/arquitecturas-crud-autores-libros" target="_blank"
                                class="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Ver proyecto en GitHub
                                <span class="ml-1">↗</span>
                            </a>
                        </div>
                    </div>

                    <!-- TaskFlow Manager -->
                    <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        <div class="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <span class="text-white font-semibold text-lg tracking-wide text-center px-4">
                                TaskFlow Manager
                            </span>
                        </div>
                        <div class="p-6 flex flex-col gap-4 flex-1">
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Sistema web full-stack con tablero Kanban interactivo para gestionar tareas y flujos de trabajo.
                                Enfocado en arquitectura limpia, escalabilidad y una experiencia visual clara para equipos y usuarios individuales.
                            </p>

                            <div class="flex flex-wrap gap-2">
                                ${this.techBadge(".NET", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg")}
                                ${this.techBadge("Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg")}
                                ${this.techBadge("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg")}
                            </div>

                            <a href="https://github.com/Erickpe8/TaskFlow-Manager" target="_blank"
                                class="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                                Ver proyecto en GitHub
                                <span class="ml-1">↗</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="text-center mt-12">
                    <a href="https://github.com/Erickpe8?tab=repositories" target="_blank"
                        class="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition text-sm font-medium">
                        Ver todos los repositorios
                    </a>
                </div>

            </div>
        </section>`;
    }

    techBadge(name, iconUrl) {
        return `
        <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
            <img src="${iconUrl}" alt="${name}" class="w-4 h-4 object-contain" />
            <span>${name}</span>
        </span>`;
    }
}

customElements.define("projects-section", ProjectsSection);
