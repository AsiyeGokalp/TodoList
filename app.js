"use stric"

import {getTodos} from "./src/view/generateTodoList.js"
import { addTodo } from "./src/view/generateAddTodo.js"
import { deleteCheck } from "./src/page/deleteCheck.js"
import {filterTodo} from "./src/page/filterTodo.js"

//selectors

const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

//event listeners
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


