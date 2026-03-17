// Prototypes in JavaScript 
/*
const obj=new Object({
    name:"John"
})
    
// const obj=new obj();
const obj={
    name:"Ajay Suneja",
    getName: function(){
        return this.name;
    },
    getRoll: function(){
     return this.roll;
    }
}

const obj2={
    roll:1,
    __proto__:obj
}
console.log(obj2);
console.log(obj2.getName());
console.log(obj2.getRoll());
const obj3={
    class: "MCA",
    __proto__: obj2
}
console.log(obj3.getName());


// Javascript Full Course In Depth
randomGuyd='Simpsom'; //windows
console.log(window.randomGuyd);

var randomGuyd='simpsom Add'; //gloabl // function 
let animal='Lion';  //let/const -> block scope 
console.log(window.randomGuyd,window.animal);

function show(){
    if(1){
        var abc='sumit@1234';
        let xyz='sumit@123';
    }
}
//console.log(abc); //error


let age = 25;
let price = 19.99;
console.log('1 ->',typeof age); 
let name = "Alice";
console.log('2 ->',typeof name); 
let isVerified = true;
console.log('3 ->',typeof isVerified); 
let x;  
console.log('4 ->',typeof x); 
let person1 = null;
console.log('5 ->',typeof person1); 

let symbol1 = Symbol('description');
console.log('6 ->',symbol1);
console.log('6 ->',typeof symbol1); 
let bigNumber = 1234567890123456789012345678901234567890n;
console.log('7 ->',typeof bigNumber); 
let person2 = { name: "Alice", age: 25 };
console.log('8 ->',typeof person2); 

let numbers = [1, 2, 3, 4];
console.log('9 ->',typeof numbers); 

function greet() {
    console.log("Hello");
}
console.log('10 ->',typeof  greet); 

let today = new Date();
console.log('11 ->',typeof  today); 

let pattern = /ab+c/;
console.log('12 ->',typeof pattern); 

let map = new Map();
console.log('13 ->',typeof map); 

let set = new Set();
console.log('14 ->',typeof set); 
const number=BigInt(Number.MAX_SAFE_INTEGER*Number.MAX_SAFE_INTEGER);
console.log(number);

const obj={};
obj.name = "React";
console.log(obj);
obj[Symbol()] = 123;
console.log(Object.keys(obj));
console.log(obj);


const way = Symbol();
const way2 = Symbol ("XYZ");
const obj1 = {};
obj1[way2] = "my password";
console.log(obj1);

const obj3={};
const x1 = Symbol.for("asdad");
obj3.name = "asdasd";
obj3[x1]='shree ram';
obj3[Symbol('name')]='12332123321';

console.log(obj3);

let num=10;
let num2=num;
num2=123;
console.log(num2,num);

const obj={};
const obj1={
    ...obj,
};
console.log(obj==obj1);

function getData(param){
    param.getALLAccess=function(){
        {console.log('Hacked')};
    }
}
getData(obj);
console.log(obj);
Object.keys(obj).forEach(k=>{
   obj[k]();
});

const arr=[];
const arr1=arr;
arr1.push(1);

console.log(arr1,arr);


const obj={
    'name':123,
}
function abc(obj){
    let num=obj;
    num=100;
    console.log(num);
}
abc(obj);
console.log(abc);
*/

