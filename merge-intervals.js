/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const [prevStart, prevEnd] = result.at(-1);

    if ((prevStart > start) || (prevEnd >= start)) {
      const newStart = Math.min(start, prevStart);
      const newEnd = Math.max(end, prevEnd);

      result[result.length - 1] = [newStart, newEnd];
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log(merge([[1, 3], [2, 6], [6, 7], [10, 12], [15, 18]]));
console.log(merge([[1, 4], [0, 4]]));
console.log(merge([[1, 4], [2, 3]]));
console.log(merge([[0, 0], [1, 4]]));
