// Dom elements
const booksTable = document.querySelector('#bookTable');
const form  = document.querySelector('#bookForm');
const btn  = document.querySelector('#submit-btn');
let table = document.querySelector('#tableBody');
let html = '';
// Declaring variables
let myLibrary = []
let bookId = 0;
let index = 1;
// Book constructor
function Book(author, book, pages, status = false) {
    this.bookId = index++
    this.author = author
    this.book = book
    this.pages = pages
    this.status = status 
}
// Form submission handling
btn.addEventListener('click', e => {
    // prevents default behavior
    e.preventDefault();
    // create new instance of abook
    let book = newBook();
    // enters it into the list
    myLibrary.push(book);
    // cleans the input field
    document.getElementById('authorinput').value = '';
    document.getElementById('bookinput').value = '';
    document.getElementById('pagesnumber').value = '';
    document.getElementById('bookStatus').value = '';
    //
    populateList();
})

// get users input and crate new instance of book with its values
function newBook(){
    let authorInput = document.getElementById('authorinput').value;
    let bookInput = document.getElementById('bookinput').value;     
    let pagesInput = document.getElementById('pagesnumber').value;    
    let statusInput = document.getElementById('bookStatus').value;
    return (new Book(authorInput, bookInput, pagesInput, statusInput));
}

// display in table
function populateList(){
    myLibrary.forEach(function(book){
        html = 
        `<tr>
            <td>
                ${book.bookId}
            </td>
            <td>
                ${book.author}
            </td>
            <td>                
                ${book.book}
            </td>
            <td>
            ${book.pages}
            </td>   
            <td>
            ${book.status}
            <a href="#">Edit</a>
            </td>  
            <td>
            <a href="#">Remove</a>
            </td>                 
        </tr>`
        })
        table.innerHTML += html; 
}
