/**
 * 문제: N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성
 * 입력: 첫 줄에 자연수 N이 주어짐( 3<= N <= 30), 두 번째 줄부터 N개의 문자열 주어짐. 문자의 길이 <= 100
 * 출력: 첫 줄에 가장 긴 문자열 출력
 */

// my sol
function solution(N, arr) {
  let answer = '';
  arr.forEach(str => {
    answer = str.length > answer.length ? str : answer;
  });
  return answer;
}

// ref sol
// function solution(N, arr) {
//   let answer, max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     if (x.length > max) {
//       answer = x;
//       max = x.length;
//     }
//   }
//   return answer;
// }

// testCase
console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));  // beautiful