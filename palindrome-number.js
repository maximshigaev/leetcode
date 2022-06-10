/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  const stringifiedX = x + '';
  let isPalindrome = true;

  for (let i = 0; i <= stringifiedX.length; i++) {
    if (stringifiedX[i] !== stringifiedX[stringifiedX.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

const result = isPalindrome(12133121);

console.log(result, 'result');
