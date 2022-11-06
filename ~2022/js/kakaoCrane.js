/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (const num of moves) {
    if (board[board.length - 1][num - 1] === 0) continue;
    for (let i = 0; i < board.length; i++) {
      if (board[i][num - 1] !== 0) {
        stack.push(board[i][num - 1]);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
        board[i][num - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))     // 4