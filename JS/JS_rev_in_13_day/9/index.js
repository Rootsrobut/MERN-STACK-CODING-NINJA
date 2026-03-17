/*
// Event Bubbling & Capturing
//Stop Propagation , Immediadate Propagation & Prevent Default
var div = document.querySelector('div');
var button=document.querySelector("button");
div.addEventListener('click', function(event) {
    console.log('div');
},true);
button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('button');
},true);


// OOP in JS
// • Before we start.

// • Procedural Programming
// security
// re-usability
// additoin of new functionlity

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    mileage: 10000
};
// Functions operating on data
function drive(car, miles){
    car.mileage += miles;
}
function getCarinfo(car){
    return `${car.make}  ${car.model},\n,'year:\n', ${car.year}, Mileage is ${car.mileage}`;
}
    // Using the procedural functions
drive(car, 500);
console. log (getCarinfo(car));

// • OOP
class Car{
  constructor (make, model, year, mileage){
   this.make = make;
   this.model = model;
   this.year = year;
   this.mileage = mileage;
  }
  drive(miles){
    this.mileage += miles;
  }
  getCarinfo(){
    return `${this.make} ${this.model},\n,'year:\n', ${this.year}, Mileage is ${this.mileage}`;
  }
}
// • Advantage

// security
// re-usability
// additoin of new functionlity
*/

// Disadvantages

// • Classes
class Superhero{
      superheroName="Silver Surfer";
      location = "Earth";
     getName(){
        return this.superheroName;
     }
    getLocation(){
        return this.location;
    }
}
const hero = new Superhero("Jupiter");
const heroFromEarth812=new Superhero();
console.log(hero.getLocation());
console.log(heroFromEarth812.getLocation());

// • Objects


// Constructor


// Super


// Class Fields


// Defining Methods

// Overloading Overriding


// Pillars of OOP 

// Inheritance


// Polymorphism


// Encapsulation


// Abstraction

// Access Modifiers (Public/Private/Protected)


//  Interfaces

// Static Classes, Methods and Variables


// How JS oops is different from Normal OOP - Teaser of Part 2

// JS Promises

