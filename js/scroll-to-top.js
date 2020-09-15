let btn = document.querySelector(".scroll-top-btn");

const check = () => {
  if (document.documentElement.clientHeight / 3 < window.pageYOffset) {
    btn.setAttribute("style", "visibility: visible;");
  } else {
    btn.setAttribute("style", "visibility: hidden;");
  }
}
check();
window.addEventListener("scroll", check);