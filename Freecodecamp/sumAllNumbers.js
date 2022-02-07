'use strict'

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const sortedArr = arr.sort((smallerNum, biggerNum) => biggerNum - smallerNum);
  const [biggestNumInArray, smallestNumInArray] = sortedArr;
  let result = null;

  for (let currentNumber = biggestNumInArray; currentNumber >= smallestNumInArray; currentNumber--) {
    result += currentNumber;
  }

  return result;
}

function sumAll(arr) {
  let smallestNumInArray = Math.min(...arr);
  const biggestNumInArray = Math.max(...arr);
  let result = null;
  
  while (smallestNumInArray <= biggestNumInArray) {
    result += smallestNumInArray;
    smallestNumInArray++;
  }

  return result;
}
