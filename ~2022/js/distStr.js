/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(str, target) {
  const len = str.length;
  const dp = Array(len).fill(Number.MAX_SAFE_INTEGER);
  [...str].forEach((s, pivot) => {
    if (s === target) {
      for (let i = 0; i < len; i++) {
        if (dp[i] === s) {
          dp[i] = 0;
          continue;
        }
        dp[i] = Math.min(dp[i], Math.abs(pivot - i));
      }
    }
  });
  return dp.join('\n');
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('teachermode', 'e'));  // 1 0 1 2 1 0 1 2 2 1 0