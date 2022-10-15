"use stric"

import {saveLocalTodos} from "../page/localStorage.js"

const todoInput=document.querySelector(".todo-input");
const todoList=document.querySelector(".todo-list");

export const addTodo = (event) => {
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