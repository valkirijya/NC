let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");

function visible() {
  nav.style.visibility = "visible";
  nav.style.animation = "slide-in 1 1s";
}
function hidden() {
  nav.style.visibility = "hidden";
  nav.style.animation = "slide-out 1 1s";
}
function animation() {
  nav.addEventListener("mouseover", visible);
  nav.addEventListener("mouseout", hidden);
  hidden();
}

logo.addEventListener("mouseover", visible);
logo.addEventListener("mouseout", animation);