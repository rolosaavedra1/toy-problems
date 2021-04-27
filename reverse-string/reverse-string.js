/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let originalLength = s.length;
    let counter = originalLength-1;
    while (s.length < originalLength * 2) {
        s.push(s[counter]);
        counter--;
    }
    while (s.length !== originalLength) s.shift();
};