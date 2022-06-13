/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
  const A_CHAR_CODE = 97;
  const Z_CHAR_CODE = 122;
  const ZERO_DIGIT_CODE = 48;
  const NINE_DIGIT_CODE = 57;

  s = s.toLocaleLowerCase();

  for (let i = 0; i <=  Math.ceil(s.length / 2 - 1); i++) {
    const isAlphanumericChar = (char) => ((char.codePointAt(0) >= A_CHAR_CODE) && (char.codePointAt(0) <= Z_CHAR_CODE))
      || ((char.codePointAt(0) >= ZERO_DIGIT_CODE) && (char.codePointAt(0) <= NINE_DIGIT_CODE));

    if (!isAlphanumericChar(s[i])) {
      s = s.slice(0, i) + s.slice(i + 1);
      i--;
      continue;
    } else if (!isAlphanumericChar(s[s.length - 1 -i])) {
      s = s.slice(0, s.length - i - 1) + s.slice(s.length - i);
      i--;
      continue;
    }

    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const s1 = "A man, a plan, a canal: Panama";
const s2 = "race a car";
const s3 = '0P';

const res1 = isPalindrome(s1);
const res2 = isPalindrome(s2);
const res3 = isPalindrome(s3);

console.log(res1, 'res1');
console.log(res2, 'res2');
console.log(res3, 'res3');
