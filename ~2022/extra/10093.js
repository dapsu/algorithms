const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let [A, B] = require('fs').readFileSync(filePath).toString().split(' ').map(Number);
if (A > B) [A, B] = [B, A];
if (A === B || A+1 === B) console.log(0);
else {
    const result = [];
    for (let i = A+1; i < B; i++) {
        result.push(i);
    }
    console.log(String(result.length));
    console.log(result.join(' '));
}