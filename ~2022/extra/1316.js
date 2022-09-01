// https://www.acmicpc.net/problem/1316

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');
input.shift();

let result = 0;

const groupWord = (str) => {
    const arr = [];
    for (const i of str) {
        if (arr.includes(i)) {
            if (arr[arr.length-1] !== i) return false;
        }
        else arr.push(i);
    }
    return true;
};

input.forEach(str => { 
    if (groupWord(str)) result++;
});

console.log(result);