var images = ["animal1", "animal2", "animal3", "animal4", "animal5", "animal6"];

var position = 0;

function imageSource(slideNumber) {
  $("img").attr("src","./images/animals/" + images[slideNumber] + ".jpg");
}


function showPrevious () {

  if (position > 0) {
    position--;
    imageSource(position);
  }
}

function showNext () {

  if (position < 5)  {
      position++;
      imageSource(position);
  }
}

$("#back").click(showPrevious);

$("#forward").click(showNext);
