

//const secTodo = document.querySelectorAll("h4")[1];
// let ctr=0
// setInterval(function counter(){
//     secTodo.innerHTML=ctr
//     ctr=ctr+1},2000)



function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);

    //^ CHECK ONES THE LOGIC 
    // Dynamically recalculate the currentIndex based on the highest existing todo index
    const parentEl = document.getElementById("main");
    const remainingTodos = parentEl.children;

    if (remainingTodos.length === 0) {
        currentIndex = 1; // Reset to 1 if no todos remain
    } else {
        // Find the maximum index among the remaining todos
        let maxIndex = 0;
        for (let i = 0; i < remainingTodos.length; i++) {
            const todoId = remainingTodos[i].id; // Example: "todo-2"
            const todoNumber = parseInt(todoId.split('-')[1]); // Extract the number
            if (todoNumber > maxIndex) {
                maxIndex = todoNumber;
            }
        }
        currentIndex = maxIndex + 1;
    }
}

let currentIndex = 3;
function addTodo() {
    
    const inputEl = document.getElementById("inp");
    const todoText = inputEl.value.trim();

    if (todoText === '') {
      alert('Please enter a todo item.');
      return;
    }

    const parentEl = document.getElementById("main");

    // Create new todo div
    const newTodo = document.createElement('div');
    newTodo.setAttribute("id", 'todo-' + currentIndex);

    // Create new heading element
    const newHeading = document.createElement('h4');
    newHeading.textContent = currentIndex + '. ' + todoText;

    // Create new button element
    const newButton = document.createElement('button');
    newButton.textContent = '-';
    newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");

    // Append elements to the new todo div
    newTodo.appendChild(newHeading);
    newTodo.appendChild(newButton);

    // Append new todo to the parent element
    parentEl.appendChild(newTodo);

    // Increment the index for the next todo item
    currentIndex++;

    // Clear the input field
    inputEl.value = '';
}


//^ Can be do like this also (not more accurate)
// function addTodo() {
//     const inputEl = document.getElementById("inp");
//     const textNode = document.createElement("div");
//     textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + inputEl.value + '</h4><button onclick="deleteTodo(' + currentIndex + ') ">Delete</button>';
//     const parentEl = document.getElementById("main");
//     parentEl.appendChild(textNode);

//     currentIndex = currentIndex + 1;
// }