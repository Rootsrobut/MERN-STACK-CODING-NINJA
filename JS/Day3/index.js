// JS interpreted and Compiled?
// JavaScript is an interpreted language, meaning that it is executed line by line at runtime.
// However, modern JavaScript engines (like V8 in Chrome and Node.js) use Just-In-Time (JIT) compilation to improve performance.
// This means that the JavaScript code is compiled into machine code just before execution, allowing for faster execution compared to traditional interpreted languages.



// Execution Context
/*
// The environment in which JavaScript code is executed
// It consists of the variable object, scope chain, and this keyword
// Each function call creates a new execution context
// The execution context is created when a function is invoked and destroyed when the function returns

// Example of execution context

function outerFunction() {
    var outerVar = "I am outside!";
    function innerFunction() {
        var innerVar = "I am inside!";
        console.log(outerVar); 
        console.log(innerVar); 
    }
    innerFunction(); 
}
outerFunction(); 

// Execution Context Stack
// The stack of execution contexts that are created when functions are called
// The top of the stack is the currently executing context
// When a function returns, its execution context is popped off the stack


// Example of execution context stack
// function firstFunction() {
//     console.log("First function");
//     secondFunction();
// }

// function secondFunction() {
//     console.log("Second function");
//     thirdFunction();
// }
// function thirdFunction() {
//     console.log("Third function");
// }

*/





// this ----->>  The this keyword refers to the object that is executing the current function


// 1.is Function invoked with new kweyord?
/*
//answer: this refers to the newly created object
// Example of using new keyword
function Person(name) {
    this.name = name; 
    this.greet = function() {
        console.log("Hello, " + this.name); 
    };
}
const person1 = new Person("Alice");
person1.greet();
*/


// 2. is Function invoked with call/apply/bind?
/*
//answer: this refers to the object passed as the first argument
// Example of using call/apply/bind
function greet() {
    console.log("Hello, " + this.name);
}
const person2 = { name: "Bob" };
greet.call(person2);
greet.apply(person2);
const greetBob = greet.bind(person2);
greetBob();
*/




// 3. is Function invoked as a method of an object?
/*
//answer: this refers to the object itself
function methodExample() {
    console.log(this);
}
const obj = {
    method: methodExample
};
obj.method();
*/



// 4. is Function invoked in global context?
//answer: this refers to the global object (window in browsers)
/*
function globalContextExample() {
    console.log(this);
}
globalContextExample();
*/





// 5. is Function invoked in strict mode?
/*
//answer: this refers to the object that called the function
function strictModeExample() {
    "use strict";
    console.log(this);
}
strictModeExample();
*/

// 6. is Function invoked in a DOM event handler?

/*
answer: this refers to the element that triggered the event
function domEventHandlerExample() {
    console.log(this);
}
document.addEventListener("click", domEventHandlerExample);
*/

// 7. is Function invoked in an arrow function?
/*
// Example of using arrow function
const arrowFunctionExample = () => {
    console.log(this);
};
arrowFunctionExample();
*/




// 8. is Function invoked in a setTimeout/setInterval?
// answer: this refers to the global object (window in browsers) or undefined in strict mode
/*
answer: this refers to the global object (window in browsers) or undefined in strict mode
function setTimeoutExample() {
    console.log(this);
}
setTimeout(setTimeoutExample, 1000);
*/



// 9. is Function invoked in a class method?
/*
// answer: this refers to the instance of the class
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, " + this.name);
    }
}
const personClassInstance = new PersonClass("Charlie");
personClassInstance.greet();
*/







