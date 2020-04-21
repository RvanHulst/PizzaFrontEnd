var pizzanames = ["Pizza Margarita", "Pizza Napoletana", "Pizza Kiwi", "Pizza Hawaii"]
// de container waar alles in gaat
var gridContainer = document.getElementsByClassName("grid-container");
// de for loop wat elke item aanmaakt
for (i = 0; i <= 3; i++) {
    // waar je de elementen eerst aanmaakt
    var item = document.createElement("div");
    var p = document.createElement("p");
    var image = document.createElement("img");
    var button = document.createElement("button");
    var br = document.createElement("br");

    p.innerHTML = pizzanames[i];
    button.innerHTML = "add " + pizzanames[i];

    image.src = "img/pizza" + (i+1) + ".jpg";
    image.style.width ="180px";


    gridContainer[0].appendChild(item);
    item.appendChild(p);
    item.appendChild(image);
    item.appendChild(br);
    item.appendChild(button);
}
