/**
 * 문제: 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램 작성
 * 입력: 20 이하의 자연수 N
 * 출력: 1부터 N까지의 합 출력
 */

// my sol
function solution(N) {
  return [...Array(N)]
    .map((_, i) => i + 1)
    .reduce((a, b) => a+ b, 0);
}

// ref sol
// function solution(N) {
//   let answer = 0;
//   for (let i = 1; i <= N; i++) {
//     answer += i;
//   }
//   return answer;
// }

// testCase
console.log(solution(6));  // 21
console.log(solution(10));  // 55