// https://www.acmicpc.net/problem/1059

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const L = Number(input.shift());
const S = input.shift().split(' ').map(Number);
const n = Number(input.shift());

if (S.includes(n)) console.log(0);
else {
    let [min, max] = [0, 0];
    for (const num of S) {
        if (num < n) min = num;
        else if (num > n && max === 0) max = num;
    }
    max--;
    min++;
    console.log((n-min) * (max-n+1) + (max-n));
}