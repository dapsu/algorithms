// https://www.acmicpc.net/problem/1244

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const switchLength = Number(input.shift());
const switches = input.shift().split(' ').map(Number);
const students = Number(input.shift());

input.forEach(e => {
    const [sex, target] = e.split(' ').map(Number);
    if (sex === 1) {
        let tmp = 1;
        let targetCopy = [target].slice();
        while (targetCopy < switchLength) {
            let idx = targetCopy - 1;
            if (switches[idx] === 1) switches[idx] = 0;
            else switches[idx] = 1;
            tmp++;
            targetCopy = target * tmp;
        }
        // for (let i = 0; i < switchLength; i++) {
        //     if ((i+1) % target === 0) {
        //         switches[i] === 0 ? switches[i] = 1 : switches[i] = 0; 
        //     }
        // }
    }
    else {
        let idx = target - 1;
        let tmp = 1;
        if (switches[idx-1] === switches[idx+1]) {
            while (switches[idx-tmp] === switches[idx+tmp]) {
                switches[idx-tmp] === 0 ? switches[idx-tmp] = 1 : switches[idx-tmp] = 0;
                switches[idx+tmp] === 0 ? switches[idx+tmp] = 1 : switches[idx+tmp] = 0;
                tmp++;
            }
        }
        switches[idx] === 0 ? switches[idx] = 1 : switches[idx] = 0;
    }
});

console.log(switches.join(' '));