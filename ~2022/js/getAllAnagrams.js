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
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

// testCase
console.log(solution('bacaAacba', 'abc'));  // 3