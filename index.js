var numbers = [0, 1, 2, 3, 4, 5, 6];
var random1 = Math.random();
random1 = Math.floor(random1 * 6) + 1;
random2 = Math.random();
random2 = Math.random();
random2 = Math.floor(random2 * 5) + 1;
var diceNumber1 = numbers[random1];
var diceNumber2 = numbers[random2];
var diceNumber1string = diceNumber1.toString();
var diceNumber2string = diceNumber2.toString();

function putplayersdice() {
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + diceNumber1string + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + diceNumber2string + ".png");
}

function comparison() {
  if (diceNumber1 > diceNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (diceNumber1 < diceNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

function clickfunction() {
  putplayersdice();
  comparison();
}

document.querySelector("h1").onclick = function () {
  clickfunction();
};
