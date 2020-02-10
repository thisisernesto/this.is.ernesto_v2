const navSlide = () => {
  const burger = document.querySelector(".toggle-menu");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle for the navbar
    navBar.classList.toggle("nav-active");

    //Animations for the individual links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
  });
};

navSlide();

//Typing animation for the hero section
const typedTextSpan = document.querySelector(".hero-line-animated");

const textArray = ["Hi there, my name is"];
const typingDelay = 40;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
}

type();
