// https://www.acmicpc.net/problem/11659

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g,'').split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);
const dp = Array(N+1).fill(0);
const result = [];

nums.forEach((num, i) => {
    dp[i+1] = num + dp[i];
});

input.forEach(elem => {
    let [i, j] = elem.split(' ').map(Number);
    result.push(dp[j] - dp[i-1]);
})
console.log(result.join('\n'));