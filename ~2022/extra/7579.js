// https://www.acmicpc.net/problem/7579

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const usedMemories = input.shift().split(' ').map(Number);
const costs = input.shift().split(' ').map(Number);
const sumCost = costs.reduce((a, b) => a + b);
const dp = Array(sumCost+1).fill(0);

for (let i = 0; i < N; i++) {
    for (let j = sumCost; j >= costs[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j-costs[i]] + usedMemories[i]);
    }
}

for (const [cost, memory] of dp.entries()) {
    if (memory >= M) {
        console.log(cost);
        break;
    }
}