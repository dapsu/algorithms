// https://www.acmicpc.net/problem/1475

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = [...fs.readFileSync(filePath).toString()].map(Number);

const result = Array(9).fill(0);

input.forEach(num => {
    if (num === 9) result[6]++;
    else result[num]++;
});
result[6] = result[6] % 2 === 0 ? result[6] / 2 : Math.ceil(result[6] / 2);

console.log(Math.max(...result));