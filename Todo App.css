//Todo App
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
// access kiye

btn.addEventListener("click" , function (){
    //console.log(inp.value);
    let item = document.createElement("li")
    //list under koi item aad kr do
item.innerText = inp.value;

//delete button batano
let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
  inp.value = "";  
});

ul.addEventListener("click", function(event){
    //console.dir(event.target); //kon tha target iska button ya aur koi ye batayega
    console.dir(event.target.nodeName); // kis chij ne triggered kiya (button, para, heading)
if(event.target.nodeName == "BUTTON") {

    let listItem = event.target.parentElement;
    listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
} 
});
