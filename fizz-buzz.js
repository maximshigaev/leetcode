/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    let currentString;

    if (((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) {
      currentString = 'FizzBuzz';
    } else if ((i + 1) % 3 === 0) {
      currentString = 'Fizz';
    } else if ((i + 1) % 5 === 0) {
      currentString = 'Buzz';
    } else {
      currentString = i + 1 + '';
    }

    result.push(currentString);
  }

  return result;
};

const answer = fizzBuzz(15);

console.log(answer, 'answer');
