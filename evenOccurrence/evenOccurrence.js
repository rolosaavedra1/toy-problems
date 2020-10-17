/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  //input is an array of integers
  //output is an integer
  //edge cases: empty array, non-array input, no even occurrences

  // find if instance of element in array
  // counter object, add them up
  // by end of iteration, you have an object with keys:occurences
  // then go through array, checking object occurences, first one even, return it
  counterObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (counterObj[arr[i]]){
      counterObj[arr[i]] += 1; 
    } else {
      counterObj[arr[i]] = 1;
    }
  }
  for (var j = 0; j < arr.length; j++) {
    if (counterObj[arr[j]] % 2 === 0){
      return arr[j];
    }
  }
};
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven);

