// https://www.acmicpc.net/problem/1009

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const T = Number(input.shift());
const data = input
  .map(e => e.split(' ')
    .map(Number)
  );

const result = [];

for (let i = 0; i < T; i++) {
  const nums = [];
  let startNum = 1;
  
  while (true) {
    let value = String(data[i][0]**startNum);
    if (nums.includes(value[value.length-1])) break;
    nums.push(value[value.length-1]);
    startNum++;
  }

  if (data[i][1] % nums.length === 0) {
    if (nums[nums.length-1] === '0') result.push('10');
    else result.push(nums[nums.length-1]);
  }
  else result.push(nums[(data[i][1] % nums.length) - 1]);
}

console.log(result.join('\n'));