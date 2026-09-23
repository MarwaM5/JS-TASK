function reverseNumber(number) {

    let reversed = "";

    for (let i = number.length - 1; i >= 0; i--) {
        reversed = reversed + number[i];
    }

    return reversed;
}

let number = prompt("Enter a number:");

console.log(reverseNumber(number));


for (let i = 0; i <= 15; i++) {

    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }

}

let Number = prompt("Enter a Number:");
let result = "";

for (let i = 0; i < Number.length; i++) {
    result = result + Number[i];

    if ( Number[i] % 2 == 0 && Number[i + 1] % 2 == 0 ) {
        result = result + "-";
    }
}

console.log(result);



function Agechecker(age) {

    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }

}

let age = prompt("Enter your age:");

Agechecker(age);
