//countdown function
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}

// slideshow function
var slideIndex = 1;
showSlides(slideIndex);

//function that moves slide up one
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// this function controls which slide the show starts on
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i; // declaring variable to be used as a counter
  var slides = document.getElementsByClassName("mySlides"); // setting slide equal to whatever slide we are on
  var dots = document.getElementsByClassName("dot"); // same as last step but with the dots
  if (n > slides.length) {slideIndex = 1} // saying that if our index is greater than the number of slides, go to slide one
  if (n < 1) {slideIndex = slides.length} // sets index equal to the last slide if n is lest than one
  for (i = 0; i < slides.length; i++) { // let i, the counter, start at 0. while i is less than the length of our slides (we have 3 slides, so our array goes to index 2), then add 1 to i after every loop
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) { // same as previous but with the dots
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}