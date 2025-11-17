const ul = document.querySelector(".taskList");
const input = document.getElementById("inputText");
const btnInput = document.querySelector("#btnInput");
let empty = document.getElementById("empty");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((element) => {
    let li = document.createElement("li");

    li.textContent = element;
    li.className = "list-group-item d-flex justify-content-between align-items-center my-auto";
    li.appendChild(addCompleteButton());
    ul.appendChild(li);



});

if(tasks.length > 0){
    empty.style.display = "none";
    ul.style.display = "block";
}


    btnInput.addEventListener('click', (e) =>{
        e.preventDefault();

        let li = document.createElement("li");
        
        li.textContent= input.value;
        tasks.push(input.value);
        
        
        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.className = "list-group-item d-flex justify-content-between align-items-center my-auto";

        li.appendChild(addCompleteButton());

        ul.appendChild(li);

        input.value = "";

        if(ul.childElementCount > 0){
            empty.style.display = "none";
            ul.style.display = "block";
        }
    
    });


function addCompleteButton(){
        let btnSuccess = document.createElement("button");

        
        btnSuccess.className = "btn btn-success buttonDone"

        btnSuccess.addEventListener('click', (e) =>{
            e.preventDefault();
            const item = e.target.parentElement;
            console.log(item.textContent);
            let index = tasks.indexOf(item.textContent.replace("Complete", ""));

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));


            ul.removeChild(item);


            if(ul.childElementCount == 0){
                empty.style.display = "block";
                ul.style.display = "none";
            }

        });

        btnSuccess.textContent = "Complete";

        return btnSuccess;
}