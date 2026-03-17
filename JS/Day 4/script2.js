var a = 1;
b = 2;
console.log(`a: ${a}`);

/*

const controller = new AbortController();
const signal = controller.signal;


function startTimeout(label) {
  const timeoutId = setTimeout(() => {
    if (!signal.aborted) {
      console.log(`Timeout ${label} finished`);
    } else {
      console.log(`Timeout ${label} should not execute`);
    }
  }, 3000);
  signal.addEventListener("abort", () => {
    clearTimeout(timeoutId);
    console.log(`Timeout ${label} canceled`);
  });
}


startTimeout("A");
startTimeout("B");
startTimeout("C");


setTimeout(() => {
  controller.abort();
}, 1000);

*/
/*

function makeCancelable(promise){
    let cancel;
    const wrappedPromise=new Promise((resolve,reject)=>{
       cancel=()=>reject(new Error('Promise Canceled'));
       promise.then(resolve).catch((reject))
    });
    return {promise:wrappedPromise,cancel};
}

const {promise,cancel}=makeCancelable(
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Data loaded');
        },3000)
    })
);

promise.then(console.log).catch((err)=>console.error(err.message));
setTimeout(cancel,1000);
*/


// how to abort in fectch

const controller = new AbortController();
const signal = controller.signal;

Promise.race([
  fetch("https://fast-api.com/data", { signal }),
  fetch("https://slow-api.com/data", { signal })
])
  .then((response) => {
    controller.abort(); // Cancel the slower fetch
    return response.json();
  })
  .then((data) => console.log("Winner:", data))
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log("Request aborted");
    } else {
      console.error("Fetch error:", error);
    }
  });



  
