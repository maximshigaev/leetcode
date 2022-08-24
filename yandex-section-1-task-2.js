// дана исходная строка и можно сделать 1 добавление или изменение символа или удаление 
// и дана вторая строка
// вернуть тру если одна в другую строку превращается с учетом условия 1 добавления/изменения/удаления

const getCanBeTransformed = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const string1AfterDeletion = str1.slice(0, i) + str1.slice(i + 1);
      const string2AfterDeletion = str2.slice(0, i) + str2.slice(i + 1);

      if (string1AfterDeletion === string2AfterDeletion) {
        return true;
      }
    }
  }

  const longestString = str1.length > str2.length
    ? str1
    : str2;
  const shortestString = longestString === str1
    ? str2
    : str1;

  for (let i = 0; i < longestString.length; i++) {
    const stringAfterDeletion = longestString.slice(0, i) + longestString.slice(i + 1);

    if (stringAfterDeletion === shortestString) {
      return true;
    }
  }

  return false;
}

console.log(getCanBeTransformed('cadst', 'cadet'));
console.log(getCanBeTransformed('cadt', 'cadet'));
console.log(getCanBeTransformed('cadst', 'cadt'));
console.log(getCanBeTransformed('cadstds', 'cadet'));
console.log(getCanBeTransformed('axdst', 'cadet'));
