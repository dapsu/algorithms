// https://www.acmicpc.net/problem/2303

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const N = Number(input.shift());
const players = [];

const combinations = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map(e => [e]);
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx+1);
        const reCombinations = combinations(rest, selectNum-1);
        const attached = reCombinations.map(recombi => [fixed, ...recombi]);
        result.push(...attached);
    });
    return result;
}

input.forEach(e => {
    const cards = e.split(' ').map(Number);
    let maxNum = Number.MIN_SAFE_INTEGER;
    combinations(cards, 3).forEach(card => {
        const sum = card.reduce((a, b) => a + b) % 10;
        maxNum = Math.max(maxNum, sum);
    });
    players.push(maxNum);
});

for (let i = N-1; i >= 0; i--) {
    if (players[i] === Math.max(...players)) {
        console.log(i+1);
        break;
    }
}