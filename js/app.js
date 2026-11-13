const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const particleContainer = document.querySelector(".hero-particles");

if (particleContainer) {

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDelay = Math.random() * 9 + "s";

        particle.style.animationDuration = (6 + Math.random() * 8) + "s";

        particleContainer.appendChild(particle);

    }

}

const hero = document.querySelector(".hero");
const heroBackground = document.querySelector(".hero-background");

if (hero && heroBackground) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 12;
        const moveY = (y / rect.height - 0.5) * 12;

        heroBackground.style.transform =
            `scale(1.05) translate(${moveX}px, ${moveY}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroBackground.style.transform = "scale(1.03) translate(0, 0)";

    });

}

const indexLinks = document.querySelectorAll(".entity-index a");

const entitySections = document.querySelectorAll(
    "#registro-historico, #simbolismo, #fuentes"
);

if (indexLinks.length && entitySections.length) {

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                indexLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.entity-index a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    }, {
        rootMargin: "-25% 0px -55% 0px"
    });

    entitySections.forEach((section) => {
        sectionObserver.observe(section);
    });
}