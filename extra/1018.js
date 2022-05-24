// https://www.acmicpc.net/problem/1018

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [M, N] = input.shift().split(' ').map(e => Number(e));
const board = input.map(e => e.split(''));
let result = Number.MAX_SAFE_INTEGER;

const checkBoard = (arr) => {
    let [countW, countB] = [0, 0];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i][j] === 'B' && (i+j) % 2 === 0) countW++;
            else if (arr[i][j] === 'W' && (i+j) % 2 === 1) countW++;
        }
    }
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i][j] === 'W' && (i+j) % 2 === 0) countB++;
            else if (arr[i][j] === 'B' && (i+j) % 2 === 1) countB++;
        }
    }
    return countW >= countB ? countB : countW;
};

for (let i = 0; i < M - 7; i++) {
    for (let j = 0; j < N - 7; j++) {
        const arr = board.slice(i, i+8).map(e => e.slice(j, j+8));
        const check = checkBoard(arr);
        result = check < result ? check : result; 
    }
}

console.log(result);