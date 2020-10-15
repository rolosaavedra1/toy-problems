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

  //a function iterCounter that finds occurrences and counts them
  //input (arr, val, accumulator)
  //output: # of occurrences

  //create empty object
  //iterate through array, if object(i) doesn't exist, object(i) =  iterCounter[i]
  //if (iterCounter[i]%2 === 0), return i. 

  if (!Array.isArray(arr)){
    return 'Wrong input';
  } else if (arr.lentgth === 0) {
    return 'empty array';
  }

  var iterCounter = function(arr, val, accumulator) {
    var accumulator = accumulator || 1;
    for (var i = 0; i < arr.length - 1 ; i++) { 
      if (arr.slice(i+1).indexOf(val) === -1) {
        return accumulator;
      } else {
        accumulator++;
        iterCounter(arr.slice(arr.indexOf(val)+1), val, accumulator);
      }
    }
  }
  var occurrences = {};
  for (var i = 0; i < arr.length; i++) {
    if (!occurrences[i]) {
      occurrences[arr[i]] = iterCounter(arr, arr[i]);
    } else {
      if (occurrences[i] % 2 === 0) {
        return arr[i];
      }
      if (!occurrences.keys) {
        return 'no occurrences are even';
      }
    }
  }

};

