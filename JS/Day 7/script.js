
/*
//L1 class in js 
//constructor function 
function Vehicle(name,color,wheels){
    this.name=name;
    this.color=color;
    this.wheels=wheels;
//    this. getDetails=function(){
//     console.log(`The Name is ${this.name} in  Color ${this.color}. it has  ${this.wheels} wheels`);
//     }
}
const car=new Vehicle('car','blue',4);
Vehicle.prototype.getDetails = function() {
    console.log(`The Name is ${this.name} in Color ${this.color}. It has ${this.wheels} wheels.`);
};
console.log(car);
car.getDetails();
console.log(car.hasOwnProperty('getDetails')); //false
//classes in Js is acctualy function as well ans class abstraction /
// class decleration 

class Vehilcleclass{
    //properties (you can completely skip this part. this is follow best pratices only . all properties  declear erliear)this is optional
    name;
    color;
    wheels;
    //constructor
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
    }
    //methords
    getDetails(){
        console.log(`The Name is ${this.name} in  Color ${this.color}. it has  ${this.wheels} wheels`);
    }
}
// create instance .it automaticaly call constructor at that time instance is created
const veh1=new Vehilcleclass('scooter','Gray',2);
//Veh1.getDetails();
console.log(veh1.hasOwnProperty('color')); //true
console.log(veh1.hasOwnProperty('getDetails')); //false

// class expressions  in js 
//Named Class Expression: A class is defined with a name, which is local to the class's body.
// Named class expression
let MyClass = class MyClassName {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  // Using the named class expression
  let person = new MyClass('Alice');
  person.sayHello(); // Outputs: Hello, Alice
  
//Unnamed Class Expression: A class is defined without a name.
// Unnamed class expression
let AnotherClass = class {
    constructor(age) {
      this.age = age;
    }
    showAge() {
      console.log(`Age: ${this.age}`);
    }
  };
  
  // Using the unnamed class expression
  let anotherPerson = new AnotherClass(25);
  anotherPerson.showAge(); // Outputs: Age: 25

*/




//L3 Encapsulation 
/*
class VehicleCl{
  #regNumber;
  name;
  color;
  wheels;
  constructor(name,color,wheels,number){
    this.name=name;
    this.color=color;
    this.wheels=wheels;
    this.#regNumber=number;
  }
  //private Method
  #getNumber(number){
     return number;
  }
  //method
  getDetails(){
    console.log(`The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels.Registration Number is: ${this.#getNumber(this.#regNumber)}`);
  }
}
const veh1=new VehicleCl('Scooter','Grey',2,12018023);
console.log(veh1);
veh1.getDetails();
veh1.name='car'; //direct access
// veh1.#regNumber=12122323; //error #regNumber is private do not excess outside the class 
//veh1.#getNumber(); //error 
*/
//L4 inheritance in class
/*
class  Vehicle{
       name;
      color;
      wheels;
       constructor(name,color,wheels){
         this.name=name;
         this.color=color;
        this.wheels=wheels;
       }
//method
   getDetails(){
     console.log(`The ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
  }
}
class Car extends Vehicle{
  constructor(color,brand,purpose){
    super('car',color,4);
    this.brand=brand;
    this.purpose=purpose;
  }
  getDetails(){
    console.log(`The ${this.name} is ${this.color} in color of ${this.brand} company. It has ${this.wheels} wheels.It is for the ${this.purpose}`);
 }
}
const car1=new Car('Red','Audi','Luxury Travelling');
console.log(car1);
car1.getDetails();
console.log(car1.__proto__);
*/

/*
function Vehicle(name,color,wheels){
       this.name=name;
       this.color=color;
       this.wheels=wheels;
}
Vehicle.prototype.getVehDetails=function(){
       console.log(`Name:${this.name}\nColor: ${this.color}\nWheels:${this.wheels}`)
};
function Car(color,brand,seats){
   Vehicle.call(this,'Car','Blue',4);
    this.brand=brand;
    this.seats=seats;
}
Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.getDetails=function(){
     console.log(`The ${this.color} ${this.name} is of ${this.brand} company. It has seating for ${this.seats} people`);
};
const car1=new Car('Black','Audi',5);
car1.getDetails();
console.log(car1);
car1.getVehDetails();
console.log(car1);

*/
/*
function Animal(){
  this.sound='Animal Sound';
}
function Cat(){
  Animal.call(this);
}
console.log(Cat);
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.makeSound = function(){
  console. log(this.sound);
}
const cat = new Cat;
cat. sound = "Meow";
console.log(cat);
cat.makeSound();
*/
//L5 static keyword
/*
class Vehicle{
  static vName='staic Name';
  constructor(name,color,wheels){
          this.name=name;
          this.color=color;
          this.wheels=wheels;
  }
  // methods
  getDetails(){
    console.log(`The ${this.name} is ${this.color} in color.It has ${this.wheels} wheels.`);
  }
  //static method
  static showMsg(){
    console.log('This is a static method of the class');
  }
}
const v1=new Vehicle('Car','blue',4);
console.log(v1);
v1.getDetails();
//v1.showMsg(); //error 
Vehicle.showMsg();
Vehicle.vName();
*/

//L6 getter setter
/*
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter(value){
    if(value>=0){
      this.radius=value/2;
    }
    else{
      console.log('Invalid input');
    }
  }
  // getarea(){
  //   console.log(this.radius*this.radius);
  // }
}
const circle=new Circle(4);
console.log(circle.radius);
console.log(circle.diameter);
circle.radius=16;
console.log(circle.diameter);
circle.diameter=20;
console.log(circle.radius);
circle.diameter=-23;
console.log(circle.radius);
// circle.getarea();
*/
/*


const today=new Date();
console.log(today); //output:= Mon Aug 05 2024 15:09:36 GMT+0530 (India Standard Time)
const birthDate = new Date('1999-06-12');// Sat Jun 12 1999 05:30:00 GMT+0530 (India Standard Time)
console.log(birthDate);

const someday = new Date(1990, 7); 
console.log(someday);// Wed Aug 01 1990 00:00:00 GMT+0530 (India Standard Time)

console.log(birthDate.getFullYear());  //1999

console.log(birthDate.toDateString()); //Sat Jun 12 1999

console.log

const birthStr = birthDate.toString();// 1999 05:3
console.log(birthStr.slice(11, 20));  

const cur = Date.now();
console.log(cur);
const currentDate = new Date(); // 1722852122280
const currentTimeMillis = currentDate.getTime();
console.log(currentTimeMillis); // 1722852024947


*/

/*
L7 json   JSON (JavaScript Object Notation) 
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30
console.log(jsonObject.city); // Output: New York
To convert a JavaScript object into a JSON string, you can use the JSON.stringify() method.
const jsonObject = {
  name: "John",
  age: 30,
  city: "New York"
};

const jsonString = JSON.stringify(jsonObject);

console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

const jsonString = '{"user": {"name": "John", "age": 30, "address": {"city": "New York", "zip": "10001"}}}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.user.name);           // Output: John
console.log(jsonObject.user.address.city);   // Output: New York
console.log(jsonObject.user.address.zip);    // Output: 10001
*/



//shallow copy 
/*
const user1 = {
  username:'Sara',
  age:12,
  marks:{
    maths:23,
    science:34,
    English:25,
  }
};

const user2=user1;
console.log(user2);
console.log(user1);
user2.username='Harry';
console.log(user1);
console.log(user2);



const user2={...user1};
console.log(user1);
console.log(user2);
user2.username='Harry';
user2.marks.English=345;
console.log(user1); //copy was first layar only
console.log(user2); 

//using Object.assign

const user2=Object.assign({},user1);
console.log(user1);
console.log(user2);
user2.username='Harry';
user2.marks.maths=23345;
console.log(user1);
console.log(user2);

//Deep copy 
const  user1={
  username:'Sara',
  age:13,
  marks:{
    maths:20,
    eng:35,
  },
  getMarks(){
    console.log(this.marks);
  }
}
const user2=JSON.parse(JSON.stringify(user1));
console.log(user2);
console.log(user1);

//RegEx Object

let text='Hello this is sumit';
let regex1=new RegExp('Hello');
let regex2=/Hello/;
let regex3=/\s/;
//this is case sensetive 
console.log(regex1.test(text)); //true
console.log(regex2.test(text)); //true

console.log(regex2.exec(text)); //['Hello', index: 0, input: 'Hello this is sumit', groups: undefined]
//exec returns array of matches

console.log(text.match(regex1)); //['Hello', index: 0, input: 'Hello this is sumit', groups: undefined]

console.log(text.search(regex2)); // index of regex2 present in text

console.log(text.replace(regex2,"hi")); // hi this is sumit

console.log(text.split(regex2)); // ['', ' this is sumit']
console.log(text.split(regex3)); // ['Hello', 'this', 'is', 'sumit']
*/
//string match
/* 
/s/
g=>global ->try to find the match in the total 
i=>remove case sensetive
m=>multiline

const str='Hello world .I have i SSSSS S .This is Leela';
const regex=new RegExp('s');
console.log(str.match(regex)); //index of first occerance 
const regex1=new RegExp('s','g');
console.log(str.match(regex1)); //all occerance of 's' in string

const regex2=new RegExp('s','gi');
console.log(str.match(regex2));
const regex3 = /h./ig;
const str1 = "Hello, how are you? Hope hot you hat are h t doing h r well.";
console.log(str1.match(regex3)); // [ 'He', 'ho', 'Ho' ]

const regex4= /h.t/ig;
console.log(str1.match(regex4));


let str='This is sumit kumar .i am final word@ of Mod.';
let regex=/d\./gi;//find d char follow dot
let regex1=/d\@/gi;// find d char follow @
console.log(str.match(regex));

// Matching the control characters
//   \t -> tab
//   \n -> new line
//   \r -> carriage return
//   \v -> verticle tab

let re= /gr[ae]y/
let str='grey green grape'
console.log(str.match(re)); // ['grey']

//  split(): This method splits a string into an array of substrings based on a specified pattern match.
//   The split() method returns an array of strings created by splitting the string
var regex = /[, ]+/;
var text = "Apple, Banana, Orange";
var fruits = text.split(regex);
console.log(fruits); // Output: ["Apple", "Banana","Orange"]
*/

