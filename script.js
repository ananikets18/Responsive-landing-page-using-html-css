const menu = document.querySelector(".nav__menu");
const toggle_menu = document.querySelector("#nav_toggle");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// *===== GSAP ANIMATION ===== *//;

// *===== NAVBAR ===== */
gsap.from(".logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 10,
});
gsap.from(".nav__link", {
  opacity: 0,
  duration: 0.75,
  delay: 2.1,
  stagger: 0.2,
});
// *===== MAIN ===== */
gsap.from(".title", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".subtitle", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});

gsap.from(".btn__start_trial", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".btn__get__demo", {
  opacity: 0,
  duration: 1,
  delay: 2.3,
  y: 20,
});

gsap.from(".works", {
  opacity: 0,
  duration: 0.88,
  delay: 2.6,
  y: 10,
});

gsap.from(".works_logo", {
  opacity: 0,
  duration: 1,
  delay: 2.4,
  y: 10,
  stagger: 0.2,
});

gsap.from(".flex-item-2", {
  opacity: 0,
  duration: 0.88,
  delay: 2.8,
  y: 20,
});