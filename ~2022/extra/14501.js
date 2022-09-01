// https://www.acmicpc.net/problem/14501

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const N = Number(input.shift());
const table = input.map(e => e.split(' ').map(num => Number(num)));
const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    const [T, P] = table[i];
    let ptr = i + T;
    if (ptr <= N) {
        dp[i] += P;
        for (let j = ptr; j < N; j++) {
            dp[j] = Math.max(dp[i], dp[j]);
        }
    }
}

console.log(Math.max(...dp));