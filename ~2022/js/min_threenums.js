// my solution
function solution(a, b, c) {
  return Math.min(a, b, c);
}

// ref
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

// testCase
console.log(solution(6, 5, 11));  // 5