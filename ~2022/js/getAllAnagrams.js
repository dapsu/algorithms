/**
 * 문제: 
 * 입력: 
 * 출력: 
 */

// my sol
function solution(S, T) {
  const isAnagram = (str1, str2) => {
    let result = true;
    let hash = new Map();
    for (let i of str1) {
      if (hash.has(i)) hash.set(i, hash.get(i)+1);
      else hash.set(i, 1);
    }
    for (let i of str2) {
      if (!hash.has(i) || hash.get(i) === 0)   return false;
      hash.set(i, hash.get(i)-1);
    }
    return result;
  }
  const len = T.length;
  let answer = 0;
  for (let i = 0; i < S.length - len + 1; i++) {
    let tmpStr = S.substring(i, i + len);
    if (isAnagram(tmpStr, T)) answer++;
  }
  return answer;
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution('bacaAacba', 'abc'));  // 3