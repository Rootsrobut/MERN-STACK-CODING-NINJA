/** Functions in JS 
// Creation or defining a function 
function greetUser(){
    console.log("Hello User, you are in Campus");
}

//call or invoke 
greetUser();
greetUser();
//certain lines of code
greetUser(); 


//function with parameters

function greetUser(username,medium){
    console.log(`Hello ${username}, you are in ${medium}!`);
}

greetUser("John Doe",'app'); //passing in a parameter
greetUser('Riya','website');


function calculateAge(birthyear){
    console.log(2024-birthyear);
}
function printdetails(name){
    console.log(`Name:${name}`);
    calculateAge(1994);
}

printdetails('John Doe');
 


/// default parameters
function Sum(num1=0,num2=0){
  console.log(
    `Sum of the numbers is: ${num1+num2}`
   );
}
Sum(4,5);
Sum(4); 
Sum();


// Return Statement

1) function squared(number){
    return number*number;
}
console.log(squared(4));
squared(5);


2) function squared(number){
    console.log(number*number);
}
const a=squared(4);
console.log(a);
squared(5);

*/

/**Arrays in JS 
// Numbers

let numbersArray = [1, 2, 3, 4.5];
console.log(numbersArray);

// Strings

let stringsArray = ["Hello", "World"];
console.log(stringsArray);

// Booleans

let booleansArray = [true, false, true];
console.log(booleansArray);

// Objects
let objectsArray = [{name: "Alice"}, {name: "Bob"}];
console.log(objectsArray);

// Arrays
let arraysArray = [[1, 2], [3, 4], [5, 6]];
console.log(arraysArray);

// Functions
let functionsArray = [
    function() { return "Hello"; },
    function() { return "World"; }
];
console.log(functionsArray);

// Undefined
let undefinedArray = [undefined, 2, 3];
console.log(undefinedArray);

// Null
let nullArray = [null, 1, 2];
console.log(nullArray);

// Symbols
let symbol1 = Symbol('symbol1');
let symbol2 = Symbol('symbol2');
let symbolsArray = [symbol1, symbol2];
console.log(symbolsArray);


// BigInt
let bigIntArray = [10n, 20n, 30n];
console.log(bigIntArray);


// Combining different types in one array
let mixedArray = [
    1,                     // Number
    "Hello",               // String
    true,                  // Boolean
    {name: "Alice"},       // Object
    [1, 2, 3],             // Array
    function() { return "Hi"; }, // Function
    undefined,             // Undefined
    null,                  // Null
    Symbol('symbol'),      // Symbol
    100n                   // BigInt
];
console.log(mixedArray);




const historymarks=[10,20,30,2,4,8,7,6,9];
console.log(historymarks);
console.log(historymarks[5]);
console.log(historymarks[9]);
historymarks[0]=23;
console.log(historymarks);


const studentdetails=['Riya','Alex','bob',897];
console.log(studentdetails);

const arr=new Array('sumit','kumar','singh');
console.log(arr); 

//Array in js  are dynamic

const cities=['patna','varanasi','Goa','ch','Amritsar'];
console.log(cities);

//Array in js  are dynamic
cities[0]='begusarai';
console.log(cities); 

//Methods in array
const teams=['MI','CSk','LSG','RCB','KI'];
console.log(teams);


//push unshift 
const pushretuntype=teams.push('GI');
console.log(pushretuntype);
console.log(teams);
const unshiftreturntype=teams.unshift('DI');
console.log(unshiftreturntype);
console.log(teams);

//pop shift

const shiftreturntype=teams.shift();
console.log(shiftreturntype);
console.log(teams);
const popreturntype=teams.pop();
console.log(popreturntype);
console.log(teams);

//indexOf() includes()
const RCBIndex=teams.indexOf('RCB');
console.log(RCBIndex);
const gtIndex=teams.indexOf('GT');
console.log(gtIndex);

const rcbinclude=teams.includes('RCB');
console.log(rcbinclude);

const gtinclude=teams.includes('GI');
console.log(gtinclude);


//Slice() 

console.log(teams);
console.log(teams.slice(2));
console.log(teams);
console.log(teams.slice(-2));
console.log(teams.slice(2,4));
console.log(teams);


//splice() 

console.log(teams.splice(2,0,'GI'));
console.log(teams);


console.log(teams.splice(2,1,'GI','Aus'));
console.log(teams);

console.log(teams.splice(2,2,'GI','pi','pcb'));
console.log(teams);


//concat 

const  teams2=['USA','PAK','AFG','Beg'];

const bothteams=teams.concat(teams2);
console.log(bothteams); 



const student=['Amit','Riya','choti','laxmi','sanju','jaya','sowma'];
for(let i=0;i<student.length;i++){
    console.log(`Roll Number ${i+1}: ${student[i]}`);
}


const students=['Amit','Riya','choti','laxmi','sanju','jaya','sowma'];
// for(let i in students){
//     console.log(`Roll Number ${Number(i)+1}: ${students[i]}`);
// }

for(let student of students){
    console.log(student);
}


let arr = [4, 2,4,34, 4,4, 1, 12, 1,4,4];
console.log(arr.indexOf(4));

function findDuplicate(arr) {
    var arrDup = [];
    for (var i in arr) {
       if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
           arrDup.push(arr[i]);
       }
  }
    return arrDup;
}



const aprilBatch=['Tina','Madhur'];
const mayBatch=['Riya','Rahul','Raj','Rajesh'];
const juneBatch=['Rohan','vishal','shyam','suresh'];
const julyBatch=[];

function details(batch,student){
    batch.push(student);
    console.log(batch);
}
details(aprilBatch,'rk');
details(mayBatch,'pk');

//Rest  operater

function details(batch,...studentname){
    for(let i of studentname){
        batch.push(i);
    }
    console.log(batch);
}
details(aprilBatch,'sumit','kumar','Ritu','sheena');




// Spread

deep copy 
const newbatch=mayBatch;
console.log(newbatch);

mayBatch.push('newStudent');
console.log(mayBatch);
console.log(newbatch)

//shallow copy Expand/copying

const newbatch=[...mayBatch];
console.log(newbatch);

mayBatch.push('newStudent');
console.log(mayBatch);
console.log(newbatch); 

//Concatenate

const mergedBatch=[...mayBatch,...juneBatch];
console.log(mergedBatch);


const even=[];
const arr=[1,6,8,3,5,20,10];
for(let i of arr){
    if(i%2!=0){
        continue;
    }
    even.push(i);
    if(even.length==5) break;
}
console.log(even); 

function sumOfArray(arr){
    let ans=0;
    for(let i of arr){
        if(i%2!=0 || i%5==0){
            continue;
        }
        ans=ans+i;
    }
    return ans;
}
console.log(sumOfArray(arr)); 

/* strinh traversal 
function findcount(str,ch){
    let count=0;
    for(let i of str){
        if(ch==i){
            count=count+1;
        }
    }
    return count;
}
const str="This is sumit kumar ";
 for(let i=0;i<str.length;i++){
    console.log(str.charAt(i));
    console.log(str[i]);
}
let ch='i';
console.log(findcount(str,ch)); */

/* Methods in String
let str ='JavaScript is a Dynamically is  typed language.';
//includes()
console.log(str.includes('is'));
//replace()
console.log(str.replace('is','was'));
//replaceAll()
console.log(str.replaceAll('is','was'));
//trim()
console.log(str.trim());
//substring()
console.log(str.substring(3));
console.log(str.substring(3,10));
console.log(str.substring(-4,-10));//nothing
//slice()
console.log(str.slice(3,12));
console.log(str.slice(-3));
console.log(str.slice(-10,-3));

//split()
let words=str.split(" ");
console.log(words);


function countWords(str) {
    let count=0;
    let words=str.split(" ");
    count=words.length;
    return count;
  }
let str='I am a Ninja Coder';
console.log(countWords(str)); 

const student={
    name:'sumit',
    age:10,
    hobby:'Danceing',
    100:'hundered',
    show:function(){
        console.log('This is Student details section');
    },

};
console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student.hobby);
console.log(student[100]);
student.show(); */

























