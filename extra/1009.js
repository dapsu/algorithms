// https://www.acmicpc.net/problem/1009
// try again

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const T = Number(input.shift());
const data = input.map(e => {
  const [a, b] = e.split(' ').map(Number);
    
  let pow = 1;

  for (let i = 0; i < b; i++) {
    pow = (pow * a) % 10;
  }
    
  return pow === 0 ? 10 : pow;
});

console.log(data.join('\n'));