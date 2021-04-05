function changeFunction() {
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "The text has changed!";
}

function helloWorld() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Smile",10,50);
}

function gradient() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
}