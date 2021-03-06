/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

//go through array
//swapOccurrence boolean as false
//compare each item to the next (n-1) steps, swap them
//keep iterating until no files require swapping

//my intuition is that it has O(n^2)

//go through array, store every new maximum in a new maximums array, and every minimum
//in a minimums array. also track occurrences. 
//then go through each array, expanding by occurrences and filling it out, from minimum to maximums


var bubbleSort = function (array) {
  var len = array.length;
  var swaps = true;
  for (var i = 0; i < len && swaps === true; i++) {
    swaps = false;
    for (var j = 0; i < len - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        swaps = true;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};
