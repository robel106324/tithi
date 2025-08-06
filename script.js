// Scroll reveal
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you for contacting Montaha Khan!");
  this.reset();
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

toggleBtn.textContent = body.classList.contains("light-mode")
  ? "🌙 Dark Mode"
  : "☀️ Light Mode";

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});

// Typing Text Animation
const roles = [
  "Building Engineer",
  "Researcher",
  "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("subtitle");

function typeEffect() {
  const currentWord = roles[wordIndex];
  const currentText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
