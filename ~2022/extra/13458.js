// https://www.acmicpc.net/problem/13458

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const N = input.shift();
const A = input.shift().split(' ').map(e => Number(e));
const [B, C] = input.shift().split(' ').map(e => Number(e));

let result = 0;

A.forEach(num => {
    let tmp = num - B;
    result++;
    if (tmp > 0) result += Math.floor((tmp / C)) + (tmp % C === 0 ? 0 : 1);
});

console.log(result);