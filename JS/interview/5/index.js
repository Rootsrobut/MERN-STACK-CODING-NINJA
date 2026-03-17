const myList = document.getElementById("myList");


const newItem = document.createElement("li");
newItem.id='Dragonfruit';
newItem.textContent = "Dragonfruit";
myList.appendChild(newItem);

myList.addEventListener('click',(e)=>{
    console.log(e.target.id);
    if(e.target.id && e.target.tagName=='LI'){
       window.location.href='/'+e.target.id;
    }
});




const form = document.getElementById("form");



form.addEventListener('keypress',(e)=>{
    if(e.target.dataset.uppercase != undefined){
         e.target.value=e.target.value.toUpperCase();
    }
})
