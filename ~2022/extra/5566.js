// https://www.acmicpc.net/problem/5566

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [N, M] = input.shift().split(' ').map(e => Number(e));
const board = [];
for (let i = 0; i < N; i++) {
    board.push(Number(input.shift()));
}

let count = 0;
let ptr = 0;
while (ptr < N-1) {
    ptr += Number(input.shift());
    ptr += board[ptr];
    count++;
}

console.log(count);