const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);
console.log(input.sort((a, b) => a - b).join(' '));