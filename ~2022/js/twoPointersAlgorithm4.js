/**
 * 문제: 주어진 N개의 수로 이루어진 수열에서 연속 부분수열의 합이 특정숫자 M 이하가 되는 경우가 몇 번 있는지 구하라.
 * 입력: 
 * 출력: 
 */

// ref sol
function solution(n, m, arr) {
  let answer = 0, sum = 0, lt = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += (rt - lt + 1);
  }
  return answer;
}

// testCase
console.log(solution(5, 5, [1, 3, 1, 2, 3]));  // 10