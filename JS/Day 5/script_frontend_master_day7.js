
// polyfill for bind methord

let name={
    firstname:'Sumit',
    lastname:'kumar'
}
let printName=function(hometown,state){
    console.log(this.firstname+' '+this.lastname+' , '+hometown+' , '+ state);
}
let printMyName=printName.bind(name,'dehradun');
printMyName('Uttarakhand');



Function.prototype.mybind=function(...args){
    let obj=this;
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}
let printMyName2=printMyName.mybind(name,'dehradun');
printMyName2('Bihar');

// Debouning and  throtting 



// call apply and bind 

// let name2={
//     firstname:'Sumit ',
//     lastname:'Singh',
//     printFullName:function(){
//         console.log(this.firstname+' '+this.lastname);
//     }
// }

// name2.printFullName();

// let name3={
//     firstname:'Niraj',
//     lastname:'Singh',
// }

// name2.printFullName.call(name3);











let name2={
    firstname:'Sumit ',
    lastname:'Singh',
}

let printFullName=function(hometown,state){
    console.log(this.firstname+' '+this.lastname+"from"+hometown+" ");
}

printFullName.call(name2,'Bihar','Begusari');
printFullName.apply(name2,['Bihar','Begusari']);

let name3={
    firstname:'Niraj',
    lastname:'Singh',
}

printFullName.call(name3,'mumbai','nagpur');

//bind methord
let PrintMyName=printFullName.bind(name2,'west Bengal','Hawra');
console.log(PrintMyName);
PrintMyName();












