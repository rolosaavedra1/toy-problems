/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //input: array and target
    //output: array of indexes of length 2
    //edge cases: array of length 0, array without solution
    //constraints: no repeats, only one solution
    
    //combinatorics problem - permutation (no repeats)
    //track indexes
    console.log(nums);
    for (var i=0;i<nums.length - 1;i++){
       for (var j=i+1; j<nums.length; j++){
           console.log(nums[i] + nums[j])
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    //can solve with a while loop
    //current element, subArray without current element and ones preceding it
    //iterate through subArray adding current element to it, see if it matches
     //return indexes
};