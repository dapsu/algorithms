// https://www.acmicpc.net/problem/7568

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const N = Number(input.shift());
const arr = input.map(e => e.split(' ').map(Number));
const result = Array(N).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i === j) continue;
        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) result[i]++;
    }
}

console.log(result.join(' ').trim());