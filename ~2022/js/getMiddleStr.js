/**
 * 문제: 소문자로 된 문자열이 입력되면 그 단어의 가운데 문자를 출력. 짝수일 경우 가운데 2개의 문자 출력
 * 입력: 문자열 입력. 문자열 길이 >= 100
 * 출력: 가운데 문자열 출력
 */

// my sol
function solution(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);
  return len % 2 === 0 ? console.log(str.substr(mid - 1, 2)) : console.log(str.substr(mid, 1));
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('study'));  // u
console.log(solution('school'));  // ho