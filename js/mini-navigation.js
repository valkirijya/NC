// "use strict"; Why dont work?!!!!!
let burger = document.querySelector(".burger");
let scroll = document.querySelector(".scroll-top-btn");
let navigationButtons = [burger, scroll];
let miniMenu = document.querySelector(".mini-navigation-menu");

function menuOpener() {
  if (miniMenu.hidden) {
    console.log("click");
    miniMenu.removeAttribute("hidden");
    miniMenu.style.animation = "fade-in 1 1s";
    let clouse = function () {
      console.log("other");
      setTimeout(() => (miniMenu.hidden = "true"), 500);
      miniMenu.style.animation = "fade-out 1 1s";
      document.removeEventListener("click", clouse);
    };
    setTimeout(() => document.addEventListener("click", clouse), 500);
  } else {
    miniMenu.style.animation = "fade-out 1 1s";
    setTimeout(() => (miniMenu.hidden = "true"), 500);
  }
}

function scrollChecking() {
  let hiddenStatus = pageYOffset < document.documentElement.clientHeight;
  for (i = 0; i < navigationButtons.length; i++) {
    navigationButtons[i].hidden = hiddenStatus;
    if (hiddenStatus) {
      navigationButtons[i].style.animation = "fade-out 1 .6s";
      burger.removeEventListener("click", menuOpener);
    } else {
      navigationButtons[i].style.animation = "fade-in 1 .6s";
      burger.addEventListener("click", menuOpener);
    }
  }
}
scrollChecking();
window.addEventListener("scroll", scrollChecking);

scroll.onclick = function () {
  window.scrollTo(pageXOffset, 0);
};
