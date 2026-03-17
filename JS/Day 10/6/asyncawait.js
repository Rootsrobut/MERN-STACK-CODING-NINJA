// async function makeAsyncRequest() {
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000';
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         console.log('Request has been resolved.');
//       });
//   }
//   makeAsyncRequest();
  


// function hi(){
//     console.log("hi");
    // throw 'error in program';
    // throw new Error('error in program')
    // throw ''
    // throw error
//     console.log('hiiii');
// }


// async function makeAsyncRequest() {
//   const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
//   const response = await fetch(url) // await is used to return the result of promise function.
//   const data = await response.json()
//   return data
// }
// makeAsyncRequest().then((data) => {
//     console.log(data);
// })

//Try and Catch Block in JavaScript

try {
  let result = 10 / x;  // x is not defined
  console.log(result);
} catch (err) {
  console.log("An error occurred:", err.message);
}



