'use strict'
console.log('LECTURES SCRIPT🟩');
// DATA TYPES
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Max');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null);
*/

// LET, CONST AND VAR
/*
let age = 30;
age = 31;

const birthYear = 2000;
// birthYear = 2001;
// const job;

var job = 'programmer';
job = 'teacher';
*/

// BASIC OPERATORS
/*
// Math operators
const now = 2037;
const ageMax = now - 2000;
const ageSarah = now - 2018;
console.log(ageMax, ageSarah);

console.log(ageMax * 2, ageMax / 10, 2 ** 3);

const firstName = 'Max';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10;
x *= 4; // x = x * 4 = 100; 
x++;
x--;
console.log(x);

// Comprarison operators
console.log(ageMax > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
*/

// OPERATOR PRECEDENCE
/*
const now = 2037;
const ageMax = now - 2000;
const ageSarah = now - 2018;

console.log(now - 2000 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMax + ageSarah) / 2; 
console.log(ageMax, ageSarah, averageAge);
*/

// STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Max';
const job = 'cleaner'; 
const birthYear = 2000;
const year = 2037; 

const max = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(max);

const manNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(manNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple
lines`);
*/

// TAKING DECISIONS: if / else statements 
/*
const age = 15;
if (age >= 18) {
    console.log('Sarah can start driver license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} 

const birthYear = 2000; 
let century;
if (birthYear <= 2000) {
    century = 20; 
} else {
    century = 21;
}
console.log(century);
*/

// TYPE CONVERSION AND COERCION
// type conversion
/*
const inputYear = '1991'; 
console.log(Number(inputYear) + 18);

console.log(Number('Max'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion 
console.log("I'm " + 23 + " years old"); 
console.log('23' - '10' - 3); 
console.log('23' / '2');

let n = '1' + 1;
n = n - 1; 
console.log(n);
*/

// TRUTHY AND FALSY VALUES 
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Max"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
 console.log("Don't spend it all ;)")
} else {
 console.log("You should get a job!")
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}
*/

// EQUALITY OPERATORS
/*
const age = 18;
if(age === 18) console.log("You just became an adult :D (strict)");
if(age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
console.log("7 is also a cool number");
} else if (favourite === 9) {
console.log("9 is also a cool number");
}
else {
    console.log("Number is not 23 or 7 or 9")
}

if (favourite !== 23) console.log("Why not 23?");
*/

// LOGICAL OPERATORS
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B 

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense  || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/

// THE SWITCH STATEMENT 
/*
const day = "monday";

switch(day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
} 

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wenesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

// THE CONDITIONAL (TERNARY) OPERATOR
/*
const age = 15;
age >= 18 ? console.log("I like to drink wine🍷") : console.log("I like to drink water💧");

const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine🍷";
} else {
    drink2 = "water💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"
}`);
*/
