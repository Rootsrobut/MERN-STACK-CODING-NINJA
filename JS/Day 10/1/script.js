// function greet(){
//     setTimeout(()=>{
//        console.log('hello');
//     },1000);
// }
// function massage(){
//     console.log('welcome to the session !');
// }
// greet();
// massage();

// function greet(callback){
//     setTimeout(()=>{
//        console.log('hello');
//        callback();
//     },1000);
// }
// function massage(){
//     console.log('welcome to the session !');
// }
// greet(massage);










// procoder vedio

// const image=document.querySelector('img');
// const button=document.querySelector('button');
// button.addEventListener('click',()=>{
//     fetch('https://dog.ceo/api/breeds/image/random').then((response)=>response.json()).then((json)=>{
//         image.src=json.message;
//     })
// })
// const image=document.querySelector('img');
// const button=document.querySelector('button');
// button.addEventListener('click',()=>{
//    const xhr=new XMLHttpRequest();
//    console.log(xhr);
//    xhr.responseType='json';
//    xhr.addEventListener('load',()=>{
//    console.log(xhr);
//    console.log(xhr.response);
//    console.log(JSON.parse(xhr.response));
//    image.src=xhr.response.massage;
//    console.log(xhr);
//    })
//    xhr.onload=()=>{
//    image.src=xhr.response.message;
//    console.log(xhr);
//    }
//    xhr.open('GET','https://dog.ceo/api/breeds/image/random',false); //setup karte h // Asynchronous=false by defult true 
//    xhr.send(); // send the request
// })

// Synchronous vs Asynchronous 
//alert('Hello');
// setTimeout(()=> {
//     console.log('hill');
// }, 4000);



// //block main thread

// const btn=document.querySelector('.btn');
// btn.addEventListener('click',()=>{
//     const startTime=Date.now();
//     let currentTime=startTime;
//     while(startTime+8000>currentTime){
//       currentTime=Date.now();
//     }
//     console.log("Hi");
// })
// Callback Hell in JavaScript

