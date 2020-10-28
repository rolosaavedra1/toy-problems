/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(someString) {
  //create anagrams object, where we store every new anagram as a key.
  // if a new configuration doesn't exist, add a new key
  //it's going to have to be recursion, won't it
  //base case: 
  var anagrams = [];
  if (someString.length == 1) return someString;
  for (var k in someString) {
    var someString = someString[k];
    allAnagrams(someString.join('').replace(someString, '').split('')).concat("").map(function(subtree) {
      anagrams.push([someString].concat(subtree));
    });
  }
  return anagrams.join('');
};
