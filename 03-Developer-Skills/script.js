// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// debugger;

// const x = 23;
// if (x === 23) {
//   console.log('x is 23');
// }

// const calcAge = birthYear => 2037 - birthYear;

// console.log();
// console.log(calcAge(1991));

// Problem 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures,
// of one day, calculate the temperature amplitude. Keep in mind that
// sometimes there might be a sensor error".

// const temperatures = [3, -2, -6, -1 , 'error', 9, 13, 17, 15 , 14, 9 ,5]


// 1) Undesrtanding the problem.
// - What is temp amplitude?
// A: The difference between the highest and lowest temperature.
// - How to compute max and min temperatures?
// - What's a sensor error? And how to handle it?

// 2) Breaking up into sub-problems.
// - How to ignore sensor errors?
// - Find max value in array.
// - Find min value in array.
// - Subtract min from max and return the result.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Max: ${max}`);
//   console.log(`Min: ${min}`);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temperatures.

// 1) Undesrtanding the problem.
// - With 2 arrays, should we implement functionality twice?

// 2) Breaking up into sub-problems.
// - Merge the 2 arrays.

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
  
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Max: ${max}`);
//   console.log(`Min: ${min}`);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [ 9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) Fix
//     value: Number(prompt('Enter temperature in celsius: ')),
//   };

//   // B) Find
//   console.log(measurement);
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify
// console.log(measureKelvin());

// Using a debugger.
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
  
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(`Max: ${max}`);
//   console.log(`Min: ${min}`);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [ 9, 4, 5]);

// // A) Identify
// console.log(amplitudeBug);


/////////////////////////////////
// Coding Challenge #1
// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with the given temperatures. 
// Example: [17, 21, 23] will print "...17C in 1 days...21C in 2 days..23C in 3 days..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr'
// and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it down into sub-problems!

// Test data:
// - Data 1: [17, 21, 23]
// - Data 2: [12, 5, -5, 0, 4]


// 1) Understanding the problem 
// - Print data

// 2) Breaking into sub-problems.
// - Loop for printing each value

const data1 = [17, 21, 23];
const data2 = [12, 5 , -5, 0, 4]


const printForecast = function(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1}days ...`;
  };
  console.log(str);
};

printForecast(data1);