let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");

function visible() {
  nav.classList.add("visible", "animation-slide");
// nav.classList.remove("animation-opasity");
}
function hidden() {
  nav.classList.remove("visible", "animation-slide");
//   nav.classList.add("animation-opasity");
}
logo.addEventListener("mouseover", visible);
logo.addEventListener("mouseout", hidden);
