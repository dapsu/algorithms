// https://www.acmicpc.net/problem/1790

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let [N, k] = input.map(Number);
let result = 0;
let [idx, nine] = [1, 9];

while (k > idx * nine) {
    k -= (idx * nine);
    result += nine;
    idx++;
    nine *= 10;
}

result = String(result + 1 + Math.floor((k - 1) / idx));

if (result > N) console.log(-1);
else console.log(result[(k - 1) % idx ]);