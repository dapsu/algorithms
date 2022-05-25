// https://www.acmicpc.net/problem/16967

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [H, W, X, Y] = input.shift().split(' ').map(e => Number(e));
const arrA = Array(H).fill().map(_ => Array(W).fill(0));
const arrB = input.map(e => e.split(' ').map(e => Number(e)));

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (i - X >= 0 && j - Y >= 0) arrA[i][j] = arrB[i][j] - arrA[i-X][j-Y];
        else arrA[i][j] = arrB[i][j];
    }
}

let result = '';
for (const i of arrA) {
    i.forEach(e => {
        result += e + ' '
    });
    result += '\n';
}

console.log(result.trim());