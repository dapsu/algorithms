// https://www.acmicpc.net/problem/2659

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const cards = fs.readFileSync(filePath).toString().split(' ');

const getClockNum = (arr) => {
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
        arr.push(arr.shift());
        minNum = Math.min(minNum, Number(arr.join('')))
    }
    return minNum;
}

const clockNum = getClockNum(cards);
let result = 0;
for (let i = 1111; i <= clockNum; i++) {
    if (getClockNum([...String(i)]) === i) result++;
}

console.log(result);