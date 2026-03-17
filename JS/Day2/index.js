// Dynamic Types
// typeof
// NaN and -0
//🔍 Example: Testing falsy values

let values = [false, 0, -0, 0n, "", null, undefined, NaN,"0",[],{},function(){}];
values.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});



// Closure


// Closure is a function that has access to its outer function's scope even after the outer function has returned

// Example of closure
function outerFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable); 
    }
    
    return innerFunction;
}
outerFunction()(); 

function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
// IIFE

// Immediately Invoked Function Expression
(function() {
    console.log("I am an IIFE");
})();
(function(x, y) {
    console.log(x + y);
})(5, 10);

// Arrow Functions
const add = (a, b) => a + b;
const square = x => x * x;


const sum = (a, b) => a + b;
console.log(sum(5, 10)); // 15
const double = x => x * 2;
console.log(double(5)); // 10





// Callbacks
// A function passed as an argument to another function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}
fetchData(function(data) {
    console.log("Data fetched:", data);
});






// Promises
// A way to handle asynchronous operations in JavaScript


const myPromise = new Promise((resolve, reject) => {
    const success = true; 
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});
myPromise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });



// Async/Await

// A syntactic sugar built on top of promises
// Allows you to write asynchronous code that looks synchronous
// Example of async/await
async function fetchData() {
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
    console.log(response); // "Data fetched!"
}
fetchData();


// Async/Await with error handling

async function fetchDataWithErrorHandling() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error fetching data!");
            }, 2000);
        });
        console.log(response); 
    } catch (error) {
        console.error(error); 
    }
}
fetchDataWithErrorHandling();



// Event Loop


// The mechanism that allows JavaScript to perform non-blocking I/O operations
// by using an event-driven, callback-based model
// The event loop continuously checks the call stack and the message queue

// If the call stack is empty, it takes the first message from the queue and pushes it to the call stack for execution
// Example of the event loop

console.log("Start");
setTimeout(() => {
    console.log("Timeout 1");
}, 0);
setTimeout(() => {
    console.log("Timeout 2");
}, 0);
console.log("End");







// The event loop allows JavaScript to handle asynchronous operations without blocking the main thread
// Example of event loop with promises
console.log("Start");
setTimeout(() => {
    console.log("Timeout 1");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise 1");
});
setTimeout(() => {
    console.log("Timeout 2");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise 2");
});

// Curring
// A technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument
// Example of currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);
console.log(multiplyBy2(5)); 
console.log(multiplyBy3(5)); 

// Hoisting

// The JavaScript engine's behavior of moving variable and function declarations to the top of their containing scope during compilation
// Example of hoisting
console.log(myVar); // undefined
let myVar = 10; // Variable declaration is hoisted, but assignment is not

show();
function show(){
    console.log('age',age);
    var age = 20;
}



// JS Engine
// The JavaScript engine is responsible for executing JavaScript code
// It consists of a parser, interpreter, and runtime environment
// The parser converts the code into an Abstract Syntax Tree (AST)
// The interpreter executes the code based on the AST
// The runtime environment provides the necessary APIs and libraries for the code to run



// Example of JS engine
console.log("Hello, World!"); // The JS engine executes this code
// The parser converts it into an AST
// The interpreter executes the AST
// The runtime environment provides the console.log function
// The JS engine is responsible for managing memory, handling events, and executing asynchronous code
// It uses a garbage collector to free up memory that is no longer needed
