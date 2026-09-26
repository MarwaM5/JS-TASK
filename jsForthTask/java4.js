
let usernameRegex = /^\S+$/;
let passwordRegex = /^(?=.*[0-9]).{8,}$/;
let phoneRegex = /^07[0-9]{8}$/;


let username = document.getElementById("username");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let order = document.getElementById("order");

let button = document.getElementById("submitButton");

let welcome = document.getElementById("welcome");
let savedOrder = document.getElementById("savedOrder");
let savedUsername = document.getElementById("savedUsername");


button.onclick = function() {

    if (!usernameRegex.test(username.value)) {

        alert("Username must not be empty or contain spaces.");

    } else if (!passwordRegex.test(password.value)) {

        alert("Password must be at least 8 characters and contain a number.");

    } else if (!phoneRegex.test(phone.value)) {

        alert("Phone number must be 10 digits and start with 07.");

    } else {


        welcome.innerHTML = "Welcome, " + username.value;


        localStorage.setItem("order", order.value);

        let savedOrderValue = localStorage.getItem("order");

        savedOrder.innerHTML = "Saved Order: " + savedOrderValue;


        sessionStorage.setItem("username", username.value);

        let savedUsernameValue = sessionStorage.getItem("username");

        savedUsername.innerHTML = "Saved Username: " + savedUsernameValue;

    }

};