const ul = document.querySelector(".taskList");
const input = document.getElementById("inputText");
const btnInput = document.querySelector("#btnInput");
let empty = document.getElementById("empty");


document.addEventListener("DOMContentLoaded",() =>{
    btnInput.addEventListener('click', (e) =>{
        e.preventDefault();

        let li = document.createElement("li");
        
        li.textContent= input.value;
        
        li.className = "list-group-item d-flex justify-content-between align-items-center my-auto";

        li.appendChild(addCompleteButton());

        ul.appendChild(li);

        input.value = "";

        if(ul.childElementCount > 0){
            empty.style.display = "none";
            ul.style.display = "block";
        }
    
    });
});

function addCompleteButton(){
        let btnSuccess = document.createElement("button");

        btnSuccess.textContent = "Complete";
        btnSuccess.className = "btn btn-success buttonDone"

        btnSuccess.addEventListener('click', (e) =>{
            e.preventDefault();
            const item = e.target.parentElement;

            ul.removeChild(item);


            if(ul.childElementCount == 0){
                empty.style.display = "block";
                ul.style.display = "none";
            }

        });

        return btnSuccess;
}