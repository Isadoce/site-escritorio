:root {
    --navy: #06365d;
    --navy-dark: #032947;
    --gold: #c9a45c;
    --gold-light: #e2c98d;
    --white: #ffffff;
    --off-white: #f7f7f5;
    --text: #25313b;
    --gray: #70777d;

    --title-font: "Cormorant Garamond", serif;
    --body-font: "Montserrat", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    color: var(--text);
    background: var(--white);
    overflow-x: hidden;
}

img {
    max-width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: min(1180px, 90%);
    margin: auto;
}


/* =========================
   HEADER
========================= */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(3, 41, 71, 0.97);
    border-bottom: 1px solid rgba(201, 164, 92, 0.35);
}

.nav-container {
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: white;
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.logo span {
    font-family: var(--title-font);
    font-size: 28px;
    letter-spacing: 2px;
}

.logo small {
    color: var(--gold-light);
    font-size: 9px;
    letter-spacing: 4px;
    margin-top: 7px;
}

.nav {
    display: flex;
    gap: 32px;
}

.nav a {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    padding: 8px 0;
}

.nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: 0.3s;
}

.nav a:hover::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 27px;
    height: 2px;
    background: white;
    margin: 6px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--navy-dark);
    overflow: hidden;
}

.hero-image {
    position: absolute;
    inset: 0;
    background-image: url("justica.jpg");
    background-size: cover;
    background-position: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            90deg,
            rgba(3, 41, 71, 0.96) 0%,
            rgba(3, 41, 71, 0.80) 38%,
            rgba(3, 41, 71, 0.20) 75%,
            rgba(3, 41, 71, 0.05) 100%
        );
}

.hero-content {
    position: relative;
    z-index: 2;
    padding-top: 80px;
}

.hero-text {
    max-width: 620px;
    color: white;
}

.eyebrow,
.section-label {
    color: var(--gold);
    font-size: 11px;
    letter-spacing: 4px;
    font-weight: 600;
    margin-bottom: 22px;
}

.hero h1 {
    font-family: var(--title-font);
    font-size: clamp(60px, 7vw, 100px);
    line-height: 0.9;
    font-weight: 500;
    margin-bottom: 30px;
}

.hero h1 span {
    display: block;
    color: var(--gold-light);
}

.hero-description {
    max-width: 520px;
    line-height: 1.9;
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 35px;
}


/* =========================
   BOTÕES
========================= */

.button {
    display: inline-block;
    padding: 16px 30px;
    background: var(--gold);
    color: var(--navy-dark);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    transition: 0.3s;
}

.button:hover {
    background: white;
    transform: translateY(-2px);
}


/* =========================
   SEÇÕES
========================= */

.section {
    padding: 110px 0;
}

.section-heading {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 60px;
}

.section-heading h2,
.about-text h2,
.contact-text h2 {
    font-family: var(--title-font);
    font-size: clamp(44px, 5vw, 68px);
    font-weight: 500;
    line-height: 0.95;
    color: var(--navy-dark);
}

.section-heading h2 span,
.about-text h2 span,
.contact-text h2 span {
    color: var(--gold);
}

.section-heading > p:last-child {
    color: var(--gray);
    line-height: 1.8;
    margin-top: 22px;
}

.gold-line {
    width: 70px;
    height: 2px;
    background: var(--gold);
    margin: 28px 0;
}


/* =========================
   SOBRE
========================= */

.about {
    background: var(--off-white);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image::after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    border: 1px solid var(--gold);
    left: -20px;
    bottom: -20px;
    z-index: 0;
}

.about-image img {
    width: 100%;
    height: 560px;
    object-fit: cover;
    position: relative;
    z-index: 1;
}

.about-text {
    padding-left: 20px;
}

.about-text p:not(.section-label) {
    color: var(--gray);
    line-height: 1.9;
    font-size: 14px;
    margin-bottom: 20px;
}

.text-link {
    color: var(--navy);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
}


/* =========================
   ÁREAS
========================= */

.areas {
    background: white;
}

.areas-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #ddd;
}

.area-card {
    background: white;
    min-height: 300px;
    padding: 42px;
    position: relative;
    transition: 0.3s;
}

.area-card:hover {
    background: var(--navy);
    color: white;
}

.area-number {
    color: var(--gold);
    font-family: var(--title-font);
    font-size: 27px;
    margin-bottom: 35px;
}

.area-card h3 {
    font-family: var(--title-font);
    font-size: 31px;
    font-weight: 500;
    margin-bottom: 15px;
}

.area-card p {
    color: var(--gray);
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 25px;
}

.area-card:hover p {
    color: rgba(255,255,255,0.75);
}

.area-card a {
    color: var(--gold);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}


/* =========================
   FRASE
========================= */

.quote-section {
    min-height: 530px;
    position: relative;
    display: flex;
    align-items: center;
    background-image: url("balanca.png");
    background-size: cover;
    background-position: center;
}

.quote-overlay {
    position: absolute;
    inset: 0;
    background: rgba(3, 41, 71, 0.94);
}

.quote-content {
    position: relative;
    color: white;
    max-width: 850px;
    text-align: center;
}

.quote-mark {
    color: var(--gold);
    font-family: var(--title-font);
    font-size: 100px;
    line-height: 0.4;
}

.quote-content h2 {
    font-family: var(--title-font);
    font-size: clamp(40px, 5vw, 65px);
    font-weight: 400;
    line-height: 1.05;
}

.quote-content h2 span {
    color: var(--gold-light);
}


/* =========================
   DIFERENCIAIS
========================= */

.differentials {
    background: var(--off-white);
}

.differential-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.differential {
    border-top: 1px solid var(--gold);
    padding-top: 25px;
}

.differential .icon {
    color: var(--gold);
    font-family: var(--title-font);
    font-size: 27px;
    margin-bottom: 25px;
}

.differential h3 {
    font-family: var(--title-font);
    font-size: 27px;
    font-weight: 500;
    color: var(--navy-dark);
    margin-bottom: 14px;
}

.differential p {
    color: var(--gray);
    font-size: 13px;
    line-height: 1.8;
}


/* =========================
   CONTATO
========================= */

.contact {
    background: var(--navy-dark);
    color: white;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.contact-text h2 {
    color: white;
}

.contact-text > p:not(.section-label) {
    color: rgba(255,255,255,0.7);
    line-height: 1.8;
    margin-bottom: 30px;
}

.contact-image {
    display: flex;
    justify-content: center;
}

.contact-image img {
    max-height: 430px;
    width: 100%;
    object-fit: contain;
}


/* =========================
   FOOTER
========================= */

.footer {
    background: #021f36;
    color: white;
    padding: 45px 0;
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.footer-logo {
    display: flex;
    flex-direction: column;
}

.footer-logo strong {
    font-family: var(--title-font);
    font-size: 25px;
    letter-spacing: 2px;
}

.footer-logo span {
    color: var(--gold);
    font-size: 8px;
    letter-spacing: 3px;
}

.footer-links {
    display: flex;
    gap: 25px;
}

.footer-links a {
    color: rgba(255,255,255,0.7);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-content > p {
    color: rgba(255,255,255,0.45);
    font-size: 9px;
}


/* =========================
   RESPONSIVO
========================= */

@media (max-width: 900px) {

    .nav {
        position: absolute;
        top: 88px;
        left: 0;
        width: 100%;
        background: var(--navy-dark);
        flex-direction: column;
        gap: 0;
        padding: 20px 5%;
        display: none;
    }

    .nav.active {
        display: flex;
    }

    .nav a {
        padding: 16px 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .menu-toggle {
        display: block;
    }

    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .areas-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .differential-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-text {
        padding-left: 0;
    }

    .contact-image {
        order: -1;
    }
}


@media (max-width: 600px) {

    .nav-container {
        height: 75px;
    }

    .logo span {
        font-size: 22px;
    }

    .hero {
        min-height: 760px;
    }

    .hero-content {
        padding-top: 100px;
    }

    .hero h1 {
        font-size: 62px;
    }

    .section {
        padding: 80px 0;
    }

    .about-image img {
        height: 400px;
    }

    .areas-grid {
        grid-template-columns: 1fr;
    }

    .differential-grid {
        grid-template-columns: 1fr;
    }

    .area-card {
        min-height: auto;
    }

    .quote-section {
        min-height: 450px;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        flex-wrap: wrap;
        justify-content: center;
    }
}
