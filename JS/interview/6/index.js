
let name1 = {
  firstname: "Akshay",
  lastname: "Saint"
};


let printFullName = function(hometown,state) {
  console.log(this.firstname + " " + this.lastname+" "+hometown+" "+state);
};


printFullName.call(name1,'patna','Bihar');


let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar"
};


printFullName.call(name2,'Begusari',"Bihar");
printFullName.apply(name2,['Begusari',"Bihar"]);



printFullName.bind(name2,'Begusari',"Bihar")();

printFullName.bind(name2,'Begusari')();



