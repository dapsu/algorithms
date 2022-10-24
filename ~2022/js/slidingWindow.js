/**
 * 문제: N일 동안의 매출 기록을 연속 K일 동안 최대 매출액이 얼마인지 구하여라.
 * 예시: N = 10, K = 3, [12, 15 ,11, 20, 25, 10, 20, 19, 13, 15] 중 최대는 11+20+25로 56만 원.
 * 입력: 
 * 출력: 
 */

// my sol
function solution(n, k, arr) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  const sumArr = [];
  for (let i = 0; i < n; i++) {
    if (sumArr.length > k) {
      console.log('!!!Logic Error!!!');
      return 'Logic Error';
    }
    sumArr.push(arr[i]);
    if (sumArr.length < k) continue;
    const sum = sumArr.reduce((a, b) => a + b, 0);
    console.log();
    console.log('sumArr:', sumArr);
    console.log('sum:', sum);
    console.log();
    maxNum = Math.max(maxNum, sum);
    sumArr.shift();
  }
  return maxNum;
}

// ref sol
// function solution(n, k, arr) {
//   let answer, sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];
//   answer = sum;
//   for (let i = k; i < n; i++) {
//     sum += (arr[i] - arr[i - k]);
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }

// testCase
console.log(solution(10, 3, [12, 15 ,11, 20, 25, 10, 20, 19, 13, 15]));  // 56