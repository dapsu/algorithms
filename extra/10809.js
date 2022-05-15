// https://www.acmicpc.net/problem/10809

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString();

const alphabetObj = {};

for (let i = 97; i < 123; i++) {
    alphabetObj[String.fromCharCode(i)] = -1;
}

for (const [i, s] of [...input].entries()) {
    if (alphabetObj[s] === -1) alphabetObj[s] = i;
}

console.log(Object.values(alphabetObj).join(' '));