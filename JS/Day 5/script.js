/*
// function decleration
const sum1=sum(5,6);
console.log(sum1);
  function sum(a,b){
      return (a+b);
  }
// function expression
// console.log(sum2(54,45)); Cannot access 'sum2' before initialization
const sum2=function(a,b){
     return (a+b);
}
console.log(sum2);
console.log(sum2(23,233));


// arrow function

var prod=(num1,num2)=>{ //just one element the follow this
    return num1*num2;
}

var prod=(num1,num2)=> num1*num2;
console.log(prod);
console.log(prod()); //NaN
console.log(prod(23,23));//539


let result=(()=>{
    let x=5;
    return()=>{
        x+=1;
        return x;
    };
})();
console.log (result);

//immediately Invoked Function Expression (IIFE):
(function(){
    console.log("IIFE");
})();

(function() {
    var message = 'Hello, world!';
    function displayMessage() {
        console.log(message);
    }
    displayMessage();
})();
(function(a,b){
   console.log(a ** b);
})(4,3);

const user=(function(){
    const studentdata={
        name:"Rahul",
        rollno:23,
    };
    function getname(){
        console.log(studentdata.name);
    }
    function updaterollno(roll){
        studentdata.rollno=roll;
       console.log(studentdata.rollno);
    }
    return{getname,updaterollno};

})();
console.log(user);
console.log(user.studentdata);
user.getname();
user.updaterollno(34);

function main(){
    return (function(){
        console.log("hello user")
    })();
}
const result=main();
console.log(result);

function main(){
    const userAuth =(function(){
       let user=[{username: "user1 ", password: "pwd1 "},{username: " user2", password: "pwd2 "}];
      function registerUser(username, password) {
        function checkCredentials(username, password) {
          for (let i in user) {
            if (user[i].username === username && user[i].password === password) {
              return true;
            }
          }
          return false;
        }
        if (checkCredentials(username, password)) {
          console.log('The user is already registered');
        } else {
          let newUser = { username: username, password: password };
          user.push(newUser);
          console.log('The user has been added to the registeredUser array');
        }
      }
      return {registerUser};
})();
  console.log(userAuth);
  console.log(userAuth.registerUser("user1","password123"));
  console.log(userAuth.registerUser("user1","password123"));
  return userAuth;
  }
main();
/** pure function 
function calculate(num1,num2){
  return num1*num2;
}
console.log(calculate(23,34));

/*inpure funcion  
let discount=24;
function calcDis(price){
  discount=discount-5;
  return price-discount;
}
console.log(calcDis(32));

function removeVowels(obj) {
  let newObj={value:obj.value};
  newObj.value = newObj.value.replace(/[aeiou]/gi, "");
  return newObj.value;
}
let strObj = { value: "Hello World" };
let newObj = removeVowels(strObj);
console.log(newObj);

/** CallBack Functions 
function greet(name,callback){
     console.log('Hi'+' '+name);  
     console.log(callback);  
     console.log(callback());  
}
function callme(){
  console.log('I am callback function')
}
greet('petter',callme);

function greet(wish) {
  console.log(
    `${wish()}, Welcome to the JavaScript Course`
  );
}
function sayHi() {
  return 'Hi!';
}

function sayHello() {
  return 'Hello';
}

function goodMorning() {
  return 'Good Morning!';
}
greet(sayHi);
greet(sayHello);
greet(goodMorning);


function doSomething(call){
  console.log(call);
  call();
}
doSomething(()=>{
  console. log("hello");
});
function greet(){
  console. log("greet");
}  
doSomething (greet);
doSomething(function (){
console. log("hello");
});
*/
/** function returning functions 

function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}
const greeting = greet('I hope you are doing well');
greeting('Hello');
console.log(greeting('Nama'));
greet('Welcome to the session')('Hi');

function main() {
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
  ];
  function shuffle(arr) {
    return function () {
      let result=[...arr];
      let curr=result.length;
      while(curr!=0){
          let ram=Math.floor(Math.random()*curr);
          curr--;
          [result[curr],result[ram]]=[result[ram],result[curr]];
      }  
      return result;
    };
  }
  const func = shuffle(questions)
  console.log(shuffle);
  const shuffledArray1 = func();
  console.log(shuffledArray1);
  const shuffledArray2 = func();
  console.log(shuffledArray2);
  return shuffle;
}
*/
/* Higher Order Function
const input=[2,3,4,5,6,7,8,9,11,12,13];
console.log(input);


function Square(input){
   const squared=[];
   for(let num of input){
    squared.push(num*num);
   }
   return squared;
}

console.log(Square(input));
function Cube(input){
  const cube=[];
  for(let num of input){
   cube.push(num*num*num);
  }
  return cube;
}
console.log(Cube(input));

const input=[2,3,4,5,6,7,8,9,11,12,13];

function Square(nums){
   return nums*nums;
}
function cube(nums){
  return (nums*nums*nums);
}
function operation(input,fun){
  const output=[];
  for(let nums of input){
    output.push(fun(nums))
  }
  return output;
}
console.log(operation(input,Square));
console.log(operation(input,cube));
*/
/*currying in js
//function(a,b,c) convert into function(a)(b)(c);

function add1(a,b,c){
  return a+b+c;
}
console.log(add1(1,2,3));
function add(a){
  return (b)=>{
    return (c)=>{
      return a+b+c;
    };
  };
}
console.log(add(1)(2)(3));

function power(a,b){
  return a**b;
}
console.log(power(2,3));

function power1(e){
   return (f)=>{
       return (e ** f);
   };
}
console.log(power1(3));
console.log(power1(2)(3));

//map()
const input=[2,4,6,8,7];
const squaredarr=input.map(function(name) {
     return (name*name);
});
console.log(squaredarr);

const input=[2,4,6,8,7];
const squaredarr=input.map(
  (name)=> (name*name)
);
console.log(squaredarr);

let fruit = ["banana", "apple", "mango"]
let maparray = fruit.map((item, ind)=>{
    return {[ind] : item.length};
});
console. log(maparray);


//reduce

//reduce(redfn(),initalvalue);
// function redfn(accumulator,currentValue,currentIndex,arr){
// };
const inputs=[2,3,4,5,6,10];
const sum=inputs.reduce((total,num,index)=>{
  console.log(total,index);
    return total+num;
});
console.log(sum);

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];
function mapContactsToCompanies(contacts) {
   return contacts.reduce(call,{});
}
function call(acc,val){
    if(!acc[val.company]){
        acc[val.company]=[];
    }
    acc[val.company].push(val.name);
    return acc;
};
console.log(mapContactsToCompanies(contacts));

// filter
const inputs=[4,10,2,-3,-3,-4,-5,6,7,-7,344,44,545,5,5];
const postives=inputs.filter((nums)=> nums>0);
console.log(postives);
console.log(inputs);
const negative=inputs.filter((nums)=>nums<0);
console.log(negative);

const inputs=[22,13,15,77,65,98,76,44,55,65];
const find1=inputs.find((num)=>num==64);
console.log(find1);


const find2=inputs.findIndex((num)=>num==64);
console.log(find2);

console.log(this);// pointer to the object //parent object ,window object
const str='Jone';
console.log(this.str);
console.log(str);
console.log(window.str);


'use strict';
function  chackThis(){
  console.log(this); //undefine
}
chackThis();
const checkArrow=()=>{
   console.log(this);
};
checkArrow();

const user1={
  name:'John',
  age:30,
  work:function(){
    console.log(this);
  }
}
user1.work();
const user2={
  userName:'Harry',
};
user2.work=user1.work;
console.log(user2);
user2.work();

// The callback function takes three parameters:

// element: The current element being processed in the array.
// index: The index of the current element in the array.
// array: The array itself.

const fruits = ['apple', 'banana', 'cherry', 'date'];
const hasLongNameAtEvenIndex = fruits.some((fruit, index, array) => {
  console.log(`Checking ${fruit} at index ${index} in array ${array}`);
  return index % 2 === 0 && fruit.length > 5;
});
console.log(hasLongNameAtEvenIndex); // Output: true
const numbers = [4, 2, 7, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [7, 4, 3, 2, 1]

const strings = ['hello', 'world', 'abc', 'xyz'];
strings.sort((a, b) => a.localeCompare(b));
console.log(strings); // Output: ['abc', 'hello', 'world', 'xyz']

const objects = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];
objects.sort((a, b) => a.age - b.age);
console.log(objects); // Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
*/
const weatherobject = [
  { city: 'New York', temperature: 50, pressure: 1015 },
  { city: 'Los Angeles', temperature: 70, pressure: 1010 },
  { city: 'Chicago', temperature: 40, pressure: 1012 },
  { city: 'Houston', temperature: 75, pressure: 1020 },
  { city: 'Miami', temperature: 80, pressure: 1017 },
];

function calculateAverage(thresholdpressure){
  const avgtemp=weatherobject.filter((nums)=>{
    return nums.pressure>=thresholdpressure;
  });
  console.log(avgtemp);
  let total = avgtemp.reduce((acc,curr)=>{
    return acc+curr.temperature;
  },0);
   return (total/avgtemp.length).toFixed(1);
}
console.log(calculateAverage(1015));