'use strict'

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  const regExp = /[A-Za-z]{1}[a-z]*|\s[a-z]+/g;
  const spaceRegExp = /\s/g;
  const preparedArray = str.match(regExp)

  const result = preparedArray.join('-').replace(spaceRegExp, '').toLowerCase();

  return result;
}
