// https://www.acmicpc.net/problem/1010

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');
let result = '';

const makeBridge = (n, m) => {
    const dp = Array(n+1).fill().map(_ => Array(m+1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= m; j++) {
            if (i === j) {
                dp[i][j] = 1;
                continue;
            }
            if (i === 1) {
                dp[i][j] = j;
                continue;
            }
            let tmp = 0;
            for (let k = 1; k < j; k++) {
                tmp += dp[i-1][k];
            }
            dp[i][j] = tmp;
        }
    }
    return dp[n][m];
};

const testCase = input.shift();
for (let i = 0; i < testCase; i++) {
    const [N, M] = input[i].split(' ').map(e => Number(e));
    result += String(makeBridge(N, M)) + '\n';
}

console.log(result.trim());