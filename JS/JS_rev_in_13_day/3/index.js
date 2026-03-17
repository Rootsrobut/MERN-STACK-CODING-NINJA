// closure -> kuch new tarike se sikhte hai
/*
var sum=function(a){
  console.log('Total Viewers '+a);
  var c=4;
  return function(b){
       return a+b+c;
  }
}
const result=sum(200); // calling 
console.log(result(5));

var sum=function(a,b,c){
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var storesum=sum(3,4,5);
console.log(storesum.getSumThree());
console.log(storesum.getSumTwo());*/

// lecture =3 function inside functon 
// function fun(){
//     return function f(a,b){
//        return a+b;
//     }
// }
// var result=fun();
// console.log(result(5,6));

// var createHelloworld=function (){
//     return function(...args){
//         return 'Hello World';
//     }
// }
// var hello=createHelloworld();
// console.log(hello());
// console.log(hello(123));

// var counter=function(n){
//     return function(){
//        return ++n;
//     }
// }
// var counter1=counter(5);
// console.log(counter1);

//lecture 4 To Be Or Not To be 
// object is in the form of key value pair
// let obj={
//     name:'John',
//     age:30,
//     address:{
//         street:'123 main st',
//         city:'NY',
//         state:'NY',
//         },
//     greet:function(){
//        console.log(`Hello ${this.name}`);
//     },

// }
// console.log(obj.greet);

// function calc(val){
//     const obj={
//         add(val1){
//               var a=val+val1;
//               return a;
//         },
//         sub(val1){
//             var b=val-val1;
//             return b;
//         }
//     }
//     return obj;
// }
// console.log(calc(10).add(5));

//lecture 5

// function createCounter(init){
//     let count = init;
//     let obj={
//         increment(){
//           return ++init;
//         },
//         decrement(){
//             return --init;
//         },
//         getCount(){
//             return count;
//         }
//     }
//     return obj;          
// }
// var counter=createCounter(23);
// console.log(counter.increment());

// map , filter reduce 

// var arr= new Array(3)
// arr[0]=11;
// arr[1]=21;
// arr[2]=31;
// var arr1=new Array(23,34,54,45);
// let arr3=[23,43,23,123];
// console.log(arr,'\n',arr1,'\n',arr3);
// let arr4=[{
//        name:'ram',
//        age:23,
//        city:'delhi',
//        marks:90,
//     },
//     {
//         name:'ramaSingh',
//         age:23,
//         city:'patna',
//         marks:60,
//     },
//     {
//         name:'Singh',
//         age:23,
//         city:'Begusari',
//         marks:98
//     },
//     {
//         name:'Ramnath',
//         age:29,
//         city:'Mohali',
//         marks:96
//     }];
//  for(let i of arr4){
//     for(let key in i){
//         console.log(key,i[key]);
//     }
//  }

// const nums=[23,34,54,67,89];
// const nums1=nums.map(fun);
// function fun(n,i,arr){
//     return n*i;
// }
// console.log(nums1)
// array.map((currvalue, index, array) => {})

    // const ages=[12,23,45,43,32,12,32,43];
    // const result=ages.filter(fun);
    // console.log(result);
    // function fun(age){
    //     return age>=35;
    // }
// array.filter((currvalue, index, array) => {})

    // const ages=[1,2,3,4,5,6,7,8,9];
    // const result=ages.reduce(fun);
    // console.log(result);
    // function fun(total,age){
    //     total+=age;
    //     return total;
    // }
//const result=ages.reduce((previousValue, currentValue, currentIndex, array) => {})(fun);
// array.reduce((previousValue, currentValue, currentIndex, array) => {})