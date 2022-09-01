// https://www.acmicpc.net/problem/11656

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString();

const result = [];
for (let i = 0; i < input.length; i++) {
    result.push(input.slice(i));
}

result.sort();
console.log(result.join('\n').trim());