/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(str) {
  return [...str].filter(v => !isNaN(v)).join('');
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('gOen2T0s8eSoft'));  // 208