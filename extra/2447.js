// https://www.acmicpc.net/problem/2447

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let N = Number(fs.readFileSync(filePath).toString());
const result = [];

const makeStars = (i, j, num) => {
    if (i % 3 === 1 && j % 3 === 1) {
        result.push(' ');
    }
    else {
        if (num === 1) result.push('*');
        else makeStars(Math.floor(i/3), Math.floor(j/3), num/3);
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        makeStars(i, j, N);
    }
    result.push('\n');
}

console.log(result.join(''));