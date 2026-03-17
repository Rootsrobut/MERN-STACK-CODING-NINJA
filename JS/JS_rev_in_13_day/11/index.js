// Implementing Memoization in JavaScript
// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
// The above function is not memoized. It calculates the sum of numbers from 0 to n
// every time it is called.
const memoize=(fun)=>{
    let cache={};
    return function(...args){
       let n=args[0];
       if(n in cache){
        return cache[n];
       }
       else{
        
       }
        
    }
}
console.time();
console.log(calc(5));
console.timeEnd();