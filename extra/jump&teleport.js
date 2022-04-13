// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
    let result = 0;

    while (n > 0) {
        if (n%2) {
            n -= 1;
            result++;
        }
        else n = n/2;
    }

    return result;
}


// testCase
console.log(solution(5))    // 2
console.log(solution(6))    // 2
console.log(solution(5000));    // 5