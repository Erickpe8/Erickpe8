class SkillsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="skills" class="py-20 px-4 bg-white fade-in">
            <div class="max-w-6xl mx-auto">

                <h2 class="text-4xl font-bold text-center mb-16 gradient-text">Habilidades</h2>

                <div class="grid md:grid-cols-2 gap-12">

                    <!-- LENGUAJES -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Lenguajes</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg")}
                            ${this.badge("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg")}
                            ${this.badge("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg")}
                            ${this.badge("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg")}
                        </div>
                    </div>

                    <!-- FRAMEWORKS -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Frameworks</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("Laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg")}
                            ${this.badge("TailwindCSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg")}
                            ${this.badge("Flowbite", "https://flowbite.com/docs/images/logo.svg")}
                        </div>
                    </div>

                    <!-- BASES DE DATOS -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Bases de Datos</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg")}
                            ${this.badge("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg")}
                            ${this.badge("DBeaver", "https://image.pngaaa.com/94/6692094-middle.png")}
                        </div>
                    </div>

                    <!-- PRODUCTIVIDAD -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Productividad y Suites</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("Google Workspace", "https://truecontext.com/wp-content/uploads/2023/10/logo_google-workspace_big.png")}
                            ${this.badge("Microsoft Office", "https://e7.pngegg.com/pngimages/434/143/png-clipart-microsoft-office-365-patch-tuesday-service-pack-microsoft-angle-rectangle-thumbnail.png")}
                        </div>
                    </div>

                    <!-- HERRAMIENTAS DE DESARROLLO -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Herramientas de Desarrollo</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg")}
                            ${this.badge("GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg")}
                            ${this.badge("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg")}
                            ${this.badge("VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg")}
                            ${this.badge("Laragon", "https://media.imgcdn.org/repo/2025/07/laragon/6889e2c12df61-laragon-Icon.webp")}
                            ${this.badge("XAMPP", "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg")}
                            ${this.badge("Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg")}
                            ${this.badge("Trello", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg")}
                        </div>
                    </div>

                    <!-- HABILIDADES BLANDAS -->
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Habilidades Blandas</h3>
                        <div class="flex flex-wrap gap-3">
                            ${this.badge("Comunicación",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/message-circle.svg")}

                            ${this.badge("Liderazgo",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users.svg")}

                            ${this.badge("Trabajo en equipo",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users-group.svg")}

                            ${this.badge("Gestión del tiempo",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/clock.svg")}

                            ${this.badge("Adaptabilidad",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/refresh.svg")}

                            ${this.badge("Integración de modelos IA",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/cpu.svg")}

                            ${this.badge("Uso eficiente de la IA",
                                "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/robot.svg")}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }

    badge(name, icon) {
        return `
        <span class="skill-badge flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm hover:shadow-md transition">
            <img src="${icon}" class="w-5 h-5 object-contain" alt="${name}" />
            ${name}
        </span>`;
    }
}

customElements.define("skills-section", SkillsSection);
