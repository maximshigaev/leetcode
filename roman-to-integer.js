/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  const specialCases = {
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900,
  }
  
  const digits = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  
  let isSpecialCase = false;
  
  const result = s.split('').reduce((sum, cur, index, array) => {
    if (isSpecialCase) {
        isSpecialCase = false;
        return sum;
    }

    isSpecialCase = cur + array[index + 1] in specialCases;

    const digit = isSpecialCase
        ? specialCases[cur + array[index + 1]]
        : digits[cur];
    
    return sum + digit;
  }, 0);
  
  return result;
};
