let btn = document.querySelectorAll(".mini-navigation");
let miniMenu = document.querySelector(".mini-navigation-menu");
console.log(btn);

const menuOpener = () => {
  miniMenu.classList.toggle("visible");
};
btn[0].addEventListener("click", menuOpener);
miniMenu.addEventListener("click", menuOpener);


const scrollChecking = () => {
  for (i = 0; i < btn.length; i++) {
    if (document.documentElement.clientHeight / 3 < window.pageYOffset) {
      btn[i].style.visibility = "visible";
      btn[i].style.animation = "opacity-in 1 .6s";
    } else {
      btn[i].style.visibility = "hidden";
      btn[i].style.animation = "opacity-out 1 .6s";
    }
  }
};
scrollChecking();
window.addEventListener("scroll", scrollChecking);
