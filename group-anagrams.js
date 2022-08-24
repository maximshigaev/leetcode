/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
  const result = [];
  const normalizedStrs = strs
    .map((str) => ({
      string: str
        .split('')
        .sort()
        .join(''),
      originalString: str,
    }))
    .sort((a, b) => a.string > b.string ? 1 : -1);

  result.push([normalizedStrs[0].originalString]);

  for (let i = 1; i < normalizedStrs.length; i++) {
    if (normalizedStrs[i - 1].string !== normalizedStrs[i].string) {
      result.push([normalizedStrs[i].originalString]);
    } else {
      result.at(-1).push(normalizedStrs[i].originalString);
    }
  }

  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
