//lec 1 this foem of notation is also know as object literal . i can not use dot notain with variable /bracket notation only
/*
const movie = {
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-Fi, Thriller',
    cast: {
      main_lead: 'Robert Downey Jr.',
      others: 'Chris Evans',
    },
    getDetails:function() {
      console.log(`
        Title: ${movie.title}\n
        Year: ${movie.year}\n
        Genre: ${movie.genre}n
        Cast: ${movie.cast}\n
        `);
    },
    getMovieDetails: function (detail) {
      console.log(movie[detail]);
    }
  };
  console.log(movie.title);
  movie.getDetails();
  const detail = 'year';
  movie.getMovieDetails(detail);
  console.log(movie.cast.main_lead);
*/

//lec 2
/*
const movie1 = {
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-Fi, Thriller',
    cast: {
      main_lead: 'Robert Downey Jr.',
      others: 'Chris Evans',
    },
  
    getDetails() { //this is methord
      console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Genre: ${this.genre}
        Cast: ${this.cast}
        `);
    },
    // this -> key is by defult bound to obj .with which function is call .
    getMovieDetails: function (detail) {
      console.log(movie1[detail]);
    }
  };
  
  console.log(movie1.title);
  movie1.getDetails();
  const detail1 = 'year';
  movie1.getMovieDetails(detail);
  console.log(movie1.cast.main_lead);
  const movie2 = {
    title: 'Movie2',
    year: 2012,
    genre: 'Action, Sci-Fi,sdo,Thriller',
    cast: {
      main_lead: 'Robert/jueat Downey Jr.',
      others: 'Chris Evans',
    },
  
    getDetails() { //this is methord
      console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Genre: ${this.genre}
        Cast: ${this.cast}
        `);
    },
    // this -> key is by defult bound to obj .with which function is call .
    getMovieDetails: function (detail) {
      console.log(movie2[detail]);
    }
  };
  
  console.log(movie2.title);
  movie2.getDetails();
  const detail = 'year';
  movie2.getMovieDetails(detail);
  console.log(movie2.cast.main_lead);
  */
 /*
 const movieobj={
      title:'The Avengers',
      year:2012,
      getDetails(){
          console.log(`Title:${this.title} \nYear:${this.year}`);
      },
 };
 movieobj.getDetails();
 */

 /*
function movie(title,year){
  const movieobj={
    title:title,
    year:year,
    getDetails(){
        console.log(`Title:${this.title} \nYear:${this.year}`);
    },
 };
 return movieobj;
}
const movie1=movie('The mikasingh',2021);
const movie2=movie('Avater-2',2022);
console.log(movie1);
movie1.getDetails();
console.log(movie2);
movie2.getDetails();
*/
/*
//constructer function
function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.getDetails=function(){
    console.log(`Title:${this.title} \nYear:${this.year}`);
  };
}
//new keyword
 const movie2=new Movie('Avatar',2013);
 console.log(movie2);
 movie2.getDetails();

function Movie(title){
  this.title=title;
  this.getdeatils=function(){
    console.log(`title:${this.title}`);
  }
}

const movie1=new Movie('Targen');
movie1.year=2012;
console.log(movie1);
console.log(movie1.__proto__);
console.log(movie1.__proto__.__proto__);

const movie2=new Movie('The Don');
console.log(movie2);
console.log(movie2.__proto__);
console.log(movie2.__proto__.__proto__.__proto__);

//prototype
Movie.prototype.getdetails=function(){
  console.log(`title:${this.title}`)
}
console.log(movie1.getdetails());
console.log(movie2.getdetails());
Movie.prototype.year=2015;
console.log(movie1.year);
const car={
    name:'BMW',
};
console.log(car.__proto__);

const inputs=[1,2,3,4];
const sum=inputs.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
const update=inputs.map((nums)=>nums*nums);
console.log(update);
console.log(inputs.__proto__);
console.log(inputs.__proto__.__proto__);
console.log(inputs.constructor);
console.log(Array);
console.log(inputs.constructor===Array);




const car={
  name:'BMW',
  getdetails(name1){
    console.log(`name: ${name1}`);
  }
}
console.log(car);


const car1=Object.create(car); 
console.log(car1);
console.log(car1.__proto__);
car1.getdetails('BMW');

// Define the basePlayer object with common properties and methods
var basePlayer = {
  name: "Unnamed Player",
  level: 1,
  health: 100,
  attack: function() {
      console.log(`${this.name} attacks with a base attack.`);
  }
};
// Create a heroPlayer object that inherits from basePlayer
var heroPlayer = Object.create(basePlayer);

// Set unique properties for heroPlayer
heroPlayer.name = "Heroic Hero";
heroPlayer.specialAbility = "Thunder Strike";
heroPlayer.mana = 50;

// Add a unique method for heroPlayer
basePlayer.useSpecialAbility = function() {
  console.log(`${this.name} uses ${this.specialAbility}!`);
};

// Demonstrate the usage
console.log(heroPlayer.name); // Output: Heroic Hero
console.log(heroPlayer.level); // Output: 1 (inherited from basePlayer)
console.log(heroPlayer.health); // Output: 100 (inherited from basePlayer)
console.log(heroPlayer.mana); // Output: 50 (unique to heroPlayer)

heroPlayer.attack(); // Output: Heroic Hero attacks with a base attack. (inherited method)
heroPlayer.useSpecialAbility(); // Output: Heroic Hero uses Thunder Strike!

let parent ={ name: "parent", children: [] };
let child1 = Object.create(parent);
console.log(child1);
child1.name = "child1";
child1.children.push(child1.name);
console.log(parent.children[0]);
console.log(parent);
console.log(child1);



const subject={
  name:"English",
  score:23,
}
const marks={
  score:40
}
//Object.assign(traget,source); 
const result=Object.assign(subject,marks,{greade:'C',score:234}); //last vaue are give more preference here score 
console.log(result);


function user(options){
  const demo={first_name:'sumit',last_name:'kumar'};
  return Object.assign(demo,options)
}
const options={first_name:'laxmi'};
console.log(user(options));



const user={
  firstName:'Adarsh',
  lastName:'Singh',
  pata:{
    city:'Bangalore',
    pinCode:876876,
    state:'Karnataka',
    moreDetails:{
      population:54646464646464,
      area:'756 sq km',
    },
  },
  age:15,
  isGraduate:false,
}
Object.seal(user);
delete user.firstName; // not delete
user.firstName='askdn osdow osihd'; // yes update

Object.freeze(user);
delete user.firstName; // not delete
user.firstName='askdn osdow osihd'; // not update
console.log(user);
user.mobile_no='989876767676';
console.log(user);
*/
/*

const car={
    name:'car',
    color:'black',
    getDetails(brand,seats){
      console.log(`This is a ${this.color} ${this.name} of Brand: ${brand}, no of Seats: ${seats}`);
    }
};

const bus={
  name:'bus',
  color:'blue',
};

car.getDetails('Audi',5);
car.getDetails.call(bus,'Star',50);
car.getDetails.apply(bus,['Gold',30]);

const veh1=car.getDetails.bind(bus);
console.log(veh1);
veh1('Toyota',20);
veh1('fortuner',5);

// Destructure
const obj={
   a:1,
   b:2,
   c:['o','B','J'],
   d:{value:'val'},
};

//using Bibding pattern

const {a,b,c,d}=obj; // this is equvalen to ,(const a=obj.a),(const b=obj.b),(const c=obj.c),(const d=obj.d);

 i am picking value from obj

console.log(a);
console.log(d);

const {a:a1}=obj;
//i am renameing the property obj a as a1
console.log(a); //it is showing error  because a is unefing at this time 
console.log(a1);

// using  Assigment pattern
//Binding creates new variables; assignment targets existing ones.
let b;
// i wait to assign value of b in object to b variable 
({b:b})=obj;
console.log(b);

let b;
const obj = { b: 42 }; // Ensure that obj is defined and has a property 'b'

// Destructuring assignment
({ b } = obj);
console.log(b); // Output: 42


const fruits=['apple','banana','cherry','date','elderberry'];
//Binding patter

const [a,m]=fruits;
console.log(a,m);
const  [a, ,k]=fruits;
console.log(k);
const  [a,b, ,d]=fruits;
console.log(d);

//Assigament operater
const [a,m,...f]=fruits;
console.log(f);
const  [a,m,...[ba,cd]]=fruits;
console.log(bc,cd);


let inventory = ["Sword", "Health Potion","Mana Potion","Stamina Potion"]:
let [weapon,...potions] = inventory:
console.log(potions);

// Using array destructuring, we can swap two numbers without using any third temporary variables.
let a =10;
let b =20;
[a,b] = [b,a]
console.log(a,b)

let nestedArray = ["orange", ["apple", "banana", ["grape", "mango"]], "peach"];
let [first, [, , [third]]]= nestedArray;
//console.log(first); // "orange"

console.log(third);
*/
