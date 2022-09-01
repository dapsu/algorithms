// https://www.acmicpc.net/problem/17413

const fs = require('fs');
let input = fs.readFileSync('../../input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let result = '';
let ptr = 0;
let flag = false;
let tmp = [];
while (ptr < input.length) {
    if (input[ptr] === '<') {
        if (tmp) {
            result += tmp.reverse().join('');
            tmp = [];
        }
        flag = true;
        result += input[ptr];
        ptr++;
        continue;
    }
    if (input[ptr] === '>') {
        flag = false;
        result += input[ptr];
        ptr++;
        continue;
    }

    if (flag === true) {
        result += input[ptr];
        ptr++;
        continue;
    }
    else {
        if (input[ptr] === ' ') {
            result += tmp.reverse().join('');
            result += input[ptr];
            tmp = [];
            ptr++;
            continue;
        }
        else {
            tmp.push(String(input[ptr]));
            ptr++;
        }
    }
}

if (tmp) {
    result += tmp.reverse().join('');
}

console.log(result);