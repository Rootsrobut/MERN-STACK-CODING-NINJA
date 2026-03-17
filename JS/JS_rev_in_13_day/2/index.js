/*

// API request and V8 engine
import XMLHttpRequest from 'https'
const xhr=XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/comments');
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState==4){
        console.log(xhr.responseText);
    }
}
xhr.send(); // xml request  call
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const data=JSON.parse(xhr.responseText);
        console.log(data);
        }
    }
      
//Making of promise in js 
const promiseone= new Promise((resolve,reject)=>{
    //do an async task
    //db calls ,cryptography,network
    setTimeout(()=>{
        console.log('Async task is compelete');
        resolve();
    },1000)
})
promiseone.then(function(){
    console.log('promise consumed');
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task two is compelete');
        resolve();
    },1000)
}).then(()=>{
    console.log('chai our code');
})

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
       console.log('yes i am there');
       resolve({username:'Sumit@123',email:'chai@emample.com'});
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
       let error=true;
       if(!error){
        resolve({massage:'yes i am there'});
       }
       else{
        reject({Error:'i am not present  there'});
       }
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
}).catch((user)=>{
     console.log(user);
}).finally(()=>{
    console.log({Done:'yes Hum hu'})
})

async function consumePromiseThree(){
    try{
        const user=await promiseThree;
        console.log(user);
    }
    catch{
        console.log('error');
    }
}
consumePromiseThree();


// Asyc js programming 

// callbacks,promises ,Async,& Await
*/
const datas=[{name:'sumit',profression:'SDE'},
    {name:'Ritesh',profression:'SDE II'},
    {name:'Rahul',profression:'SDE III'}
]
function getDatas() {
    setTimeout(() => {
        let output='';
        datas.forEach((data, index) => {
            console.log(data,'==>',index);
        });
    }, 1000);
}
// function createdata(newdatas,callback){
//     setTimeout(()=>{
//        datas.push(newdatas);
//        callback();
//     },2000);
// }
// createdata({name:'vivek',profression:'backend devloper'},getDatas);
function createdata(newdatas){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdatas);
            let error=false;
            if(!error){
              resolve();
            }
            else{
              reject('kuch sahi nahi H ji');
            }
         },2000);
    })
}
//createdata({name:'vivek',profression:'backend devloper'}).then(getDatas);
// async await
async function start(){
    await createdata({name:'vivek',profression:'backend devloper'});
    getDatas();
}
start();