// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
    let result = "";
    let str = "";
    let ptr = 0;
    while (str.length <= t*m) {
        const prevStr = ptr.toString(n);
        str += prevStr;
        ptr++;
    }

    for (let i = 0; i < str.length; i++) {
        if (result.length === t) break;
        if ((i+1) % m === p || ((i+1) % m === 0 && m === p)) result += str[i];
    }
    return result.toUpperCase();
}


// testCase
console.log(solution(2, 4, 2, 1));    // "0111"
console.log(solution(16, 16, 2, 1));    // "02468ACE11111111"
console.log(solution(16, 16, 2, 2));    // "13579BDF01234567"