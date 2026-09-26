function reverseNumber(number) {

    let reversed = "";

    for (let i = number.length - 1; i >= 0; i--) {
        reversed = reversed + number[i];
    }

    return reversed;
}

let number1 = prompt("Enter a number:");

console.log(reverseNumber(number1));


function checkEvenOdd() {

    for (let i = 0; i <= 15; i++) {

        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }

    }
}

checkEvenOdd();

function insertDashes(number) {

    let result = "";

    for (let i = 0; i < number.length; i++) {

        result = result + number[i];

        if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
            result = result + "-";
        }
    }

    return result;
}

let number3 = prompt("Enter a number:");

console.log(insertDashes(number3));



function Agechecker(age) {

    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }

}

let age = prompt("Enter your age:");

Agechecker(age);
