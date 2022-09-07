/**
 * 문제: 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 n명의 학생 수를 입력하면
 * 필요한 연필의 다스 수를 계산하는 프로그램을 작성하시오.
 * 
 * 입력: 1000 이하의 자연수 n 입력
 * 출력: 필요한 다스 수 출력
 */

// my sol
function solution(n) {
  return Math.ceil(n / 12);
}

// ref sol
// function solution(n) {
//   let answer = Math.ceil(n/12);
//   return answer;
// }

// testCase
console.log(solution(25));  // 3
console.log(solution(178));  // 15
console.log(solution(1));  // 1