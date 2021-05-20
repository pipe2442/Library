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
    library.push(`Title: ${newBook.title.value} <br>`+`Author: ${newBook.author.value} <br>`+
    `Realease date: ${newBook.date.value} <br>`+`Readed: ${newBook.read.value} <br>` )
    show_library(); 
};

function delete_book(arr, index){
    arr.splice(index, 1);
    show_library(); 
}

function show_library() {
    document.getElementById("display").innerHTML = "";
    for(i = 0; i<library.length; i++){
        document.getElementById("display").innerHTML += library[i]+
        `<button onclick="delete_book(library, ${i});">Delete</button><br>`;
    }
};