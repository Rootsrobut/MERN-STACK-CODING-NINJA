/** Conditionals in JS */

/** if Statement */

// Print Number is even if Number is even

//let num = prompt('Please enter the number');

// if (num % 2 == 0) {
//   console.log('Number is even');
// }
// console.log('Outside if');

/** if-else Statement 

let num = 12;

if (num % 2 == 0) {
  console.log('Even.');
} else {
  console.log('Odd.');
}

console.log('Outside if-else'); */

/** if-else-if 

//Determine the quarter based on the month

let month=prompt('Enter the month number.');

if( month>=1 && month<=3){
      console.log('first quarter');
}
else if(month>=4 && month<=6){
  console.log('second quarter');
}
else if(month>=7 && month<=9){
  console.log('third quarter');
}
else if(month>=10 && month<=12){
  console.log('fourth quarter');
}
else{
  console.log('Invalid month');
}
*/

/* Email validation intuition 

 let email = prompt('Enter your email address.');
 let len=email.length>=11;
 let afterlast=(2<=email.length-email.indexOf('.')>=3);
 let mini=(email.indexOf('@')-email.indexOf('.'))<=3;

if(len && afterlast && mini){
  console.log('Valid email address');
}
else{
  console.log('Not valid');
}
*/
/** Nested If statements 

// Check eligibility for driving license
// age>=18 - eligible else not eligible
// passed the test - eligible and can obtain the license
// failed the test - eligible but cannot have the license

let age = 16;
let testPassed = false;

if (age >= 18) {
  console.log('Eligible for the license.');
  if (testPassed) {
    console.log(
      'Congratulations!, You have got the license.'
    );
  } else {
    console.log('Sorry, you did not clear the test.');
  }
} else {
  console.log('Not eligible for the license');
}

/** Switch Statement 

// Simulate a traffic light using switch

let color = 'yellow';

switch (color) {
  case 'red':
    console.log('STOP! the light is red.');
    break;

  case 'yellow':
    console.log(' CAUTION! the light is yellow.');
    break;

  case 'green':
    console.log('GO AHEAD!');
    break;

  default:
    console.log('Invalid color');
}
    */



/** Ternary Operator 

let num1 = 10;
let num2 = 599;
let num3 = 50;
let greater = num1 > num2 ? num1 > num3 ? num1 : num3: num2 > num3? num2: num3;

// if (num1 > num2) {
//   greater = num1;
// } else {
//   greater = num2;
// }

console.log('Greater number is ' + greater); */


/** Iterations - For Loop 
// print a message 10 times

// for (let i = 1; i <= 5; i++) {
//   console.log('Falak');
// }

// print a series of number from 1 - 20
// let i;
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

// print all the even numbers between 1 - 50
// let i = 2;
// for (; i <= 50; ) {
//   console.log(i);
//   i += 2;
// }

// prime or not

let num = 25;
let isPrime = true;
for (let i = 2; i*i <= num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not Prime');
}

/** Nested If statements 

// Check eligibility for driving license
// age>=18 - eligible else not eligible
// passed the test - eligible and can obtain the license
// failed the test - eligible but cannot have the license

let age = 16;
let testPassed = false;

if (age >= 18) {
  console.log('Eligible for the license.');
  if (testPassed) {
    console.log(
      'Congratulations!, You have got the license.'
    );
  } else {
    console.log('Sorry, you did not clear the test.');
  }
} else {
  console.log('Not eligible for the license');
}

/** Do- While Loop 
//Guess the number

let randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

let guessedNum;

do {
  guessedNum = prompt('Guess the Number: ');
  if (guessedNum == randomNum) {
    console.log('Guessed Correctly!!');
  } else {
    console.log('Take another guess');
  }
} while (guessedNum != randomNum);

/** Nested Loops 
/* print multiplication Table of 4

// let num = 4;

for (let num = 2; num <= 10; num++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
  console.log('*********');
}

 While Loop 

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
*/