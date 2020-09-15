let nav = document.querySelector(".navigation");
let logo = document.querySelector(".logo");

function navMenu(){
    nav.classList.toggle("visible");
}

logo.addEventListener("click", navMenu);