function myDictionary() {
    var Book = { // setting key-value pairs below
        Title:"The Final Mage",
        Genre:"Fantasy",
        Pages:"596",
        Author:"James McAvoy",
        PageNumber:345
    };
    delete Book.Title; // deleting the KVP of title
    document.getElementById("dictionary").innerHTML = Book.Title; // will display undefined
}