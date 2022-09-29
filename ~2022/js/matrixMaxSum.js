/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

// my sol
function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let len = arr.length;

  // 행 합
  for (const row of arr) {
    let sum = row.reduce((a, b) => a + b, 0);
    max = max > sum ? max : sum;
  }

  // 열 합
  let sum = 0; 
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      sum = arr[j][i];
    }
    max = max > sum ? max : sum;
  }

  // 대각선 합
  let [sum1, sum2] = [0, 0];
  for (let i = 0; i < len; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][len - i - 1];
  }
  max = Math.max(max, sum1, sum2);
  return max;
}

// ref sol
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1=sum2=0;
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }
//   sum1=sum2=0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n-i-1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   return answer;
// }

// testCase
console.log(solution(arr));  // 155