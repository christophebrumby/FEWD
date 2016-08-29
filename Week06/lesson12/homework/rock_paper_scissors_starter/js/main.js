var botOptions = ["rock", "paper", "scissors"];

var humanScore = 0;

var computerScore = 0;

function botChoice() {
  var botOptions = ["rock", "paper", "scissors"];
  return botOptions[Math.floor(Math.random() * botOptions.length)];
}

function humanRock () {
  // var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  compare("rock", botChoice());
}

function humanPaper () {
  // var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  compare("paper", botChoice());
}

function humanScissors () {
  // var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  compare("scissors", botChoice());
}

function compare (humanChoice, botChoice) {

  if (humanChoice === botChoice) {

    $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>It's a draw!</p>");

  }

  else if ((humanChoice === "rock" && botChoice === "scissors") || (humanChoice === "paper" && botChoice === "rock") || (humanChoice === "scissors" && botChoice === "paper")) {

    $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>You win!</p>");

    humanScore++;

    // humanScore++ is equivalent to humanScore = humanScore + 1;

    $("#humanScore").html(humanScore);

  }

  else if ((humanChoice === "rock" && botChoice === "paper") || (humanChoice === "paper" && botChoice === "scissors") || (humanChoice === "scissors" && botChoice === "rock")){

    $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>The Bot wins!</p>");

    computerScore++;

    $("#computerScore").html(computerScore);

  }

}

$("#rock").click(humanRock);
$("#paper").click(humanPaper);
$("#scissors").click(humanScissors);
