/**
 * 문제: 주어진 N개의 수로 이루어진 수열에서 연속 부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하라.
 * 예시: N = 8, M = 6이고 수열이 [1, 2, 1, 3, 1, 1, 1, 2]라면 연속 부분 수열은 [2, 1, 3], [1, 3, 1, 1], [3, 1, 1, 1]로 총 3가지
 * 입력: 첫 째줄 N(1<=, <=100,000), M(1<=, <= 100,000,000), 둘 째 줄 수열. 수열의 원소값을 1000을 넘지 않는 자연수
 * 출력: 경우의 수 출력 
 */

// my sol
function solution(n, m, sequence) {
  let answer = 0;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(sequence[i]);
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum === m) {
      answer++;
      arr.shift();
      continue;
    }
    else if (sum > m) {
      while (true) {
        if (sum < m) break;
        sum -= arr.shift();
        if (sum === m) {
          answer++;
          arr.shift();
          break;
        }
      }
    }
    console.log();
  }
  return answer;
}

// ref sol
// function solution(n, m, sequence) {
//   let answer = 0, lt = 0, sum = 0;
//   for (let rt = 0; rt < n; rt++) {
//     sum += sequence[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= sequence[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

// testCase
console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));  // 3