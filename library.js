let myLib = []

const Library = document.querySelector(".Library");



function Book(author,title,pages,status)
{
    return {
        author,
        title,
        pages,
        status,
    }
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
function validateForm()
{
   var author = document.querySelector("#author").value;
   var category = document.querySelector("#category").value;
   var pages = document.querySelector("#pages").value;
   var status = document.querySelector("#status").value;
   if(author == "" || category == "" || pages == "" || status=="")
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

