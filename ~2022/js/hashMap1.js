/**
 * 문제: 학급 회장 선출, 기호 A, B, C, D, E 후보 등록. 어떤 기호의 후보가 선출되었는지 출력
 * 입력: 첫 째 줄 N(5<=N<=50), 다음 줄에는 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력
 * 출력: 
 */

// my sol
function solution(n, s) {
  const obj = {};
  for (const i of s) {
    if (!obj[i]) obj[i] = 1;
    else obj[i]++;
  }
  const sortObj = Object.entries(obj)
    .sort(([, a], [, b]) => b - a);
  console.log(sortObj);
  return sortObj[0][0];
}

// ref sol
function solution(n, s) {
  let answer;
  let hashMap = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  for (const i of s) {
    if (hashMap.has(i)) hashMap.set(i, hashMap.get(i) + 1);
    else hashMap.set(i, 1);
  }
  for (let [key, val] of hashMap) {
    console.log(key);
    console.log(val);
    console.log();
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

// testCase
console.log(solution(15, 'BACBACCACCBDEDE'));  // C