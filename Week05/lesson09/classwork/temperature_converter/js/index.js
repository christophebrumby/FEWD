
function convert() {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var conversion, scale;

  if (c !=="") { /* aka: the user filled out celsius */
    conversion = c * 9/5 + 32;
    scale = "F";
  } else {
    conversion = (f - 32) * 5/9;
    scale = "C";
  }

  function switchBackground(thing) {
    document.querySelector("body").style.backgroundColor = thing;
  }

// change the background color based on value of c
if (c <= 0) {
  // change background to blue
  switchBackground("blue");
} else if (c > 0 && c <= 18 ) {
  // change background to gray
  switchBackground("gray");
} else if (c > 18 && c <= 30 ) {
  // change background to orange
  switchBackground("orange");
} else {
  // change background to red
  switchBackground("red");
}

  document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale;
}

document.querySelector("#submit").onclick = convert;
