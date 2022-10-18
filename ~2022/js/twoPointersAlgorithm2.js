/**
 * 문제: A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력
 * 입력: 집합 A의 크기 N(1<=, <=30,000), N개의 원소, 집합 B의 크기 M, M개의 원소 주어짐. 각 집합의 원소는 1,000,000,000 이하 자연수
 * 출력: 공통원소 오름차순 정렬하여 출력
 */

// my sol
function solution(N, A, M, B) {
  
}

// ref sol
function solution(N, A, M, B) {
  const answer = [];
  let p1 = p2 = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  while(p1 < N && p2 < M) {
    if (A[p1] === B[p2]) {
      answer.push(A[p1++]);
    }
    else if (A[p1] < B[p2]) p1++;
    else p2++;
  }
  return answer;
}

// testCase
console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]));  // 2 3 5