// console.log error with variable scope
function localScope() {
    var local = 15;
    console.log(15 + local);
}

function errorConsole() {
    console.log(13 + local);
}

// using .getHours in a basic if statement
function dateMethod() {
    if (new Date().getHours() < 18) {
        document.getElementById("hours").innerHTML = "How are you today?"
    }
}

// using if, else if, and else to check against age
function myFunction() {
    var age = document.getElementById("age").value;
    if (age > 22) {
        document.getElementById("older").innerHTML = "You are older than me!";
    } else if (age == 22) {
        document.getElementById("same").innerHTML = "We are the same age!";
    } else {
        document.getElementById("younger").innerHTML = "You are younger than me!";
    }
}

// if, else if, else function checking the time
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning.";
    } else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    } else {
        reply = "It is evening.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}