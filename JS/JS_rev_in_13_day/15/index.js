const arr=[5,4,6,5,8,88,8,56,54,85,59,75,54,25,35,53,62,24,45,78,59,25];
for(let i=0;i<arr.length;i++){
    console.log(`Array at ${i} values ${arr[i]}\n`)
}
function GetFunction(){
     let val=document.getElementById('element').value
    if (val<arr.length && typeof val==='number'){
        alert(`${arr[val]}`)
    }
    else{
        alert("Invalid Index")
    }
}
