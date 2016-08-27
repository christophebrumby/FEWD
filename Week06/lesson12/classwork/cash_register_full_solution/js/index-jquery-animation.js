var total = 0;

function validateEntry(entry) {
  return (parseInt(entry) * 0) === 0;
}

function currencyFormat(number) {
  return "$" + number.toFixed(2);
}

function appendAndAdd(entry) {
  var currency = currencyFormat(entry);
  $("#entries").append("<tr class='line-item'><td></td><td>" + currency + "</td></tr>");

  total = total + entry;
  $(".total").addClass("hidden");

  window.setTimeout(function() {
    $("#entries tr:last-child").addClass("visible");
    $(".total").removeClass("hidden");
    $(".total").html(currencyFormat(total));
  }, 800);
}

function enter(e) {
  e.preventDefault(); /* by default, submitting a form causes the page to refresh, so this little bit of code prevents that */

  var entry = $("#newEntry").val();
  var validEntry = validateEntry(entry);

  if (validEntry) {
    $("footer").removeClass("error").html("");
    appendAndAdd(parseFloat(entry));
    $("#newEntry").val("");
  } else {
    $("footer").addClass("error").html("Please enter a valid number");
    $("#newEntry").val("");
  }
}

$("#entry").submit(enter)
