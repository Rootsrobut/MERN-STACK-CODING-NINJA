
// -----------------------------------------------------------------Day 1--------------------------------------------------------------------------
// randomGuyd = "Simpson";
// console.log(window.randomGuyd);
// var randomGuyd="Simpson Anderson";
// console.log(randomGuyd);
// console.log(window.randomGuyd);

// function show() {
//     if(1){
//         var functionScope = "Hello";
//         let localScope = "World";
//         console.log(functionScope, localScope);
//     }
//     //console.log(functionScope, localScope);
// }
// show();

// datatype
// primitive
// string, number,BigInt, boolean, undefined, null, symbol
// let sym = Symbol("id");
// console.log(typeof sym);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof true);


// non-primitive
// object, array, function, date, regex


//-----------------------------------------------------------------Master Debugging and Become a Pro Developer -------------------------------------


/*

console.log('hiii');
function a(){
    let x=7;
    console.log('Hiii');
    function achild(){
        console.log('Hello');
        function grandchild(){
            console.log('jiya');
        }
        grandchild();
    }
    achild();
}
function b(){
    let y=7;
    console.log(window);
}
function recursion(){
    console.log('hii');
    recursion();
}
recursion();
a();
b();

*/



document.body.addEventListener("click", function () {
    this.firstChild.remove();
});