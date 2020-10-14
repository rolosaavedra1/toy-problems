/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (number) {
  var rockPaperScissors = function (number) {
    // input: number
    // output: array of strings
    // edge cases: input is < 0, 0
    // base = [R, P, S] base^2 = [RR, RP, RS, PR, PP, PS, SR, SP, SS]
    // so add the contents of base to every element of base
    // output length will always be 3^number.
    //
    //DUMB WAY OF DOING IT:
    // function: if given two arrays, adds all possible combinations of their contents
     var combinations = function (array1, array2) {
      var array3 = new Array(array1.length * array2.length);
      var counter = 0;
      for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) { 
          array3[counter] = (array1[i] + array2[j]);
          counter++;
        }
      }
      return array3;
    }
    //edge cases
    if (number < 0) {
      return 'Invalid input'
    } else if (number === 0) {
      return [];
    } else {
      // call combinations as many times as needed
      var outputArray = ['R', 'P', 'S']
    while (outputArray.length !== Math.pow(3, number)) {
        debugger;   
      outputArray = combinations(['R', 'P', 'S'], outputArray);
    }
    return outputArray;
    }
  };
 //SMARTER WAY
 /* */

};

