/**
 * 문제: 괄호 입력되면 올바른 괄호면 'YES', 올바르지 않으면 'NO' 출력
 * 입력: 괄호 문자열 입력. 최대 길이 30
 * 출력: YES / NO
 */

// my sol
function solution(str) {
  const stack = [];
  for (const i of str) {
    if (i === "(") stack.push(i);
    else {
      if (!stack.length) return "NO";
      stack.pop();
    }
  }
  if (stack.length) return "NO";
  return "YES";
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('(()(()))(()'));  // NO