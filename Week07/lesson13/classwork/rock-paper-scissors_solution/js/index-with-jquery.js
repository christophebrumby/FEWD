var humanScore = 0;
var computerScore = 0;

var getComputerPlay = function() {
  var plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function play(humanPlay) {
  var computerPlay = getComputerPlay();
  var humanWins = (humanPlay === "rock" && computerPlay === "scissors") || (humanPlay === "paper" && computerPlay === "rock") || (humanPlay === "scissors" && computerPlay === "paper");

  $("#selectedChoices").html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");

  if (humanPlay === computerPlay) {
    $("#status").html("<p>You tied. :|</p>");
  } else if (humanWins) {
    $("#status").html("<p>You win! :)</p>");
    humanScore++;
  } else {
    $("#status").html("<p>You lose. :(</p>");
    computerScore++;
  }

  $("#humanScore").html(humanScore);
  $("#computerScore").html(computerScore);
}

function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

$("#rock").click(playRock);
$("#paper").click(playPaper);
$("#scissors").click(playScissors);
