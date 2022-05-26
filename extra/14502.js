// https://www.acmicpc.net/problem/14502

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [N, M] = input.shift().split(' ').map(e => Number(e));
const field = input.map(e => e.split(' ').map(e => Number(e)));

/**
 * 1. field 내에 0들 중 3개를 1로 바꿀 수 있는 모든 경우의 수 구하기
 * 2. 각 경우의 수마다 BFS 통해 0의 개수 최댓값 구하기
 * 3. 0의 개수 최댓값 갱신
 */

let result = 0;

const bfs = (graph) => {
    const dist = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const check = Array(N).fill().map(_ => Array(M).fill(false));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (check[i][j] || graph[i][j] === 1 || graph[i][j] === 0) continue;
            check[i][j] = true;
            const queue = [[i, j]];
            while (queue.length > 0) {
                const [x, y] = queue.shift();
                dist.forEach(([dx ,dy]) => {
                    const [nx, ny] = [dx + x, dy + y];
                    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
                        queue.push([nx, ny]);
                        check[nx][ny] = true;
                        graph[nx][ny] = 2;
                    }
                });
            }
        }
    }
    let res = 0;
    graph.forEach(arr => {
        res += arr.filter(e => e === 0).length;
    });
    return res;
};


// field 내 0들 중 3개를 1로 바꿀 수 있는 모든 경우의 수 구하기
for (let r1 = 0; r1 < N; r1++) {
    for (let c1 = 0; c1 < M; c1++) {
        if (field[r1][c1] !== 0) continue;
        for (let r2 = 0; r2 < N; r2++) {
            for (let c2 = 0; c2 < M; c2++) {
                if (field[r2][c2] !== 0 || (r2 === r1 && c2 === c1)) continue;
                for (let r3 = 0; r3 < N; r3++) {
                    for (let c3 = 0; c3 < M; c3++) {
                        if (field[r3][c3] !== 0 || (r3 === r1 && c3 === c1) || (r3 === r2 && c3 === c2)) continue;
                        // const fieldCopy = [...field];
                        const fieldCopy = JSON.parse(JSON.stringify(field));    // 깊은 복사로 해야 함..
                        fieldCopy[r1][c1] = 1;
                        fieldCopy[r2][c2] = 1;
                        fieldCopy[r3][c3] = 1;
                        result = Math.max(result, bfs(fieldCopy));
                    }
                }
            }
        }
    }
}

console.log(result);