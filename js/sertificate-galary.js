let url =
  "https://valkirijya.github.io/Nj_Sd/img/sertificates/sertificates.json";
let btnLeft = document.querySelector(".left-btn");
let btnRight = document.querySelector(".right-btn");
let row = document.querySelector(".certificates__grid");
let galary = document.querySelector(".certificate__galary");
let galaryFild = document.querySelector(".certificate__galary_fild");
let closeBtn = document.querySelector(".close-btn");
let current = 0;

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);
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
      galaryDiv.className = "certificate";
      let certificateGalary = document.createElement("img");
      certificateGalary.className = "certificate__img";
      certificateGalary.setAttribute("src", `${outData[i].src}`);
      certificateGalary.setAttribute("alt", `${outData[i].alt}`);
      let descriptionGalary = document.createElement("p");
      descriptionGalary.className = "description";
      descriptionGalary.innerText = `${outData[i].alt}`;
      galaryDiv.append(certificateGalary);
      galaryDiv.append(descriptionGalary);
      galaryFild.append(galaryDiv);
    }

    let certificates = row.querySelectorAll(".certificate");
    let galaryCertificates = galaryFild.querySelectorAll(".certificate");
    console.log(certificates);

    console.log(galaryCertificates);

    for (let i = 0; i < certificates.length; i++) {
      galaryCertificates[i].hidden = true;
      certificates[i].addEventListener("click", () => {
        galary.hidden = false;
        galaryCertificates[i].hidden = false;
        galaryCertificates[i].classList.add("scaled-certificate");
      });
    }

    closeBtn.addEventListener("click", () => {
      galary.hidden = true;
    });

    const stepRight = () => {
      let foto = document.querySelector(".scaled-certificate");
      if (current < galaryCertificates.length - 1) current++;
      else current = 0;
      galaryCertificates[current].hidden = false;
      galaryCertificates[current - 1].hidden = true;
    };
    btnRight.addEventListener("click", stepRight);

    const stepLeft = () => {
      let foto = document.querySelector(".scaled-certificate");
      if (current > 0) current--;
      else current = galaryCertificates.length - 1;
      galaryCertificates[current].hidden = false;
      galaryCertificates[current + 1].hidden = true;
    };
    btnLeft.addEventListener("click", stepLeft);
  })
  .catch((err) => {
    throw err;
  });
