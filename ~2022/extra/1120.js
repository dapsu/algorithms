// https://www.acmicpc.net/problem/1120

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const [str1, str2] = fs.readFileSync(filePath).toString().trim().split(" ");
const [len1, len2] = [str1.length, str2.length];

if (len1 === len2) {
  let count = 0;
  for (let i = 0; i < len1; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  console.log(count);
} 
else {
  let minValue = 50;
  for (let i = 0; i <= len2 - len1; i++) {
    let count = 0;
    for (let j = i; j < i + len1; j++) {
      if (str1[j - i] !== str2[j]) count++;
    }
    minValue = Math.min(minValue, count);
  }
  console.log(minValue);
}
