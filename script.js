
//addTask("Test");

function addToList(){
    taskText = document.getElementById("inputText").value;

    addTask(taskText);
}

function addTask(taskText){
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    const task = document.createElement("td");
    task.textContent = taskText;
    
    const success = document.createElement("td");
    success.textContent = "Not yet";

    row.appendChild(task);
    row.appendChild(success);

    tableBody.appendChild(row);

}