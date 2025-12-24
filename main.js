const elements = document.querySelectorAll(".fade-in");
const navSelector = "navbar-component nav";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getNavHeight = () => {
    const nav = document.querySelector(navSelector);
    if (!nav) return 0;
    return Math.ceil(nav.getBoundingClientRect().height);
};

const updateNavHeightCSS = () => {
    document.documentElement.style.setProperty("--nav-height", `${getNavHeight()}px`);
};

updateNavHeightCSS();

window.addEventListener("load", () => {
    document.body.classList.remove("is-loading");
    updateNavHeightCSS();
});

window.addEventListener("resize", () => {
    requestAnimationFrame(updateNavHeightCSS);
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.15 }
);

elements.forEach(el => observer.observe(el));

(function initAnchorNavigation() {
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    if (!navLinks.length) return;

    const targetIds = [...new Set(
        navLinks
            .map(link => {
                const href = link.getAttribute("href") || "";
                if (!href.startsWith("#") || href === "#") return null;
                return href.slice(1);
            })
            .filter(Boolean)
    )];

    const sections = targetIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

    if (!sections.length) return;

    const setActiveLink = (id) => {
        if (!id) return;
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === `#${id}`);
        });
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href") || "";
            if (!href.startsWith("#") || href === "#") return;

            const targetId = href.slice(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            event.preventDefault();

            const navHeight = getNavHeight();
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: Math.max(Math.round(top), 0),
                behavior: reduceMotion ? "auto" : "smooth"
            });

            setActiveLink(targetId);

            try {
                history.pushState(null, "", href);
            } catch (error) {
                console.warn("No se pudo actualizar el historial:", error);
            }
        });
    });

    const intersectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        { threshold: 0.55 }
    );

    sections.forEach(section => intersectionObserver.observe(section));

    const initializeActiveState = () => {
        const hash = window.location.hash || "";
        if (hash.startsWith("#")) {
            const normalized = hash.slice(1);
            if (sections.some(section => section.id === normalized)) {
                setActiveLink(normalized);
                return;
            }
        }

        setActiveLink(sections[0].id);
    };

    initializeActiveState();
    window.addEventListener("popstate", initializeActiveState);
})();
