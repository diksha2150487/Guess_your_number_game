// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (ev) {
//     console.log(ev);
//     if (ev.target.id == "grey") {
//       body.style.backgroundColor = ev.target.id;
//     }
//     if (ev.target.id == "white") {
//       body.style.backgroundColor = ev.target.id;
//     }
//     if (ev.target.id == "yellow") {
//       body.style.backgroundColor = ev.target.id;
//     }
//     if (ev.target.id == "blue") {
//       body.style.backgroundColor = ev.target.id;
//     }
//   });
// });
// ********************* Project-1 End  ****************************
// const form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");
//   if (height === "" || height < 0 || isNaN(height)) {
//     results.textContent = `Please provide a valid height: ${height}`;
//   } else if (weight === "" || weight <= 0 || isNaN(weight)) {
//     results.textContent = `Please provide a valid weight: ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
// ************* Project -2 END*******************
// const clock = document.querySelector("#clock");
// setInterval(function () {
//   let date = new Date();
//   console.log(date.toLocaleDateString())
//   clock.textContent = date.toLocaleTimeString();
//   //   console.log(date.toLocaleTimeString());
// }, 1000);
// ************** Project-3 EnD*************

const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number more than 1");
  } else if (guess > 100) {
    alert("Please enter lese than 100 ");
  } else {
    prevGuess.push(guess);
  }
  if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`Game Over .Random number was ${randomNumber}`);
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congrats! You got it!`);
    newGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML += `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame() {
  userInput.value = "";
  userInput.setAttribute(`disable`, "");
  p.classList.add("button");
  p.innerHTML = `<h2 id ="new game">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector(`#newGame`);
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingGuess.innerHTML = "${11-numGuess}";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
