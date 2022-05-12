// https://www.acmicpc.net/problem/1012

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().replace(/\r/g, '').split('\n');

const T = Number(input.shift());
const graphs = [];

for (let i = 0; i < T; i++) {
    const [M, N, K] = input.shift().split(' ').map(e => Number(e));
    const graph = Array(N).fill().map(e => Array(M).fill(0));

    for (let j = 0; j < K; j++) {
        let [x, y] = [Number(input[j].split(' ')[0]), Number(input[j].split(' ')[1])];
        graph[y][x] = 1;
    }

    graphs.push(graph);
    input.splice(0, K);
}

const result = [];

const bfs = (graph, check, x, y, res) => {
    const dist = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    const queue = [[x, y]];
    check[x][y] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        dist.forEach(([dx, dy]) => {
            const [nx, ny] = [x + dx, y + dy];

            if (nx >= 0 && nx < graph.length && ny >= 0 && ny < graph[0].length && graph[nx][ny] === 1 && check[nx][ny] === false) {
                queue.push([nx, ny]);
                check[nx][ny] = true;
            }
        });
    }
    res++;
    return res;
};

graphs.forEach((graph) => {
    const [row, col] = [graph.length, graph[0].length];
    const visited = Array(row).fill().map(e => Array(col).fill(false));
    let count = 0;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (graph[i][j] === 1 && visited[i][j] === false) {
                count += bfs(graph, visited, i, j, 0);
            }
        }
    }
    
    result.push(count);
});

for (const res of result) {
    console.log(res);
}