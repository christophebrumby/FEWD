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

      window.setTimeout(function() {showRow();}, 1000);

      var rowCount = $("table tbody tr").length;

      console.log(rowCount);

      if (rowCount === 0) {

        transition("tbody");

      }

      else {

        transition("table tbody tr:eq(-1)");

      }

      total = total + amount;

      window.setTimeout(function() {showTotal();}, 1000);

      transition("#total");

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

function showTotal () {
  $("#total").html(currencyFormat(total));
}

function showRow () {
  $("#entries").append("<tr><td></td><td>" + currencyFormat(amount) + "</td></tr>");
}

function transition(newlyAdded) {
  return $(newlyAdded).slideUp(1000).fadeIn(3000);
}

$("#entry").submit(sumItAll);
