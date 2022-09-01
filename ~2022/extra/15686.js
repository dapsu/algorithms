// https://www.acmicpc.net/problem/15686

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(e => e.split(' ').map(Number));

const combinations = (arr, m) => {
    const result = [];
    if (m === 1) return arr.map(e => [e]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const reCombinations = combinations(rest, m-1);
        const attached = reCombinations.map(combi => [fixed, ...combi]);
        result.push(...attached);
    });
    return result;
};

const getDist = (spot) => {
    const field = Array(N).fill().map(_ => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 1) field[i][j] = 1;
        }
    }
    spot.forEach(([i, j]) => {
        field[i][j] = 2;
    });

    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j< N; j++) {
            if (field[i][j] === 1) {
                let tmp = Number.MAX_SAFE_INTEGER;
                for (let x = 0; x < N; x++) {
                    for (let y = 0; y < N; y++) {
                        if (field[x][y] === 2) {
                            let tmp2 = Math.abs(i-x) + Math.abs(j-y);
                            tmp = Math.min(tmp, tmp2);
                        }
                    }
                }
                result += tmp;
            }
        }
    }
    return result;
};

const chickenHouse = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (board[i][j] === 2) chickenHouse.push([i, j]);
    }
}

let result = Number.MAX_SAFE_INTEGER;
const combiChicken = combinations(chickenHouse, M);
combiChicken.forEach(spot => {
    result = Math.min(result, getDist(spot));
});

console.log(result);