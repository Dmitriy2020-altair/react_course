'use strict'

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
}

function truncateString(str, num) {
    let subStr = str.substring(0, num);

    return (str.length > num) ? `${subStr}...` : str;
}
