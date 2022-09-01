// https://www.acmicpc.net/problem/1764

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const [N, M] = input.shift().split(' ');
const neverHeard = input.splice(0, N);

const binarySearch = (arr, name) => {
    let [left, right] = [0, arr.length-1];
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid] > name) right = mid - 1;
        else if (arr[mid] < name) left = mid + 1;
        else return true;
    }
    return false;
};

neverHeard.sort();
const result = input.filter(name => binarySearch(neverHeard, name));

console.log(result.length);
console.log(result.join('\n'));