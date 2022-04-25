// https://programmers.co.kr/learn/courses/30/lessons/92342

const solution = (n ,info) => {
    let result = Array(11).fill(0);
    let max = 0;

    const recur = (apeachScore, ryanScore, usedArrow, idx, scoreBoard) => {
        if (usedArrow > n) return;

        if (idx > 10) {
            let diff = ryanScore - apeachScore;
            if (diff > max) {
                scoreBoard[10] = n - usedArrow;
                max = diff;
                result = scoreBoard;
            }
            return;
        }

        if (n > usedArrow) {
            let tmp = [...scoreBoard];
            tmp[10-idx] = info[10-idx] + 1;
            recur(apeachScore, ryanScore + idx, usedArrow + info[10 - idx] + 1, idx + 1, tmp);
        }

        if (info[10-idx] > 0) {
            recur(apeachScore + idx, ryanScore, usedArrow, idx + 1, scoreBoard);
        }
        else {
            recur(apeachScore, ryanScore, usedArrow, idx + 1, scoreBoard);
        }
    };
    
    recur(0, 0, 0, 0, result);

    return max <= 0 ? [-1] : result;
}


// testCase
console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0]));    // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0]));    // [-1]
console.log(solution(9, [0,0,1,2,0,1,1,1,1,1,1]));    // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0,0,0,0,0,0,0,0,3,4,3]));    // [1,1,1,1,1,1,1,1,0,0,2]