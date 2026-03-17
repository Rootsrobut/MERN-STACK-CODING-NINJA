// Prototype and Prototypal Inheritance in Javascript

let arr = ["sumit", "deva", "niraj", "shiv"];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);


const person1 = {
  name: "John",
  age: 30,
  isStudent: false,
  getdetails(){
    console.log(`My name is ${this.name}.\nMy age is ${this.age}.\ni am student ${this.isStudent}.`)
  }
};

const person2= {
  name: "doe",
};

person2.__proto__=person1;
person2.getdetails();





function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John", 30);
john.greet(); 

console.log(john.hasOwnProperty('name'));
console.log(john.hasOwnProperty('greet')); 







//  Prototypal Inheritance  

const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};


const dog = Object.create(animal);
dog.name = "Rex";
dog.speak = function() {
    console.log(`${this.name} barks.`);
};


dog.speak(); 
animal.speak.call(dog);


