var humanScore = 0;
var computerScore = 0;

function play (humanPlay) {
  var computerPlay = "paper";
  var humanWins = (humanPlay === "rock" && computerPlay === "scissors") || (humanPlay === "paper" && computerPlay === "rock") || (humanPlay === "scissors" && computerPlay === "paper");

  if (humanPlay === computerPlay) {
    console.log("you tied");
  }  else if (humanWins) {
    console.log("you win");
    humanScore++;
  }  else {
    console.log("computer wins");
    computerScore++;
  }
}

function playRock () {
  play("rock");
}

function playPaper () {
  play("paper");
}

function playScissors () {
  play("scissors");
}

$("#rock").click(playRock);
$("#paper").click(playPaper);
$("#scissors").click(playScissors);
