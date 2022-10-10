/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(N, arr) {
  let sum = Number.MIN_SAFE_INTEGER;
  let maxNum = Number.MIN_SAFE_INTEGER;
  arr.forEach(num => {
    let tmp = [...num.toString()]
      .map(Number)
      .reduce((a, b) => a + b, 0);
    if (tmp > sum) {
      sum = tmp;
      maxNum = num;
    }
    else if (tmp === sum) {
      maxNum = Math.max(maxNum, num);
    }
  });
  return maxNum;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));  // 137