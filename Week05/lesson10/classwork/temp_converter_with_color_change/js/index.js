function switchBackground(thingy) {
  document.querySelector("body").className = thingy;

  //the above is the nicer way of doing it, but here's the pure JS way below (commented out):
  // document.querySelector("body").style.backgroundColor = thingy;
  // if (color === "blue") {
  //   document.querySelector("body").style.color = "white"
  // }
}

function convert() {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var result, scale;

  if (c !== "") { /* check that SOMETHING has been typed into the celsius input by ensure that its value is NOT NOTHING (an empty string "" is how NOTHING/no value gets encoded) */
    result = c * 9/5 + 32;
    scale = "F";
  } else {
    result = (f - 32) * 5/9;
    scale = "C";
  }

  if (scale === "C") {
    c = result;
  }

  if (c <= 0) {
    switchBackground("blue");
  } else if (c > 0 && c <= 18) {
    switchBackground("gray");
  } else if (c > 18 && c <= 30) {
    switchBackground("orange");
  } else {
    switchBackground("red");
  }

  document.querySelector("#" + scale.toLowerCase()).value = result;
}

function clear() {
  document.querySelector("#c").value = "";
  document.querySelector("#f").value = "";
}

document.querySelector("#submit").onclick = convert;
document.querySelector("#clear").onclick = clear;
