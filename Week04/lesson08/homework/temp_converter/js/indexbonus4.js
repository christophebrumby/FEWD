function conversion() {

  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;

  if ((f === null || f === "") && (c === null || c === "")) {
      document.querySelector("#alert").innerHTML = "Please fill one of the fields above.";
      document.querySelector("#alert").style.border = "solid 1px red";
      document.querySelector("#alert").style.backgroundColor = "white";
      document.querySelector("#alert").style.padding = "5px";
      document.querySelector("#c").style.borderColor = "red";
      document.querySelector("#f").style.borderColor = "red";
  }

  else if ((f === null || f === "") && (c < 0)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "160px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://blogldc.s3.amazonaws.com/wp-content/uploads/2015/01/2015_01_16_coldphotos1.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((f === null || f === "") && (c < 10)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "120px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((f === null || f === "") && (c < 20)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "80px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((f === null || f === "") && (c < 30)){
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "40px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if (f === null || f === "") {
    f = c * 9 / 5 + 32;
    document.querySelector("#f").value = Math.round(f*10)/10+"°F";
    document.querySelector("#thermo").style.paddingTop = "0px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://img.fotocommunity.com/eruption-0076bbc1-8b12-41ef-99ce-f4ea39b80229.jpg?height=400')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((c === null || c === "") & (f < 32)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "160px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://blogldc.s3.amazonaws.com/wp-content/uploads/2015/01/2015_01_16_coldphotos1.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((c === null || c === "") & (f < 50)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "120px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((c === null || c === "") & (f < 68)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "80px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else if ((c === null || c === "") & (f < 86)) {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "40px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://www.vietnam-tour.biz/wp-content/uploads/2016/05/Dalat-and-Central-Highlands-seem-to-return-to-nice-weather-in-October.jpg')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

    else if (c === null || c === "") {
    c = (f - 32) * 5 / 9;
    document.querySelector("#c").value = Math.round(c*10)/10+"°C";
    document.querySelector("#thermo").style.paddingTop = "0px";
    document.querySelector(".wrapper").style.backgroundImage = "url('http://img.fotocommunity.com/eruption-0076bbc1-8b12-41ef-99ce-f4ea39b80229.jpg?height=400')";
    document.querySelector(".wrapper").style.backgroundSize = "cover";
  }

  else {
    document.querySelector("#alert").innerHTML = "Please only fill <span id='emphasize'>one</span> of the fields above. Click 'Reset' to clear both fields.";
    document.querySelector("#alert").style.borderTop = "solid 1px red";
    document.querySelector("#alert").style.borderBottom = "solid 1px red";
    document.querySelector("#alert").style.backgroundColor = "white";
    document.querySelector("#alert").style.padding = "5px";
    document.querySelector("#c").style.borderColor = "red";
    document.querySelector("#f").style.borderColor = "red";
  }

}

document.querySelector("#convert").onclick = conversion;




function clear() {
  document.querySelector("#c").value = "";
  document.querySelector("#f").value = "";
  document.querySelector("#alert").innerHTML = "";
  document.querySelector("#alert").style.border = "";
  document.querySelector("#alert").style.backgroundColor = "";
  document.querySelector("#alert").style.padding = "";
  document.querySelector("#c").style.borderColor = "grey";
  document.querySelector("#f").style.borderColor = "grey";
  document.querySelector("#thermo").style.paddingTop = "200px";
  document.querySelector(".wrapper").style.backgroundImage = "";
}

document.querySelector("#reset").onclick = clear;




function clearAlert() {
      document.querySelector("#alert").innerHTML = "";
      document.querySelector("#alert").style.border = "";
      document.querySelector("#alert").style.backgroundColor = "";
      document.querySelector("#alert").style.padding = "";
      document.querySelector("#c").style.borderColor = "grey";
      document.querySelector("#f").style.borderColor = "grey";
}

document.querySelector("#c").onfocus = clearAlert;




function clearAlert() {
      document.querySelector("#alert").innerHTML = "";
      document.querySelector("#alert").style.border = "";
      document.querySelector("#alert").style.backgroundColor = "";
      document.querySelector("#alert").style.padding = "";
      document.querySelector("#c").style.borderColor = "grey";
      document.querySelector("#f").style.borderColor = "grey";
}

document.querySelector("#f").onfocus = clearAlert;
