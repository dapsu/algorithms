/**
 * 문제: N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램 작성
 * 입력: 첫 줄에 N개의 자연수 주어짐(3 <= N <= 30) 두 번째 줄부터 N개의 문자열 주어짐 (문자열 길이 <= 100)
 * 출력: 첫 줄부터 중복이 제거된 문자열 차례대로 출력
 */

// my sol
function solution(N, arr) {
  const answer = [];
  arr.forEach(word => {
    if (!answer.includes(word)) answer.push(word);
  });
  return answer.join('\n');
}

// ref sol
function solution(n, s) {
  let answer;
  answer = s.filter((v, i) => s.indexOf(v) === i);
  return answer.join('\n');
}

// testCase
console.log(solution(5, ['good', 'time', 'good', 'time', 'student']));  // good time student