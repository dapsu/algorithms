// https://www.acmicpc.net/problem/11724

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const connected = Array(N+1).fill().map(_ => []);
const visited = Array(N+1).fill(false);
let result = 0;

input.forEach((e) => {
    const [u, v] = e.split(' ').map(Number);
    connected[u].push(v);
    connected[v].push(u);
});

const bfs = (node) => {
    const queue = [node];
    while (queue.length > 0) {
        const target = queue.shift();
        if (!visited[target]) {
            visited[target] = true;
            queue.push(...connected[target]);
        }
    }
};

const dfs = (node) => {
    visited[node] = true;
    for (const target of connected[node]) {
        if (!visited[target]) dfs(target);
    }
};

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        // bfs(i);
        dfs(i);
        result++;
    }
}

console.log(result);