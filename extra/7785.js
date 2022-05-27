// https://www.acmicpc.net/problem/7785

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

input.shift();
const result = [];

input.forEach(elem => {
    const [name, state] = elem.split(' ');
    if (state === 'enter') result.push(name);
    else result.splice(result.indexOf(name), 1);
});

result.sort((a,b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
});

console.log(result.join('\n'));