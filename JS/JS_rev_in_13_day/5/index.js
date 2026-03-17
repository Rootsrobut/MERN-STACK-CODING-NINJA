//Higher Order Function - Episode 5
const companies= [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// forEach
/*
for(let i=0;i<companies.length;i++){
    console.log(companies[i]);
}
    
const ans1=companies.forEach((item,index)=>{
   console.log(item,'------->',index);
});
// return undefine 

//filter
let ans2=ages.filter((age)=>{
    return age>20
})
console.log(ans2);
ans2=companies.filter(function(company){
    return company.category === "Service Based";
})
console.log('2---->',ans2);
// map
const ans3 = ages.map((item) => item * 10);
console.log(ans3);
// sort
const sorted=ages.sort();
console.log(sorted);
*/
// reduce
let curr=0;
const ans4=ages.reduce((acc,curr)=>acc+=curr);
console.log(ans4);

