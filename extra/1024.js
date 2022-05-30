// https://www.acmicpc.net/problem/1024

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const [N, L] = fs.readFileSync(filePath).toString().split(' ').map(Number);
const result = [];

for (let i = L; i <= 100; i++) {
    let x = (N - i*(i-1)/2) / i;
    if (x % 1 === 0 && x >= 0) {
        for (let j = 0; j < i; j++) {
            result.push(x+j);
        }
        break;
    }
}

if (result.length) console.log(result.join(' '));
else console.log(-1);