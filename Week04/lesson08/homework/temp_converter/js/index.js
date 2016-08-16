function conversion() {

  var c = document.querySelector("#c").value;
  var f = c * 9 / 5 + 32;

}

document.querySelector("#convert").onclick = conversion;



// --- SOLUTION ---
//
// PART I
//
// var c = 0;
// var f = c * 9/5 + 32;
//
// console.log (f + "°F");
//
// ------------------
//
// PART II
//
// 1) Get data
// 2) Modify the data
// 3) Action/moment in time for modification to occur
//
// get the value of the input >> inside the function
// get the button
//
// function convert() {
//   var c = document.querySelector("#c").value;
//   var f = parseFloat(c) * 9 / 5 + 32;
//
//   document.querySelector("h3").innerHTML = "Result: " + f + "°F";
// }
//
// document.querySelector("#submit").onclick = convert;

// Make sure you use parseFloat to convert the 'c' value pulled by default as a text string from the DOM into a number.

// Include console.log(f); into the function and go to the HTML page, click the Submit button to see the result of the calculation in the console.
//
// ------------------
//
// PART III
// //
// function convert() {
//   var c = document.querySelector("#c").value;
//   var f = document.querySelector("#f").value;
//   var conversion, scale;
//
//   if (c !=="") { /* aka: the user filled out celsius */
//     // convert celsius to fahrenheit
//     conversion = c * 9/5 + 32;
//     scale = "F";
//   } else {
//     conversion = (f - 32) * 5/9;
//     scale = "C";
//     // convert farenheit to celsius
//   }
//
//   document.querySelector("h3").innerHTML = "Result: " + conversion + "°" + scale;
// }
//
// document.querySelector("#submit").onclick = convert;
