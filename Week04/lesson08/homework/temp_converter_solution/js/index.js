// VERSION 1:

// var c = 50;
// var f = c * 9/5 + 32;
//
// console.log(f + "°F");


// VERSION 2:

// function convert() {
//   var c = parseFloat(document.querySelector("#c").value);
//   var f = c * 9/5 + 32;
//
//   document.querySelector("h3").innerHTML = "Result: " + f + "°F";
// }
//
// document.querySelector("#submit").onclick = convert;


// VERSION 3:

// function convert() {
//   var c = document.querySelector("#c").value;
//   var f = document.querySelector("#f").value;
//   var result, scale;
//
//   if (f === "") { /* if (c !== "") */
//     result = c * 9/5 + 32;
//     scale = "F";
//   } else {
//     result = (f - 32) * 5/9;
//     scale = "C";
//   }
//
//   document.querySelector("h3").innerHTML = "Result: " + result + "°" + scale;
// }
//
// document.querySelector("#submit").onclick = convert;


// VERSION 4:

function convert() {
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;
  var result, scale;

  if (f === "") { /* if (c !== "") */
    result = c * 9/5 + 32;
    scale = "F";
  } else {
    result = (f - 32) * 5/9;
    scale = "C";
  }

  document.querySelector("#" + scale.toLowerCase()).value = result;
}

function clear() {
  document.querySelector("#c").value = "";
  document.querySelector("#f").value = "";
}

document.querySelector("#submit").onclick = convert;
document.querySelector("#clear").onclick = clear;
