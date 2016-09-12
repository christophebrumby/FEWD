var animals = [
	{"src": "images/animal1.jpg", "name": "Horse", "description": "The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae."},
	{"src": "images/animal2.jpg", "name": "Pig", "description": "A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals."},
	{"src": "images/animal3.jpg", "name": "Rhino", "description": "A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia."},
	{"src": "images/animal4.jpg", "name": "Giraffe", "description": "The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring."},
	{"src": "images/animal5.jpg", "name": "Gorillas", "description": "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates."},
	{"src": "images/animal6.jpg", "name": "Snake", "description": "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."}
];

var i = 0;

function buttonVisibility() {
	var lastImageIndex = animals.length - 1;
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
	// $("#currentImage").attr("src", "images/" + animals[i] + ".jpg");
	$("#currentImage").attr("src", animals[i].src);
	$("h1").html(animals[i].name);
	$("p").html(animals[i].description);
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
