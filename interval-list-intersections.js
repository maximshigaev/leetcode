/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

const intervalIntersection = function(firstList, secondList) {
  if (!firstList.length || !secondList.length) {
    return [];
  }

  let pointer1 = 0;
  let pointer2 = 0;
  const result = [];

  while (pointer1 < firstList.length && pointer2 < secondList.length) {
    const firstInterval = firstList[pointer1];
    const secondInterval = secondList[pointer2];

    if ((firstInterval[0] >= secondInterval[0]) && (firstInterval[1] <= secondInterval[1])) {
      result.push(firstInterval);
      pointer1++;
      continue;
    }

    if ((secondInterval[0] >= firstInterval[0]) && (secondInterval[1] <= firstInterval[1])) {
      result.push(secondInterval);
      pointer2++;
      continue;
    }

    if (firstInterval[1] < secondInterval[0]) {
      pointer1++;
      continue;
    }

    if (secondInterval[1] < firstInterval[0]) {
      pointer2++;
      continue;
    }

    const start = Math.max(firstInterval[0], secondInterval[0]);
    const end = Math.min(firstInterval[1], secondInterval[1]);
    result.push([start, end]);

    if (end < firstInterval[1]) {
      pointer2++;
    }

    if (end < secondInterval[1]) {
      pointer1++;
    }
  }

  return result;
};

console.log(intervalIntersection(
  [[4,5],[7,10],[11,12],[14,15],[16,20]],
  [[3,5],[9,20]],
));
