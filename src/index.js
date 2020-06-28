document.addEventListener("DOMContentLoaded", () => {
  });
const my_func = function(event) {
    event.preventDefault();
    tasker.construct();
};

let tasker = {
  construct: function(){
    this.selectElement();
    this.scanTaskList();
  },
  selectElement: function(){
    this.taskInput = document.getElementById("new-task-description");
    this.taskList = document.getElementById("tasks");
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById("submit");
  },
  buildTask: function(){
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement("li");
    taskListItem.setAttribute("class", "task");
    taskCheckBox = document.createElement("input");
    taskCheckBox.setAttribute("type", "checkbox");
    taskValue = document.createTextNode(this.taskInput.value);
    taskButton = document.createElement("button");
    taskTrash = document.createElement("i");
    taskTrash.setAttribute("class", "fa fa-trash");
    taskButton.appendChild(taskTrash);

    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);

    this.taskList.appendChild(taskListItem)
  },
  addTask: function(){

      this.buildTask();
      this.taskInput.value = "";
      this.scanTaskList();

    },
  scanTaskList: function(){
    let taskListItem, checkBox, deleteButton;
    for (i = 0; i < this.taskListChildren.length; i++){
      taskListItem = this.taskListChildren[i];
      checkBox = taskListItem.getElementsByTagName("input")[0];
      deleteButton = taskListItem.getElementsByTagName("button")[0];

      checkBox.onclick = this.completeTask.bind(this,taskListItem, checkBox);
      deleteButton.onclick = this.deleteTask.bind(this, i);
    }
  },
  deleteTask: function(i){
    this.taskListChildren[i].remove();
    this.scanTaskList();
  },
  completeTask: function(taskListItem, checkBox){
    if (checkBox.checked){
      taskListItem.className = "task completed";
    } else {
      this.incompleteTask(taskListItem);
    }
  },
  incompleteTask: function(taskListItem){
    taskListItem.className = "task";
  }
}





// your form
const form = document.getElementById("create-task-form");

// attach event listener
form.addEventListener("submit", my_func, true);
