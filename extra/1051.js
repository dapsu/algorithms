// https://www.acmicpc.net/problem/1051

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

// N의 값이 M보다 작도록 설정
const [N, M] = input.shift().split(' ').map(Number).sort((a, b) => a - b);
const graph = input.map(e => e.split(''));
let result = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        let target = graph[i][j];
        for (let k = 1; k < N; k++) {
            if (i+k < N && j+k < M && graph[i+k][j] === target && graph[i][j+k] === target && graph[i+k][j+k] === target) {
                result = Math.max(result, k+1);
            }
        }
    }
}

console.log(result*result);