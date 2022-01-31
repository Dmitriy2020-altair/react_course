'use strict'

// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//еще можно в место -Infinity указать  Math.pow(-2, 53) тоже сработает, НО -Infinity более читаемо

function largestOfFour(arr) {
  let largestNumbers = [-Infinity, -Infinity, -Infinity, -Infinity];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumbers[i]) {
        largestNumbers[i] = arr[i][j];
      }
    }
  }

  return largestNumbers;
}

function largestOfFour(arr) {
  return arr.map((subArr) => {
    return subArr.reduce((prevNumber, currentNumber) => {
      return (currentNumber > prevNumber) ? currentNumber : prevNumber;
    }, -Infinity);
  });
}
