// https://www.acmicpc.net/problem/1094

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let X = Number(fs.readFileSync(filePath).toString());
const arr = [1, 2, 4, 8, 16, 32, 64];

if (arr.includes(X)) console.log(1);
else {
    let result = 0;
    while (X > 0) {
        let idx;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= X) {
                idx = i;
                continue;
            }
            if (arr[i] > X) break;
        }
        X -= arr[idx];
        result++;
    }
    console.log(result);
}