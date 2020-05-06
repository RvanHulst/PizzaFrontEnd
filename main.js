//index <3
const pizza1 = document.getElementById("pizza1");
const pizza2 = document.getElementById("pizza2");
const pizza3 = document.getElementById("pizza3");
const pizza4 = document.getElementById("pizza4");
const pizza5 = document.getElementById("pizza5");

pizza1.addEventListener{() => {
    displayPizza(0);
}
}
//add pizza
const addPizza_title = document.getElementById("addP_title");
const addPizza_image = document.getElementById("addP_image");
const addPizza_description = document.getElementById("addP_description");

function displayPizza(pizza_id) {
    addPizza_title = pizzas[pizza_id].name;
    addPizza_image = pizzas[pizza_id].img;
    addPizza_description = pizzas[pizza_id].description;
}
