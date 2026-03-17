// promises is an object 


//creation 


// const promiseone=new Promise(function(resolve,reject){
   //       do an async task
   //       db calls,cryptography,network
//       setTimeout(function(){
//           console.log('Async task is compelete');
//           resolve();
//       },1000);
// })


// // consumption
// promiseone.then(function(){
//     console.log('Promise is resolved');
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve();
//     },1000);
// }).then(function(){
//     console.log('Promise is resolved');
// });


// const promiseThree=new Promise(function(resolve,reject){
//       setTimeout(function(){
//             resolve({username:'chai',email:'chai@example.com'})
//       },1000)
// });
// promiseThree.then(function(user){
//    console.log(user);
// })


// const promisefour = new Promise(function(resolve, reject) {
//       setTimeout(function() {
//           let error = false;
//           if (!error) {
//               resolve({ username: 'chai', email: 'chai@example.com', age: '1234' });
//           } else {
//               reject('Error: something went wrong');
//           }
//       }, 10000);
//   });
//   promisefour
//       .then((user) => {
//           console.log(user);
//           return user.username;
//       })
//       .then((username) => {
//           console.log(username);
//       })
//       .catch(function(error) {
//           console.log(error);
//       })
//       .finally(() => {
//           console.log('The finally block is executed, whether the promise is completed or rejected');
//       });
  




// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function() {
//      let error = false;
//      if (!error) {
//     resolve({ username: 'chai', email: 'chai@example.com', age: '1234' });
//     } else {
//     reject('Error: js went wrong');
//     }
//     }, 10000);
// });



//  wait   not hendal error

// async function consumePromiseFive() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// } 

// consumePromiseFive();




// Now you know fetch in javascript 

//getAllUsers ()
// fetch ('https://api.github.com/users/hiteshchoudhary')
// .then ((response) => {
// return response.json;
// })
// .then ((data)=>{
// console. log (data);
// })
// .catch((error) => console. log(error))



