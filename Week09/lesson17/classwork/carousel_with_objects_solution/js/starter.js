var animals = [
  {
    name: "Horse",
    "image": "images/animals/animal1.jpg",
    "description": "The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae."
  },
  {
    "name": "Pig",
  	"image": "images/animals/animal2.jpg",
  	"description": "A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals."
  },
  {
    "name": "Rhinoceros",
  	"image": "images/animals/animal3.jpg",
  	"description": "A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia."
  },
  {
  	"name": "Giraffe",
  	"image": "images/animals/animal4.jpg",
  	"description": "The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring."
  },
  {
    "name": "Gorilla",
  	"image": "images/animals/animal5.jpg",
  	"description": "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates."
  },
  {
  	"name": "Snake",
  	"image": "images/animals/animal6.jpg",
  	"description": "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."
  }
];

var number = 1;

function goForward() {
  var endOfList = animals.length - 1;
  $("#currentImage").attr("src", animals[number].image);
  $("#name").html(animals[number].name);
  $("#description").html(animals[number].description);
  if (number === endOfList) { //you've reached the end of the list
    $("#forward").addClass("hidden");
    $("#back").removeClass("hidden");
  }

  if (number < endOfList) { //you're items 0-4 (index)
    number = number + 1; //  number++;
  }
}

$("#forward").click(goForward);
