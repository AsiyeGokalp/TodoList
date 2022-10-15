"use stric"

export const saveLocalTodos = (todo) => {
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

export const removeLocalTodos = (todo) => {
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