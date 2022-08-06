'use strict';
console.log('CHALLENGE SCRIPT🟩');
// CHALLENGE 1
let maxTempsForecast = [17, 21, 23];
let maxTempsForecast2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
}
printForecast(maxTempsForecast);
