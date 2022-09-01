// https://www.acmicpc.net/problem/1026

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [A, B] = [input[1].split(' ').map(e => Number(e)), input[2].split(' ').map(e => Number(e))];

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

const result = A.reduce((res, cur, idx) => {
    res += cur * B[idx];
    return res;
}, 0);

console.log(result);