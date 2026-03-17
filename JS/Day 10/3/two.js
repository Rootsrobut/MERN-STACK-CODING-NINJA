const xhr = new XMLHttpRequest();
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  console.log(xhr);
  console.log(xhr.response);
});
xhr.open('GET', '//dummyjson.com/test',true);
xhr.send();




// callback Hell 
function makeHttpRequest(method,url,callback){
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
        console.log(xhr);
        console.log(xhr.response);
        callback();
    });
 xhr.open(method,url,true);
 xhr.send();
}

// makeHttpRequest('GET','//dummyjson.com/test');
// makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE');

makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE',(data)=>{
    console.log(data);
    makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE',(data)=>{
        console.log(data);
        makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE',(data)=>{
            console.log(data);
            makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE',(data)=>{
                console.log(data);
                makeHttpRequest('GET','https://dummyjson.com/auth/RESOURCE',(data)=>{
                    console.log(data);
                });
            });
        });
    });
});

