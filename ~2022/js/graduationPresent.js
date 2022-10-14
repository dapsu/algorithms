/**
 * 문제: 상품 하나 50% 할인 가능
 * 입력: 첫 째 줄은 학생수 N(1<=N<=1000), 예산 M(1<=M<=100,000,000), 둘 째 줄은 학생들이 받고 싶은 상품의 가격과 배송비(각각 100,000 이하)
 * 출력: 현재 예산으로 선물할 수 있는 최대 학생 수 출력
 */

const arr = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

// my sol
function solution(arr) {
  
}

// ref sol
function solution(arr) {
  const [n, m] = arr.shift();
  let answer = 0;
  arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0]/2 + arr[i][1]);
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && (arr[j][0] + arr[j][1]) > money) break;
      if (j !== i && (arr[j][0] + arr[j][1]) <= money) {
        money -= (arr[j][0] + arr[j][1]);
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

// testCase
console.log(solution(arr));  // 4