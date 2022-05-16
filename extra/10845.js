// https://www.acmicpc.net/problem/10845

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n').slice(1);

const queue = [];

input.forEach(command => {
    if (command.substring(0,4) === 'push') {
        const num = command.split(' ')[1];
        queue.push(num);
    }
    else if (command === 'pop') {
        queue.length > 0 ? console.log(queue.shift()) : console.log(-1);
    }
    else if (command === 'size') {
        console.log(queue.length);
    }
    else if (command === 'empty') {
        queue.length === 0 ? console.log(1) : console.log(0);
    }
    else if (command === 'front') {
        queue.length > 0 ? console.log(queue[0]) : console.log(-1);
    }
    else if (command === 'back') {
        queue.length > 0 ? console.log(queue[queue.length-1]) : console.log(-1);
    }
});