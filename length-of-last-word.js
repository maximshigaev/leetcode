/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function(s) {
  let result = 0;
  const trimmedStr = s.trim();
  let cur = trimmedStr.length - 1;

  while ((trimmedStr[cur] !== ' ') && (cur >= 0)) {
    result++;
    cur--;
  }

  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("a"));
