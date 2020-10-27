/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  //turn string into array
  //iterate through array
  //if array.lastIndexOf(array[i]) === i
  //return array[i]
  if (string === ''){
    return null
  }
  var arr = string.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) === i) {
      return arr[i];
    }
  }
  
};
