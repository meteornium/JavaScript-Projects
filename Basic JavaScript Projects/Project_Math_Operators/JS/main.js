//addition function\
function addition() {
    var add = 2+2;
    document.getElementById("math").innerHTML = add;
}

//function to return text to normal after mousing off
function normal() {
    var string = "What is 2+2? (Mouse over for the answer)"
    document.getElementById("math").innerHTML = string;
}

// subtraction function
function subtraction() {
    var sub = 4-2;
    var result = sub.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("sub").innerHTML = result;
}

//multiplication function
function multiply() {
    var multiply = 3 * 4;
    var result = multiply.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("multiply").innerHTML = result;
}

//division function
function divide() {
    var div = 12/6;
    var result = div.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("divide").innerHTML = result;
}

//modulus function
function modulus() {
    var mod = 26 % 3;
    var result = mod.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("mod").innerHTML = result;
}

//increment function
function incUp() {
    var num = 4;
    var inc = ++num; // raises 4 by 1
    var result = inc.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("inc").innerHTML = result;
}

//decrement function
function incDown() {
    var num = 4;
    var dec = --num; // lowers 4 by 1
    var result = dec.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("dec").innerHTML = result;
}

// math random function
function random() {
    var random = Math.random() * 100 // makes random number between 0 and 100
    var floor = Math.floor(random); // rounds that random number down so it doesn't have a long string of decimals
    var result = floor.toString(); //turns result into a string to print (not sure if that was needed but did it just in case)
    document.getElementById("random").innerHTML = result;
}

