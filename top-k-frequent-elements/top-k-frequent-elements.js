/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    //store the freqencies in a hash map
    //iterate through hashmap, find max, store that into array, delete from hashmap
    //once array is of length k, return it
    let freq = new Map();
    for (let i = 0; i < nums.length; i++){
        if (freq.get(nums[i])){
            freq.set(nums[i], freq.get(nums[i]) + 1);
        } else {
            freq.set(nums[i], 1);
        }
    }
    let topFreq = [];
    while (topFreq.length < k) {
        let max = (Math.max(...freq.values()))
        for (let [key, value] of freq) {
            if (value === max) {
                topFreq.push(key);
                freq.delete(key);
            }
        }
    }  
    return topFreq;  
    
};