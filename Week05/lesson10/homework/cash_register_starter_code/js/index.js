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

  $("#entries").append("<tr><td></td><td>" + '$' + amount.toFixed(2) + "</td></tr>");

  total = total + amount;

  $("#total").html("$" + total.toFixed(2));

  $("#newEntry").val("");

}

$("#entry").submit(sumItAll)
