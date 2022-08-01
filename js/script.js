'use strict';
console.log('LECTURES SCRIPT🟩')

// ACTIVATING STRICT MODE 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 5;
// const if = 23; 

// FUNCTIONS 

function logger() {
    console.log("My name is Max");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// FUNCTION DECLARATIONS VS. EXPRESSIONS
// function declaration
let age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
let age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
let age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Max"));
console.log(yearsUntilRetirement(1980, "Bob"));

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// REVIEWING FUNCTIONS
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement2 = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(1950, "Mike"));

// INTRODUCTION TO ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991,1994, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise 
const years = [1990, 1967, 2002, 2010, 2018];

age1 = calcAge(years[0]);
age2 = calcAge(years[1]);
age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); 

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);

// BASIC ARRAY OPERATIONS (METHODS)
// Add elements
const newLength = friends.push('Peter');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);
// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped); 
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
console.log(friends);

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// INTRODUCTION TO OBJECTS
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonasObject = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonasObject);

console.log(jonasObject.lastName);
console.log(jonasObject['lastName']);

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

 const interestedIn = prompt('What do you want to know about Jonas? Chose between firstName, lastName, age, job and friends.');
console.log(interestedIn);

if(jonas[interestedIn]) {
    console.log(jonasObject[interestedIn]);
} else {
    console.log('Wrong request! Chose between firstName, lastName, age, job and friends.')
}

jonasObject.location = 'Portugal';
jonasObject['Twitter'] = '@jonasschmedtman';
console.log(jonasObject);

// Challenge 
// 'Jonas has 3 friends and his best friend is called Michael'
const friendsOfJonas = `${jonasObject['firstName']} has ${jonasObject.friends.length} and his best friend is called ${jonasObject.friends[0]}.`;
console.log(friendsOfJonas);

// OBJECTS METHODS

const jonasObject2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

        calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age; 
    },
        jonasInfo: function () {
            return (`${this.firstName} is ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license`);
        }
        
};

console.log(jonasObject2.calcAge());
console.log(jonasObject2.age);
console.log(jonasObject2.age);
console.log(jonasObject2.age);

// console.log(jonasObject2['calcAge'](1991));

// Challenge 
console.log(jonasObject2.jonasInfo());

// ITERATION: THE FOR LOOP
// console.log('Lifting weights repetition 1 🏋️‍♂️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 3; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// LOOPING ARRAYS, BREAKING AND CONTINUING

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
 }

 console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
    ages2.push(2037 - years2[i]);
}
console.log(ages2);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
 }

 console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
 }

// LOOPING BACKWARDS AND LOOPS IN LOOPS 
for (let i = jonasArray.length - 1; i >= 0; i-- ) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 4; rep++) {
        console.log(`Exercise ${exercise}: lifting weights repetition ${rep} 🏋️‍♂️`);
    }
}

// THE WHILE LOOP
let rep = 1; 
while (rep <= 3) {
console.log(`WHILE: lifting weights repetition ${rep}🏋️`); 
rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; 

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log ('Loop is about to end...');
}