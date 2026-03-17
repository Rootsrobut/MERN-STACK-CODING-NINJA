/*
alert("This is an alert massage");
console.log("From externl file");
confirm("are you interested");
console.log('Hello i am there');
console.log('1233');

//declare 
let x=10;
console.log("x");
console.log(x);
x=20;
console.log(x);
x="ten";
console.log(x);

//declaring
let y;
y=10;
//initializing
y=23;
let a=2,b=3,c=6,g=8;
console.log(a+b+c+g);
//in const  (declare+initializating)



//1 Case Sensitive 

let year=2020;
let Year=2323;
console.log("1->"+year);
console.log("2->"+Year);


//2 contains alphabets(aA-zZ),numbers(0-9),underScore(_),Dollar($)
let name="Sumit";
let first_name="Sanju";
let ant$=454.4;
let num1=10;

//3 connot start with a number.in between possible;
// let 1sdkfj=10;

//4 No Reserved Keywords

//  let let=10;


//5. No Blank Spaces in between 

// let birth date=10;

//6. under 10 or 15 Character


//7.variable names should always exist on the left hand

let h=10;
//let 10=h;

Naming Conventions 

//Relatable names for readability

//snake casing or camel casing 




//declar variable let,const,var

let age; //declaration

age=10; //initialization

/*const panno; declaration  
panno=10; initialization not possible 

const pi=3.14;

var x=35;

x=345;
 

/* Data Types
    1. Object
    2. Primitive Datatypes


/* *********************************** *
***        Primitive DataTypes       ***
/* *********************************** 

// Number (64 bit)

let num = 10;
console.log(typeof num);

// String
const firstName = "falak's book";
const lastname = 'Chandni';
const nickName = `Tom`;//``->backtish

console.log(typeof firstName);
console.log(typeof lastname);
console.log(typeof nickName);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let a;
console.log(typeof a);
console.log(a);

// Null
let b = null;
console.log(b);
console.log(typeof b); //answer object

// Symbol(ES6/2015)

// BigInt(ES2020)

let num1 = 10n;
console.log(typeof num1);  

// Interesting Things

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);

let num3 = Infinity

console.log(12/0);
console.log(188/num3); 



let num = 10;
let str = 'String';
let bigNum = 10n;
let bool = true;

console.log(num.__proto__); 
console.log(str.__proto__); 
console.log(bigNum.__proto__); 
console.log(bool.__proto__); 


let str='javaScript is wonderful!';
console.log(str.__proto__);
console.log(str.charAt(5));
let str1='it is dynamic';
console.log(str.concat(str1));


console.log(str.length);
console.log(str.indexOf('S'));
console.log(str.indexOf('a'));
console.log(str.indexOf('a',5));
console.log(str.lastIndexOf('a'));
console.log(str.slice(0,5));



let messaage="Hello! World!";
let Character=messaage.charAt(15);
console.log(Character);



let str = 'Hello';
console.log(str.at(1)); // Output: 'e'

console.log(str.charAt(1)); // Output: 'e'

let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2)); // Output: 'Hello World'


console.log(str.length); // Output: 5

console.log(str.endsWith('o')); // Output: true


console.log(str.includes('ell')); // Output: true

console.log(str.indexOf('e')); // Output: 1

console.log(str.lastIndexOf('l'));

console.log(str1.localeCompare(str2)); 

console.log(str.match(/he/)); 

console.log(str.padEnd(10, '.')); // Output: 'Hello.....'

console.log(str.padStart(10, '.')); // Output: '.....Hello'

console.log(str.repeat(3)); // Output: 'HelloHelloHello'

console.log(str.replace('e', 'a')); // Output: 'Hallo'

console.log(str.replaceAll('e', 'a')); // Output: 'Hallo Hallo'

console.log(str.search(/e/)); // Output: 1

console.log(str.slice(1, 4)); // Output: 'ell'

console.log(str.split(' '));  // Output: ['Hello', 'World']

console.log(str.startsWith('H')); // Output: true

str = "Hello World!";



console.log(str.toLowerCase());

console.log(str.toUpperCase());

let num=11344;
console.log(num.toString());

str = "   Hello World!   ";
console.log(str.trim());

console.log(str.trimEnd());

console.log(str.trimStart());

*/



/** Operators in JS 

// 1. Assignment Operator(=)
// let a = 10;
// let b = a;
// let c = (a = 20);

// console.log(a);
// console.log(b);
// console.log(c);

// 2. Arithematic Opeartors (+, -, *, /, %)
// console.log(10 + 2);
// console.log(10 - 2);
// console.log(10 * 2);
// console.log(10 / 2);
// console.log(11 % 2);

// 3. More Arithematic Operators (++, --, +, -, **)

 let i = 2;
 i = i + 1;
i++;

console.log(++i);
console.log(i ** 3);//exponent

// 4. Augmented Assignment Opeartor
// (+=, -=,*=, /=,.....)
//i = i+3;
i += 3;

console.log(i);

*/

// 5. Comparison Operators (==, ===, !=, !==, >, <, >=)

// console.log(5 == 6);
// console.log(5 != 5);
// console.log(5 <= 5);

// console.log('5' === 5);
// console.log('6' !== 6);

// let birthYear = 17;
// let rightToVote = birthYear >= 18;
// console.log(rightToVote)

// 6. Logical Operators (&&, ||, !)

// let grade = 65;
// let scholarship = 80;
// let eligile = grade > 60 && scholarship > 70;
// console.log(eligile);

// let m1 = 55;
// let m2 = 65;
// let m3 = 45;
// let eligibility = m1 > 60 || m2 > 60 || m3 > 60;
// console.log(eligibility);

// let rightToVote =false;
// console.log(!rightToVote)

//console.log(3 && 1);

// console.log(3 && 1 && 2 && 4);

// console.log(3 && 1 && 2 && 4 && 5 && 7 && 6);

// console.log(3 && 1 && 2 && 0 && 5 && 7 && 6);
// console.log(3 && 1 && 2 && 4 && 5 && 7 && null); // return last truth value; first false value;
// console.log(0 || null || NaN || '' || undefined);
// console.log(0 || null || 'String' || undefined);

/** Operator precedence */

// let m1 = 20;
// let m2 = 15;
// let m3 = 10;

// let avg = (m1 + m2 + m3) / 3;
// console.log(avg);

/** Type Coercion 

// console.log(5 + 5);

// let num = '5' + 5;
// console.log(num);
// console.log(typeof num); // output string

// let fullName = 'falak' + ' ' + 'Chandni';
// console.log(fullName);

// let sub = '55' - 10;
// console.log(sub); // output number
// console.log(typeof sub); 

//console.log('4' * 2);// output number

// console.log('4' / 2);// output number


Type conversion */

/** convert to string  

//String 
console.log(String(100));
console.log(100);
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));

//toString
console.log((100).toString());
console.log((true).toString());
// console.log((null).toString()); wrong

// convert to number 
console.log("*** Number ***");
console.log(Number('100'));
console.log(Number('100sdkjfjf'));
console.log(Number('null'));
console.log(Number(true));
console.log(Number(false));


//unary +operator

let a='123';
console.log(+a); // output number
console.log(typeof +a); // output number

let c='1232dkf';
console.log(+c); // output NaN

// parseInt 

console.log(parseInt('21232'));
console.log(parseInt('21232dkf')); // output number
console.log(parseInt('kf21232dkf')); //NaN

console.log(parseInt("123.233f"));

// pareseFloat

console.log(parseFloat('3848.2393dfjfj'));
console.log(parseFloat('sdj3848.2393dfjfj'));
console.log(parseFloat('230'));

//Boolean

console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(undefined));

*/


