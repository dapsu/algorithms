/**
 * 삼각형 성립 조건: a, b, c 중 c가 가장 긴 변일 때 a + b > c
 */

// my sol
function solution(a, b, c) {
  let maxNum = Math.max(a, b, c);
  let sumRestNums = a + b + c - maxNum;
  return sumRestNums > maxNum ? 'YES' : 'NO';
}

// ref sol
// function solution(a, b, c) {
//   let answer = 'YES', max;
//   let sum = a+b+c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if ((sum - max) <= max) answer = 'NO';
//   return answer;
// }

// testCase
console.log(solution(6, 7, 11));  // YES
console.log(solution(3, 5, 7));   // YES
console.log(solution(3, 5, 10));  // NO
console.log(solution(13, 33, 17));  // NO