var total = 0;

document.querySelector("#zero").onclick = zero;
document.querySelector("#add5").onclick = add5;
document.querySelector("#add10").onclick = add10;
document.querySelector("#sub1").onclick = sub1;

function zero() {
  total = 0;
  document.querySelector("#result").innerHTML = total;
}

function add5() {
  total = total + 5;
  document.querySelector("#result").innerHTML = total;
}

function add10() {
  total = total + 10;
  document.querySelector("#result").innerHTML = total;
}

function sub1() {
  total = total - 1;
  document.querySelector("#result").innerHTML = total;
}
