// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

// // New one

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
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

// console.log(amplitudeNew);

// practice test worked
// const calcTempAverage = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   let sum = 0;
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }

//   for (let i = 0; i < temps.length; i++) {
//     sum += temps[i] / temps.length;
//   }
//   console.log(max, min, sum);
//   console.log(
//     `The highest temp is ${max}, with the lowest being ${min}, and a average of ${sum}`
//   );
// };

// calcTempAverage([2, 7, 9, 14, 4, 7, 22, 1, 10]);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     value: 10,
//     // FIX BUG
//     // value: Number(prompt('Degrees Celsius')),
//   };
// console.warn(measurement.value);
// console.error(measurement.value);
// console.table(measurement);
// FIND ISSUE
// console.log(measurement.value);

// console.log(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// // Another Bug problem and fix
// const calcTempAmplitudeNewBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   // The zero is lower then anything in the array so thats the bug
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     debugger;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitudeNewBug = calcTempAmplitudeNewBug([3, 5, 1], [9, 4, 5]);
// // Identify bug
// console.log(amplitudeNewBug);

// Example of using string literals, moving through an array, finding the min and max, and printing out a empty string that can update from const data
const printForcast = function (temps) {
  let str = ' ';
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    str += `${data[i]} in ${i + 1} days ...`;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log('...' + str);
  console.log(
    `The Maximum Temperature will be ${max}, and the Minimum will be ${min}.`
  );
};

// Example data
const data = [17, 21, 23];

printForcast(data);
