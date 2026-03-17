// ES6
// Rest & Spread Operator


// function addnumbers(a,b,c){
//     return (a+b+c);
// }
// console.log(addnumbers(2,4,5));

//Examle Rest operator
// function addnumbers(a,b,c,...other){
//     console.log(other); //arr
//     return (a+b+c);
// }
// console.log(addnumbers(2,4,5,8,9,5,4,3,5));

// Example Spread Operator

// function getNames(num1,num2,num3){
//    console.log(num1,num2,num3);
// }
// var names=['Ajay','Annuj','vivek'];
// getNames(names[0],names[1],names[2]);

// function getNames(num1,num2,num3){
//     console.log(num1,num2,num3);
//  }

//  var names=['Ajay','Annuj','vivek'];
//  getNames(...names);
//  getNames(names);

//Object ke sath ->Rest 
// var students={
//     name:'Ajay',
//     age:'28',
//     hobbies:['cricket','singing']
// }
// const age =students.age;
// const {age,name,hobbies}=students;
// const {age,...rest}=students;
// const {...rest}=students;
// console.log(rest);

// var newStudent={
//     ...students
// }

// console.log(newStudent);

//destructure in object
/*
const course={
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'hitesh'
}
// course.courseInstructor
const {courseInstructor:Instructor}=course;
console.log(Instructor);

const coding=['js','ruby','java','python','cpp'];
coding.forEach((item)=>{
   console.log(item);
}); 
//return nothing

const myNums=[1,2,3,4,5,6,7,8,9,10];
const ans=myNums.filter((nums)=>{
   return nums>4;
})
console.log(ans);
*/
// const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// const ans=myNumbers.map((nums)=>{
//     return nums+10;
// });
// const ans=myNumbers.map((nums)=>nums+10).map((nums)=>nums/5).
// filter((nums)=>nums>3.5);
// console.log(ans);

// const ans=myNumbers.reduce((acc,currval)=>acc+currval,0);
// console.log(ans);


// Mock Interview  one 

// question 1

// console.log('A');
// setTimeout(() => {
//   console.log('B');
// });
// ['C', 'D'].forEach((x) => console.log(x));
// console.log('E');

//qusestion 2

// const obj = [
//    { key: 'Sample 1', data: 'Data1' },
//    { key: 'Sample 2', data: 'Data2' },
//    { key: 'Sample 1', data: 'Data1' },
//    { key: 'Sample 3', data: 'Data2' },
//    { key: 'Sample 4', data: 'Data1' },
//    { key: 'Sample 5', data: 'Data2' },
//    { key: 'Sample 6', data: 'Data1' },
//    { key: 'Sample 1', data: 'Data2' }
//  ];
//  const output={}
//  obj.forEach(item=>{
//    if(output[item.key]){
//       output[item.key].push(item.data);
//    }
//    else{
//       output[item.key]=[item.data];
//    }
//  })
 
//  console.log(output)

//question 3

// const memoizeOne = require('memoize-one');
// function add(a, b) {
//   console.log('Add function is called');
//   return a + b;
// }
// const memoizedAdd = memoizeOne(add);

// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(1, 2)); 
// console.log(memoizedAdd(2, 3));

// function memoize(fn) {
//    const cache = new Map(); 
//    return function (...args) {
//      const key = JSON.stringify(args);
//      if (cache.has(key)) {
//        console.log('Returning cached result');
//        return cache.get(key);
//      }
//      console.log('Computing new result');
//      const result = fn(...args);
//      cache.set(key, result);
//      return result;
//    };
//  }
//  function add(a, b) {
//    return a + b;
//  }
//  const memoizedAdd = memoize(add);
//  console.log(memoizedAdd(1, 2)); 
//  console.log(memoizedAdd(1, 2)); 
//  console.log(memoizedAdd(2, 3)); 
 

//question 4

// const a = [1, 2, 3, [4, [5, 6, 7, 8]]];
// function flattenArray(a,flattenedArr) {
//    for(let i=0;i<a.length;i++){
//     if(typeof a[i] === 'number'){
//       flattenedArr.push(a[i]);
//     }
//     else{
//       flattenArray(a[i],flattenedArr);
//     }
//    }
//    return flattenedArr;
// }
// const result = flattenArray(a,[]);
// console.log(result);


// Mock Interview  two 

console.log("This is a debug message");

function computeAmount() {
    let totalAmount = 0;

    this.lacs = function (amountToBeAdded) {
        totalAmount += amountToBeAdded * 100000; 
        return this; 
    };

    this.crore = function (amountToBeAdded) {
        totalAmount += amountToBeAdded * 10000000;
        return this; 
    };

    this.thousand = function (amountToBeAdded) {
        totalAmount += amountToBeAdded * 1000; 
        return this;
    };

    this.value = function () {
        return totalAmount;
    };
}
const result = new computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value();

console.log(result); 

