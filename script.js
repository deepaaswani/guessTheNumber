
"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//console.log(document.querySelector(".message").textContent);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No Number");
  }
  //when player wins
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high" : "Too Low";
      displayMessage(guess > secretNumber ? "Too high" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      //document.querySelector(".message").textContent = "You Lost The Game";
      displayMessage("You Lost The Game");
    }
  }
  //when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //   }
  // }
  //when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = "20";
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage('"Start guessing..."');
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
