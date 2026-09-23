let nameInput = document.getElementById("customerName");
let orderSelect = document.getElementById("order");
let button = document.getElementById("submitButton");
let message = document.getElementById("message");

let heading = document.querySelector("h1");
let inputs = document.getElementsByTagName("input");
let container = document.getElementsByClassName("container");

button.onclick = function() {
    message.innerHTML =
        "Hello " + nameInput.value +
        "! Your order is " + orderSelect.value + ".";
};

button.onmouseover = function() {
    button.style.backgroundColor = "#65b6ca";
};

button.onmouseout = function() {
    button.style.backgroundColor = "#ca6f65";
};


