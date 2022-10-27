/**
 * 문제: Anagram? 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하는 단어
 * 예시: AbaAeCea와 baeeACA는 알파벳 나열 순서는 다르지만 A: 2, a: 1, b: 1, c: 1, e: 2로 알파벳과 그 개수가 모두 일치
 * 입력: 첫 줄에 첫 번째 단어, 두 번째 줄에 두 번째 단여 입력. 단어 길이 < 100
 * 출력: 아나그램? YES : NO
 */

// my sol
// function solution(word1, word2) {

// }

// ref sol
function solution(str1, str2) {
  let answer = 'YES';
  let hash = new Map();
  for (let i of str1) {
    if (hash.has(i)) hash.set(i, hash.get(i)+1);
    else hash.set(i, 1);
  }
  for (let i of str2) {
    if (!hash.has(i) || hash.get(i) === 0)   return 'NO';
    hash.set(i, hash.get(i)-1);
  }
  return answer;
}

// testCase
console.log(solution("AbaAeCea", "baeaACA"));  // YES
console.log(solution("abaCC", "Caaab"));  // NO