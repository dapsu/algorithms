/**
 * 문제: 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램 작성
 * 입력: 첫 줄에 정수 N이 입력. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어짐
 * 출력: 선생님이 볼 수 있는 최대 학생 수 출력  
 */

// my sol
function solution(N, arr) {
  let answer = 0;
  let pivot = Number.MIN_SAFE_INTEGER;
  arr.forEach(student => {
    if (student > pivot) {
      answer++;
      pivot = student;
    }
  });
  return answer;
}

// ref sol
function solution(N, arr) {
  let answer = 1, max = arr[0];
  for (let i = 1; i < N; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

// testCase
console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));  // 5