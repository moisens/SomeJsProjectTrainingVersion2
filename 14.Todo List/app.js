// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// edit option
let editElement;
let editFlag = false;
let editId = '';


// ****** EVENT LISTENERS **********
//Submit form
form.addEventListener('submit', addItem);
//Clear Items
clearBtn.addEventListener('click', clearItem);
//Load Items
window.addEventListener('DOMContentLoaded', setupItems);


// ****** FUNCTIONS **********
function addItem(e){
   e.preventDefault();
   const value = grocery.value;
   const id = new Date().getTime().toString();
   if(value && !editFlag){
      createListItem(id, value);
      //display A lert
      displayAlert('Item added to the list', 'success');

      //Show container
      container.classList.add('show-container');

      //Add to local storage
      addToLocalStorage(id, value);  

      //set back to default
      setBackToDefault();

   }else if(value && editFlag){
      //Editing the list
      editElement.innerHTML = value;
      displayAlert('Item edited', 'success');
      editLocalStorage(editId, value);
      setBackToDefault();

   }else{
      //Empty value
      displayAlert('Please enter a value', 'danger');
   }
}

//Display Alert
function displayAlert(text, action){
   alert.textContent = text;
   alert.classList.add(`alert-${action}`);

   //remove Alert
   setTimeout(() => {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`)
   }, 5000);
}


//Clear Items Function
function clearItem(){
   const items = document.querySelectorAll('.grocery-item');
   //There is at least one item in the list
   if(items.length > 0){
      items.forEach((item) => {
         list.removeChild(item);
      });
   }
   container.classList.remove('show-container');
   displayAlert('List items cleared', 'success');

   setBackToDefault();

   localStorage.removeItem('list');
}


//Deleting item function
function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   const id = element.dataset.id;
   list.removeChild(element);
   if(list.children.length === 0){
      container.classList.remove('show-container')
   }
   displayAlert('Item deleted', 'success');
   setBackToDefault();
   //remove from local storage
   removeFromLocalStorage(id);
}


//Editing item function
function editItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   //set edit item
   editElement = e.currentTarget.parentElement.previousElementSibling;
   //set form value
   grocery.value = editElement.innerHTML;
   editFlag = true;
   editId = element.dataset.id;
   submitBtn.textContent = 'edit';
}


//set back to default
function setBackToDefault(){
   grocery.value = '';
   grocery.focus();
   editFlag = false;
   editId = '';
   submitBtn.textContent = 'submit';
}



// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
   const grocery = {id:id, value:value};
   let items = getLocalStorage();
      console.log(items)
   items.push(grocery);
   localStorage.setItem('list', JSON.stringify(items));
   

}


function removeFromLocalStorage(id){
   let items = getLocalStorage();
   items = items.filter((item) => {
      if(item.id !== id){
         return item;
      }
   });
   localStorage.setItem('list', JSON.stringify(items));
}


function editLocalStorage(id, value){
   let items = getLocalStorage();
   items = items.map((item) => {
      if(item.id === id){
         item.value = value;
      }
      //If item.id !== id
      return item;
   });
   localStorage.setItem('list', JSON.stringify(items))

}

function getLocalStorage(){
   return localStorage.getItem('list') 
   ? JSON.parse(localStorage.getItem('list')) 
   : [];
}


// ****** SETUP ITEMS **********
function setupItems(){
let items = getLocalStorage();
if(items.length > 0){
   items.forEach((item) => {
      createListItem(item.id, item.value)
   });
   container.classList.add('show-container');
}

}

//Create list Item Function
function createListItem(id, value){
   //Add to the list
   const article = document.createElement('article');
   article.classList.add('grocery-item') ;
   const attrId = document.createAttribute('data-id')
   attrId.value = id;
   article.setAttributeNode(attrId)
   article.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
         <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
         </button>

         <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
         </button>
      </div>
   `;

   //Accessing to the dynamically created element => delete & edit
   const deleteBtn = article.querySelector('.delete-btn');
   const editBtn = article.querySelector('.edit-btn');

   deleteBtn.addEventListener('click', deleteItem);
   editBtn.addEventListener('click', editItem);

   //Appendchild
   list.appendChild(article);

}