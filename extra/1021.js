// https://www.acmicpc.net/problem/1021

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().replace(/\r/g, '').split('\n');
let input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n');

const queueSize = Number(input[0].split(' ')[0]);
const pickNums = input[1].split(' ').map(num => Number(num));
const queue = Array(queueSize).fill().map((_, i) => i+1);

let result = 0;
while (pickNums.length > 0) {
    const pickNum = pickNums[0];
    if (pickNum === queue[0]) {
        pickNums.shift();
        queue.shift();
        continue;
    }
    const numIndex = queue.indexOf(pickNum);
    if (numIndex <= Math.floor(queue.length/2)) {
        queue.push(...queue.splice(0, numIndex));
        result += numIndex;
    }
    else {
        queue.unshift(...queue.splice(numIndex, queue.length-1));
        result += queue.length - numIndex;
    }
}

console.log(result);