/**
 * 문제: 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행 금지
 * 입력: 첫 줄에는 날짜의 일의 자리 숫자, 두 번째 줄에는 7대 자동차 번호의 끝 두 자리 수
 * 출력: 10부제를 위반하는 자동차 차량의 대수 출력
 */

// my sol
function solution(dayNum, carNums) {
  return carNums.filter(car => car % 10 === dayNum).length;
}

// ref sol
// function solution(day, arr) {
//   let answer = 0;
//   for (const x of arr) {
//     if (x % 10 === day) answer++;
//   }
//   return answer;
// }

// testCase
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));  // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));  // 3