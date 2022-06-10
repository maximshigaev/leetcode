/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

const partition = (arr, start, end) => {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if ((arr[i].sordiersNumber < pivotValue.sordiersNumber)
      || ((arr[i].sordiersNumber === pivotValue.sordiersNumber) && (arr[i].initialIndex < pivotValue.initialIndex))) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

const quickSortRecursive = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  
  let index = partition(arr, start, end);
  
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);

  return arr;
}

const kWeakestRows = (mat, k) => {
  const sordiersArray = mat.map((arr, ind) => {
    const sordiersNumber = arr.reduce((sum, cur) => {
      return cur === 1
        ? sum + 1
        : sum;
    }, 0);

    return {
      sordiersNumber,
      initialIndex: ind,
    };
  });

  const sortedArray = quickSortRecursive(sordiersArray, 0, sordiersArray.length - 1);

  return sortedArray
    .map((soldiersObj) => soldiersObj.initialIndex)
    .slice(0, k);
};

const matrix = [
  [1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1],
];

const result = kWeakestRows(matrix, 3);

console.log(result, 'result');
