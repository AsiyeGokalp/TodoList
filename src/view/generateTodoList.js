"use stric"

const todoList=document.querySelector(".todo-list");

export const getTodos = () => {
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