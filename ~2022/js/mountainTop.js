/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

// my sol
function solution(arr) {
  let answer = 0;
  const len = arr.length;
  const move = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = false;
      for (const [dx, dy] of move) {
        let nx = i + dx;
        let ny = j + dy;
        if (nx >= 0 && nx < len && ny >= 0 && ny < len && arr[nx][ny] >= arr[i][j]) {
          flag = true;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(arr));  // 10