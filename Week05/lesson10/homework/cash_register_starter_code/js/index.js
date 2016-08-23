// Initial total is 0
// User types in an amount
// User presses 'return' key to submit new value
// Cash registrer shows every new value with $ sign and two decimals as a new line on the receipt
// Calculates new incremental total accordingly with $ sign and two decimals and shows the result under TOTAL

var total = 0;

function sumItAll (event) {

  event.preventDefault();

  amount = $("#newEntry").val();

  amount = parseFloat(amount);

  if ($.isNumeric(amount)) {

      $("#entries").append("<tr><td></td><td>" + currencyFormat(amount) + "</td></tr>");

      total = total + amount;

      $("#total").html(currencyFormat(total));

  }

  else {

      $("#alert").html("* Please enter a number.");

  }

  $("#newEntry").val("");

  $("#newEntry").keypress(clearAlert);

}

function currencyFormat(number) {
  return "$" + number.toFixed(2);
}

function clearAlert() {
  $("#alert").html("");
}


$("#entry").submit(sumItAll)
