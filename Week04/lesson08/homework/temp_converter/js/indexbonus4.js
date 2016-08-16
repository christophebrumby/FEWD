function conversion() {

  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;

  if ((f === null || f === "") && (c === null || c === "")) {
      document.querySelector("#alert").innerHTML = "Please fill one of the fields above.";
      document.querySelector("#c").style.borderColor = "red";
      document.querySelector("#f").style.borderColor = "red";
  }

  else if ((f === null || f === "") && (c < 0)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "160px";
  }

  else if ((f === null || f === "") && (c < 10)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "120px";
  }

  else if ((f === null || f === "") && (c < 20)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "80px";
  }

  else if ((f === null || f === "") && (c < 30)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "40px";
  }

  else if (f === null || f === "") {
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "0px";
  }

  else if ((c === null || c === "") & (f < 32)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "160px";
  }

  else if ((c === null || c === "") & (f < 50)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "120px";
  }

  else if ((c === null || c === "") & (f < 68)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "80px";
  }

  else if ((c === null || c === "") & (f < 86)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "40px";
  }

    else if (c === null || c === "") {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "0px";
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
  document.querySelector("#thermo").style.paddingTop = "200px";
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
