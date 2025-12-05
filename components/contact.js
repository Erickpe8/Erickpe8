class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contact" class="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 fade-in">
            <div class="max-w-4xl mx-auto text-center">

                <h2 class="text-5xl font-bold mb-6 gradient-text">Conéctate conmigo</h2>
                <p class="text-xl text-gray-700 mb-14">
                    ¿Tienes un proyecto, una idea o colaboración en mente? Podemos hablar.
                </p>

                <div class="grid md:grid-cols-2 gap-8">

                    ${this.card(
                        "Correo",
                        "ericksperezc@gmail.com",
                        "mailto:ericksperezc@gmail.com",
                        "mail"
                    )}

                    ${this.card(
                        "GitHub",
                        "@Erickpe8",
                        "https://github.com/Erickpe8",
                        "github"
                    )}

                    ${this.card(
                        "Instagram",
                        "@erickperez_8",
                        "https://instagram.com/erickperez_8",
                        "instagram"
                    )}

                    ${this.card(
                        "YouTube",
                        "ErickPerez_8",
                        "https://youtube.com/@ErickPerez_8",
                        "youtube"
                    )}

                </div>
            </div>
        </section>`;
    }

    card(label, value, link, iconType) {
        return `
        <a href="${link}" target="_blank"
            class="card-hover bg-white rounded-2xl p-8 shadow-lg flex items-center gap-4 hover:shadow-xl transition shadow-blue-100">

            <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    ${this.renderIcon(iconType)}
                </div>
            </div>

            <div class="text-left">
                <p class="text-gray-600 text-sm">${label}</p>
                <p class="text-gray-900 font-semibold break-all">${value}</p>
            </div>

        </a>`;
    }

    renderIcon(type) {
        switch (type) {
            case "mail":
                return `
                <svg viewBox="0 0 24 24" class="w-7 h-7" fill="none" stroke="#1f2933" stroke-width="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                    <path d="M4 7l8 6 8-6"></path>
                </svg>
                `;
            case "github":
                return `
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub" class="w-7 h-7 object-contain" />
                `;
            case "instagram":
                return `
                <img src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="Instagram" class="w-7 h-7 object-contain" />
                `;
            case "youtube":
                return `
                <svg viewBox="0 0 24 24" class="w-7 h-7">
                    <circle cx="12" cy="12" r="11" fill="#ff0000"></circle>
                    <polygon points="10,8 16,12 10,16" fill="#ffffff"></polygon>
                </svg>
                `;
            default:
                return `
                <div class="w-6 h-6 bg-gray-300 rounded-full"></div>
                `;
        }
    }
}

customElements.define("contact-section", ContactSection);
