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
//input: number
//output: array of strings of length = number
// it's a combinatorics problem
// so we want a recursive function that takes in an array of the previously done plays, and adds to each of them R, P and S
//PSEUDO: 
// container variable plays
// plays = recursive function recordedPlays ([], number )
// recordedPlays = function definition (playsSoFar, roundsLeft) 
  // if 0 rounds left, return playsSoFar (base case)
  // loop over [R, P, S]
    // create a shallow copy of array, add [i] to it
  //playsSoFar = merge all 3 shallow arrays
  // call recordedPlays(playsSoFar, roundsLeft - 1)
//return plays
var rockPaperScissors = function(rounds) {
  rounds = rounds || 3;
  let plays = [];
  let options = ['R', 'P', 'S'];
  var recordedPlays = function(playedSoFar, roundsLeft) {    
    if (roundsLeft === 0) {
      plays.push(playedSoFar);
    }
    else {
      let shallowCopy = [];
      for (var i = 0; i < options.length; i++) {
        shallowCopy = playedSoFar.length < 1 ? options : shallowCopy.concat(playedSoFar.map(item => item + options[i]));
      }
      playedSoFar = shallowCopy;
      recordedPlays(playedSoFar, roundsLeft-1);
    }
  };
  recordedPlays([], rounds);
  return plays;
};

