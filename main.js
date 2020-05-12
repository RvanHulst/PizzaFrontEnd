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

//turns off main container and displays sec container
function displayPizza(pizza_id) {
    overviewtoggle.style.display = "none";
    addPizza_container.style.display = "block";
    addPizza_title.innerHTML = pizzas[pizza_id].name;
    addPizza_image.src = pizzas[pizza_id].img;
    addPizza_description.innerHTML = pizzas[pizza_id].description;
}
 function createcheckbox(pizza_id){
    for (let b = 0; b <  pizzaarray[pizza_id].ingredients.length; b++) {
        var box = document.createElement("input");
        var label = document.createElement("label")
        box.type = "checkbox";
        box.checked = "true";
        label.innerHTML =  pizzaarray[pizza_id].ingredients[b] ;
        addPizza_container.appendChild(box);
        addPizza_container.appendChild(label);
    }
 }