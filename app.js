const library = [];

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const dateInput = document.getElementById('date');
const readInput = document.getElementById('read');

function Book(title, author, date, read) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.read = read;
}

function add_book() {
  const newBook = new Book(titleInput, authorInput, dateInput, readInput);
  library.push({
    title: newBook.title.value,
    author: newBook.author.value,
    date: newBook.date.value,
    read: newBook.read.value,
  });

  show_library();
}

function delete_book(arr, index) {
  arr.splice(index, 1);
  show_library();
}

function read_status(arr, i) {
  if (arr[i].read == 'yes') {
    arr[i].read = 'no';
  } else {
    arr[i].read = 'yes';
  }
  show_library();
}

function show_library() {
  titleInput.value = '';
  authorInput.value = '';
  dateInput.value = '';

  document.getElementById('display').innerHTML = '';
  for (i = 0; i < library.length; i++) {
    document.getElementById('display').innerHTML
        += `<div class="d-flex justify-content-center flex-column text-center m-5 card bg-light p-5 rounded shadow">
            <div>
                Title: ${`${library[i].title}<br> Author: ${library[i].author}<br> Publish Date: ${library[i].date}<br> Read Status: ${library[i].read}`}
            </div>
            <div>
                <button class="btn btn-primary my-2" onclick="delete_book(library, ${i});">Delete</button><br>
                <button class="btn btn-primary my-2" onclick="read_status(library, ${i});">Read Status</button><br>
            </div>
        </div>`;
  }
}