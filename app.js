/* eslint-disable no-unused-vars */
const library = [];

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const dateInput = document.getElementById('date');
const readInput = document.getElementById('read');

function Book(title, author, pages, date, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

function showLibrary() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  dateInput.value = '';

  document.getElementById('display').innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    document.getElementById('display').innerHTML
          += `<div class="d-flex justify-content-center flex-column text-center m-5 card bg-light p-5 rounded shadow">
              <div>
                  Title: ${`${library[i].title}<br> Author: ${library[i].author}<br> Pages: ${library[i].pages}<br> Publish Date: ${library[i].date}<br> Read Status: ${library[i].read}`}
              </div>
              <div>
                  <button class="btn btn-primary my-2" onclick="deleteBook(library, ${i});">Delete</button><br>
                  <button class="btn btn-primary my-2" onclick="readStatus(library, ${i});">Read Status</button><br>
              </div>
          </div>`;
  }
}

function addBook() {
  const newBook = new Book(titleInput, authorInput, pagesInput, dateInput, readInput);
  library.push({
    title: newBook.title.value,
    author: newBook.author.value,
    pages: newBook.pages.value,
    date: newBook.date.value,
    read: newBook.read.value,
  });

  showLibrary();
}

function deleteBook(arr, index) {
  arr.splice(index, 1);
  showLibrary();
}

function readStatus(arr, i) {
  if (arr[i].read === 'yes') {
    arr[i].read = 'no';
  } else {
    arr[i].read = 'yes';
  }
  showLibrary();
}