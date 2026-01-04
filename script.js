// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Typing Animation
const texts = ["Web Developer 💻", "Problem Solver 🧠", "Tech Enthusiast 🚀"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
      typingElement.textContent = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
      typingElement.textContent = currentText;
    }

    if (j === texts[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();
