/*
// hoisting in js 
var x = 10;
function getName(){
console. log("Technical Suneja");
}
getName(); 
console.log(x);
const test=()=>{
    console.log("Hello World");
}
test();

Day 8 

// Dynamic Types

let randomvar=2;

randomvar='h';
randomvar=true;
randomvar=[];

randomvar={};

randomvar=()=>{
    console.log('abc');
}
console.log(randomvar);

console.log(typeof null);

// typeof

console.log('4'- 0);// The string '4' is implicitly converted to a number (4) before subtraction.
console.log(true+78);// The boolean true is implicitly converted to 1 before addition. So, 1 + 78 results in:
console.log('4'+ 90);
let result = "3" * "2";   // 6 (both strings are converted to numbers)
if ("Hello") { console.log("This is true!"); }  // This is true!
if (0) { console.log("This won't run!"); }  // Won't run
let resul = "42" == 42;  // true (string "42" is converted to number 42)
let resu = "42" === 42;  // false (no conversion)


// The + operator, when used with a string and a number, triggers string concatenation rather than arithmetic addition. The number 90 is converted to a string and concatenated with '4'
let num='8';
console.log(typeof 4+num++); 
// type conversion 
const message = "hey" + 23 + "asd";
let msg1= `hey ${24} asd`;
let msg2 = `hey ${[1,2,3,4,5,6,[3,4],[[2,3]]]} asd`;
let msg3 = `hey ${{name:'sumit',last:'kumar'}} asd`;
console.log(msg1,'\n',msg2,'\n',msg3);

// explicit  type conversion 

// String Conversion
// To convert values to a string, you can use either the String() function or the .toString() method.

let num1 = 42;
let str1 = String(num);  



let num2 = 42;
let str2 = num.toString();  

// 2. Number Conversion
// To convert values to a number, you can use the Number(), parseInt(), or parseFloat() functions.

let str3 = "42";
let num3 = Number(str3);  // 42
let str4 = "42.5";
let num5 = parseInt(str4);  // 42

let str6 = "42.5";
let num6 = parseFloat(str6);  


// 3. Boolean Conversion
// To convert values to a boolean, you can use the Boolean() function.

let value1 = 1;
let bool = Boolean(value1); 
// Falsy values like 0, "", null, undefined, and NaN will convert to false.
console.log("focus =>"-0 == -0,0== -0,0=== -0)
// 4. Date Conversion
// You can convert a Date object to a number (timestamp) or string.
// Convert Date to a timestamp (milliseconds since epoch):

let date1 = new Date();
let timestamp = Number(date1);  // e.g., 1634256000000
let date = new Date();
let dateString = date.toString();  // e.g., "Mon Oct 18 2021 13:30:00 GMT+0000"

// 5. Array to String Conversion
// To convert an array to a string, you can use the join() method or String().

let arr1 = [1, 2, 3];
let str5 = arr1.join(",");  // "1,2,3"
let arr2 = [1, 2, 3];
let str = String(arr2);  // "1,2,3"

// 6. Explicit Conversion to null or undefined
// You cannot directly convert values to null or undefined through built-in methods. These types are typically assigned directly.

let value = null;         // null
let value2 = undefined;   // undefined
// By using these methods, you can explicitly convert data types in JavaScript as needed.
// NaN and 0


Closure
let myName = "JS";
let dept ='web';
function show(){
}
console.dir(show);
function show(){
   let myName = "JS" ;
   let dept = 'web';
   function inner() {
     console. log (myName);
   }
     console.dir(inner);
}
show();

function show(){
  let name='private name';
  let age=23;
  let dept='HR'; 
   return {
     show: function (){
        console.log(name);
     },
     update:function(val){
        if(val==23){
            name=val;
        }
     }
   }
} 
const showNameFn =show();
console.dir(showNameFn.show());
const obj={name:1};
const arr=[obj];
arr=null;
console.log(arr);

var myName = "223";
function show() {
    myName = "34";
    console.log('Show->1', myName);
};
console.log('Show->2', myName); 
show();


// IIFE
((a,b)=>{console.log(a+b)})(2,3);



// Curring
function addThreeNumbers(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Calling the curried function
console.log(addThreeNumbers(1)(2)(3));  // Output: 6
const addTwo = addThreeNumbers(2);
console.log(addTwo(3)(4));  // Output: 9


// Hoisting

sayHello();  // Output: Hello, World!

function sayHello() {
  console.log("Hello, World!");
}

sayHello();  // Error: sayHello is not a function

var sayHello = function() {
  console.log("Hello, World!");
};
// Function expressions (where functions are assigned to variables) are not hoisted in the same way.
// Only the variable declaration is hoisted, not the function itself.

console.log(myVar);  
var myVar = 10;
console.log(myVar);  

console.log(myVar);  
console.log(myLet);  
sayHello();          

var myVar = 5;
let myLet = 10;

function sayHello() {
  console.log("Hello, World!");
}
*/

// JS Enginel

