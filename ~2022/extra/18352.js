// https://www.acmicpc.net/problem/18352

// 시간 초과 ㅠ
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const [N, M, K, X] = input.shift().split(' ');
const graph = {};
const result = [];

input.forEach(e => {
    const [start, reach] = e.split(' ');
    if (graph[start] === undefined) graph[start] = [reach];
    else graph[start].push(reach);
});

const edges = Array(Number(N)+1).fill(-1);
edges[X] = 0;

const queue = [X];
while (queue.length > 0) {
    const node = queue.shift();
    if (graph[node] === undefined) continue;
    for (const i of graph[node]) {
        if (edges[i] === -1) {
            edges[i] = edges[node] + 1;
            queue.push(i);
        }
    }
}

edges.forEach((e, i) => {
    if (e === Number(K)) {
        result.push(i);
    }
});

if (result.length > 0) {
    result.sort((a, b) => a - b);
    console.log(result.join('\n').trim());
}
else console.log(-1);