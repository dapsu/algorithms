// https://www.acmicpc.net/problem/1932

const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
const N = Number(input.shift());
const triNums = input.map(e => e.split(' ').map(Number));

for (let i = 1; i < N; i++) {
    let [preLayer, currLayer] = [triNums[i-1], triNums[i]];
    for (let j = 0; j < currLayer.length; j++) {
        if (j === 0) currLayer[0] += preLayer[0];
        else if (j === currLayer.length-1) currLayer[currLayer.length-1] += preLayer[preLayer.length-1];
        else currLayer[j] += Math.max(preLayer[j-1], preLayer[j]);
    }
}

console.log(Math.max(...triNums[N-1]));