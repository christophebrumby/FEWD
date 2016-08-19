// User types in a city name
// User clicks on Update button to submit
// Word is matched with an image
// Background image changes accordingly


// Use the below to prevent the default behavior of the browser which in this case is to refresh the current page.
//
// function switchCity(event){
//   event.preventDefault();
// }
//


function switchCity(event) {

  event.preventDefault();

  var city = document.querySelector("#city-type").value;
  var citylow = city.toLowerCase();
  var citylowtrim = $.trim(citylow);

  if (citylowtrim === "austin") {
    $("body").css("background-image", "url(./images/austin.jpg)");
  }

  else if (citylowtrim === "la" || citylowtrim === "los angeles" || citylowtrim === "lax") {
    $("body").css("background-image", "url(./images/la.jpg)");
  }

  else if (citylowtrim === "london" || citylowtrim === "ldn") {
    $("body").css("background-image", "url(./images/london.jpg)");
  }

  else if (citylowtrim === "nyc" || citylowtrim === "new york" || citylowtrim === "new york city" || citylowtrim === "newyork" || citylowtrim === "newyorkcity") {
    $("body").css("background-image", "url(./images/nyc.jpg)");
  }

  else if (citylowtrim === "sf" || citylowtrim === "san fran" || citylowtrim === "san franscisco") {
    $("body").css("background-image", "url(./images/sf.jpg)");
  }

  else if (citylowtrim === "sydney") {
    $("body").css("background-image", "url(./images/sydney.jpg)");
  }

  else {
    $("body").css("background-image", "url(./images/citipix_skyline.jpg)");
  }

}

$("#submit-btn").click(switchCity);
