/**
 * 문제: 
 * 입력: 첫 줄 - N(3<=N<=100), K(1<=K<=50), 다음 줄에 N개의 카드값  
 * 출력: 첫 줄에 K번 째 수 출력, 존재하지 않을 시 -1 출력
 */

// my sol
function solution(input, cards) {
  const [n, k] = input;
  const combinations = function(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map(value => [value]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const reCombinations = combinations(rest, selectNum-1);
        const attached = reCombinations.map(combination => [fixed, ...combination]);
        result.push(...attached);
    });
    return result;
  };
  const answers = combinations(cards, 3)
    .map(v => v.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a);
  return answers[k-1] ? answers[k-1] : -1;
}

// ref sol
function solution(input, cards) {
  const [n, k] = input;
  let answers;
  let tmp = new Set();
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      for (l = j + 1; l < n; l++) {
        tmp.add(cards[i] + cards[j] + cards[l]);
      }
    }
  }
  answers = [...tmp].sort((a, b) => b - a);
  return answers[k-1] ? answers[k-1] : -1;
}

// testCase
console.log(solution([10, 3], [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));  // 143