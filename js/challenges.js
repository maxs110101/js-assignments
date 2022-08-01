'use strict';
console.log('CODING CHALANGES SCRIPT🟩')
// CHALENGE #1
console.log('CHALENGE #1')
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
// Test 1
let averageScoreDolphins = calcAverage(85, 54, 41);
let averageScoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} else {
    console.log("No team wins...");
}
}
checkWinner(averageScoreDolphins, averageScoreKoalas);
// Test 2
averageScoreDolphins = calcAverage(44, 23, 71);
averageScoreKoalas = calcAverage(65, 54, 49);
checkWinner(averageScoreDolphins, averageScoreKoalas);
// CHALENGE #2
console.log('CHALENGE #2')
function calcTip(bill) {
// return  bill * (bill >= 50 && bill <= 300 ? 15 : 20)/100;
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const tip = calcTip(100); 
console.log(`Tip from 100 is ${tip}`);

const bills = new Array(125, 555, 44);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, total);

// CHALENGE #3
console.log('CHALENGE #3')
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
    }
}
const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
        }
}
console.log(johnSmith.calcBMI(), markMiller.calcBMI());
const higherBMI = `John Smith's BMI (${johnSmith.BMI.toFixed(2)}) is ${johnSmith.BMI > markMiller.BMI ? 'higher' : 'lower'} than 
Mark Miller's (${markMiller.BMI.toFixed(2)})!`;
console.log(higherBMI);

// CHALENGE #4
console.log('CHALENGE #4')
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];
for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    totals2.push(bills2[i] + tips2[i]);
};
console.log (bills2, tips2, totals2);

// BONUS
console.log('BONUS');
const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
};
function calcAverage2 (arr) {
    return sum / arr;
};
console.log('Average of arr array: ' + calcAverage2(arr.length));

