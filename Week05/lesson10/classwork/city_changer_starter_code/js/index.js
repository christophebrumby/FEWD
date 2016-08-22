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

  var city = $("#city-type").val();
  $("#city-type").val("");
  city = city.toLowerCase().trim();

  if (city === "austin") {
    $("body").css("background-image", "url(./images/austin.jpg)");
  }

  else if (city === "la" || city === "los angeles" || city === "lax") {
    $("body").css("background-image", "url(./images/la.jpg)");
  }

  else if (city === "london" || city === "ldn") {
    $("body").css("background-image", "url(./images/london.jpg)");
  }

  else if (city === "nyc" || city === "new york" || city === "new york city" || city === "newyork" || city === "newyorkcity") {
    $("body").css("background-image", "url(./images/nyc.jpg)");
  }

  else if (city === "sf" || city === "san fran" || city === "san franscisco") {
    $("body").css("background-image", "url(./images/sf.jpg)");
  }

  else if (city === "sydney") {
    $("body").css("background-image", "url(./images/sydney.jpg)");
  }

  else {
    $("body").css("background-image", "url(./images/citipix_skyline.jpg)");
  }

}

$("#submit-btn").click(switchCity);
