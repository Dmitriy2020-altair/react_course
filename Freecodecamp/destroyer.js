'use strict'

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
    const argsArray = [...arguments].slice(1);
    const uniqueElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (argsArray.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    
    return uniqueElements;
}
