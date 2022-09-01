// https://www.acmicpc.net/problem/1427

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result = [...input].map(Number).sort((a, b) => b - a).join('');

console.log(result);