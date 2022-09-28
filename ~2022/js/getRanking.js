/**
 * 문제: N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
 * 입력: 철 줄에 N(3<=N<=1000) 입력, 두 벌째 줄어 국어 점수 N개의 정수 입력. 같은 점수 입력될 경우 높은 등수로 동일 처리
 * 출력: 입력된 순서대로 등수 출력
 */

// my sol
function solution(n, arr) {
  const answer = [];
  const sortArr = [...arr].sort((a, b) => b - a);
  arr.forEach(v => {
    let rank = sortArr.indexOf(v) + 1;
    answer.push(rank);
  });
  return answer.join('\n');
}

// ref sol - dp
function solution(n, arr) {
  let answer = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// testCase
console.log(solution(5, [87, 89, 92, 100, 76]));  // 4 3 2 1 5
console.log(solution(5, [92, 92, 92, 100, 76]));  // 2 2 2 1 5