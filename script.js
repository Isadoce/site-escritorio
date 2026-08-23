// ================================
// MENU MOBILE
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ================================
// FECHAR MENU AO CLICAR
// ================================

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ================================
// HEADER AO ROLAR
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(2, 31, 54, 0.98)";
    } else {
        header.style.background = "rgba(3, 41, 71, 0.97)";
    }

});


// ================================
// ANIMAÇÃO DOS ELEMENTOS
// ================================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(".area-card, .differential, .about-text, .contact-text")
    .forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });
