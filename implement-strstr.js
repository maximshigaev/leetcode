/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => haystack.indexOf(needle);

const res1 = strStr('hello','ll');
const res2 = strStr('aaaaa','bba');

console.log(res1, 'res1');
console.log(res2, 'res2');
