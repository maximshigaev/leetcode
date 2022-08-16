/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const backspaceCompare = function(s, t) {  
  for (let i = 0; i < Math.max(t.length, s.length); i++) {
    if ((t[i] === '#') || (s[i] === '#')) {
      if (s[i] === '#') {
        s = i > 0
          ? s.slice(0, i - 1) + s.slice(i + 1)
          : s.slice(0, i) + s.slice(i + 1);
      }

      if (t[i] === '#') {
        t = i > 0
          ? t.slice(0, i - 1) + t.slice(i + 1)
          : t.slice(0, i) + t.slice(i + 1);
      }

      i--;
      i--;
    }
  }

  return s === t;
};

console.log(backspaceCompare('y#fo##f', 'y#f#o##f'));
console.log(backspaceCompare('a##c', '#a#c'));
