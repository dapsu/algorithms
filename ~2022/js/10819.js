// https://www.acmicpc.net/problem/10819

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);

const permutations = function(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
    const rePermutations = permutations(rest, selectNum-1);
    const attached = rePermutations.map(permutation => [fixed, ...permutation]);
    result.push(...attached);
  });
  return result;
};

const permutationArr = permutations(A, N);
let maxNum = 0;

permutationArr.forEach(arr => {
  tmpNum = 0;
  for (let i = 1; i < N; i++) {
    tmpNum += Math.abs(arr[i-1] - arr[i]);
  }
  maxNum = Math.max(maxNum, tmpNum);
});

console.log(maxNum);