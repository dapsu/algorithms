/**
 * 문제: 주어진 문자열에 알파벳 대문자 몇 개인지 파악
 * 입력: 첫 줄에 문자열 입력
 * 출력: 첫 줄에 대문자 개수 출력
 */

// my sol
function solution(str) {
  return [...str].filter(v => v === v.toUpperCase()).length;
}

// ref sol
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer++;
//   }
//   return answer;
// }

// testCase
console.log(solution('KoreaTimeGood'));  // 3
// console.log(solution());  // 