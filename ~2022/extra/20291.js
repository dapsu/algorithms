// https://www.acmicpc.net/problem/20291

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n').slice(1);

const map = new Map();

input.forEach(file => {
    const extension = file.split('.')[1];
    if (map.get(extension) === undefined) map.set(extension, [1]);
    else map.get(extension).push(1);
});
const result = new Map([...map.entries()].sort());

for (const [key, value] of result.entries()) {
    console.log(key, value.reduce((a, b) => a + b));
}
