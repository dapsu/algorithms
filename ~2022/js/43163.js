// https://school.programmers.co.kr/learn/courses/30/lessons/43163

// 두 문자열 인덱스별 비교, 다른 알파벳 개수 반환하는 함수
const compareWords = (str1, str2) => {
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffCount++;
    }
  }
  return diffCount;
};

function solution(begin, target, words) {
  let count = 0;
  
  // words 배열 내에 target 단어가 없다면 0 반환
  if (!words.includes(target)) {
    return count;
  }

  const visited = Array(words.length).fill(false);    // 단어를 체크했는지 파악하는 배열
  const queue = [];
  queue.push([begin, count]);

  // bfs
  while (queue) {
    let [currWord, currCount] = queue.shift();
    // 현재 단어가 target과 같다면 count 반환
    if (currWord === target) {
      return currCount;
    }

    words.forEach((word, idx) => {
      if (visited[idx]) {
        return;
      }
      if (compareWords(currWord, word) === 1) {
        visited[idx] = true;
        queue.push([word, ++currCount]);
      }
    });
  }
}


// testCase
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));    // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));   // 0