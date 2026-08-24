const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");


// ================================
// MENU MOBILE
// ================================

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = siteNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    document.querySelectorAll(".site-nav a").forEach(link => {

        link.addEventListener("click", () => {

            siteNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ================================
// MENU TRANSPARENTE → FUNDO AZUL
// AO ROLAR A PÁGINA
// ================================

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.position = "fixed";
            header.style.background = "rgba(2, 31, 54, 0.97)";
            header.style.backdropFilter = "blur(8px)";

        } else {

            header.style.position = "absolute";
            header.style.background = "transparent";
            header.style.backdropFilter = "none";

        }

    });

}


// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================

const animatedElements = document.querySelectorAll(
    ".practice-item, .value, .intro-image, .intro-right, .statement-content, .contact-copy"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});
