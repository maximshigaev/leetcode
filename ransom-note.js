/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote, magazine) => {
  for (let i = 0; i < ransomNote.length; i++) {
    const charIndex = magazine.indexOf(ransomNote[i]);

    if (charIndex !== -1) {
      magazine = magazine.slice(0, charIndex) + magazine.slice(charIndex + 1);
    } else {
      return false;
    }
  }

  return true;
};

const paramA = 'aa';
const paramB = 'ab';

const result = canConstruct(paramA, paramB);

console.log(result, 'result');
