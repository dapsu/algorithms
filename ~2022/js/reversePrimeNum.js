/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

 function getPrimeNum(num) {
  if (num === 1)   return false;
  for (let i=2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

// my sol
function solution(N, arr) {
  let answer = [];
  arr.forEach(num => {
    let reverseNum = parseInt([...num.toString()].reverse().join(''), 10);
    if (getPrimeNum(reverseNum)) answer.push(reverseNum);
  });
  return answer;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));  // 23, 2, 73, 2, 3