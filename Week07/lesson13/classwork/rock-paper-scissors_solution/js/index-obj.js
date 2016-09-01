var humanScore = 0;
var computerScore = 0;

var outcomes = {
  "rock": {
    "paper": "lose",
    "rock": "draw",
    "scissors": "win"
  },
  "paper": {
    "paper": "draw",
    "rock": "win",
    "scissors": "lose"
  },
  "scissors": {
    "paper": "win",
    "rock": "lose",
    "scissors": "draw"
  }
}

/* See good intro to JS objects here: http://javascriptplayground.com/blog/2012/06/introduction-to-javascript-objects/ */

var getComputerPlay = function() {
  var plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function play(humanPlay) {
  var computerPlay = getComputerPlay();
  var result = outcomes[humanPlay][computerPlay];

  $("#selectedChoices").html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");

  if (result === "draw") {
    $("#status").html("<p>You tied. :|</p>");
  } else if (result === "win") {
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
