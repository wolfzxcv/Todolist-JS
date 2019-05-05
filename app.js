/* READ  &  UPDATE */
//since 'local storage' supports string only, we have to use JSON.stringify() and JSON.parse()
//here we convert the 'string (from local storage)'  to 'object', to show the list on our screen
let objectFormat = JSON.parse(localStorage.getItem('localStorgeLabel')) || [];
updateList(objectFormat);


function updateList(items){
 /* str = '';
  for (let i=0; items.length>i; i++){
    str+=`<li class="list-group-item">${items[i]}<p style="float:right; border:2px solid; border-radius:50%; padding: 1px 9px; background-color: red" data-key=${i}>X</p>`;
  }
document.querySelector('.list-group').innerHTML = str; 
  
  
  // have tried this one, but each item on the list would have a comma in the end except the last item */
 document.querySelector('.list-group').innerHTML =
   items.map( i => `<li class="list-group-item">${i}<p style="float:right; border:2px solid; border-radius:50%; padding: 1px 9px; background-color: red" >X</p>`).join('')  
}




/* CREATE*/
//add to do
document.querySelector('.btn-primary').addEventListener('click',addTodo);
 
function addTodo(e){
  e.preventDefault();
  if (document.querySelector('.form-control').value.length<3){
    alert('please add at least 3 characters');
    return false;
  }
  let todo = document.querySelector('.form-control').value;
  objectFormat.push(todo);  
  localStorage.setItem('localStorgeLabel',JSON.stringify(objectFormat));  
  updateList(objectFormat);
  //when click add, clear the text value
  document.querySelector('.form-control').value= ""
  }

 
/*  DELETE */

//point to 'ul' and moniter...
//when click on the list I want to delete
document.querySelector('.list-group').addEventListener('click', deleteTodo);

function deleteTodo(e){
  e.preventDefault();
  if(e.target.nodeName !== 'P'){return};
  let key = e.target.dataset.key;
  objectFormat.splice(key, 1);
  localStorage.setItem('localStorgeLabel',JSON.stringify(objectFormat));  
  updateList(objectFormat);
}

