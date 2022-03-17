// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let result;
    const totalCount = brown + yellow;
    const rowArr = [];
    const colArr = [];
    
    for (let i = 3; i < totalCount/2; i++) {
        if (totalCount % i === 0) {
            rowArr.push(totalCount / i);
            colArr.push(i);
        }
    }

    const makeRound = (r, c) => {
        return 2*(r+c) - 4;
    };

    const makeResult = (r, c) => {
        let round = makeRound(r, c);
        if (round === brown) return [r, c];
    };

    if (rowArr.length === 1) {
        result = makeResult(...rowArr, ...colArr);
    }
    else {
        for (let i = 0; i < rowArr.length / 2; i++) {
            result = makeResult(rowArr[i], colArr[i]);
        }
    }

    return result;
}


// testCase
console.log(solution(10, 2));       // [4, 3]
console.log(solution(8, 1));       // [3, 3]
console.log(solution(24, 24));       // [8, 6]