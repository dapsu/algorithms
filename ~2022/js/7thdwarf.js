/**
 * 문제: 일곱 난쟁이의 키의 합이 100이 됨. 아홉의 난쟁이 중 진짜 일곱 난쟁이만 출력
 * 입력: 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어짐. 키는 100을 넘지 않는 자연수이며, 모든 난쟁이의 키는 다르며 가능한 정답이 여러 가지인 경우 아무거나 출력
 * 출력: 입력된 순서대로 난쟁이의 키 출력
 */

// my sol
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i+1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));  // 20 7 23 19 10 8 13
// console.log(solution());  // 