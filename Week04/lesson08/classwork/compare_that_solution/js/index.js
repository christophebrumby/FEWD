function compare() {
  var comparison;
  var a = document.querySelector("#a").value;
  var b = document.querySelector("#b").value;

  // Add these two lines in at the end to show importance of data types ( "8" > "10" //true )
  a = parseInt(a);
  b = parseInt(b);

  if (a < b) {
    comparison = "<";
  } else if (a > b) {
    comparison = ">";
  } else if (a === b) {
    comparison = "===";
  } else {
    comparison = "N/A";
  }

 document.querySelector("#comparison").innerHTML = comparison;
}

document.querySelector("#submit").onclick = compare;
