// function switchGray() {
//   document.querySelector("body").style.backgroundColor = 'gray';
//   document.querySelector("body").style.color = 'white';
// }
//
// function switchWhite() {
//   document.querySelector("body").style.backgroundColor = 'white';
//   document.querySelector("body").style.color = 'black';
// }

 // *****************************

// var isOn = true;
//
// function toggle() {
//   if (isOn) {
//       document.querySelector("body").className = "dark";
//       isOn = false;
//   } else {
//     document.querySelector("body").className = "";
//     isOn = true;
//   }
// }

// ***************************

function toggle() {
  document.querySelector("body").classList.toggle("dark");
}

document.querySelector("#grayButton").onclick = toggle;
document.querySelector("#whiteButton").onclick = toggle;
