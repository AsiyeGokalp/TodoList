"use stric"
import { removeLocalTodos } from "./localStorage.js";

export const deleteCheck = (e) => {
 
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