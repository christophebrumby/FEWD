// console.log("hello");
// to check that the .js file is correctly hooked up to the HTML

function doSomething(val) {
  val.preventDefault();
  // console.log(val);
  // console.log("puppy");
  var city = $("#city-type").val();
  // console.log(city.val());  allows to pull the value off the DOM
  // console.log($("#city-type").attr("id")); where .attr allows you to grab any of the HTML attributes on a specific DOM node.
  // console.log($("body").attr("class"));
  city = city.trim().toLowerCase();
  // city = city.toLowerCase();
  // city = city.trim();

  if (city === "london") {
    // console.log("they chose London");
    $("body").attr("class", "london");
  }

  else if (city === "new york" || city === "nyc" || city === "ny"  || city === "new york city") {
    // console.log("they chose New York");
    $("body").attr("class", "nyc");
  }

  else if (city === "sf" || city === "san fran" || city === "san francisco") {
    // console.log("they chose San Francisco");
    $("body").attr("class", "sf");
  }

  else if (city === "los angeles" || city === "la") {
    // console.log("they chose Los Angeles");
    $("body").attr("class", "la");
  }

  else if (city === "austin") {
    // console.log("they chose Austin");
    $("body").attr("class", "austin");
  }

  else if (city === "sydney") {
    // console.log("they chose Sydney");
    $("body").attr("class", "sydney");
  }

  $("#city-type").val("");

}

$("form").submit(doSomething);

// doSomething(); // will simple trigger the function regardless of any event happening.

// which is equivalent to document.querySelector("form").onsubmit = doSomething;

// TIP: If there is only one input field in a form, pressing ENTER will by default submit the form.

// ALL EVENTS IN JAVASCRIPT HAVE DEFAULT BEHAVIOURS!!!
