'use strict'

// Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
// 9/5 === 1.8

function convertToF1(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

function convertToF2(celsius) {
    const ratioCilsiusToFahrenheit = 1.8;
    const differenceValue = 32;
    let fahrenheit = celsius * ratioCilsiusToFahrenheit + differenceValue;
    return fahrenheit;
}

function convertToF(celsius) {
    const ratioCilsiusToFahrenheit = 1.8;
    const differenceValue = 32;
    let fahrenheit = !celsius ? differenceValue
        :
        celsius * ratioCilsiusToFahrenheit + differenceValue;
    return fahrenheit;
}
