/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
    //recursion, obviously
    //subsets = []
    //base case: if length is 0, return ['']
    //add str to subset
    //iterate over str, cut out one letter
    //recursive case: over length 0
    //subsubset = recurse(string)
    //iterate over subsubset. any repeats already present in subsets, excise
    //add subsubset to subset
    //return subset
    var subset = [];
    if (str.length) {
        subset.push(str);
        var subsubset = [];
        for (var i = 0; i < str.length; i++) {
            var substr = str.substring(0, i) + str.substring(i+1, str.length);
            subsubset = powerSet(substr);
            for (var j = 0; j < subsubset.length; j++) {
                if (subset.indexOf(subsubset[j]) !== -1) {
                    subsubset.splice(j, 1);
                } else {
                    subset.push(subsubset[j]);
                }
            }
        }
        return subset;
    }
    return [''];
};
