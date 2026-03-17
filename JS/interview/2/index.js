let sum1=function(a){
    return function(b){
        return function(){
            return a+b;
        }
    }
}
console.log(sum(2)(3)());


// using recursion 

 let sum2=function(a){
    return function(b){
        return b ? sum2(a+b):a;
    }
 }

 console.log(sum2(1)(2)(3)(4)());