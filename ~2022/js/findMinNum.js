/**
 * 문제: 7개의 수가 주어지면 그 숫자 중 가장 작은 수 구하시오.
 */

// my sol
function solution(num1, num2, num3, num4, num5, num6, num7) {
  return Math.min(num1, num2, num3, num4, num5, num6, num7);
}

// ref sol
// function solution(num1, num2, num3, num4, num5, num6, num7) {
//   let answer, min = Number.MAX_SAFE_INTEGER;
//   const arr = [num1, num2, num3, num4, num5, num6, num7];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i]; 
//   }
//   answer = min;
//   return answer;
// }

// testCase
console.log(solution(5, 3, 7, 2, 11, 15, 17));  // 2
console.log(solution());  // 