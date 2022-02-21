var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

//pushing new elements into this array
var todos = [];

// TODO: What is the purpose of this function?
//this displays the total spans for the number of todos in the array as well as creates the complete button for the todo span
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  //sets the todoList text to empty and adds spans depending on the number of total todos in the array
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //this is the logic for adding spans for todos as well as adding a button for completion
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
//fucntion is executed upon pageload
function init() {
  // TODO: What is the purpose of the following line of code?
  //returns the key "todo" from array in global memory
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  //as long as there is a todo stored there will be a value in the todo array
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //executes function renderTodos
  renderTodos();
}


function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //sets the todo array as a string
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
//upon clicking the submit button the value of todoInput is increased
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  //if the todo text is an empty string it will return the function and start over.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 //adds to the todoText array
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  //will add a new todo span and save it to localStorage
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
//removes li elements with the click of the "complete" button
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
  
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
