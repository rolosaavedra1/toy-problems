/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    //there is one obvious way of solving this, time complexity strs.length + shortest string*strs.length =aprox shortest string*strs.length
    //iterate through strs to find shortest
    //lcp = '';
    //iterate through the first string
       //for every character in the first string, check the corresponding character in the other strings
       //for subArray of strs
         //check if character is same in position [i] for str[j]
         //if not, return lcp
         //if yes, add character to lcp
    let shortest = strs[0];
    shortestIndex = 0;
    let lcp = "";
    for (var i=0; i<strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
            shortestIndex = i;
        }
    }
    console.log(shortest);
    strs.splice(shortestIndex,1);
    
    if (shortest.length === 0) return lcp;
    for (var i=0; i<shortest.length; i++){
        console.log(shortest[i]);
        for (var j=0; j < strs.length; j++){
            if (strs[j][i] !== shortest[i]) {
                return lcp
            }
        }
        lcp += shortest[i];
        console.log(lcp);
    }
    return lcp;
    
};