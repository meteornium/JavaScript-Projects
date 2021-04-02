// prints all the numbers in the counter (since it's document write, i think it overrides the other buttons, so when its button is pressed, all others go away)
function callLoop() { 
    var counter;
    var num;
    for (counter = 1; counter <= 10; counter++) {
        document.write(counter);
    }
}

// while loop using .length()
function loopLength() {
    var str = "Hello";
    var i = 0;
    var length = 0;
    while (i <= str.length) {
        length = i;
        i++
    }
    document.getElementById("length").innerHTML = length;
}

// for loop going through an array
var instru = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function forLoop() {
    for (y = 0; y < instru.length; y++) {
        content += instru[y]+ "<br>";
    }
    document.getElementById("list").innerHTML = content;
}

// function accessing a certain index of an array
function numArray() {
    var array = [1, 2, 3, 4, 5]
    document.getElementById("array").innerHTML = array[0]
}

// function using the const delcaration to make an object
function constFunction() {
    const adam = {age: 21, height: "173cm", eyeColor: "Brown"};
    adam.age = 22;
    adam.hairColor = "Brown";
    adam.birthday = "August 10";
    document.getElementById("const").innerHTML = "My name is Adam. I am " + adam.age + " years old, and my birthday is " + adam.birthday + ".";
}  

// function using the let declaration
function letFunction() {
    let name = "John Doe";
    document.getElementById("name").innerHTML = name;
}

// function using let to make an object
function letObject() {
    let casey = {age: 24, height: "162cm", eyeColor: "Brown"}
    casey.age = 26;
    casey.hairColor = "Brown";
    casey.birthday = "June 20";
    document.getElementById("let").innerHTML = casey.birthday;
}