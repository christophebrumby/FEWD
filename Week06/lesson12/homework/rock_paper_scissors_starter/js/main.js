var botOptions = ["rock", "paper", "scissors"];

var humanScore = 0;

var computerScore = 0;

function humanRock (e) {
  e.preventDefault();
  var humanChoice = $("#rock").attr("id");
  var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  console.log(botChoice);
  compare(humanChoice, botChoice);
}

function humanPaper (e) {
  e.preventDefault();
  var humanChoice = $("#paper").attr("id");
  var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  console.log(botChoice);
  compare(humanChoice, botChoice);
}

function humanScissors (e) {
  e.preventDefault();
  var humanChoice = $("#scissors").attr("id");
  var botChoice = botOptions[Math.floor(Math.random() * botOptions.length)];
  console.log(botChoice);
  compare(humanChoice, botChoice);
}

function compare (humanChoice, botChoice) {

  if (humanChoice === botChoice) {

    $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>It's a draw!</p>");

  }

  else if ((humanChoice === "rock" && botChoice === "scissors") || (humanChoice === "paper" && botChoice === "rock") || (humanChoice === "scissors" && botChoice === "paper")) {

  $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>You win!</p>");

  humanScore = parseInt(humanScore, 10);

  humanScore = humanScore + 1;

  $("#humanScore").html(humanScore);

  }

  else if ((humanChoice === "rock" && botChoice === "paper") || (humanChoice === "paper" && botChoice === "scissors") || (humanChoice === "scissors" && botChoice === "rock")){

  $("#status").html("You have chosen <strong>" + humanChoice + "</strong> and.................. the Bot has chosen <strong>" + botChoice + "</strong>:<p>The Bot wins!</p>");

  computerScore = parseInt(computerScore, 10);

  computerScore = computerScore + 1;

  $("#computerScore").html(computerScore);

  }

}

$("#rock").click(humanRock);
$("#paper").click(humanPaper);
$("#scissors").click(humanScissors);
