var animals = [
	{
		"name": "Horse",
		"image": "animal1",
		"description": "The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae."
	},
	{
		"name": "Pig",
		"image": "animal2",
		"description": "A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals."
	},
	{
		"name": "Rhinoceros",
		"image": "animal3",
		"description": "A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia."
	},
	{
		"name": "Giraffe",
		"image": "animal4",
		"description": "The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring."
	},
	{
		"name": "Gorilla",
		"image": "animal5",
		"description": "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates."
	},
	{
		"name": "Snake",
		"image": "animal6",
		"description": "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."
	}
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

function changeAnimal() {
	$("#currentImage").attr("src", "images/animals/" + animals[i].image + ".jpg");
	$("#name").html(animals[i].name);
	$("#description").html(animals[i].description);
	buttonVisibility();
}

function previousAnimal() {
	i--;
	changeAnimal();
}

function nextAnimal() {
	i++;
	changeAnimal();
}

$("#forward").click(nextAnimal);
$("#back").click(previousAnimal);
