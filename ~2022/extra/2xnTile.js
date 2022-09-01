// https://programmers.co.kr/learn/courses/30/lessons/12900

// 시간초과?
const solution = (n) => {
    const dp = Array(n+1).fill(0);

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < n+1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }

    return dp[n];
};


// testCase
console.log(solution(4));   // 5