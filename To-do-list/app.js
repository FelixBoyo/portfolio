function attachEventListener() {
    var list = document.getElementById("taskList");
    list.addEventListener("click", function(event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle("checked");
        }
    });
}

function newElement() {
    var taskInput = document.getElementById("taskInput");
    var inputValue = taskInput.value.trim(); // Trim whitespace from input value

    if (inputValue === '') {
        alert("YOU MUST WRITE SOMETHING!");
        return; // Exit function early if input is empty
    }

    var taskList = document.getElementById("taskList");

    // If the task list doesn't already have a title, add one
    if (!taskList.querySelector("h2")) {
        var title = document.createElement("h2");
        title.textContent = "Your tasks , click when done (^-^)";
        taskList.insertBefore(title, taskList.firstChild);
    }

    // Check if the task already exists
    var existingTasks = taskList.getElementsByTagName("li");
    for (var i = 0; i < existingTasks.length; i++) {
        if (existingTasks[i].textContent.trim() === inputValue) {
            alert("Task already exists!");
            return; // Exit function if task already exists
        }
    }

    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field

    // Create close button
    var container = document.createElement("div");
    container.className = "close-container";
    var span = document.createElement("span");
    span.className = "close";
    var img = document.createElement("img");
    img.src = "delete_FILL0_wght400_GRAD0_opsz24 (1).png";
    span.appendChild(img);
    container.appendChild(span);
    li.appendChild(container);

    // Making the close button remove the item from the list when clicked
    span.addEventListener('click', function () {
        li.remove();
    });

    // Attach event listener to toggle 'checked' class on list items
    attachEventListener();
}
