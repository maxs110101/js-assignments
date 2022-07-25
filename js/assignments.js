'use strict'
console.log("ASSIGNMENTS SCRIPT🟩")
// VALUES AND VARIABLES
const country = 'Germany';
const continent = 'Europe';
const population = 49000000;

// DATA TYPES
const isGermanyIsland = false;
let language; 

// LET, CONST AND VAR
language = "english";

console.log(`Is Germany island: ${isGermanyIsland}, language: ${language}, country: ${country}, continent: ${continent}, population: ${population}.`);

// BASIC OPERATOR
const halfOfPopulation = population / 2;

console.log(population + 1);

const populationFinland = 6000000;

console.log("Germany has more population than Finland: " + (population > populationFinland));

const averagePopulation = 33000000;
console.log(population > averagePopulation);

let description = country + ' is in ' + continent + ', and its 85 million people speak ' + language + '.';

// STRING AND TEMPLATE LITERALS
description = `${country} is in ${continent}, and its 85 million people speak ${language}.`;
console.log(description);

// TAKING DECISIONS: if / else Statements 
if(population > 33000000) {
    console.log(`${country}'s population is above average.`)
} else {
    const belowAverage = 33000000 - population;
    console.log(`${country} population is ${belowAverage} below average`);
}

// TYPE CONVERSION AND COERCION
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// EQUALITY OPERATORS
/* const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No border")
}
*/

// LOGICAL OPERATORS
if (language === "english" && population <= 50000000 && !isGermanyIsland) {
    console.log("You should live in Germany");
} else {
    console.log("Germany does not meet your criteria :(");
}

// THE SWITCH STATEMENT 

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break
    case 'spanish':
        console.log('2nd place in nubmer of native speakers');
        break
    case 'english':
        console.log('3rd place');
        break
    case 'hindi':
        console.log('Number 4');
        break
    case 'arabic':
        console.log('5th most spoken language');
        break
    default: 
        console.log('Great language too :D');
    }
    