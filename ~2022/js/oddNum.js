/**
 * 문제: 7개의 자연수가 주어질 떄 이들 중 홀수인 자연수들을 모두 골라 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램 작성
 * 예시: 12, 77, 38, 41, 53, 92, 85가 주어졌을 때, 홀수는 77, 41, 53, 85이고 합은 256, 최솟값은 41이다.
 * 입력: 첫 번째 줄에 100보다 작은 자연수 7개 주어진다.
 * 출력: 첫째 줄에 홀수들의 합 출력, 둘째 줄에 홀수 중 최솟값 출력
 */

// my sol
function solution(num1, num2, num3, num4, num5, num6, num7) {
  const getOdd = arr => {
    return arr.filter(num => num % 2 !== 0);
  }
  const result = [];
  const arr = [num1, num2, num3, num4, num5, num6, num7];
  const oddNum = getOdd(arr);
  const sum = oddNum.reduce((a, b) => a + b, 0);
  const minNum = Math.min(...oddNum);
  result.push(sum);
  result.push(minNum);
  return result.join('\n').trim();
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(12, 77, 38, 41, 53, 92, 85));  // 
// console.log(solution());  // 