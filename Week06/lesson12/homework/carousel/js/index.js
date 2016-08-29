var images = ["animal1", "animal2", "animal3", "animal4", "animal5", "animal6"];

var position = 0;

function imageSource(slideNumber) {
  $("img").attr("src","./images/animals/" + images[slideNumber] + ".jpg");
}

function showPrevious () {

  if (position > 1) {
    position--;
    imageSource(position);
    $("#forward").show();
  }

  else if (position === 1) {
    position--;
    imageSource(position);
    $("#back").hide();
  }

}

function showNext () {

  if (position < images.length - 1)  {
    position++;
    imageSource(position);
    $("#forward").show();
    $("#back").show();
  }

  if (position === images.length - 1) {
    position;
    imageSource(position);
    $("#forward").hide();
    $("#back").show();
  }

}

$("#back").click(showPrevious);

$("#forward").click(showNext);
