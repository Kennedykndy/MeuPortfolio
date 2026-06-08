// ======================================
// ANIMAÇÃO DE SCROLL
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ======================================
// NAVBAR TRANSPARENTE / SCROLL
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(5,8,22,.85)";

    header.style.backdropFilter = "blur(20px)";

    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    header.style.background = "rgba(5,8,22,.50)";

    header.style.boxShadow = "none";
  }
});

// ======================================
// EFEITO PARALLAX NOS BLURS
// ======================================

const blur1 = document.querySelector(".blur-1");
const blur2 = document.querySelector(".blur-2");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blur1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;

  blur2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
});

// ======================================
// ANIMAÇÃO DOS CARDS
// ======================================

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .stat-card",
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// ======================================
// EFEITO DIGITAÇÃO HERO
// ======================================

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
  const text = heroTitle.textContent;

  heroTitle.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);

      index++;

      setTimeout(typeWriter, 35);
    }
  }

  setTimeout(typeWriter, 500);
}

// ======================================
// SCROLL SUAVE LINKS
// ======================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ======================================
// CONTADOR ESTATÍSTICAS
// ======================================

const statNumbers = document.querySelectorAll(".stat-card h3");

let statsStarted = false;

function animateStats() {
  if (statsStarted) return;

  const section = document.querySelector(".stats");

  if (!section) return;

  const top = section.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    statsStarted = true;

    statNumbers.forEach((item) => {
      const original = item.textContent;

      const finalNumber = parseInt(original);

      let count = 0;

      const speed = finalNumber / 50;

      const timer = setInterval(() => {
        count += speed;

        if (count >= finalNumber) {
          item.textContent = original;

          clearInterval(timer);
        } else {
          item.textContent = Math.floor(count) + "+";
        }
      }, 25);
    });
  }
}

window.addEventListener("scroll", animateStats);

window.addEventListener("load", animateStats);

// ======================================
// EFEITO BRILHO NO BOTÃO
// ======================================

const buttons = document.querySelectorAll(".btn-primary, .btn-nav");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    button.style.background = `radial-gradient(circle at ${x}px ${y}px,
                rgba(255,255,255,.35),
                rgba(255,255,255,.05)),
                linear-gradient(
                135deg,
                #3b82f6,
                #8b5cf6,
                #22d3ee)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.background = "linear-gradient(135deg,#3b82f6,#8b5cf6,#22d3ee)";
  });
});

// ======================================
// PRELOAD DA PÁGINA
// ======================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
