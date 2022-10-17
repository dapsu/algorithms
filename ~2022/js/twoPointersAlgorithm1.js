/**
 * 문제: 오름차순으로 정렬 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력
 * 입력: 
 * 출력: 
 */

// my sol - NlogN
function solution(arr1, arr2) {
  arr1.push(...arr2);
  return arr1.sort((a, b) => a - b);
}

// ref sol
function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

// testCase
console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));  // 1 2 3 3 5 6 7 9