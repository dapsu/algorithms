/**
 * 문제: 
 * 입력: 첫 째줄에 N(1<=N<=20), M(1<=M<=10). 두 번째 줄부터 M개의 줄에 걸쳐 수학 테스트 결과가 학생 번호로 주어짐
 * 출력: 짝을 만들 수 있는 총 경우 출력
 */

const arr = [4, 3];
const testResults = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

// my sol
// function solution(arr, testResults) {
//   const [n, m] = arr;
  
// }

// ref sol
function solution(arr, testResults) {
  let answer = 0;
  const [n, m] = arr;
  const tmp = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = pj = 0;
        for (let s = 0; s< n; s++) {
          if (testResults[k][s] === i) pi = s;
          if (testResults[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }
  console.log(tmp);
  return answer;
}

// testCase
console.log(solution(arr, testResults));  // 3