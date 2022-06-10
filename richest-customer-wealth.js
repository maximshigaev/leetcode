/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = (accounts) => {
  const customersMoney = accounts.map((moneyArr) => moneyArr.reduce((sum, cur) => sum + cur, 0));

  return Math.max(...customersMoney);
};

const param = [[2,8,7],[7,1,3],[1,9,5]];

const result = maximumWealth(param);

console.log(result, 'result');
