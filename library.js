const form = document.querySelector('.form-container');
const addBtn = document.querySelector('.add-book');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const library = document.querySelector('.library');
const status = document.querySelector('#read');



addBtn.addEventListener('click',()=>{
    if(form.style.visibility=='hidden')
    form.style.visibility = 'visible';
    else form.style.visibility = 'hidden';
})
clear.addEventListener('click',()=>form.reset());
add.addEventListener('click',()=> addBook());

let myBooks = [];

function Book()
{
    this.title= form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.status = status.checked==true?'read':'not read';
}
Book.prototype.changeStatus = function(){
    (this.status == 'read')?(this.status = 'not read'):(this.status = 'read');
}

function addBook()
{
    console.log('click');
    let book = new Book();
    myBooks.push(book);
    refreshLibrary();
    closeForm();
}

function renderLibrary()
{
   for(let i=0;i<myBooks.length;i++)
   renderCard(i);

   const statusBtn = document.querySelectorAll('.status-btn');
   for(let i=0;i<statusBtn.length;i++)
   {
       statusBtn[i].addEventListener('click',(e)=>{
           let index = e.target.parentNode.getAttribute('data-key');
           myBooks[index].changeStatus();
           refreshLibrary();
       })
   } 
   const removeBtn = document.querySelectorAll('.remove');
   for(let i=0;i<removeBtn.length;i++)
   {
       removeBtn[i].addEventListener('click',(e)=>removeBook(e));
   }

}

function closeForm()
{
    form.reset();
    if(form.style.visibility=='hidden')
    form.style.visibility = 'visible';
    else form.style.visibility = 'hidden';
}

function renderCard(i)
{
    console.log(myBooks[i]);
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-key',i);
    library.appendChild(card);

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'x';
    remove.setAttribute('type','button');
    card.appendChild(remove);

    let header = document.createElement('h2');
    header.classList.add('header');
    header.innerHTML = myBooks[i].title;
    card.appendChild(header);

    let author = document.createElement('p');
    author.innerHTML = myBooks[i].author;
    card.appendChild(author);

    let pages = document.createElement('p');
    pages.innerHTML = myBooks[i].pages;
    card.appendChild(pages);

    let read = document.createElement('Button');
    read.classList.add('status-btn');
    read.setAttribute('type','button');
    if(myBooks[i].status=='read')
    read.classList.add('read');
    else 
    read.classList.add('not-read');
    read.innerHTML = myBooks[i].status;
    card.appendChild(read);
}

function removeBook(e)
{
    let index = e.target.parentNode.getAttribute('data-key');
    myBooks.splice(index,1);
    refreshLibrary();
}

function removeCards() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }    
}

function refreshLibrary(){
    removeCards();
    renderLibrary();
}