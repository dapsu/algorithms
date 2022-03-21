function solution(n) {
    let dp = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }

    return dp[n] % 1234567; 
}


// testCase
console.log(solution(3));       // 2
console.log(solution(5));       // 5
console.log(solution(9));       // 34
console.log(solution(10));       // 55
console.log(solution(11));       // 89