'use strict';
console.log("ASSIGNMENTS SCRIPT🟩")
// FUNCTIONS

function describeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    return `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
}

const countryGermany = describeCountry("Germany", 85, "Berlin");
const countryItaly = describeCountry("Italy", 60, "Rome");
const countryFrance = describeCountry("France", 67, "Paris");
console.log(countryGermany, countryItaly, countryFrance);

// FUNCTION DECLARATION VS. EXPRESSIONS
// declaration
function percentageOfWorld1(population) {
    return (population / 7900 * 100).toFixed(2);
}

let percentageOfWorldGermany = percentageOfWorld1(85);
let percentageOfWorldItaly = percentageOfWorld1(60);
let percentageOfWorldFrance = percentageOfWorld1(67);
console.log(`percentage1: ${percentageOfWorldGermany}, ${percentageOfWorldItaly}, ${percentageOfWorldFrance}`);
// expression 
const  percentageOfWorld2 = function(population) {
    return (population / 7900 * 100).toFixed(2);
}
    
percentageOfWorldGermany = percentageOfWorld2(85);
percentageOfWorldItaly = percentageOfWorld2(60);
percentageOfWorldFrance = percentageOfWorld2(67);
console.log(`percentage2: ${percentageOfWorldGermany}, ${percentageOfWorldItaly}, ${percentageOfWorldFrance}`);
// arrow function
const percentageOfWorld3 = population => (population / 7900 * 100).toFixed(2); 

percentageOfWorldGermany = percentageOfWorld3(85);
percentageOfWorldItaly = percentageOfWorld3(60);
percentageOfWorldFrance = percentageOfWorld3(67);
console.log(`percentage3: ${percentageOfWorldGermany}, ${percentageOfWorldItaly}, ${percentageOfWorldFrance}`);

// FUNCTIONS CALLING OTHER FUNCTIONS
function describePopulation(country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
}

percentageOfWorldGermany = describePopulation("Germany", 85);
percentageOfWorldItaly = describePopulation("Italy", 60);
percentageOfWorldFrance = describePopulation("France", 67);
console.log(percentageOfWorldGermany, percentageOfWorldItaly, percentageOfWorldFrance);

// INTRODUCTION TO ARRAYS
const populations = [85, 60, 67, 1441];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// BASIC ARRAY OPERATIONS (METHODS)
const neighbours = new Array ('Austria', 'Swiss', 'France');
neighbours.push('Utopia');

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Swiss'));
neighbours[1] = 'Swiss Confederation';
console.log(neighbours);

// INTRODUCTION TO OBJECTS

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Russia', 'Sweden', 'Norway'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
        and a capital called ${this.capital}`;
    },
    checkIsLand: function () {
        this.isIsland = this.neighbours > 0 ? true : false;
        return this.isIsland;
    }
};
// DOT VS. BRACKETS NOTATION
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}`);

myCountry.population += 2;
myCountry['population'] -= 2;
console.log(myCountry.population);

// OBJECT METHODS
console.log(myCountry.describe());
console.log(myCountry.checkIsLand());

// ITERATION: THE FOR LOOP
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}

// LOOPING ARRAYS, BREAKING AND CONTINUING
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log('For loop: ' + percentages2);

// LOOPING BACKWARDS AND LOOPS IN LOOPS
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(listOfNeighbours[i]); 
    for (let neighbour = 0; neighbour < listOfNeighbours[i].length; neighbour++) {
        console.log(`Neighbour: ${listOfNeighbours[i][neighbour]}`);
    }
}

// THE WHILE LOOP
let percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
        i++;
}
console.log('While loop: ' + percentages3);