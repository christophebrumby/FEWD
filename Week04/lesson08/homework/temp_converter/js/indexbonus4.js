function conversion() {

  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;

  if ((f === null || f === "") && (c === null || c === "")) {
      document.querySelector("#alert").innerHTML = "Please fill one of the fields above.";
      document.querySelector("#c").style.borderColor = "red";
      document.querySelector("#f").style.borderColor = "red";
  }

  else if (f === null || f === "") {
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
  }

  else if (c === null || c === "") {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
  }

  else {
    document.querySelector("#alert").innerHTML = "Please only fill ONE of the fields above. Click 'Reset' to clear both fields.";
    document.querySelector("#c").style.borderColor = "red";
    document.querySelector("#f").style.borderColor = "red";
  }

}

document.querySelector("#convert").onclick = conversion;




function clear() {
  document.querySelector("#c").value = "";
  document.querySelector("#f").value = "";
  document.querySelector("#alert").innerHTML = "";
  document.querySelector("#c").style.borderColor = "grey";
  document.querySelector("#f").style.borderColor = "grey";
}

document.querySelector("#reset").onclick = clear;




function clearAlert() {
      document.querySelector("#alert").innerHTML = "";
      document.querySelector("#c").style.borderColor = "grey";
      document.querySelector("#f").style.borderColor = "grey";
}

document.querySelector("#c").onfocus = clearAlert;




function clearAlert() {
      document.querySelector("#alert").innerHTML = "";
      document.querySelector("#c").style.borderColor = "grey";
      document.querySelector("#f").style.borderColor = "grey";
}

document.querySelector("#f").onfocus = clearAlert;
