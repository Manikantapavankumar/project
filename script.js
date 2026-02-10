function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText + " <button onclick='removeTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}
