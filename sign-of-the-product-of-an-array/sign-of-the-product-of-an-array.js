/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    // input is array of numbers
    // output is the sign of the product of the reduced array
    // edge cases: empty array, array of length 1
    // constraints: none
    
    // simplest way would be to reduce array, then return signFunc(product), but inefficient
    
    // let negatives = false;
    //iterate over array, execute signfunc for every element
      //if 0, break out of iterattion and return 0.
      //if -1, !negatives
    // if negatives, return -1
    // else return 1
    
    var signFunc = (x) => {
        return x === 0 ? 0 : (x > 0 ? 1 : -1)
    }
    let negatives = false;
    for (var i=0; i < nums.length; i++){
        if (!signFunc(nums[i])){
            return 0;
        } else if (signFunc(nums[i]) < 0) {
            negatives = !negatives;
        }
    }
    return negatives ? -1 : 1;
    
};