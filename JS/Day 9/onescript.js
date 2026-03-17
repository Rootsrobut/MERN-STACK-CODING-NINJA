// Introduction to Asynchronous JS
// (setinterval) API

// setTimeout(function(){
//     console.log('sumit kumar');
// }, 2000); // 2000ms = 2s


// const changeText=function(){
//     document.querySelector('h1').innerHTML="best Js series"
// }

// const changeMe=setTimeout(changeText,2000);

// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(changeMe);
//     console.log("STOPED");
// })

// const intervalid=setInterval(function(str){
//     console.log(`${str}`,Date.now());
// },1000,'HI')
// // clearInterval(intervalid);
// document.getElementById('start').addEventListener('click',function(){
//     console.log(intervalid);
// })
// document.getElementById('stop').addEventListener('click',function(){
//     clearInterval(intervalid);
// })

// background change game
// const randomColor=function(){
//     const hex='0123456789ABCDEF';
//     let color='#';
//     for(let i=0;i<6;i++){
//         color+=hex[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// let intervalid;
// const changeColor=function(){
//     if(!intervalid){
//         intervalid=setInterval(changethecolor,2000);
//     }
//     function changethecolor(){
//         document.body.style.backgroundColor=randomColor();
//     }
   
// };
// const stopchangingColor=function(){
//     clearInterval(intervalid);
//     intervalid=null;
// };
// document.getElementById('start').addEventListener('click',changeColor);
// document.getElementById('stop').addEventListener('click',stopchangingColor);

// 

// // Number Guessing Game
// // Generate a random number between 1 and 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// function checkGuess() {
//     let userGuess = document.getElementById("guessInput").value;
//     let resultElement = document.getElementById("result");    
//     attempts++;
//     if (userGuess == randomNumber) {
//         resultElement.innerText = `Correct! You guessed it in ${attempts} tries.`;
//     } else if (userGuess < randomNumber) {
//         resultElement.innerText = "Too low. Try again!";
//     } else {
//         resultElement.innerText = "Too high. Try again!";
//     }
// }