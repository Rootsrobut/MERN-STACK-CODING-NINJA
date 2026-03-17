//------------------------------------------------------------Day 1---------------------------------------------------------
/*
// Check if the array includes the exact string "javascript"
console.log(["javascript", "react"].includes("javascript")); // true

// Check if the string "javascript" contains the substring "script"
console.log("javascript".includes("script")); // true

// Check if the array includes the exact string "script"
console.log(["javascript", "react"].includes("script")); // false

// Check if the string "javascript" contains the substring "java"'
console.log("javascript".includes("java")); // true
*/

//------------------------------------------------------------Day 2---------------------------------------------------------

/*

// question 1. 
// myName;

// question 2. 
//var myName;

// question 3. 
//var myName=2;

// question 4. 
myName=2;

console.log(myName);
// answer of question 1,2,3,4   =    error,undefine,2,2

*/

//---------------------------------------------------------Day 3------------------------------------------------------------
/*
let a;
let b;

a = 1;
b = (a++, a++, (a) => a + 1)(a);
console.log(b);
*/

/*

let a;
let b;
a = 1;
// a is incremented twice before the arrow function is selected
let fn = (a++, a++, a => a + 1); // a becomes 3
b = fn(a); // fn(3) → 3 + 1 = 4
console.log(b); // 4

*/

//------------------------------------------------------------Day 4---------------------------------------------------------
/*
const obj = {
  lib: "React",
  showName: function () {
    console.log(this.lib);
  },
};
// Direct call
obj.showName(); // React
// Delayed call
setTimeout(obj.showName, 100); // undefined
// The value of `this` in the context of setTimeout is the global object (or undefined in strict mode).
// To fix this, we can use an arrow function or bind the context:
// setTimeout(() => obj.showName(), 100); // React
// or // setTimeout(obj.showName.bind(obj), 100); // React

*/

//------------------------------------------------------------Day 5---------------------------------------------------------
// const obj={age:10};
// const age=obj.age; // not proper way

// this is proper way

// one
// const age=obj?.age || 0; // optional chaining operator

// two
// let age=0;
// if(obj && obj.age){ // always do null chacking
//     age=obj.age;
// }else{
//     age=0;
// }

// const obj={age:10};
// const {age}=obj || {}; or const {age=0}=obj;

//------------------------------------------------------------Day 6---------------------------------------------------------

/*
const a= {valueOf:()=>2};
console.log(a==2);
console.log(a+3);
console.log(a>1);

// (+,=,> can't be performend on non-primitives)
// non-primitives needs to be converted into primitives first 
// so javascript will call valueOf() method to convert non-primitives into primitives
// so in the above example a is converted into 2 and then 2==2, 2+3=5, 2>1   
*/
//------------------------------------------------------------Day 7---------------------------------------------------------
/*
function parent() {
  let lang = "js";
  let lib = "React";
  function child() {
    console.log(lang);
    console.log(lib);
  }
  function sibling() {
    console.log("what about me.?");
  }
  console.dir(child);
  console.dir(sibling);
}
parent();
*/
//------------------------------------------------------------Day 8---------------------------------------------------------
/*
const User = {
  ADMIN: "ADMIN",
  GUEST: "GUEST",
};
const UserRole = {
  ADMIN: 1,
  GUEST: 2,
};
// Example comparisons
const usr = "ADMIN"; 
const us = 1; 
if (User.ADMIN === usr) {
  console.log("Matched by role name"); // ✅ This will run slow 
}
if (UserType.ADMIN === us) {
  console.log("Matched by role ID"); // ✅ This will also run fast 
}
*/
//------------------------------------------------------------Day 9---------------------------------------------------------
/*
if([]) {
   console.log('1');
}
if([] == true) {
    console.log("2");
}else {
    console.log("3");
}

*/

// output 1,3

//------------------------------------------------------------Day 10--------------------------------------------------------
/*
const obj = {a: 'JS'};
const {a, a:b, a:c} = obj;
console.log(a,b,c);

// output : 'JS','JS','JS'
*/
//------------------------------------------------------------Day 11--------------------------------------------------------
/*
function show() {
  {
    (function () {
      var x = 9;
      var y = 10;
    })();
  }
  console.log(x, y); // x is not defined, y is not defined
}
show();
*/
//------------------------------------------------------------Day 12--------------------------------------------------------------

/*
let a=NaN;
let b=NaN;
console.log(a==b);
console.log(a===b); 

//output : false, false
// NaN is not equal to anything, even itself.
*/
//------------------------------------------------------------Day 13---------------------------------------------------------

/*
let n='20';
console.log(n+1);
console.log(++n); // internaly Number(n)+1
console.log(n++); // internaly Number(n)+1

// output:-'201', 21, 21

*/

//------------------------------------------------------------Day 14---------------------------------------------------------

/*

let a=10;
let b=a++;
console.log(a+b); 
// output : 21

*/

//------------------------------------------------------------Day 15---------------------------------------------------------

/*
let name='Js';
nume[1]='a'; 
console.log(name);

// output : Js
// TypeError: Cannot assign to read only property '1' of string 'Js'
// strings are immutable in javascript, so we can't change the value of a string at a specific index.

*/

//------------------------------------------------------------Day 16---------------------------------------------------------

/*
let num=1;
const sum=++num+num++;
console.log(num); // 4
// pre increment: operator has a higher precedence over addition
*/

//------------------------------------------------------------Day 17---------------------------------------------------------

/*
console.log('2'+1+1); 
console.log(1+1+'2'); 

// output : '211', '12'

*/

//------------------------------------------------------------Day 18---------------------------------------------------------
/*

[a]=[2,3,4,5];
console.log(a); // output : 2 
// Destructuring assignment in javascript allows us to unpack values from arrays or properties from objects into distinct variables.
// In this case, the first element of the array [2,3,4,5] is unpacked into the variable a.

*/

//------------------------------------------------------------Day 19---------------------------------------------------------

/*
const yt= 'FrontEndMastery';
const ig= 'Allah.dev';

const result= ig && yt ;
console.log(result); // output : FrontEndMastery
// The && operator returns the first falsy value or the last value if all are truthy.
*/
//------------------------------------------------------------Day 20---------------------------------------------------------

/*

const js='&';
if(0===1){
  js='*';
}
console.log(js); // output : &

*/

//------------------------------------------------------------Day 21---------------------------------------------------------

/*

let a='10';

switch(a){
  case '10':
    let msg='moye moye';
    console.log(msg);
    break;
  case '11':
    {
    let msg='happy happy';
    console.log(msg);
    break;
    }
}

*/

//------------------------------------------------------------Day 22---------------------------------------------------------

/*

const arr=[];
arr[10]=10;
console.log(arr.length); // 11
arr[100]=100;
console.log(arr.length); //101


arr.forEach((d)=>{
  console.log('Hi'); 
})

// output: 2 time Hi
// 1 time for 10 and 1 time for 100

console.log(z);
z=1;

// output: ReferenceError: Cannot access 'z' before initialization
// The variable 'z' is declared with 'let', so it is in a "temporal dead zone" until the declaration is encountered.

*/

/* 
const arr=new Array(2);
console.log(arr); // output: [ <2 empty items> ]
[...arr].forEach((elem)=>{
  console.log('Hi'); 
})
// output: 2 time Hi


var show = 1;
console.log(show); 
function show() {
  console.log('Hello Hi');
}
console.log(show); 

// output: 1, 1
// The first console.log shows the value of the variable 'show' which is 1. The second console.log shows the value of the function 'show' which is also 1 because function declarations are hoisted in JavaScript.


let a=[4,2,5,6,8,9];

// to get last element of array

console.log(a[a.length-1]); // output: 9


console.log(a.slice(-1)); 
console.log(a.at(-2));  
console.log(a.slice(-2)); 
console.log(a.at(-3)); 


(async function() {
  const data=await 1;
  console.log(data); 
})(); 
console.log('2');

// output: 2,1

// Await can be Used with any non promise value
// non promise value will be converted into a promise and then resolved.
// await 1----> promise.resolve(1)
// microtask queue will be used to resolve the promise and then the value will be printed.


*/

//------------------------------------------------------------Day 23---------------------------------------------------------
/*

console.log(new Array(1,2));
console.log(Array(2));

// output: [ 1, 2 ], [ <2 empty items> ]
// The first line creates an array with two elements (1 and 2), while the second line creates an array with a length of 2 but no elements (empty slots).


function animal(){};
Animal.prototype.home=()=>{
    console.log('Animal home');
}
function bird(){};

Bird.prototype=Object.create(Animal.prototype);

const bird=new Bird();
bird.home(); // output: 'Animal home'


if(NaN){
    console.log('true');
}else{
    console.log('false'); 
}

console.log(typeof NaN); // output: number
console.log(NaN===false);
console.log(NaN==0); 
console.log(NaN==""); 
console.log(NaN==null);


async function fetchData(){
}
console.log(fetchData()); // output: promise {<fulfilled>: undefined}

async function fetchData(){
  return 1;
}
console.log(fetchData()); // output: promise {<fulfilled>: 1} 
*/
//------------------------------------------------------------Day 24---------------------------------------------------------
/*

const obj = {
  name: "John",
};

const arr=['name'];

obj[arr]='react';

console.log(obj.name);

// output:- react

// object containe : key as string and symbol 

// {1:'data'}
// {[]:'data'}
// {{}:'data'}
// {true:'data'}

// all are converted  into tostring() 

*/

//------------------------------------------------------------Day 25---------------------------------------------------------

// const str=`let n1=2; let n2=2; console.log(n1+n2)`;
// setTimeout(str,1000);
// output:--> 4
// js interal call eval(string)

// module file
// console.log(await 'Hiiii');
// non Promise value
// this is internaly convert into await Promise.resolve('Hiiii');

//due to top level await async donot require

// const {length}='js';
// console.log(length);

// output:--> 2 due to boxing in js;

// [1,2,3,4].forEach((num)=>{
//   console.log(num);
//   return;
// });

// [1,2,3,4].forEach((num)=>{
//   console.log(num);
//   break;
// })

//-----------------------------------------------------------------Currying in js -------------------------------------------------

let multiply = function (x, y) {
  console.log(x + y);
};
let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);
multiplyByTwo(5);
multiplyByThree(5);

const add = function (x) {
  return function (y) {
    return function (z) {
      console.log(x + y + z);
    };
  };
};

console.log(add(x)(y)(z));
