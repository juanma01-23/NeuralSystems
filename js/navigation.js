const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

const pageLinks = document.querySelectorAll(
    'a[href$=".html"]:not([target="_blank"])'
);

pageLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const destination = link.getAttribute("href");

        if (
            !destination ||
            destination.startsWith("#") ||
            link.hostname !== window.location.hostname ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) {
            return;
        }

        event.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(() => {
            window.location.href = destination;
        }, 350);

    });

});