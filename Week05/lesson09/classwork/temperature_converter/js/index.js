
function convert() {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var conversion, scale;

  if (c !=="") {
    conversion = c * 9/5 + 32;
    scale = "F";
  } else {
    conversion = (f - 32) * 5/9;
    scale = "C";
    c =  conversion;
  }

  function switchBackground(thing) {
    document.querySelector("body").style.backgroundColor = thing;
  }

if (c <= 0) {
  switchBackground("blue");
} else if (c > 0 && c <= 18 ) {
  switchBackground("gray");
} else if (c > 18 && c <= 30 ) {
  switchBackground("orange");
} else {
  switchBackground("red");
}

  document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale;
}

document.querySelector("#submit").onclick = convert;
