'use strict'
console.log('CODING CHALANGES SCRIPT🟩')
// CHALENGE #1
console.log('CHALENGE #1');
const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);
const markHeigherBMI = BMIMark > BMIJohn; 

console.log(`Mark BMI: ${BMIMark.toFixed(2)}, John BMI: ${BMIJohn.toFixed(2)}, Marks BMI is higher: ${markHeigherBMI}`);

// CHALANGE #2
console.log('CHALANGE #2');
if(markHeigherBMI) {
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's BMI (${BMIMark.toFixed(2)}!`)
}

// CHALANGE #3
console.log('CHALANGE #3');
// case 1

/*
console.log('CHALANGE #3');
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3; 
console.log(`Dolphins average score: ${averageScoreDolphins.toFixed(2)}, Koalas average score: ${averageScoreKoalas.toFixed(2)}`);

if (averageScoreDolphins > averageScoreKoalas) {
    console.log("Dolphins have higher score!");
} else if (averageScoreDolphins < averageScoreKoalas) {
    console.log("Koalas have higher score!");
} else {
    console.log("The score is equal!");
}
*/

// case 2

/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3; 
console.log(`Dolphins average score: ${averageScoreDolphins.toFixed(2)}, Koalas average score: ${averageScoreKoalas.toFixed(2)}`);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log("Dolphins have higher score!");
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log("Koalas have higher score!");
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreKoalas >= 100 && averageScoreDolphins >= 100) {
    console.log("The score is equal!");
} else {
    console.log("No team wins the trophy!")
}
*/

// case 3

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3; 
console.log(`Dolphins average score: ${averageScoreDolphins.toFixed(2)}, Koalas average score: ${averageScoreKoalas.toFixed(2)}`);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log("Dolphins have higher score!");
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log("Koalas have higher score!");
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreKoalas >= 100 && averageScoreDolphins >= 100) {
    console.log("The score is equal!");
} else {
    console.log("No team wins the trophy!");
}


// CHALANGE #4
console.log('CHALANGE #4');
const bill = 430;
const tip = bill * (bill >= 50 && bill <= 300 ? 15 : 20)/100;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);