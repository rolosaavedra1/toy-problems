/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//a hash table is an array of addresses, where each item in array points to a value.
var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;
  
  result.insert = function(key, value) {
    //check the if result.size + 1 > result.storageLimit
    // if so, double storage limit, run through result.storage copying everything into a new storage array

    //go into result.storage[hashfunc(key)], check if it's undefined or an array.
    //if undefined, populate it with an array [key, value]
    //if an array, create a new bucket array.
    //if array.length>2, go through bucket array and copy its contents into new bucket, plus [key, value] at the end
    //increase size by 1
  };

  result.retrieve = function(key) {
    //look inside storage[hashfunc(key)], check if it's an array.
    //if not, return an empty array
    //if it is, check its length. if >2, go through bucket until a tuple[0] matches they key, then return tuple[1]
  };

  result.remove = function(key) {
    //same as retrieve, but delete target tuple
    //decrease size by 1
  };

  return result;
};
