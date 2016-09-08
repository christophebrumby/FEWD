function submitForm(e) {
  e.preventDefault();
  var data = {};
	data.name = $("#name").val();
	data.insult1 = $("#insult1").val();
	data.insult2 = $("#insult2").val();
	data.insult3 = $("#insult3").val();

  // var data = {
  //   "name": $("#name").val(),
  //   "insult1": $("#insult1").val()
  // }

  // var serverUrl = $(this).attr("action");
  // var serverUrl = $("form").attr("action");
  var serverUrl = "http://10.1.7.230:3000";
  var request = $.post(serverUrl, data);

  function doWhenDoneRequesting(response) {
    console.log(response);
    $("main").html("<h1>" + response.name + " says:</h1>" + "<p>" + response.insult + ".</p>");
  }

  request.done(doWhenDoneRequesting);
}

$("form").submit(submitForm);

// http://www.pangloss.com/seidel/shake_rule.html
