const player1 = prompt("Write your name, Player 1");
const player2 = prompt("Write your name, Player 2");

document.querySelector(".name").innerHTML = player1;
document.querySelector(".name-1").innerHTML = player2;
alert(`${player1} its your turn`);

let currentPlayer = true;
let currentScore1 = 0;
let currentScore2 = 0;

const player1Element = document.querySelector(".main")
const player2Element = document.querySelector(".main-1")

function rollDice() {
  const diceNumber = Math.ceil(Math.random() * 6);
  console.log(diceNumber);
  const image = (document.getElementsByClassName("images")[0]
    .querySelector("img").src = `./assets/${diceNumber}.png`);
  console.log(image);

  if (diceNumber !== 1) {
    if (currentPlayer) {
      currentScore1 += diceNumber;
      document.querySelector("#currentPlayer1").innerHTML = currentScore1;
    } else {
      currentScore2 += diceNumber;
      document.querySelector("#currentPlayer2").innerHTML = currentScore2;
    }
  } else {
    if (currentPlayer) {
      currentScore1 = 0;
      document.querySelector("#currentPlayer1").innerHTML = currentScore1;
    } else {
      currentPlayer = 0;
      document.querySelector("#currentPlayer2").innerHTML = currentScore2;
    }
    currentPlayer = !currentPlayer;
    player1Element.classList.toggle("active");
    player2Element.classList.toggle("active");
  }
}

function hold(){
  if(currentPlayer){
    let total1 = document.querySelector('#totalScore1')
    total1.innerHTML = +total1.innerHTML + currentScore1
    currentScore1 = 0
    document.querySelector('#currentPlayer1').innerHTML = currentScore1
    if(total1.innerHTML >=100){
      document.querySelector('.gameArea1').innerHTML = `<h1> Winner is ${player1} </h1>`
    }
  } else{
    let total2 = document.querySelector('#totalScore2')
    total2.innerHTML = +total2.innerHTML + currentScore2
    currentScore2 = 0
    document.querySelector('#currentPlayer2').innerHTML = currentScore2
    if(total2.innerHTML >=100){
      document.querySelector('.gameArea2').innerHTML = `<h1> Winner is ${player2} </h1>`
    }
  }
  currentPlayer = !currentPlayer;
    player1Element.classList.toggle("active");
    player2Element.classList.toggle("active");
}

function newGame(){
    // Reset total scores and current scores for both players
    document.getElementById("totalScore1").textContent = 0;
    document.getElementById("totalScore2").textContent = 0;
    document.getElementById("currentPlayer1").textContent = 0;
    document.getElementById("currentPlayer2").textContent = 0;
    document.querySelector(".images img").src = "./assets/1.png"; 

}