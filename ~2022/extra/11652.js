// https://www.acmicpc.net/problem/11652

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input.shift();
const hash = new Map();

input.forEach(num => {
    if (hash.get(num)) hash.get(num).push(1);
    else hash.set(num, [1]);  
});

let result = Number.MAX_SAFE_INTEGER;
let maxCount = Number.MIN_SAFE_INTEGER;
for (const [num, arr] of hash) {
    if (maxCount < arr.length) {
        result = num;
        maxCount = arr.length;
    }
    else if (maxCount === arr.length) {
        if (result > num) {
            result = num;
            maxCount = arr.length;
        }
    }
}

console.log(result);