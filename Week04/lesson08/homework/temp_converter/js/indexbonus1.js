function conversion() {

  var c = document.querySelector("#c").value;

  f = c * 9 / 5 + 32;
  document.querySelector("#f").innerHTML = f;

}

document.querySelector("#convert").onclick = conversion;
