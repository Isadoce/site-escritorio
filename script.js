/* =====================================================
   FLÁVIA ORTÍZ ADVOCACIA
   JAVASCRIPT
   ===================================================== */


/* ================= MENU MOBILE ================= */

const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", function () {

    menu.classList.toggle("aberto");

});


/* ================= FECHAR MENU ================= */

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

    });

});


/* ================= DESTAQUE DO MENU ================= */

const secoes = document.querySelectorAll("section[id]");

const links = document.querySelectorAll("#menu a");

window.addEventListener("scroll", function () {

    let posicaoAtual = window.scrollY + 150;

    secoes.forEach(function (secao) {

        const inicio = secao.offsetTop;
        const fim = inicio + secao.offsetHeight;

        if (
            posicaoAtual >= inicio &&
            posicaoAtual < fim
        ) {

            links.forEach(function (link) {

                link.classList.remove("ativo");

                if (
                    link.getAttribute("href") ===
                    "#" + secao.id
                ) {

                    link.classList.add("ativo");

                }

            });

        }

    });

});


/* ================= ROLAGEM SUAVE ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
