const inputbox=document.getElementById("inbox");
const list=document.getElementById("listcont");
function addtask()
{
    if(inputbox.value==='')
    {
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    save();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",list.innerHTML);
}

function show(){
    list.innerHTML=localStorage.getItem("data");
  
}
show();