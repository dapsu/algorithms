// https://www.acmicpc.net/problem/9372

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');


const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    const [N, M] = input.shift().split(' ');
    input.splice(0, M);
    console.log(N-1);
}