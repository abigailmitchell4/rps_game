var rockImage = "images/rock1.png";
var paperImage = "images/paper1.png";
var scissorsImage = "images/scissors1.png"

var choices = document.querySelectorAll(".rps-image");
var uChoice = document.getElementById('user-choice');
var score = document.getElementById('score');
var result = document.getElementById('result');
var modal = document.querySelector('.modal');
// var showUser = document.getElementById('user-choice');
var restart = document.getElementById('restart');
var scoreboard = {
  player: 0,
  computer: 0
};
//TODO:
//display user and comp choice, create place to display them
//logic to see who won
//display winner
// Play game
function play(i) {
  restart.style.display = 'inline-block';
  var userChoice = i.target.id;
  var imgUserChoice = i.target.src;
  
  var compChoice = getCompChoice();
  showUChoice(imgUserChoice);
  debugger
  var winner = determineWinner(userChoice, compChoice);
  showWinner(winner);
};


function getCompChoice(){
  var randomNum = Math.floor(Math.random()*3);
  if (randomNum === 0){
    return 'rock';
  } else if (randomNum === 1){
    return 'paper';
  } else {
    return 'scissors';
  };  
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

function showUChoice(c){
  // document.getElementsByClassName("rps-image").style.display = "hidden";
  document.getElementById('user-choice').src = c;
};


function showWinner(winner) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = "You Win!";
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
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
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
};

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  };
};

// const playGame = () => {
//   var userChoice = getUserChoice('bomb');
//   var compChoice = getComputerChoice();
//   console.log('You threw: ' + userChoice);
//   console.log('The computer threw: ' + compChoice);
//   console.log(determineWinner(userChoice, compChoice));
// };

// playGame();
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", play);
};

window.addEventListener('click', clearModal);
// for choices.forEach(choice => choice.addEventListener('click', play));

restart.addEventListener('click', restartGame);



