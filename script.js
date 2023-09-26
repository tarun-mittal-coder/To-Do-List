//addItem;
let form= document.querySelector(".myForm");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    let input=document.querySelector("#inp");
    console.log(input.value);
    let value=input.value;
    addItem(value);
    input.value="";
})
function addItem(value){
    let ul=document.querySelector(".taskList");
    let li= document.createElement("li");
    li.classList.add("taskItem");
    li.innerHTML=`<input type="checkbox" name="" id="complete">${value} <span><button class="up">⬆</button><button class="down">⬇</button><button class="delete">delete</button></span>`;
   ul.append(li);

}
//deleteItem
let taskList=document.querySelector(".taskList");
taskList.addEventListener("click",function(ev){
    // console.log(ev.target);
    console.log(ev);
    let currentElement=ev.target;
    let className=ev.target.className;
    console.log(className);
    if(className=="delete"){
        let item=currentElement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
    //
   if(className=="up")
   {
    let lisItem = currentElement.parentElement.parentElement;
    let preItem = lisItem.previousElementSibling;
    // console.log(lisItem);
    // console.log(preItem);
    taskList.insertBefore(lisItem,preItem);
   
    
    }
    if(className=="down")
    {
        let lisItem = currentElement.parentElement.parentElement;
        let nextItem = lisItem.nextElementSibling;
        taskList.insertBefore(nextItem,lisItem);
    }

    if(className=="complete"){
        let listitem=currentElement.parentElement;
        listitem.classList.toggle("cut");
    }
    
});