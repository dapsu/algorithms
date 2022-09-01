// https://www.acmicpc.net/problem/1976

const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const N = Number(input.shift());    // 도시 수
const M = Number(input.shift());    // 여행 계획에 속한 도시들 수(도시 중복 있을 수 있음)
const cities = input.pop().split(' ');  // (M개의 도시들)

const obj = {};     // 도시간 연결 경로
input.forEach((e, idx) => {
    for (const [i, v] of e.split(' ').entries()) {
        if (v === "1") {
            if (obj[idx+1] !== undefined) obj[idx+1].push(i+1);
            else obj[idx+1] = [i+1];
        }
    }
});

const visited = Array(N+1).fill(false);
const queue = [cities[0]];
while (queue.length > 0) {
    const city = queue.shift();
    visited[city] = true;
    if (obj[city]) {
        for (const i of obj[city]) {
            if (!visited[i]) queue.push(i);
        }
    }
}

const isValid = () => {
    for (const city of cities) {
        if (!visited[city]) {
            return 'NO';
        }     
    }
    return 'YES';
}
console.log(isValid());