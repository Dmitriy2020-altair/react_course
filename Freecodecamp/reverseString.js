'use strict'

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseString(str) {
    let splitedString = str.split('');
    let reversedArray = splitedString.reverse();
    let reversedArrayToString = reversedArray.join('');
    
    return reversedArrayToString;
}
