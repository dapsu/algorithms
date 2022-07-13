function solution(n, info) {
  let result = Array(11).fill(0);
  let max = 0;

  const recur = (apeachScore, ryanScore, usedArrow, idx, scoreBoard) => {
    if (usedArrow > n) return;  // 사용한 화살의 수가 전체 화살 수보다 많은 경우 리턴

    // 모든 포인트 인덱스를 탐색한 경우
    if (idx > 10) {
      let diff = ryanScore - apeachScore;
      // 아파치와 라이언의 점수 차이가 max보다 큰 경우
      if (diff > max) {
        scoreBoard[10] = n - usedArrow;
        max = diff;
        result = scoreBoard;
      }
      return;
    }

    // 라이언이 점수 획득하는 경우
    if (n > usedArrow) {
      let tmp = [...scoreBoard];
      tmp[10 - idx] = info[10 - idx] + 1;
      recur(apeachScore, ryanScore + idx, usedArrow + info[10 - idx] + 1, idx + 1, tmp);
    }

    // 어피치가 점수 획득하는 경우
    if (info[10 - idx] > 0) {
      recur(apeachScore + idx, ryanScore, usedArrow, idx + 1, scoreBoard);
    }
    // 둘 다 점수를 획득하지 않는 경우 인덱스만 이동
    else {
      recur(apeachScore, ryanScore, usedArrow, idx + 1, scoreBoard);
    }
  };

  recur(0, 0, 0, 0, result);

  return max <= 0 ? [-1] : result;
}


// testCase
console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));  // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));  // [-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));  // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));  // [1,1,1,1,1,1,1,1,0,0,2]