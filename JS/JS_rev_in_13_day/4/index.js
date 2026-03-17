// Apply , call & Bind in js

//problem statement 
/*

let userDetails={
    name:"Rahul",
    Age:28,
    passion:'software Engineer',
    printDetails:function(){
        console.log(this.name,this.Age,this.passion);
    }
}
// userDetails.printDetails();
let userDetails2={
    name:"Sumit Rahul",
    Age:32,
    passion:'software Engineer',
}
// function borrowing 
userDetails.printDetails.call(userDetails2);

let userDetails={
    name:"Rahul",
    Age:28,
    passion:'software Engineer',
    
}
// generic function 
let printDetails=function(state,country){
    console.log(this.name,this.Age,this.passion," ",state," ",country);
}
let userDetails2={
    name:"Sumit Rahul",
    Age:32,
    passion:'software Engineer',
}
// function borrowing 
// printDetails.call(userDetails2,'bihar','india');
// printDetails.call(userDetails,'up','india');
//apply function 
// printDetails.apply(userDetails2,['bihar','india']);
// printDetails.apply(userDetails,['up','india']);
//bind  function 
printDetails.bind(userDetails2,'bihar','india')();
*/

// function composition in js

function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function square(val){
    return val*val;
}

// function addsquare(a,b){
//     return square(add(a,b));
// }
// console.log(addsquare(5,6));

// function composition(f1,f2,f3){
//     return function(...args){
//         return f3(f2(f1(...args)));
//     }
// }
// const result=composition(divide,add,square);
// console.log(result(12,12,12));

