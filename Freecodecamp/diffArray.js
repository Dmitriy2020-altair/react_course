'use strict'

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    let diffArr = [];

    const uniqItemsFromArr2 = arr2.filter(element => !arr1.includes(element));

    const uniqItemsFromArr1 = arr1.filter(element => !arr2.includes(element));

    diffArr.push(...uniqItemsFromArr1, ...uniqItemsFromArr2);

    return diffArr;
}
