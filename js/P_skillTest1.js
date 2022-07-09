function solution(n) {
    const num = [...String(n)];
    return num.reduce((pre, cur) => Number(pre) + Number(cur), 0);
}


// testCase
console.log(solution(123));   // 6
console.log(solution(987));   // 24