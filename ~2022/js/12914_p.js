// https://school.programmers.co.kr/learn/courses/30/lessons/12914


function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
  }
  return dp[n];
}


// testCase
console.log(solution(4));   // 5
console.log(solution(3));   // 3