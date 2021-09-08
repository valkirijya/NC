let url =
  "https://valkirijya.github.io/Nj_Sd/img/sertificates/sertificates.json";
let btnLeft = document.querySelector(".left-btn");
let btnRight = document.querySelector(".right-btn");
let row = document.querySelector(".certificates__grid");
let galary = document.querySelector(".certificate__galary");
let closeBtn = document.querySelector(".close-btn");
let current = 0;

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    let outData = out;
    for (let i = 0; i < outData.length; i++) {
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
      div.append(certificate);
      div.append(description);
      row.append(div);

      let galaryDiv = document.createElement("div");
      galaryDiv.className = "galary-certificate";
      galaryDiv.setAttribute("hidden", "true");
      let certificateGalary = document.createElement("img");
      certificateGalary.className = "certificate__img";
      certificateGalary.setAttribute("src", `${outData[i].src}`);
      certificateGalary.setAttribute("alt", `${outData[i].alt}`);

      galaryDiv.append(certificateGalary);
      galary.append(galaryDiv);
    }

    let certificates = row.querySelectorAll(".certificate");
    let galaryCertificates = galary.querySelectorAll(".galary-certificate");
    for (let i = 0; i < certificates.length; i++) {
      certificates[i].addEventListener("click", () => {
        galary.style.visibility = "visible";
        galary.style.animation = "fade-in 1 1s";
        galaryCertificates[i].hidden = false;
      });
      closeBtn.addEventListener("click", () => {
        galary.style.visibility = "hidden";
        galary.style.animation = "fade-out 1 1s";
        galaryCertificates[i].hidden = true;
      });
    }

    const stepRight = () => {
      for (let i = 0; i < certificates.length; i++) {
        if (!galaryCertificates[i].hasAttribute("hidden")) current = i;
      }
      if (current < certificates.length - 1) {
        ++current;
        galaryCertificates[current].hidden = false;
        galaryCertificates[current - 1].hidden = true;
      } else {
        current = 0;
        galaryCertificates[current].hidden = false;
        galaryCertificates[certificates.length - 1].hidden = true;
      }
    };
    const stepLeft = () => {
      for (let i = 0; i < certificates.length; i++) {
        if (!galaryCertificates[i].hasAttribute("hidden")) current = i;
      }
      if (current > 0) {
        --current;
        galaryCertificates[current].hidden = false;
        galaryCertificates[current + 1].hidden = true;
      } else {
        current = certificates.length - 1;
        galaryCertificates[current].hidden = false;
        galaryCertificates[0].hidden = true;
      }
    };
    btnRight.addEventListener("click", stepRight);
    btnLeft.addEventListener("click", stepLeft);
  })
  .catch((err) => {
    throw err;
  });
