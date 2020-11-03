let myLib = []
const form = document.querySelector(".LibBook");
const Library = document.querySelector(".Library");
const remBook = document.querySelector("#remove");
const addBook = document.querySelector('.add-book');
const closeForm = document.querySelector("#close");
const add = document.querySelector('#add');

add.addEventListener("click",validateForm);
addBook.addEventListener('click',()=>form.style.visibility = 'visible');
closeForm.addEventListener('click',()=>form.style.visibility = 'hidden');




function Book(author,title,pages,status)
{
        this.author=author,
        this.title=title,
        this.pages=pages,
        this.status = status
}
Book.prototype.changeStatus = function(){
    (this.status = read)
}
function addBooktoLibrary(author,category,pages,status)
{
   var book = Book(author,category,pages,status);
   myLib.push(book);
   insertBook(author,category,pages,status);
}
function insertBook(author,category,pages,status)
{
   const book = document.createElement("div");
   book.classList.add("book");
   book.innerHTML= `<img id="book-img" src="Book.jpg">
                    <div id="details">
                    <h2>${author}</h2>
                    <h3>${category}</h3>
                    <h3>${pages}</h4>
                    <h3>${status}</h3>`;

    Library.appendChild(book);
}
function removeBook(e)
{
   console.log(e);
}

function validateForm()
{
   var author = document.querySelector("#author").value;
   var category = document.querySelector("#category").value;
   var pages = document.querySelector("#pages").value;
   var status = document.querySelector("#status").value;
   if(author == "" || category == "" || pages == "")
   alert("Invalid Submission!");
   else 
   {
        addBooktoLibrary(author,category,pages,status);
        console.log(author);
        console.log(category);
        console.log(pages);
        console.log(status);
   }
   return false;
}

