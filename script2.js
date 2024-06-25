let inputlists=document.getElementById("inputlist");
let inputvalues=document.getElementById("inputvalue");
function addtask(){
if(inputvalues.value===''){
    alert('Please write your Task');
}
else{
 let newtask=document.createElement("li");
 newtask.textContent=inputvalues.value;
 console.log(newtask);
 inputlists.appendChild(newtask);

//  deleting key
let delbutton=document.createElement("span");
delbutton.textContent='\u00d7';
console.log(delbutton);
newtask.appendChild(delbutton);
}
inputvalues.value=null;
saveData();
}
inputlists.addEventListener('click',(e)=>{
if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');
    saveData();
}
if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove('li');
    saveData();
}
saveData();

});

// setting local storage
function saveData(){
    localStorage.setItem("tasks",inputlists.innerHTML);
}
function displayData(){
    inputlists.innerHTML=localStorage.getItem('tasks');
}
displayData();
// localStorage.clear();
console.log(localStorage);
