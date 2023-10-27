console.log({ document });

// Esercizio 7

const cambioTitolo = function () {
  let cambioTesto = document.querySelector(".titolo h1");
  cambioTesto.textContent = "Nuovo Shop Online Smartphones4Ever";
};

cambioTitolo();

// Esercizio 8

const coloreBody = function () {
  let color = document.querySelector("body");
  color = document.body.style.backgroundColor = `rgb(114,250,250)`;
};
coloreBody();

// Esercizio 9

const cambioIndirizzo = function () {
  let indirizzo = document.querySelector(".indirizzo");
  indirizzo.innerText = "Via Milano n°82, 20019, Milano, Italia ";
};

cambioIndirizzo();

// Esercizio 10

const addClass = function () {
  let tuttiGliA = document.querySelector(".contenitoreOggetti a");
  for (let i = 0; i < tuttiGliA.length; i++) {
    let soloA = tuttiGliA[i];
    soloA.classList.add("link");
  }
};

// Esercizio 11

// function visibility () {
//     const img = querySelectorAll("img")
//     for (let i = 0; i < img.length; i++)  {
//         img[i].classList.toggle("Hidden")
//     }      
    
//     }

let allImg = document.querySelectorAll("img");
const toggleImg = function () {
  for (let i = 0; i < allImg.length; i++) {
    let oneImg = allImg[i];
    oneImg.onclick = deleteImg;
  }
};
const deleteImg = function () {
  for (let i = 0; i < allImg.length; i++) {
    let oneImg = allImg[i];
    oneImg.classList.add("visibilità-invisibilità");
  }
};

toggleImg();

// Esercizio 12

const coloriRandom = function () {
  const prezzi = document.querySelectorAll(".contenitoreOggetti h4");
  for (let i = 0; i < prezzi.length; i++) {
    prezzi[i].style.color = `rgb(${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)}`;
  }
};
coloriRandom();
