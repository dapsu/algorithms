// https://www.acmicpc.net/problem/5585

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = Number(fs.readFileSync(filePath).toString());

const money = [500, 100, 50, 10, 5, 1];
let restMeony = 1000 - input;

// sol. 1
// let result = 0;
// while (restMeony > 0) {
//     if (money[0] <= restMeony) {
//         restMeony -= money[0];
//         result++;
//     }
//     else money.shift();
// }
// console.log(result);

// sol. 2
let result = 0;
money.forEach(coin => {
    let tmp = Math.floor(restMeony / coin);
    restMeony -= tmp * coin;
    result += tmp;
});

console.log(result);