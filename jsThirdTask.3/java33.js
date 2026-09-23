let btn1 = document.getElementById("circle");
let btn2 = document.getElementById("square");
let img = document.getElementById("img");

btn1.onclick = function () {
    img.style.borderRadius = "50%";  
};

btn2.onclick = function () {
    img.style.borderRadius = "0";    
};