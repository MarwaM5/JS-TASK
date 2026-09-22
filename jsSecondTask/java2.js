let menu = [
    {
        name: "Mansaf",
        price: 22,
        category: "Main dishes",
        available: true
    },
    {
        name: "Sushi",
        price: 20,
        category: "Main dishes",
        available: true
    },
    {
        name: "Pasta",
        price: 14,
        category: "Main dishes",
        available: true
    },
    {
        name: "Caesar Salad",
        price: 9,
        category: "Salads",
        available: false
    },
    {
        name: "Tiramisu",
        price: 10,
        category: "Desserts",
        available: true
    }
];

function showMenu() {
    for (let i = 0; i < menu.length; i++) {
        if (!menu[i].available) {
            continue;
        }
        document.write("food : " +menu[i].name + "  price : " + menu[i].price + "<br>");
    }
}

showMenu()


let foodName = prompt("Enter the food you want:");

let selectedFood = null;

while (selectedFood == null) {

    for (let i = 0; i < menu.length; i++) {

        if (!menu[i].available) {
            continue;
        }

        if (menu[i].name.toLowerCase() == foodName.toLowerCase()) {

            selectedFood = menu[i];

            break;
        }
    }

    if (selectedFood == null) {

        foodName = prompt("This food is not available. Please choose another food:");
    }
}


document.write("<h2>Selected Food</h2>");

for (let property in selectedFood) {

    document.write( property + ": " + selectedFood[property] + "<br>");
}


let quantity = prompt("Enter quantity:");

let totalPrice = selectedFood.price * quantity;


function showFinalOrder(){
document.write("<h2>Final Order</h2>");
document.write("<p>Food: " + selectedFood.name + "</p>");
document.write("<p>Quantity: " + quantity + "</p>");
document.write("<p>Total Price: " + totalPrice + "</p>");
}


showFinalOrder()




