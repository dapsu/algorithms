/**
 * 문제: 입력된 문자열에서 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력
 * 입력: 
 * 출력: 
 */

// my sol
function solution(str) {
  const stack = [];
  for (const i of str) {
    if (i === ')') {
      while (true) {
        if (stack.length < 1) break;
        const target = stack.pop();
        if (target !== '(') {
          continue;
        }
        break;
      }
    }
    else stack.push(i);
  }
  return stack.join('');
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));  // EFLM