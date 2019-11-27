var rockImage = "images/rock-small.png";
var paperImage = "images/paper-small.png";
var scissorsImage = "images/scissors-small.png";

var showChoice = document.querySelectorAll(".show-choice");
var choices = document.querySelectorAll(".rps-image");
var image = document.querySelectorAll(".image");
var score = document.getElementById('score');
var result = document.getElementById('result');
var modal = document.querySelector('.modal');
var img = document.querySelectorAll('.img');
var restart = document.getElementById('restart');
var scoreboard = {
  player: 0,
  computer: 0
};



function play(i) {
 
  var userChoice = i.target.id;
  var imgUserChoice = i.target.src;
  var compChoice = getCompChoice();
  showCChoice(compChoice);
  showUChoice(imgUserChoice);
  var winner = determineWinner(userChoice, compChoice);
  showWinner(winner);
};


function getCompChoice() {
  var randomNum = Math.floor(Math.random()*3);
  if (randomNum === 0){
    return 'rock';
  } else if (randomNum === 1){
    return 'paper';
  } else {
    return 'scissors';
  };  
};

function showCChoice(i) {
  if (i === 'rock') {  
    document.getElementById("comp-choice").src = rockImage;
    document.getElementById('comp-choice').previousElementSibling.innerHTML = "Computer Choice"
  } else if (i === 'paper') {
    document.getElementById("comp-choice").src = paperImage;
    document.getElementById('comp-choice').previousElementSibling.innerHTML = "Computer Choice"
  } else {
    document.getElementById("comp-choice").src = scissorsImage;
    document.getElementById('comp-choice').previousElementSibling.innerHTML = "Computer Choice"
  }
};

function showUChoice(c) {
  document.getElementById('user-choice').src = c;
  document.getElementById('user-choice').previousElementSibling.innerHTML = "User Choice"
};

function determineWinner(u, c) {
  if (u === c) {
    return 'draw';
  } else if (u === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (u === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (u === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
};


function showWinner(winner) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = "You Win!";
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = "You Lose!";
  } else {
    result.innerHTML = "It's a Tie!";
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  };
  
  // Restart game

function restartGame() {
  img.src = ""
  debugger
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
  
};



for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", play);
};

restart.addEventListener('click', restartGame);



