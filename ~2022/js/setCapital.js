/**
 * 문제: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자도 모두 통일하여 문자열 출력
 * 입력: 문자열
 * 출력: 대문자로 통일된 문자열
 */

// my sol
function solution(str) {
  return str.toUpperCase();
}

// ref sol
function solution(str) {
  let answer = '';
  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

// testCase
console.log(solution('ItisTimeToStudy'));  // ITISTIMETOSTUDY
// console.log(solution());  // 