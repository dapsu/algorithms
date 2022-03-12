// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) return i;
    }
}


// testCase
console.log(solution(10));      // 3
console.log(solution(12));      // 11