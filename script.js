// ========================================
// MENU MOBILE
// ========================================

const menuMobile = document.getElementById("menuMobile");
const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ========================================
// ANIMAÇÃO SUAVE AO ENTRAR NAS SEÇÕES
// ========================================

const elementos = document.querySelectorAll(
    ".sobre-conteudo, .card, .detalhe, .contato"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("aparecer");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach(elemento => {
    observer.observe(elemento);
});
