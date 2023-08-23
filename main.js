const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const cards = document.querySelectorAll(".container-team > div");

let cardIndex = 0;

nextButton.onclick = function () {
  cards[cardIndex].classList.remove("show");

  if (cardIndex >= cards.length -1) {
    cardIndex = 0; 
  } else {
    cardIndex = cardIndex + 1;
  }

  cards[cardIndex].classList.add("show");
};

prevButton.onclick = function () {
    cards[cardIndex].classList.remove("show");

  if (cardIndex <= 0) {
    cardIndex = cards.length - 1;
  } else {
    cardIndex = cardIndex - 1;
  }
  
  cards[cardIndex].classList.add("show");
};

