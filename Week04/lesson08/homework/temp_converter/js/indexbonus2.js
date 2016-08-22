function conversion() {

  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;

  if ((f === null || f === "") && (c === null || c === "")) {
      document.querySelector("#result").innerHTML = "Please fill one of the fields above.";
  }

  else if (f === null || f === "") {
    f = c * 9 / 5 + 32;
    document.querySelector("#result").innerHTML = Math.round(f*10)/10+"°F";
  }

  else if (c === null || c === "") {
    c = (f - 32) * 5 / 9;
    document.querySelector("#result").innerHTML = Math.round(c*10)/10+"°C";
  }

  else {
    document.querySelector("#result").innerHTML = "Please only fill one of the fields above.";
  }

}

document.querySelector("#convert").onclick = conversion;
