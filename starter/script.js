"use strict";

// Consts
const MAX_TRIES = 7;
const MIN_GUESS = 1;
const MAX_GUESS = 100;

// DOM
const messageDisplay = document.querySelector(".message");
const triesDisplay = document.querySelector(".tries");
const numberDisplay = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const highscoreDisplay = document.querySelector(".highscore");

// Stats 0
let secretNumber;
let triesLeft = MAX_TRIES;
let highScore = 0;
let gameWon = false;

// Functions
function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * (MAX_GUESS - MIN_GUESS + 1)) + MIN_GUESS;
  console.log(secretNumber);
}

function updateMessage(message) {
  messageDisplay.textContent = message;
}

function updateTriesDisplay() {
  triesDisplay.textContent = triesLeft;
}

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < MIN_GUESS || guess > MAX_GUESS) {
    updateMessage(`⛔ Selecione um número válido! (${MIN_GUESS} a ${MAX_GUESS})`);
  } else if (guess === secretNumber) {
    handleWin(guess);
  } else {
    updateMessage(guess < secretNumber ? `🔼 Meu número é maior que ${guess}!` : `🔽 Meu número é menor que ${guess}!`);
    triesLeft--;
    updateTriesDisplay();
    if (triesLeft === 0) {
      handleLoss();
    }
  }
}

// Win
function handleWin(guess) {
  updateMessage(`🎉 Parabéns, meu número era ${guess}!`);
  document.querySelector("body").style.backgroundColor = "#60b347";
  numberDisplay.textContent = secretNumber;
  numberDisplay.style.width = "180px";
  againButton.removeAttribute("hidden");
  checkButton.setAttribute("hidden", "hidden");
  gameWon = true;
  if (triesLeft > highScore) {
    highScore = triesLeft;
    highscoreDisplay.textContent = highScore;
  }
}

// Loss
function handleLoss() {
  updateMessage("⛔ Você perdeu!");
  document.querySelector("body").style.backgroundColor = "#f55858";
  againButton.removeAttribute("hidden");
  gameWon = false;
}

// Check
checkButton.addEventListener("click", checkGuess);

// Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (!gameWon) {
      checkGuess();
    }
  }
});

// Again
againButton.addEventListener("click", function () {
  resetGame();
});

// Reset
function resetGame() {
  triesLeft = MAX_TRIES;
  updateTriesDisplay();
  generateSecretNumber();
  updateMessage("Comece a adivinhar...");
  numberDisplay.textContent = "?";
  guessInput.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  againButton.setAttribute("hidden", "hidden");
  checkButton.removeAttribute("hidden");
  gameWon = false;
}

// Start
generateSecretNumber();
updateTriesDisplay();
updateMessage("Comece a adivinhar...");
