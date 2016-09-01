var images = ["animal1", "animal2", "animal3", "animal4", "animal5", "animal6"];
var i = 0;

function buttonVisibility() {
	var lastImageIndex = images.length - 1;
	var forward = $("#forward");
	var back = $("#back");

	if (i <= 0) {
		back.addClass("hidden");
	} else if (i >= lastImageIndex) {
		forward.addClass("hidden");
	} else {
		back.removeClass("hidden");
		forward.removeClass("hidden");
	}
}

function changeImage() {
	$("#currentImage").attr("src", "images/animals/" + images[i] + ".jpg");
	buttonVisibility();
}

function previousImage() {
	i--;
	changeImage();
}

function nextImage() {
	i++;
	changeImage();
}

$("#forward").click(nextImage);
$("#back").click(previousImage);
