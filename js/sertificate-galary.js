let mainFild = document.querySelector(".galary");
let url =
  "https://valkirijya.github.io/Nj_Sd/img/sertificates/sertificates.json";
let current = 0;

let width = document.documentElement.clientWidth;
let scale;

if (540 < width) {
  scale = 1.8;
} else if (420 < width < 540) {
  scale = 1.4;
} else if (330 < width < 420) {
  scale = 1.1;
} else {
  scale = 1;
}

// const stepRight = () => {
//   let foto = document.querySelector(".fild > div > img");
//   if (current < mas.length - 1) current++;
//   else current = 0;
//   foto.src = mas[current];
// };
// butRight.addEventListener("click", stepRight);

// const stepLeft = () => {
//   let foto = document.querySelector(".fild > div > img");
//   if (current > 0) current--;
//   else current = mas.length - 1;
//   foto.src = mas[current];
// };
// butLeft.addEventListener("click", stepLeft);

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);
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
        div.style.transform = `rotate(${Math.round(Math.random() * 10)/2}deg)`;
      } else {
        div.style.transform = `rotate(-${Math.round(Math.random() * 10)/2}deg)`;
      }
      div.appendChild(certificate);
      div.appendChild(description);
      let row = document.querySelector(".certificates__img");
      row.appendChild(div);
    }
    let img = document.querySelectorAll(".certificate");
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener("mousedown", setOver);
      function setOver() {
        img[i].style = `transform: scale(${scale}); z-index: 20; transition: 0.5s;`;
        img[i].addEventListener("mouseup", setOut);
        function setOut() {
          if (i % 2 == 0) {
            img[i].style = `transform: rotate(-${Math.round(
              Math.random() * 10
            )}deg); z-index: 1; transition: 0.2s;`;
          } else {
            img[i].style = `transform: rotate(${Math.round(
              Math.random() * 10
            )}deg); z-index: 1; transition: 0.2s;`;
          }
        }
      }
    }
  })
  .catch((err) => {
    throw err;
  });
