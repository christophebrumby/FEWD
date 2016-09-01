var humanScore = 0;
var computerScore = 0;

function getComputerPlay() {
  var plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function youLose() {
  document.querySelector("#status").innerHTML = "<p>You lose. :(</p>";
  computerScore++;
}

function youWin() {
  document.querySelector("#status").innerHTML = "<p>You win! :)</p>";
  humanScore++;
}

function play(humanPlay) {
  var computerPlay = getComputerPlay();

  document.querySelector("#selectedChoices").innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";

  if (humanPlay === computerPlay) {
    document.querySelector("#status").innerHTML = "<p>You tied. :|</p>";
  } else if (humanPlay === "rock") {
    if (computerPlay === "paper") {
      youLose();
    } else if (computerPlay === "scissors") {
      youWin();
    }
  } else if (humanPlay === "paper") {
    if (computerPlay === "rock") {
      youWin();
    } else if (computerPlay === "scissors") {
      youLose();
    }
  } else if (humanPlay === "scissors") {
    if (computerPlay === "rock") {
      youLose();
    } else if (computerPlay === "paper") {
      youWin();
    }
  }
  document.querySelector("#humanScore").innerHTML = humanScore;
  document.querySelector("#computerScore").innerHTML = computerScore;
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

document.querySelector("#rock").onclick = playRock;
document.querySelector("#paper").onclick = playPaper;
document.querySelector("#scissors").onclick = playScissors;
