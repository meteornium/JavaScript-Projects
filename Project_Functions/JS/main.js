// links to button that changes to saying result + displayed as color green

function myFunction() {
    var string = 'This is my favorite color!';
    var result = string.fontcolor("green");
    document.getElementById("fave_color").innerHTML = result;
}

// utilizes += to add to sent variable and then displays it on button click in HTML

function concat() {
    var sent = "My name is";
    sent += " Adam.";
    document.getElementById("concat").innerHTML = sent;
}

function normalImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function bigImg(x) {
    x.style.height = "128px";
    x.style.width = "128px";
}