/**
 * @param {number} num
 * @return {number}
 */

const numberOfSteps = (num) => {
  let counter = 0;

  while (num !== 0) {
    counter++;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
  }

  return counter;
};

const result = numberOfSteps(14);

console.log(result, 'result');
