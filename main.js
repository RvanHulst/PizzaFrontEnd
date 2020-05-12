//index <3
const pizza1 = document.getElementById("pizza1");
const pizza2 = document.getElementById("pizza2");
const pizza3 = document.getElementById("pizza3");
const pizza4 = document.getElementById("pizza4");
const pizza5 = document.getElementById("pizza5");

const pizzaarray = [
    { "name": pizza1, "ingredients": [ "tomaat", "mozzarella", "basilicum" ] },
    { "name": pizza2, "ingredients": [ "tomaat", "knoflook", "olie", "oregano"] },
    { "name": pizza3, "ingredients": [ "gorgonzola", "mozzarella", "pecorino", "taleggio"] },
    { "name": pizza4, "ingredients": [ "tomaat", "mozzarella", "paprika", "gegrilde courgette", "gegrilde aubergine"] },
    { "name": pizza5, "ingredients": [ "tomaat", "mozzarella", "ham", "champignons", "olijven", "artisjokken"] }
];

//add click function to all pizzas
for (let i= 0; i < pizzaarray.length; i++) {
    pizzaarray[i].name.addEventListener('click', function(){
        displayPizza(i);
        createcheckbox(i);
    }); 
}

//add pizza
const overviewtoggle = document.getElementById("overview")
const addPizza_container = document.getElementById("addpizza");
const addPizza_title = document.getElementById("addP_title");
const addPizza_image = document.getElementById("addP_image");   
const addPizza_description = document.getElementById("addP_description");
const price = document.getElementById("addP_price");
//turns off main container and displays sec container
function displayPizza(pizza_id) {
    overviewtoggle.style.display = "none";
    addPizza_container.style.display = "block";
    addPizza_title.innerHTML = pizzas[pizza_id].name;
    addPizza_image.src = pizzas[pizza_id].img;
    addPizza_description.innerHTML = pizzas[pizza_id].description;
    price.innerHTML = "price: \u20ac" + pizzas[pizza_id].price + ",-";
}

//makes a checkbox with the length of the ingredients 
function createcheckbox(pizza_id){
 prijs = pizzas[pizza_id].price;
    for (let b = 0; b <  pizzaarray[pizza_id].ingredients.length; b++) {
        var box = document.createElement("input");
        var label = document.createElement("label")
        box.type = "checkbox";
        label.innerHTML =  pizzaarray[pizza_id].ingredients[b];

        box.addEventListener('click',  function(){calculate_prijs()});

        addPizza_container.appendChild(box);
        addPizza_container.appendChild(label);
    }
}

//The target event property returns the element that triggered the event. found it on internet
function calculate_prijs(){
    var box = event.target;

    if (box.checked == true) {
        prijs = prijs + 0.50;
        price.innerHTML = "price: \u20ac" + prijs + ",-";
    }
    else if (box.checked == false) {
        prijs = prijs - 0.50;
        price.innerHTML = "price: \u20ac" + prijs + ",-";
    }
}  