
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// edge case: substraction cases, undefined

// break up input string into array
// turn into values
//check character n against n+1, substract if lower, contract array
//add them up
//output result

typeof romanNumeral !== 'string' ? null :
romanNumeral.split('').reduce((memo, numeral, index, numerals) =>
(memo + DIGIT_VALUES[numeral] * 
  (DIGIT_VALUES[numeral] < DIGIT_VALUES[numerals[index + 1]] ? -1 : 1)), 0);



};
