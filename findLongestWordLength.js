'use strict'

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    const preparedArray = str.split(' ');
    const longestWord = preparedArray.reduce((prevWords, currentWord) => {
        return currentWord.length > prevWords.length ? currentWord : prevWords;
    })

    return longestWord.length;
}

function findLongestWordLength(str) {
    const preparedArray = str.split(' ');
    const sortedWordsByLength = preparedArray.sort((a,b) => {
        return (b.length - a.length);
    })
    return sortedWordsByLength[0].length;
}
