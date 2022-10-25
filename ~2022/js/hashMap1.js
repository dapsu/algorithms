/**
 * 문제: 학급 회장 선출, 기호 A, B, C, D, E 후보 등록. 어떤 기호의 후보가 선출되었는지 출력
 * 입력: 첫 째 줄 N(5<=N<=50), 다음 줄에는 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력
 * 출력: 
 */

// my sol
function solution(n, arr) {
  const obj = {};
  for (const i of [...arr[0]]) {
    if (!obj[i]) obj[i] = 1;
    else obj[i]++;
  }
  const sortObj = Object.entries(obj)
    .sort(([, a], [, b]) => b - a);
  console.log(sortObj);
  return sortObj[0][0];
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution(15, ['BACBACCACCBDEDE']));  // C