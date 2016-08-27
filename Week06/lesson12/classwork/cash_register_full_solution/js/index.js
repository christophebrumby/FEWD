var total = 0;

function validateEntry(entry) {
  return (parseInt(entry) * 0) === 0;
}

function currencyFormat(number) {
  return "$" + number.toFixed(2);
}

function appendAndAdd(entry) {
  var currency = currencyFormat(entry);

  var newRow = document.createElement("tr");
  newRow.innerHTML = "<td></td><td>" + currency + "</td>";
  document.querySelector("#entries").appendChild(newRow);

  total = total + entry
  document.querySelector(".total").innerHTML = currencyFormat(total);
}

function enter(e) {
  e.preventDefault(); /* by default, submitting a form causes the page to refresh, so this little bit of code prevents that */

  var entry = document.querySelector("#newEntry").value;
  var validEntry = validateEntry(entry);
  var footer = document.querySelector("footer");
  var input = document.querySelector("#newEntry");

  if (validEntry) {
    footer.classList.remove("error");
    footer.innerHTML = "";

    appendAndAdd(parseFloat(entry));
    input.value = "";
  } else {
    footer.classList.add("error");
    footer.innerHTML = "Please enter a valid number";

    input.value = "";
  }
}

document.querySelector("#entry").onsubmit = enter;
