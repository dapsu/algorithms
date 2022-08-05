// https://www.acmicpc.net/problem/1157

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

if (input.length === 1) {
  console.log(input);
}
else {
  const map = new Map();
  [...input].forEach(str => {
    let tmp;
    if (map.has(str)) {
      tmp = map.get(str);
      map.delete(str);
      map.set(str, ++tmp);
    }
    else {
      map.set(str, 1);
    }
  });
  
  const result = [...map].sort((a, b) => b[1] - a[1]);
  
  if (result[0][1] === result[1][1]) {
    console.log('?');
  }
  else {
    console.log(result[0][0]);
  }
}