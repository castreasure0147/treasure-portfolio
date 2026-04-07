// =====================
// PAGE LOADER
// =====================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// =====================
// SCROLL ANIMATION
// =====================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// =====================
// INITIAL HIDDEN STATE
// =====================
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s ease";
});

// =====================
// NAVBAR SCROLL EFFECT
// =====================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "black";
  } else {
    navbar.style.background = "rgba(0,0,0,0.5)";
  }
});

// =====================
// ACTIVE NAV LINK
// =====================
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =====================
// CONTACT FORM ALERT
// =====================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Message sent successfully ✅");

  form.reset();
});