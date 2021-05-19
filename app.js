var library = [];

var title_input = document.getElementById("title");
var author_input = document.getElementById("author");
var date_input = document.getElementById("date");
var read_input = document.getElementById("read");



function Book(title, author, date, read) {
    this.title = title;
    this.author = author;
    this.date = date
    this.read = read
};


function add_book() {
    var newBook = new Book(title_input, author_input, date_input, read_input)
    library.push(newBook.title.value+newBook.author.value+newBook.date.value)
    show_library();
};

function show_library() {
    document.getElementById("display").innerHTML = library;
};


