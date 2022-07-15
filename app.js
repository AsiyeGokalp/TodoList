//selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

//event listeners
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//function

function addTodo(event){
 //prevent form from submitting
 event.preventDefault();
 //todo div
  const todoDiv=document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo=document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText=todoInput.value;
  todoDiv.appendChild(newTodo);
  //ADD TODO TO LOCALSTORAGE
  saveLocalTodos(todoInput.value);

  //check mark button
  const completedButton=document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML="<i class='fas fa-check'></i>";
  todoDiv.appendChild(completedButton);

  //trash mark button
  const trashButton=document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML="<i class='fas fa-trash'></i>";
  todoDiv.appendChild(trashButton);
 
  //append to list

  todoList.appendChild(todoDiv);

  //clear todo input value
  todoInput.value="";

}


//function
function deleteCheck(e) {
 
 const item = e.target;
 const itemCL = item.classList[0];
  //delete todo
 if (itemCL === "trash-btn") {
  const todo = item.parentElement;
  todo.classList.add("fall");
  removeLocalTodos(todo);
  todo.addEventListener("transitionend",function(){
    todo.remove();
  })
 }
//check mark

if (itemCL === "complete-btn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}

}

function filterTodo(e){
  const todos=todoList.childNodes;

  
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display="flex";
        break;
        case "completed":
          if(todo.classList.contains("completed")){
            todo.style.display="flex";
          }else{
            todo.style.display="none";
          }
        break;
        case "uncompleted":
          if(!todo.classList.contains("completed")){
            todo.style.display="flex";

          }else{
            todo.style.display="none";
          }
        break;
    }
  })

}


function saveLocalTodos(todo) {
  //check-- do i have thing in there
 
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  } else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));


}


function getTodos(){
  //check-- do i have thing in there
 
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  } else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  


todos.forEach(function(todo){

  //todo div
  const todoDiv=document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo=document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText=todo;
  todoDiv.appendChild(newTodo);

  //check mark button
  const completedButton=document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML="<i class='fas fa-check'></i>";
  todoDiv.appendChild(completedButton);

  //trash mark button
  const trashButton=document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML="<i class='fas fa-trash'></i>";
  todoDiv.appendChild(trashButton);
 
  //append to list

  todoList.appendChild(todoDiv);

})

}

function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  } else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex=  todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem("todos",JSON.stringify(todos));


}
