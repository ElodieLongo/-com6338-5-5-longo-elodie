const form = document.getElementById("add-todo");

const formInput = form.querySelector('input');

const todoList = document.getElementById('todo-list');


addEventListener("submit", function(e) {
  e.preventDefault();

  const inputText = formInput.value;
  if (inputText.trim() !== "") {
    
  const newLiEl = document.createElement("li");
    const newButtonEl = document.createElement("button");
    newButtonEl.textContent = inputText;
    newButtonEl.addEventListener('click', function(event) {
      if (newButtonEl.style.textDecoration === "line-through") {
        todoList.removeChild(newLiEl);
      } else {
        newButtonEl.style.textDecoration = "line-through";
      }
    });
    newLiEl.appendChild(newButtonEl);
    todoList.appendChild(newLiEl);

    // Reset the form input
    formInput.value = "";
  }
});







/* pseudocode
- Record typing
- when enter OR click button is pressed, the typed item should appear below the form inside of the ul#todo-list element
- This functionality must be attached to a form submit event using JavaScript.
- the to do item should be added as a button MUST be a button element nested within a li element as depicted in the above markup.
- After adding an item, that item may be clicked in the todo list to mark it as done. The item should be marked done by striking through the words using the text-decoration CSS property. See figure 4 for an example.
- Additionally, clicking an item that's been marked as done should remove the item from the list 

// 



// 
from past assignment - key recording
  document.onkeyup = function (e) {
    handleKeyPress(e.key);
  };

  //
  function handleKeyPress(key) {
  key = key.toLowerCase();
  const isALetter = key.match(/^[a-z]$/);

  let form = document.querySelector ("form")
  form.onsubmit

  */