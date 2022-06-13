/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  if (s.length % 2) {
    return false;
  }

  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const unclosedBrackets = [];

  for (let char of s) {
    if (char in bracketsMap) {
      unclosedBrackets.push(char);
    } else if (bracketsMap[unclosedBrackets[unclosedBrackets.length - 1]] !== char) {
      return false;
    } else {
      unclosedBrackets.pop();
    }
  }

  return !unclosedBrackets.length;
};

const string1 = '()[]{}';
const string2 = '((';

const res1 = isValid(string1);
const res2 = isValid(string2);

console.log(res1, 'res1');
console.log(res2, 'res2');
