/*
var userName = 'Tom';
var userAge = 10;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name) {
  console.log(`*****************************`);
  var greet = 'I hope you are doing fine.';
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = birthYear(currentYear, userAge);
  console.log(`*****************************`);
  return `Your birth year is ${year}`;
}

function birthYear(year, age) {
  console.log('Calculating the birth year');
  return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);
*/
/** Scope in JS 

// Global
// Function(Local)
// Block

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = 'ten';
  let b = 'twenty';

  console.log('***** Inside print Function*****');
  console.log(a, b, c);
  console.log('***** *****');

  function innerPrint() {
    var a = 'inner10';
    console.log('*Inside innerPrint Function*');
    console.log(a, b, c);
  }
  innerPrint();
}

print();
console.log(a, b, c);
*/
/*
let a = 10;
{
  console.log(a);
  let a = 20;
}
*/

/*
'use strict'

let value=10;

if(value) {
    valeu=20;
}
console.log(value);
*/
/*
var x = 10;
let x = 20;
console. log(x);

 */
/*
var a = 10;
let b = 20;

console.log(`a: ${a}, b: ${b}`);

var a = 55;
console.log(`a: ${a}`);
*/
/*
let a = 'Global';
function outerPrint() {
  let b = 'OuterPrint';

  return function innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${b} -> ${c}`;
  };
}
const show = outerPrint();
console.log(show);
const printInner = show();
console.log(printInner);

//Do not alter the starter code
function generateID(num){
  var count=num;
    function inner(){
        var st=`A_2023_${count}}`;
        count++;
        return st;
    }
    return inner;
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100
*/
var a = 1;
function b(){
  a = 10;
  return;
  function a() { }
}
b();
console. log(a);