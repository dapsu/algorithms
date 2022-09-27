/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(n, arr) {
  let answer = 0;
  let pivot = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      pivot++;
      answer += pivot;
    }
    else {
      pivot = 0;
    }
  }
  return answer;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));  // 10