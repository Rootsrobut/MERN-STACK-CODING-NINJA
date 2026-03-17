// prototype

// function createStudent(studentName, studentAge) {
//   const obj = {};
//   obj.name = studentName;
//   obj.age = studentAge;
//   obj.checkAge = function () {
//     if (this.age < 21) {
//       return 1;
//     }
//   };
//   return obj;
// }

function MyOwnInheritance(parentObject) {
  function F() {}
  F.prototype = parentObject;
  const newObj = new F();
  return newObj;
}

function createStudent(studentName, studentAge) {
  const obj = Object.create(studentTasks);
  // first create object then link with studentTasks;
  obj.name = studentName;
  obj.age = studentAge;
  return obj;
}

const studentTasks = {
  checkAge: function () {
    if (this.age < 21) {
      console.log("Hi i am here", this);
    } else {
      console.log("Hi i am not there", this);
    }
  },
};

const s1 = createStudent("Ashok", 21);
const s2 = createStudent("har", 41);
const s3 = createStudent("kar", 31);

s1.checkAge();
s2.checkAge();
s3.checkAge();

function MakeStudent(name, age) {
  this.name = name;
  this.age = age;
}
MakeStudent.prototype.checkAge = function () {
  if (this.age < 21) {
    console.log("Hi i am here", this);
  } else {
    console.log("Hi i am not there", this);
  }
};
const s4 = MakeStudent("Ashoka", 41);
const s5 = MakeStudent("hara", 51);
const s6 = MakeStudent("kara", 61);

s4.checkAge();
s5.checkAge();
s6.checkAge();

console.log(Object.getPrototypeOf({}).constructor === Object);
Object.setPrototypeOf()=function sum(a,b){
    return a+b;
}
const obj = {};
const key = "constructor";
if (obj[key]) {
  console.log("Grant Admin Permission");
} else {
  console.log("Blocked");
}

const Object2 = {}; // this is internaly call --> new Object()
console.log(Object2.__proto__);
console.log(Object2.__proto__ === Object2.prototype); //true

const obj2 = {
  myFunc: function () {
    console.log("Hi");
  },
  myDate: new Date(),
};
const json = JSON.stringify(obj2);
console.log(json);
const parsed = JSON.parse(json);

const clone = structuredClone(obj2);

const json2 = JSON.stringify(obj2, (key, value) => {
  if (typeof value === "function") {
    return value.toString();
  }
  return value;
});

// Prototypical Inheritance Recap
const obj3 = {};
console.log(obj3.toString()); // Comes from Object.prototype

function Test() {}
console.log(Test.prototype); // {}

const animal = { eats: true };
const wild = Object.create(animal);
const lion = Object.create(wild);
console.log(lion.eats); // true, from animal
// lion --> wild --> animal --> Object.prototype --> null

const sum = new Function("a", "b", "return a + b");
console.log(sum(2, 3)); // 5



let num1 = 90;
const num2 = 89;
const result = num1 + num2;
console.log(result); // 179

let num3;
setTimeout(() => {
  num4 = 89;
}, 10000);

let result1 = 90 + num3; // ❌ Won’t work as expected
console.log(result1); // Might log NaN

function getData(callback) {
  setTimeout(() => {
    const num5 = 89;
    callback(num5); // 🎯 call me back when you're ready
  }, 1000);
}
getData((num5) => {
  const result = 90 + num5;
  console.log(result); // 179
});
//Don't call me. I'll call you… when I'm ready."




//  😖 Callback Hell: The Classic Example

loginUser("sumit", (user) => {
  getProfile(user.id, (profile) => {
    getPosts(profile.id, (posts) => {
      getComments(posts[0].id, (comments) => {
        console.log(comments);
      });
    });
  });
});
// This deeply nested structure = callback hell.

//  Problem with Callbacks: Inversion of Control

let called = false;

function initPayment() {
  if (called) return;
  called = true;
}

buyNowInit(initPayment);
function buyNowInit(){
    initPayment();
    initPayment();
}




//Promises

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num2 = 90;
      resolve(num2);
    }, 1000);
  });
}
getData()
  .then((num2) => {
    const result = 90 + num2;
    console.log(result); // 180
  })
  .catch((err) => {
    console.log("Something went wrong:", err);
  });



  

//  Transition to Async/Await
async function main() {
  try {
    const num2 = await getData();
    console.log(90 + num2);
  } catch (err) {
    console.log("Error:", err);
  }
}
main();

promise
  .then((data) => {
    /* success */
  })
  .catch((error) => {
    /* error */
  })
  .finally(() => {
    /* always runs */
  });

async function fetchData() {
  const data = await getDataFromAPI(); // looks synchronous!
  console.log(data);
}
//   Under the hood, await just waits for a promise to resolve.
// All async functions automatically return a promise, so even this works:

async function greet() {
  return "Hello";
}
greet().then((msg) => console.log(msg)); // Hello

//  Event Loop (Sneak Peek)

console.log("Start");
setTimeout(() => {
  console.log("From setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("From Promise");
});
console.log("End");


// output
// Start
// End
// From Promise
// From setTimeout







