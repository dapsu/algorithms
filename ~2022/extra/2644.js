// https://www.acmicpc.net/problem/2644

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const n = Number(input.shift());
const [p1, p2] = input.shift().split(' ');
const m = Number(input.shift());

const obj = {};

input.forEach(e => {
    const [x, y] = e.split(' ');
    if (obj[x] === undefined) obj[x] = [y];
    else obj[x].push(y);
    if (obj[y] === undefined) obj[y] = [x];
    else obj[y].push(x);
});

// sol.1: dfs
const dfs = (start, target) => {
    const visited = Array(n+1).fill(false);
    const stack = [[start, 0]];
    while (stack.length > 0) {
        const [person, depth] = stack.pop();
        visited[person] = true;
        if (person === target) return depth;
        if (obj[person]) {
            for (let i of obj[person]) {
                if (!visited[i]) stack.push([i, depth+1]);
            }
        }
    }
    return -1;
}
console.log(dfs(p1, p2));