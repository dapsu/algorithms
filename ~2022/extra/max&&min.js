// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let result = '';
    s = s.split(' ');
    result += Math.min(...s);
    result += ' ';
    result += Math.max(...s);
    return result;
}


// testCase
console.log(solution("1 2 3 4"));       // "1 4"
console.log(solution("-1 -2 -3 -4"));   // "-4 -1"
console.log(solution("-1 -1"));        // "-1 -1"