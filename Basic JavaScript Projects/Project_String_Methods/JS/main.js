// .concat()
function concat() {
    var part1 = "Here is one half, "
    var part2 = "and here is the other!"
    var whole = part1.concat(part2);
    document.getElementById("concat").innerHTML = whole;
}

// .slice()
function slice() {
    var sent = "This sentence has an apple.";
    var goodSent = sent.slice(21, 26);
    document.getElementById("slice").innerHTML = goodSent;
}

// .toUpperCase()
function upper() {
    var low = "dave";
    var upper = low.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

// .search()
function search() {
    var str = "This sentence has an apple.";
    var search = str.search("apple");
    document.getElementById("search").innerHTML = search;
}

// .toString()
function string() {
    var num = 151;
    document.getElementById("string").innerHTML = num.toString();
}

// .toPrecision()
function precise() {
    var num = Math.random() * 100;
    document.getElementById("precise").innerHTML = num.toPrecision(3);
}

// .toFixed()
function fixedFunc() {
    var num = Math.random() * 100;
    document.getElementById("fixed").innerHTML = num.toFixed(3);
}

// .valueOf()
function valueFunc() {
    var str = "This is a string.";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
  }