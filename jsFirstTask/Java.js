let name = prompt("Enter your Name: ");
let age= prompt("Enter you Age: ");
let gender= prompt("Enter your gender(male/female): ").toLowerCase();
if (gender == "male") {

    alert("Welcome Mr. " + name);
    } else if (gender == "female") {
        alert("Welcome Ms. " + name);
    } else {
        alert("Welcome " + name);
        } 



let order = " ";
let validOrder = false;
let isAvailable = false;
let orderStatus = " ";
 if (age<16){
     alert("You are not eligible to place an order");
  }else if(age>=16){

       order=prompt("Enter one of the following (Burger,Shawarma,Zinger)").toLowerCase();
       if (order=="burger" || order=="shawarma" || order=="zinger"){
        validOrder = true;
        isAvailable = true;
        alert("Your order is being prepared");
       }
       else{
        alert("Invalid order. Please try again");
       }
       
   

  if ((age >=18) && validOrder && isAvailable){
      orderStatus = "Order confirmed";
      alert("Order confirmed");


}  else if (age < 18 || !validOrder || !isAvailable){
      orderStatus="Order requires verification";
      alert("Order requires verification");
}

}



console.log("Customer Name:", name);
console.log("Age:", age);
console.log("Gender:", gender);
console.log("Order:", order);
console.log("Order Status:", orderStatus);


document.write("<h2>Order Summary</h2>");
document.write("<p>Customer Name: " + name + "</p>");
document.write("<p>Age: " + age + "</p>");
document.write("<p>Gender: " + gender + "</p>");
document.write("<p>Order: " + order + "</p>");
document.write("<p>Order Status: " + orderStatus + "</p>");

