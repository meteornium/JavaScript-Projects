// function taking input from the browser and compares it
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

// function that takes input and checks if users age is 18 or older to vote
function votingAge() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote.";
}

// function that makes vehicle objects
function vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

// declaring variables that are linked to a vehicle object
var Jack = new vehicle("Dodge", "viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

// using the declared variables to create a sentence with their linked vehicle type, make, year, etc
function myFunction() {
    document.getElementById("keyword").innerHTML = "Erik drives a " + Erik.vehicleColor + "-colored " + Erik.vehicleModel + " manufactured in " + Erik.vehicleYear;
}

//nested function
function countFunc() {
    document.getElementById("count").innerHTML = count();
    function count() {
        var start = 9;
        function plusOne() {
            start++;
        }
        plusOne();
        return start;
    }
}