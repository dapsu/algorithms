/**
 * 문제: 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력
 * 입력: 문자열 입력
 * 출력: 바뀐 단어 출력
 */

// my sol
function solution(word) {
  return word.replace(/A/g, '#');
}

// ref sol
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

// testCase
console.log(solution('BANANA'));  // B#B#B#
// console.log(solution());  // 