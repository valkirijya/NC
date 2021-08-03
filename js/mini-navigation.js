// "use strict"; Why dont work?!!!!!

let burgerButton = document.querySelector(".burger");
let scrollTopButton = document.querySelector(".scroll-top-btn");
let navigationButtons = [burgerButton, scrollTopButton];
let miniMenu = document.querySelector(".mini-navigation-menu");

function menuOpener() {
  miniMenu.classList.toggle("visible");
  if (miniMenu.classList.contains("visible")) {
    miniMenu.style.animation = "fade-in 1 1s";
  } else {
    miniMenu.style.animation = "fade-out 1 1s";
  }
}
burgerButton.addEventListener("click", menuOpener);

function scrollChecking() {
  for (i = 0; i < navigationButtons.length; i++) {
    if (document.documentElement.clientHeight / 3 < window.pageYOffset) {
      navigationButtons[i].style.visibility = "visible";
      navigationButtons[i].style.animation = "fade-in 1 .6s";
    } else {
      navigationButtons[i].style.visibility = "hidden";
      navigationButtons[i].style.animation = "fade-out 1 .6s";
    }
  }
}
scrollChecking();
window.addEventListener("scroll", scrollChecking);
