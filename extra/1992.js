// https://www.acmicpc.net/problem/1992

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const N = Number(input.shift());
const quadTree = input.map(e => [...e].map(Number));
const result = [];

const recur = (n, x, y) => {
    let totalResult = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            totalResult += quadTree[x+i][y+j];
        }
    }

    if (totalResult === 0) result.push(0);
    else if (totalResult === n*n) result.push(1);
    else {
        n /= 2;
        result.push('(');
        recur(n, x, y);
        recur(n, x, y+n);
        recur(n, x+n, y);
        recur(n, x+n, y+n);
        result.push(')');
    }
};

recur(N, 0, 0);
console.log(result.join(''));