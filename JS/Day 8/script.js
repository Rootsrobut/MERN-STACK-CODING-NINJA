// APIs (Application Programming Interfaces) 
/*
let document = 20;
console.log(document);         // Logs: 20
console.log(window.document);  // // Logs: [object HTMLDocument] (or the actual document object)
*/

//  console.log(document.querySelector("h1")); //first occurance of element
//  console.log(document.querySelectorAll("h1"));//all occurance of element
//  const firstHead=document.querySelectorAll('h1');
//  console.log(firstHead);
//  console.log(document.querySelector(".second"));
//  console.log(document.querySelector("#para"));

//  const heading=document.querySelector(".second");
//  const para=document.querySelector("#para");

// console.log(document.getElementById("para")); // do not use # 
// console.log(document.getElementsByClassName("first"));

// console.log(document.getElementsByTagName('h2'));

// heading.style.color="red";
// para.style.backgroundcolor='gray';

//getattribute and setattribute 
/*
console.log(document.querySelectorAll('[procodrr]')); //attribut selector
console.log(document.querySelector('[procodrr="sumit@kumar"]'));
console.log(document.querySelector('[procodrr="sumit"]'));

console.log(document.querySelector('[procodrr]').attributes.procodrr); //object formate
console.log(document.querySelector('[procodrr]').getAttribute('procodrr')); //string formate
console.log(document.querySelector('[procodrr]').getAttribute('procodrrrrrr')); //null 
console.log(document.querySelector('[procodrr]').attributes.procodrr.value);  //string formate
console.log(document.querySelector('h1').getAttribute('class'));
document.querySelector('h1').setAttribute('title','Hellow world....!!!!');//->(attribute,value);
console.log(document.querySelector('h1').getAttribute('title'));
document.querySelector('h1').setAttribute('id','heading');
console.log(document.querySelector('h1').id); //directaly access "predefined attributes" class,id,style,title
document.querySelector('h1').id='heading2'; //dirrctaly set 
console.log(document.querySelector('h1').id);
*/


// const btn=document.createElement('button');
// btn.textContent='Click me';
// btn.style.color=red;
// btn.className='btn';
// const division = document.querySelector('div');
// division.appendChild(btn);

// const p=document.createElement('p');
// p.textContent='Hello world';
// p.style.color='blue';
// p.className='p-class-js';
// const  division2=document.querySelector('div');
// division2.appendChild(p);

// var element = document.getElementById("top")//box me id ka value;
// var htmlContent = element.innerHTML;
// console.log( htmlContent);
// element.innerHTML = "<strong>New content</strong>";
// var updatedHtmlContent = element.innerHTML;
// console.log(updatedHtmlContent);
// var element = document.getElementById("top");
// var textContent = element.textContent;
// console.log(textContent);

// var element = document.getElementById("top")//box me id ka value;
// var htmlContent = element.outerHTMLHTML;
// console.log( htmlContent);

// element.outerHTML = "<h1>This is sumit from begusari</h1>";
// var updatedHtmlContent = element.outerHTML;
// console.log(updatedHtmlContent);

// // Creating new elements
// var parentElement = document.getElementById("first");
// var childElement = document.createElement("div");
// // Appending the child element to the parent element
// parentElement.appendChild(childElement);

// // Creating new elements
// var parentElement = document.getElementById("second");
// var childElement = document.createElement("div");
// var textNode = document.createTextNode("Hello, World!");
// // Appending multiple elements to the parent element
// parentElement.append(childElement, textNode);


//Adding an Element using Backticks

// Creating a new element using backticks

// var className = "my-class";
// var content = "This is a new element";
// var element = `<div class="${className}">${content}</div>`;

// // Creating a group of elements using backticks
// var elements = `
// <div class="element">Element 1</div>
// <div class="element">Element 2</div>
// <div class="element">Element 3</div>
// `;

// Using insertAdjacentHTML
// const element1 = document.getElementById('top');
// element1.insertAdjacentHTML('beforeend', '<p>New content using insertAdjacentHTML</p>');
// console.log(element1.innerHTML);

// // Using innerHTML
// const element2 = document.getElementById('top');
// element2.innerHTML = '<p>New content using innerHTML</p>';
// console.log(element2.innerHTML);

// // Using insertBefore

// const parentElement = document.getElementById('top');
// const newElement = document.createElement('p');
// newElement.textContent = 'New content using insertBefore';

// const referenceElement = document.getElementById('first');
// parentElement.insertBefore(newElement, referenceElement);
// console.log(parentElement.innerHTML);

//Remove element 
// document.getElementById('btn').remove();

//Event Listeners
/*
const  para= document.querySelector('p');
//para.addEventListener("click",clickPara);tack rwo parameter (type of event and function)
para.addEventListener("click",function(){
    clickPara('Hello')
});
para.addEventListener("click",clickPara); 
function clickPara(name){
    console.log(name + " Button clicked");
}

// click: Fired when a mouse click occurs on an element.

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

//contextmenu: Fired when the right mouse button is clicked, often bringing up a context menu.
document.getElementById("myElement").addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevents the default context menu
    alert("Right-click menu disabled!");
});
// mouseover / mouseout: Fired when the mouse pointer enters or leaves an element, respectively.
var element = document.getElementById("myElement");
element.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});
element.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});
// mousedown / mouseup: Fired when a mouse button is pressed or released over an element, respectively.
var element = document.getElementById("myElement");
element.addEventListener("mousedown", function() {
    this.style.border = "2px solid red";
});
element.addEventListener("mouseup", function() {
    this.style.border = "";
});
// mousemove: Fired when the mouse pointer is moved over an element.
document.getElementById("myElement").addEventListener("mousemove", function(event) {
    console.log("Mouse position: " + event.clientX + ", " + event.clientY);
});

// submit: Fired when a form is submitted.

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    alert("Form submitted!");
});

// focus / blur: Fired when an element gains or loses focus, respectively (typically used with form elements).


var input = document.getElementById("myInput");
input.addEventListener("focus", function() {
    this.style.backgroundColor = "lightblue";
});
input.addEventListener("blur", function() {
    this.style.backgroundColor = "";
});

// DOMContentLoaded: Fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});
// transitionend: Fired when a CSS transition has completed.
var element = document.getElementById("myElement");
element.addEventListener("transitionend", function() {
    console.log("Transition completed");
});



// lecture   more on events

const p=document.querySelector('p');
p.addEventListener('mouseover',function(){
    p.style.backgroundColor='yellow';
});
p.addEventListener('mousedown',function(){
    p.style.backgroundColor='';
});
p.addEventListener('mouseup',function(){
    p.style.backgroundColor='blue';
});
document.body.addEventListener('keydown',()=>
    console.log('keyPressed')
);
document.body.addEventListener(
    'keydown',
    (event)=>{
    console.log('keyPressed');
    console.log(event.key);
    // console.log(event.keyCode);
    }
);
// The clientX and clientY properties of the MouseEvent object can be used to access the coordinates of the mouse pointer relative to the viewport during the mousemove event.
// clientX gives the horizontal coordinate, and event.clientY gives the vertical coordinate of the mouse pointer relative to the viewport.



document.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log('Mouse X: ' + x + ', Mouse Y: ' + y);
});

*/

// Event propagation 

//Capture Phase: This phase starts from the root and moves down to the target element.
// Event listeners for the capture phase have a chance to intercept the event before it reaches the target.

//Target Phase: This phase occurs when the event reaches the target element.
// Event listeners attached directly to the target element handle the event during this phase.

//Bubble Phase: This phase starts from the target element and moves back up to the root.
// Event listeners for the bubble phase handle the event as it bubbles up through the DOM tree.

// document.querySelector('h3').addEventListener('click',()=>
//     console.log('Heading h3 clicked')
// );
// document.getElementById('innerDiv').addEventListener('click',()=>
//     console.log('Inner div clicked')
// );
// document.getElementsByTagName('div')[0].addEventListener('click',()=>
//     console.log('Outer div Clicked')
// );
// document.body.addEventListener('click',()=>
//     console.log('Body Clicked'),true
// );







// document.querySelector('h3').addEventListener('click',()=>
//     console.log('Heading h3 clicked')
// );
// document.getElementById('innerDiv').addEventListener('click',()=>
//     console.log('Inner div clicked'),true
// );
// document.getElementsByTagName('div')[0].addEventListener('click',()=>
//     console.log('Outer div Clicked'),true
// );
// document.body.addEventListener('click',()=>
//     console.log('Body Clicked'),true
// );



// (bubling)
// document.querySelector('h3').addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log('Heading 3 Clicked');
// });