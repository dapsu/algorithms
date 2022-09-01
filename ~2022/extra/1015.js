// https://www.acmicpc.net/problem/1015

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g,'').split('\n');
const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);
const sortA = A.slice().sort((a, b) => a - b);
const P = Array(N).fill(-1);

A.forEach((num, idx) => {
    P[idx] = sortA.findIndex((target, i) => {
        if (num === target && !(P.includes(i))) return true;
    });
});

console.log(P.join(' '));