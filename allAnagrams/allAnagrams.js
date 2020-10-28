/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(word, originalWord) {
  //create anagrams object, where we store every new anagram as a key.
  // if a new configuration doesn't exist, add a new key
  //it's going to have to be recursion, won't it

  if (word.length < 2) {
    return [word];
  } else {
      var anagramsObj = {};
      var allAnswers = []
      //iterate through the word
      for (var i = 0; i < word.length; i++) {
        //for every letter in word, create a shorter string that excludes it
        var letter = word[i];
        var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
        //then create an array of all anagrams for that shorter word
        var shortwordArray = allAnagrams(shorterWord, word);
        for (var j = 0; j < shortwordArray.length; j++) {
          //then iterate through this array, adding the missing letter to every string
        allAnswers.push(letter + shortwordArray[j]);
        //if at recursion depth of zero, add to array
        if(!originalWord && !anagramsObj[letter + shortwordArray[j]]){
          anagramsObj[letter + shortwordArray[j]] = letter + shortwordArray[j];
        }
        }
      }
      if(!originalWord) {
        return Object.keys(anagramsObj);
      }
      return allAnswers
  }
};
