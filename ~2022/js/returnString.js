/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(str) {
  str = str.toLowerCase();
  let reverseStr = [...str].reverse().join('');
  return str === reverseStr ? 'YES' : 'NO';
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('gooG'));  // YES