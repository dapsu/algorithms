// https://programmers.co.kr/learn/courses/30/lessons/12902

const solution = (n) => {
    const dp = Array(n+1).fill(0);
    dp[2] = 3;
    sum = 0;
    for (let i = 4; i <= n; i++) {
        if (i % 2 !== 0) continue;
        dp[i] = dp[i-2]*3 + 2 + sum;
        sum += dp[i-2]*2;
    }
    return dp[n];
};

console.log(solution(2));       // 3
console.log(solution(4));       // 11
console.log(solution(6));       // 41
console.log(solution(8));       // 153