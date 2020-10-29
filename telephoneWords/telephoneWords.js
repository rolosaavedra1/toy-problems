/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

 var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  //base case: digitString of length 1, return an array with all possible results [A, B, C]
  //recursive case:
  //iterate through digitString starting from start
  //shorterString = digitString - currentLetter
  //possibleStrings = telephoneWords(shorterString, start)
  //iterate through possibleStrings
  //possibAdds =  phoneDigitsToLetters[digitString[i]]
  //add to them possible adds based on the current letter
  //
  //iterate through possib, concat that to each item in the possibleWords array
  //produce an array with all possible additions
  //iterate through that array 

  //possibleWords = []
  //go through string
  //possibleLetters = split version of obj[key]
  //iterate through possibleLetters
  //var expPossibleWords = [];
  //iterate through possible words
  //add possible letters to each item in possiblewords
  //possibleWords = expPossibleWords

  var possibleWords = [];
  for (var i = 0; i < digitString.length; i++) {
    var possibleLetters = phoneDigitsToLetters[digitString[i]].split('');
    var expPossibleWords = [];
    var counter = 0;
    for (var j = 0; j < possibleLetters.length; j++) {
      if (possibleWords.length === 0) {
        expPossibleWords = possibleLetters;
        break;
      } else {
        for (var k = 0; k < possibleWords.length; k++) {
          expPossibleWords[counter] = possibleWords[k].concat(possibleLetters[j]);
          counter++;
        }
      }      
    }
    debugger;
    possibleWords = expPossibleWords;
  }
  return possibleWords;
};