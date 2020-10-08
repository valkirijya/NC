let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");

function visible() {
  nav.style.visibility = "visible";
  nav.style.animation = "slide-in 1 1s";
}
function hidden() {
  nav.addEventListener("mouseover", function () {
    nav.style.visibility = "visible";
    nav.style.animation = "none";
  });
  nav.addEventListener("mouseout", function () {
    nav.style.visibility = "hidden";
    nav.style.animation = "slide-out 1 1s";
  });
  nav.style.visibility = "hidden";
  nav.style.animation = "slide-out 1 1s";
}
logo.addEventListener("mouseover", visible);
logo.addEventListener("mouseout", hidden);
