/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i],i);
    }
    for (let i = 0; i < words.length - 1; i++) {
        let current = words[i];
        let next = words[i + 1];
        let allEqual = true;
        let minLength = Math.min(current.length, next.length);
        for (let j = 0; j< minLength; j++) {
            if (current[j] === next[j]) continue;
            if (map.get(current[j]) < map.get(next[j])) {
                allEqual = false;
                break;
            }
            if (map.get(current[j]) > map.get(next[j])) return false;
        }
        if (current.length > next.length && allEqual) return false;
  }
  return true;
};