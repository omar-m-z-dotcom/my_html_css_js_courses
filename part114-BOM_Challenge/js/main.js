"use strict";

let addTaskButton = document.getElementById("add");
addTaskButton.onclick = function () {
  if (document.getElementById("input").value) {
    let task = document.getElementById("input").value;
    let taskViewer = document.getElementById("tasks");
    let newTask = document.createElement("div");
    newTask.style.cssText = /*style*/`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: fit-content;
      padding: 5px;
      background-color: white;
      border: 1px solid transparent;
      border-radius: 5px;`;
    taskViewer.appendChild(newTask);
    let taskText = document.createTextNode(task);
    newTask.appendChild(taskText);
    let deleteButton = document.createElement("button");
    deleteButton.style.cssText = /*style*/`
      background-color: red;
      border: 1px solid transparent;
      border-radius: 5px;
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      color: white;`;
    deleteButton.innerHTML = "Delete";
    newTask.appendChild(deleteButton);
    deleteButton.onclick = function () {
      newTask.remove();
    };
    document.getElementById("input").value = "";
  }
}