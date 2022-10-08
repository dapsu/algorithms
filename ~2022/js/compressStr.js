/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
// function solution() {
  
// }

// ref sol
function solution(s) {
  let answer = '';
  let count = 1;
  s = s+ ' ';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1]) count++;
    else {
      answer += s[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

// testCase
console.log(solution('KKHSSSSSSSE'));  // K2HS7E