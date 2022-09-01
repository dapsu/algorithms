// https://www.acmicpc.net/problem/1676

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let N = Number(fs.readFileSync(filePath).toString());
let result = 0;

while (N >= 5) {
    N = Math.floor(N/5);
    result += N;
}

console.log(result);