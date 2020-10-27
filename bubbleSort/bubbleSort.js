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


var bubbleSort = function(array) {
  // helper function to make it easier
/*  var swapOccurrence = true;
  for (var i = 1; i < array.length; i++) {
    if ((array[i-1] > array[i])) {
     var holder  = array[i];
     array[i] = array[i-1];
     array[i-1] = holder;
     swapOccurence = true
    }
    if (i === array.length-1 && swapOccurrence) {
      i = 1;
    }
  }
  return array; */
  for (var i = 0; i < array.length - 1; i++) {
    if (a)
  }
};
bubbleSort([2, 1, 3]);
