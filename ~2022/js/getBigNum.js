/**
 * 문제: N (1 <= N <= 100)의 정수를 입력 받아 자신의 바로 앞 수보다 큰 수만 출력
 * 입력: 첫 줄에 자연수 N, 그 다음 줄에 N개의 정수 주어짐
 * 출력: 자신의 바로 앞 수보다 큰 수만 한 줄로 출력
 */

// my sol
function solution(n, arr) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      answer.push(arr[i]);
      continue;
    }
    if (arr[i-1] < arr[i]) answer.push(arr[i]);
  }
  return answer.join(' ');
}

// ref sol
// function solution(n, arr) {

// }

// testCase
console.log(solution(6, [7, 3, 9, 5, 6, 12]));  // 7 9 6 12