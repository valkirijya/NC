"use strict";

let url =
  "https://valkirijya.github.io/Nj_Sd/img/sertificates/sertificates.json";
let mainFild = document.querySelector(".galary");
let btnLeft = document.querySelector(".left-btn");
let btnRight = document.querySelector(".right-btn");
let current = 0;

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    let outData = out;
    for (let i = 0; i < 20; i++) {
      let div = document.createElement("div");
      div.className = "certificate";
      let certificate = document.createElement("img");
      certificate.className = "certificate__img";
      certificate.setAttribute("src", `${outData[i].src}`);
      certificate.setAttribute("alt", `${outData[i].alt}`);
      let description = document.createElement("p");
      description.className = "description";
      description.innerText = `${outData[i].alt}`;

      if (i % 2 == 0) {
        div.style.transform = `rotate(${
          Math.round(Math.random() * 10) / 2
        }deg)`;
      } else {
        div.style.transform = `rotate(-${
          Math.round(Math.random() * 10) / 2
        }deg)`;
      }
      div.appendChild(certificate);
      div.appendChild(description);
      let row = document.querySelector(".certificates__grid");
      row.appendChild(div);
    }
    
    let mas = document.querySelectorAll(".certificate__img");
    const scalingCertificates = () => {
      const stepRight = () => {
        let foto = document.querySelector(".certificate__galary_img");
        if (current < mas.length - 1) current++;
        else current = 0;
        foto.src = mas[current];
      };
      btnRight.addEventListener("click", stepRight);

      const stepLeft = () => {
        let foto = document.querySelector(".certificate__galary_img");
        if (current > 0) current--;
        else current = mas.length - 1;
        foto.src = mas[current];
      };
      btnLeft.addEventListener("click", stepLeft);
    };
  })
  .catch((err) => {
    throw err;
  });
