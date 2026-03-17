// Promises in IS
// function print() {
//     setTimeout(() => {
//         console.log('Welcome');
//         setTimeout(() => {
//             console.log('to');
//             setTimeout(() => {
//                 console.log('the');
//                 setTimeout(() => {
//                     console.log('Joyland!');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }
// print();



// Creating a new Promise


// const request= new Promise((resolve,reject)=>{
//     setTimeout (() => {
//       console.log( 'Promise initiated');
//       resolve( 'Promise fulfilled');
//     },1000);
// });
// request.then((value)=>{console.log(value)}).catch("Error h ji").finally("problem solve");
//console.log(request);

// const request= new Promise((resolve,reject)=>{
//     setTimeout (() => {
//       console.log( 'Promise initiated');
//       resolve({firstname:"Sumit",lastname:"Kumar"});
//     },1000);
// });
// request.then((value)=>{console.log(value)}).catch("Error h ji").finally("problem solve");
// console.log(request);


// Chaining multiple promises


// const request= new Promise((resolve,reject)=>{
//     setTimeout (() => {
//       console.log( 'Promise initiated');
//       reject("request havebeen reject!!!");
//     },1000);
// });
// request.then((value)=>{
//     console.log(value)
// }).catch((err)=>{console.log(err)}).finally(()=>console.log('request completed'));
// console.log(request);

//Promise.all

// let p1 = new Promise(function(resolve, reject){
//   console.log("First Promise");
//   resolve("First");
// });

// let p2 = new Promise(function(resolve, reject){
//   console.log("Second Promise");
//   resolve("Second");
// });

// Promise.all([p1, p2])
// .then((value) => {
// console.log(value);
// }).catch((error) => {
// console.log(error);
// });


// Handling Errors


// fetch() API

// fetch(url, options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // or response.text(), response.blob(), etc.
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });


//   fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));



//   fetch('https://api.example.com/data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       key: 'value'
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));


//     fetch('https://api.example.com/data', {
//         headers: {
//           'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
//         }
//       })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));

// Code Optimization

// function getDetails (id) {
    // const request = fetch("https://dummyjson.com/users/${id}");
    // //console.Log (request);
    // const response = request.then((response) => {
        // if(!response.ok){
        //    throw new Error('Id does not match any data');
        //  }
    //     return response.json();
    // });
    // response.then((user)=console.log(user));
    // fetch ("https://dummyjson.com/users/${id}").then((response) => { return response.json();}).then((user) =>console.log(user)).catch((err) =>{
    //   console.error(err);
    // });
    // }
    // getDetails (2) ;
      


// async/await -> keywords

// async function getDetails(id){
//    const  response = await fetch(`https://dummyjson.com/users/${id}`);
//    const userdata = await response.json();
//    displayUser(userdata);
// }





// async function fetchData(){
// const datal = await fetch( 'https://api.example.com/data1');
// const data2 = await fetch( 'https://api.example.com/data2');
// return datal + data2;
// }
// console.log(fetchData());



// Error Handling with Try/Catch

// async function getDetails(id){
// try{
//    const  response = await fetch(`https://dummyjson.com/users/${id}`);
//    if(!response.ok){
//     throw new Error('No Data present');
//    }
//    const userdata = await response.json();
//    displayUser(userdata);
//     }
//     catch(err){
//       console.log(err);
//     }
// }


// Event Loop




