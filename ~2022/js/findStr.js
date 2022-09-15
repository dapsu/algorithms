/**
 * 문제: 입력 받은 문자열 중 특정 문자를 입력 받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 탐색
 * 입력: 첫 줄에 문자열, 두 번째 줄에 문자 주어짐
 * 출력: 첫 줄에 해당 문자의 개수 출력
 */

// my sol
function solution(str, target) {
  return [...str].filter(v => v === target).length;
}

// ref sol
// function solution(s, t) {
//   let answer = s.split(t).length;
//   return answer - 1;
// }

// testCase
console.log(solution('COMPUTERPROGRAMMING', 'R'));  // 3
// console.log(solution());  // 