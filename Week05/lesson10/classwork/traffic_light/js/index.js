$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);
$('#clearButton').click(clearLights);

function illuminateRed() {
  clearLights();
  $('#stopLight').css("backgroundColor", "red");
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css("backgroundColor", "yellow");
}

function illuminateGreen() {
  clearLights();
  $('#goLight').css("backgroundColor", "green");
}

function clearLights() {
  $('#stopLight').css("backgroundColor", "black");
  $('#slowLight').css("backgroundColor", "black");
  $('#goLight').css("backgroundColor", "black");
}

/*function turnOff (buttonNode) {
  buttonNode.style.backgroundColor = "black";
}

function fancyClearLights() {
 document.querySelectorAll('.bulb').forEach(turnOff);
}*/
