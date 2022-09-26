/**
 * 문제: A, B 가위바위보. A가 이기면 A, B가 이기면 B, 비기면 D 출력. 가위: 1, 바위: 2, 보: 3
 * 입력: 첫쨰 줄에 게임 횟수인 자연수 N(1 <=, <= 100), 두 번째 줄에 A가 낸 정보 N개, 세 번째 줄에 B가 낸 정보 N개
 * 출력: 각 줄에 각 회의 승자 출력
 */

// my sol
function solution(N, A, B) {
  const answer = [];

  for (let i = 0; i < N; i++) {
    if (A[i] === B[i]) {
      answer.push('D');
      continue;
    }
    if (
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 1 && B[i] === 3) ||
      (A[i] === 3 && B[i] === 2)
    ) {
      answer.push('A');
    }
    else answer.push('B');
  }
  return answer.join('\n');
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // A B A B D
