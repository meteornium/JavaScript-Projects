// using typeof to display 'string'
document.write(typeof "hello");

// adding a string and a number
document.write("10" + 5);

// displaying NaN
function nan() {
    document.getElementById("nan").innerHTML = 0/0;
}

//checking to display 'true' when putting a number into isNaN
function number() {
    document.getElementById("num").innerHTML = isNaN(45);
}

// checking to display 'false' when putting a string into isNaN
function notNumber() {
    document.getElementById("string").innerHTML = isNaN('string');
}

//displaying infinity and -infinity
document.write(3E320);

document.write(-4E4234);

// and or operator function
function andNotOr() {
    var and = (5 > 10 && 10 > 4);
    var or = (5 > 10 || 10 > 4);
    document.getElementById("and").innerHTML = and;
    document.getElementById("or").innerHTML = or;
}

// not operator function
function notFunction() {
    document.getElementById("not").innerHTML = !(5 > 10);
}

// using ==, ===, >, and < and having them in a function, will show results for all of the buttons when clicked 
function multiUse() {
    var greaterThan = 5 > 4;
    var lessThan = 5 < 4;
    var twoEquals = (10 == '10');
    var threeEquals = (10 === '10');
    document.getElementById("great").innerHTML = greaterThan;
    document.getElementById("less").innerHTML = lessThan;
    document.getElementById("two").innerHTML = twoEquals;
    document.getElementById("three").innerHTML = threeEquals;
}