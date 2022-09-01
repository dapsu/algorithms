// https://www.acmicpc.net/problem/1076

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const color = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1000],
  yellow: [4, 10000],
  green: [5, 100000],
  blue: [6, 1000000],
  violet: [7, 10000000],
  grey: [8, 100000000],
  white: [9, 1000000000]
};

let result = String(color[input[0]][0]) + String(color[input[1]][0]);
result *= color[input[2]][1];


console.log(result);