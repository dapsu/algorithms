// https://www.acmicpc.net/problem/1051

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(num => num.split('').map(Number));


if (N === 1 || M === 1) {
  console.log(1);
} else {
  const limited = Math.min(N, M);
  let maxNum = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let target = board[i][j];
      for (let k = 1; k < limited; k++) {
        if (
          i + k < N &&
          j + k < M &&
          board[i + k][j] === target &&
          board[i][j + k] === target &&
          board[i + k][j + k] === target) {
          maxNum = Math.max(maxNum, k + 1);
        }
      }
    }
  }
  console.log(maxNum**2);
}
