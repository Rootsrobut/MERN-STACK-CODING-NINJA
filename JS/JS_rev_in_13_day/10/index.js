// Currying function in Javascript
/*
function Addition(a,b,c){
   return a+b+c;
} 
let res=Addition(2,3,4);
console.log(res);
*/
/*
function Addition(a){
    return function (b){
       return function(c){
       return a+b+c;
     }
   }
}
let res=Addition(2);
let data=res(4);
console.log(data(6));

userobj={
    name: "Ajay",
    age: 28
}
function userinfo(obj){
    return function(userinfo){
    return obj[userinfo];
    }
}
let res=userinfo(userobj);
console.log(res);

// Infinite Currying in JavaScript
function add(a){
    return function(b){
    if(b) return add(a+b);
    return a;
    }
}
console.log(add(4)(5)(9)());


// Synchronous vs Asynchronous
let num1 = 2;
let num2 = 4;
setTimeout(() => { 
    console.log("Hey");
}, 5000);
setTimeout(() => {
    console.log("Hey");
}, 1000);
console.log(num1 + num2);
// Single Thread Nature of JS

// Callbacks
let num=9;
function show(){
    console.log('Inside show function');
}
function massage(callback){
    if(typeof callback=='function'){
        callback();
    }
}
massage(show);
setTimeout(show,2000);



// 2015; // aisa koi bhi tareek nhi tha jis async kaam ho skate
function showMessage() {
console. log("result is out");
}
function giveExam(callback) {
console. log("Exam Given;");
callback();
}
giveExam(showMessage);
// callback hell
// inversion of count => passing the  responsebility
// of callback to the caller of the function
let caller=false;
function abc(){
    console.log('I am inside  function name abc')
}
function def(abc){
    console.log('I am inside function name def')
}
setTimeout(()=>{
    def();
    if(caller){
       return 0;
    }
    else{
       abc();
       caller=true;
    }
},2000);


// Promise Intro
const p1=new Promise(function(resolve,reject){
    console.log('Inside promise');
    setTimeout(function(){
        console.log('Done');
        resolve('promise Done');
    },3000);
});
// Phases of Promise
p1.then((data)=>{console.log('from then',data)})
.catch((e)=>{
    console.log('error occure',e);
 }
)
.finally(()=>{
    console.log('complete ho gaya kab ka');
});


const obj={};
// Object.defineProperty(obj,'test',{enumerable:false});
const mysecreatkey=Symbol('secret');
obj[mysecreatkey]='Mmy money';
console.log(obj);
console.log(Object.keys(obj));


class MyPromise{
  constructor(callback){
    callback(this.resolve,this.reject)
  }
  #resolve(){

  }
  #reject(){

  }
   then(){}
   catch(){}
   finally(){}
}   
// then catch finally
const promiseObj=new MyPromise(function(resolve, reject){
});
promiseObj.then(()=>{
    console.log('then')
});
console.log(promiseObj);

//memoization 

var result=null;
 function sum(){
    if(result!=null){
        return result;
    }
    let i=0;
    while(i<1000000){
    i++;
    }
    result=1+1;
    return 1+1;
 }
 console.log(sum());
 console.log(sum());
 console.log(sum());
 console.log(sum());
 
 1. Closures with additional variable
function memoizedSum(){
  var result=null;
  return function sum(){
    if(result!=null){
        return result;
    }
    let i=0;
    while(i<1000000){
    i++;
    }
    result=1+1;
    return 1+1;
 }
}
const sum=memoizedSum();
 console.log(sum());
 console.log(sum());
 console.log(sum());
 console.log(sum());

function memoizedSum(){
    var result={};
    return function sum(n1,n2){
      if(result[`${n1},${n2}`]){
        console.log('cached');
        return result[`${n1},${n2}`];
      }
      const sumResult=n1+n2;
      result[`${n1},${n2}`]=sumResult;
      return sumResult;
   }
  }
  const sum=memoizedSum();
   console.log(sum(2,3));
   console.log(sum(4,5));
   console.log(sum(6,7));
   console.log(sum(8,9));
   console.log(sum(2,3));
   console.log(sum(4,5));
   console.log(sum(6,7));
   console.log(sum(8,9));
function memo(){
var result = {};
 return function fibonaccai(n){
    if(result[`${n}`]){
        return result[`${n}`]
    }
  if(n<=1){
    return n;
  }
  let ans=fibonaccai(n-1)+fibonaccai(n-2);
  result[`${n}`]=ans;
  return ans;
}
}
const memo1=memo();
console.log(memo1(150));
console.log(memo1(130));
console.log(memo1(150));
console.log(memo1(130));
console.log(memo1(150));
console.log(memo1(130));
console.log(memo1(150));
console.log(memo1(130));

var memo={};
function fibonacci(n) {
    if (n <= 1) {
    return n;
    }
    const res=fibonacci(n - 1) + fibonacci(n - 2);
    memo[n] = res;
    return res;
}
console.log(fibonacci(50));
console.log(fibonacci(30));
console.log(fibonacci(50));
console.log(fibonacci(30));
console.log(fibonacci(50));
console.log(fibonacci(30));
console.log(fibonacci(50));
console.log(fibonacci(30));
//  2. HOF - Higher order Function
function fibonacci (n) {
    if (n <= 1) {
    return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoizefunction(fn){
    let result={};
    return function (...args){
        if(result[args]){
            return result[args];
        }
        const res=fn(...args);
        result[args]=res;
        return res;
    };
}
const memo1=memoizefunction(fibonacci);
console.log(memo1(23));
//  3. HOF with default parameter
function fibonacci(n,memo={}) {
    if(memo[n]){
        return memo[n];
    }
    if (n <= 1) {
    return n;
    }
    const res=fibonacci(n - 1,memo) + fibonacci(n - 2,memo);
    memo[n] = res;
    return res;
}
console.log(fibonacci(15));
console.log(fibonacci(13));
console.log(fibonacci(15));
console.log(fibonacci(13));
console.log(fibonacci(15));
console.log(fibonacci(13));
console.log(fibonacci(15));
console.log(fibonacci(13));
*/
let person = { name: "X" };
const data = { person: person, data: 123 };
//person = null;
console.log(data);
data.person=null;
console. log(data.person);


const wkMap = new WeakMap();
wkMap.set(person, 'person');
person=null
console.log(wkMap.get(person));

