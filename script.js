//Selectors
// Create constants for the classes we created
// trick, CTRL+ALT+downarrow to duplicate

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //Create ToDo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;  //uses the input for the new items
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Create Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; // remember to replace with fontawesome
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // remember to replace with fontawesome
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);  // append the new todoDiv to the ul in HTML
    //Clear the textbox after submission
    todoInput.value = "";
}

// Delete the todoDiv event
function deleteCheck(e){        // e means event, so what we are clicking on
    const item = e.target;      // grab the item we are clicking on
    // Delete toDo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;  // the parent element of trash-btn is the todoDiv
        // Animation
        todo.classList.add("fall"); // give it a class of fall
        todo.addEventListener("transitionend", function() { // waits for any transition to end and then runs the next line
            todo.remove();
        });
        //todo.remove(); , if you dont want the transition you can remove it and use this line to use a basic remove
    }

    //Checkmark event
    if (item.classList[0] === "complete-btn") {
       const todo =  item.parentElement;
       todo.classList.toggle("completed");  //we names the toggle a class of "completed", we will add styles to it in css line 97
    }
}

function filterTodo(e) {     //Create the const filterOption and add event listener
    const todos = todoList.childNodes;  // grab all the todos *name value in the select element
    todos.forEach(function(todo) {      // loop over our todos
        switch(e.target.value) {   //value refers back to the select values, we use these as the cases
            case "all":      // case: all shows all the todos
                todo.style.display = "flex";   // show all todos   *needs to be flex to keep the style
                break;
            case "completed":  
                if (todo.classList.contains("completed")) {  //only checl todos with the class completed
                    todo.style.dispplay = "flex";   //...and if they do, show them
                } else {                               //... if they dont...
                    todo.style.display = "none";       //... don't display them
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {  // if todos does *NOT contaon completed
                    todo.style.display = "flex";       // display them
                } else {
                    todo.style.display = "none"     //... don't display them
                }
        }
    });
}


// Stopped video at 31:46