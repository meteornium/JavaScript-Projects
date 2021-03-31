function addition() {
    var add = 2+2;
    document.getElementById("math").innerHTML = add;
}

function normal() {
    var string = "What is 2+2? (Mouse over for the answer)"
    document.getElementById("math").innerHTML = string;
}

function subtraction() {
    var sub = 4-2;
    var result = sub.toString();
    document.getElementById("sub").innerHTML = result;
}

function multiply() {
    var multiply = 3 * 4;
    var result = multiply.toString();
    document.getElementById("multiply").innerHTML = result;
}

function divide() {
    var div = 12/6;
    var result = div.toString();
    document.getElementById("divide").innerHTML = result;
}

function modulus() {
    var mod = 26 % 3;
    var result = mod.toString();
    document.getElementById("mod").innerHTML = result;
}

function incUp() {
    var num = 4;
    var inc = ++num;
    var result = inc.toString();
    document.getElementById("inc").innerHTML = result;
}

function incDown() {
    var num = 4;
    var dec = --num;
    var result = dec.toString();
    document.getElementById("dec").innerHTML = result;
}

function random() {
    var random = Math.random() * 100
    var result = random.toString();
    document.getElementById("random").innerHTML = result;
}

