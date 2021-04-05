// keeps track of whose turn it is
let activePlayer = 'X';
//stores array of moves. use this to determine win conditions
let selectedSquares = [];

//function for placing x or o in square 
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already
    // .some() used to check each element of selectedSquare array to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // this variable retrieves the html element that was clicked
        let select = document.getElementById(squareNumber);
        //this checks whose turn it is
        if (activePlayer === 'X') {
            // if active player is equal to 'x' the x.png is placed
            select.style.backgroundImage = 'url("images/newX.png")';
            // active player has to be x or o, so if its not x, it's o
        } else {
            // if activePlayer is O, o.png placed
            select.style.backgroundImage = 'url("images/newO.png")';
        }
        // squareNumber and activePlayer concatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // cals a function to check for any win conditions
        checkWinConditions();
        // changes active player
        if (activePlayer === 'X') {
            // switch active player from x to o
            activePlayer= 'O';
        } else {
            activePlayer= 'X';
        }
        // plays placement sound
        audio('./media/place1.mp3');
        // checks to see if it's computers turn
        if(activePlayer === 'O') {
            // disables clicking for computer choice
            disableClick();
            // waits 1 second before computer places image and enables click
            setTimeout(function () { computersTurn() ; }, 1000)
        }

        // return true needed for computersTurn function to work
        return true;
    }
}

// took computers turn out of placeXOrO to make it global function. it doesnt change its functionality other than allow it to be accessed outside of placeXOrO()
// function results in random square being selected
function computersTurn() {
    // boolean for while loop
    let success = false;
    // stores random number from 0-8
    let pickASquare;
    // allows while loop to keep trying if square is selected already
    while(!success) {
        // random num bt 0 and 8 selected
        pickASquare = String(Math.floor(Math.random() * 9));
        // if random num evaluated returns true, swuare hasn't been selected yet
        if (placeXOrO(pickASquare)) {
            // calls the funtion
            placeXOrO(pickASquare);
            // changes boolean and ends loop
            success = true;
        };
    }
}

// function parses selectedSquares array to look for win conditions
// drawWinLine called to draw line if conditions met
function checkWinConditions() {
    // 012
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    // condition checks for tie. if none of above is met and 9 squares are selected code executes
    else if (selectedSquares.length >= 9) {
        // plays tie game sound
        audio('./media/tie1.mp3');
        // sets a .3 sec timer before resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    // checks if an array includes 3 strings. used to check for win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        // if 3 variables passed are all included in our array true is returned and our else if condition executes the drawWinLine func
        if(a === true && b === true && c === true) { return true }
    }
}

// makes body element temp unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//takes a string parameter of the path you set ealier for placement sound
function audio(audioURL) {
    // create new audio object and pass the path as parameter
    let audio = new Audio(audioURL);
    // plays audio
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // accesses html canvas
    const canvas = document.getElementById('win-lines')
    //gives access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // indicates start of lines x axis
    let x1 = coordX1,
    // start of y axis
        y1 = coordY1,
    // end of x axis
        x2 = coordX2,
    // end of y axis
        y2 = coordY2,
    // stores temp x asis data we update in animation loop
        x = x1,
    // stores temp y axis
        y = y1;

    // interacts with the canvas
    function animateLineDrawing() {
        // creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        // starts a new path
        c.beginPath();
        // moves to starting point for line
        c.moveTo(x1, y1)
        // end of our line
        c.lineTo(x, y)
        // sets width of line
        c.lineWidth = 10;
        // sets color
        c.strokeStyle = 'rgba(250, 19, 13, .8)';
        // draws everything laid out above
        c.stroke();
        // checks if we've reached endpoint
        if (x1 <= x2 && y1 <= y2) {
            // adds 10 to previous end x point
            if (x < x2) { x += 10; }
            // adds 10 to previous y point
            if (y < y2) { y+= 10; }
            // this cancels animation loop if we've reached endpoints
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //necessary for 6, 4, 2 win
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x+= 10; }
            if (y > y2) { y-= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // clears canvas after win line is drawn
    function clear() {
        // starts animation loop 
        const animationLoop = requestAnimationFrame(clear);
        // line clears canvas
        c.clearRect(0, 0, 608, 608);
        // stops animation loop
        cancelAnimationFrame(animationLoop)
    }
    // disallows clicking while win sound playing
    disableClick();
    // plays win sound
    audio('./media/winGame1.mp3');
    // calls main animation loop
    animateLineDrawing();
    // waits 1 second then clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000)
}

function resetGame() {
    // iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        // removes elements backgroundImage
        square.style.backgroundImage = ''
    }
    // resets array so its empty and we can start over
    selectedSquares = [];
}