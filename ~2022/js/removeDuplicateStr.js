/**
 * 문제: 소문자로 된 한 개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램 작성. 제거된 문자열의 각 문자는 원래 문자열의 순서 유지
 * 입력: 첫 줄에 문자열 입력
 * 출력: 처 줄에 중복문자가 제거된 문자열 출력
 */

// my sol
function solution(str) {
  let answer = [];
  for (const i of str) {
    if (!answer.includes(i)) answer.push(i);
  }
  return answer.join('');
}

// ref sol
function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

// testCase
console.log(solution('ksekkset'));  // kset