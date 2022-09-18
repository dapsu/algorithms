/**
 * 문제: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력
 * 입력: 첫 줄에 문자열 입력
 * 출력: 첫 줄에 대문자로 통일된 문자 출력
 */

// my sol
function solution(str) {
  return str.toUpperCase();
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('ItisTimeToStudy'));  // ITISTIMETOSTUDY
// console.log(solution());  // 