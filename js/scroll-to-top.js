let btn = document.querySelector(".scroll-top-btn");

const check = () => {
  if (document.documentElement.clientHeight / 3 < window.pageYOffset) {
    btn.style.visibility= "visible";
    btn.style.animation = "opacity-in 1 .7s";
  } else {
    btn.style.visibility = "hidden";
    btn.style.animation = "opacity-out 1 .7s";
  }
}
check();
window.addEventListener("scroll", check);