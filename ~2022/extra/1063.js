// https://www.acmicpc.net/problem/1063

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

let [king, stone, N] = input.shift().split(' ');

for (let move of input) {
  if (move === 'R') {
    if (king[0] === 'H') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) + 1) + king[1];
    
    if (tmp === stone) {
      if (stone[0] === 'H') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) + 1) + stone[1];
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'L') {
    if (king[0] === 'A') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) - 1) + king[1];

    if (tmp === stone) {
      if (stone[0] === 'A') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) - 1) + stone[1];
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'T') {
    if (king[1] === '8') continue;
    let tmp = king[0] + (Number(king[1]) + 1);
  
    if (tmp === stone) {
      if (stone[1] === '8') continue;
      stone = stone[0] + (Number(stone[1]) + 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'B') {
    if (king[1] === '1') continue;
    let tmp = king[0] + (Number(king[1]) - 1);
  
    if (tmp === stone) {
      if (stone[1] === '1') continue;
      stone = stone[0] + (Number(stone[1]) - 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'RT') {
    if (king[0] === 'H' || king[1] === '8') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) + 1) + (Number(king[1]) + 1);
  
    if (tmp === stone) {
      if (stone[0] === 'H' || stone[1] === '8') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) + 1) + (Number(stone[1]) + 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'LT') {
    if (king[0] === 'A' || king[1] === '8') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) - 1) + (Number(king[1]) + 1);
  
    if (tmp === stone) {
      if (stone[0] === 'A' || stone[1] === '8') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) - 1) + (Number(stone[1]) + 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'RB') {
    if (king[0] === 'H' || king[1] === '1') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) + 1) + (Number(king[1]) - 1);
  
    if (tmp === stone) {
      if (stone[0] === 'H' || stone[1] === '1') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) + 1) + (Number(stone[1]) - 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
  else if (move === 'LB') {
    if (king[0] === 'A' || king[1] === '1') continue;
    let tmp = String.fromCharCode(king.charCodeAt([0]) - 1) + (Number(king[1]) - 1);
    
    if (tmp === stone) {
      if (stone[0] === 'A' || stone[1] === '1') continue;
      stone = String.fromCharCode(stone.charCodeAt([0]) - 1) + (Number(stone[1]) - 1);
      king = tmp;
    }
    else king = tmp;
    console.log(`move === ${move} :`);
    console.log("king : ", king);
    console.log("stone : ", stone);
    console.log();
  }
}

console.log(king);
console.log(stone);