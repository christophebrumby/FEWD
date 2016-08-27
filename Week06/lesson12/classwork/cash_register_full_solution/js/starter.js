var total = 0;

function currencyFormat(pineapple) {
  return "$" + pineapple.toFixed(2);
}

function doSomething(e) {
  e.preventDefault();

  var entry = $("#newEntry").val();
  entry = parseFloat(entry);
  $("#entries").append("<tr><td></td><td>" + currencyFormat(entry) + "</td></tr>");

  total = total + entry;
  $(".total").html(currencyFormat(total));

  $("#newEntry").val("");
}

$("#entry").submit(doSomething);
