// https://www.acmicpc.net/problem/10799

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];
let ironCount = 0;

[...input].forEach((elem, idx) => {
  if (elem === "(") stack.push(elem);
  else {
    if (input[idx-1] === ")") {
      ironCount++;
      stack.pop();
    }
    else {
      stack.pop();
      ironCount += stack.length;
    }
  } 
});

console.log(ironCount);