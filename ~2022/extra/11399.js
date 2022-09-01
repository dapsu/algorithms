// https://www.acmicpc.net/problem/11399

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().replace(/\r/g, '').split('\n');
// let input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const [num, times] = [Number(input[0]), input[1].split(' ')];

const sortTimes = times.map(v => Number(v))
            .sort((a, b) => a - b);

sortTimes.forEach((order, idx) => {
    if (idx > 0) {
        sortTimes[idx] += sortTimes[idx-1];
    }
});

console.log(sortTimes.reduce((a, b) => a + b));