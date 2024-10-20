const input = document.getElementById("input");
const list = document.getElementById("list-container");

function addtask(){
    if(input.value == ''){
        alert('write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =  input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#xD7";
        li.appendChild(span);
    }
}

list.addEventListener("click",(e)=>{
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);