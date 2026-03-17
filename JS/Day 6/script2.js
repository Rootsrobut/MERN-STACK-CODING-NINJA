

/// Currying function using bind methord

let multiply=function(x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);


let multiplyByThree=multiply.bind(this,3);
multiplyByTwo(6);


/// Currying function using function closer

let multiply2=function(x){
    return function(y){
        console.log(x*y);
    }
}

multiply2(3)(5);

// async vs defer attributes:

// Event bubbling and capturing

document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('grandparent is clicked');
}, false);  // useCapture = false → Bubbling phase

document.querySelector('#parent').addEventListener('click', () => {
    console.log('parent is clicked');
}, false);  // useCapture = false → Bubbling phase

document.querySelector('#child').addEventListener('click', () => {
    console.log('child is clicked');
}, false);  // useCapture = false → Bubbling phase

// Events go from child → parent → grandparent (bottom-up).
// child is clicked
// parent is clicked
// grandparent is clicked



document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('grandparent is clicked');
}, true);  // useCapture = true → capturing phase

document.querySelector('#parent').addEventListener('click', () => {
    console.log('parent is clicked');
}, true);  // useCapture = true → capturing phase

document.querySelector('#child').addEventListener('click', () => {
    console.log('child is clicked');
}, true);  // useCapture = true → capturing phase

// Events go from  parent → child -> child (up-bottom).



// grandparent is clicked
// parent is clicked
// child is clicked


document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('grandparent is clicked');
}, true);  

document.querySelector('#parent').addEventListener('click', () => {
    console.log('parent is clicked');
}, flase); 

document.querySelector('#child').addEventListener('click', () => {
    console.log('child is clicked');
}, true);  















