'use strict'

// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.


function factorialize(num) {
    if (typeof num !== 'number' || num < 0) {
        return `Type number(integer) only, that greater or equal to 0. ${num} not accepted!`;
    }

    if (!num || num === 1) return 1;

    return num * (factorialize(num - 1))
}

function factorialize(num) {
    if (typeof num !== 'number' || num < 0) {
        return `Type number(integer) only, that greater or equal to 0. ${num} not accepted!`;
    }

    if (!num || num === 1) return 1;

    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }

    return num;
}
