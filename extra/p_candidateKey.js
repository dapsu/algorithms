// https://programmers.co.kr/learn/courses/30/lessons/42890

// 조합: 후보키 식별을 위해 모든 컬럼 합들에 대해 완전탐색
const combinations = (arr, num) => {
    const result = [];

    if (num === 1) return arr.map(elem => [elem]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const reCom = combinations(rest, num-1);
        const attached = reCom.map(com => [fixed, ...com]);
        result.push(...attached);
    });

    return result;
}

const isUnique = (tuple) => {
    const tmp = tuple.map((val) => val.join(""));
    const set = new Set(tmp);
    // tmp와 set의 길이가 같다면 겹치는 부분이 없기 때문에 유니크. 그러므로 true 반환
    return tmp.length === set.size ? true : false;
}


function solution(relation) {
    let result = 0;

    const colLength = relation[0].length;
    let colIndexes = new Array(colLength).fill().map((_, i) => i);     // 컬럼들 모든 조합 구하기

    // 컬럼의 모든 조합의 경우의 수 구하기
    let colCombinations = [];
    for (let i = 1; i <= colLength; i++) {
        colCombinations.push(...combinations(colIndexes, i));
    }

    // colCombinations 조합에 맞게 로우의 정보들 취합해보기
    while (colCombinations.length > 0) {
        const columns = colCombinations.shift();
        // 컬럼의 경우의 수에 맞춰 컬럼의 값들만 취합
        const getCols = relation.map((row) => columns.map((col) => row[col]));
        
        if (isUnique(getCols)) {
            result++;

            // 모든 컬럼의 조합의 경우의 수에서 유일성을 가지는 컬럼들의 조합만 추리기
            const tmp = [];
            for (const [i, v] of colCombinations.entries()) {
                columns.map((col) => {
                    if (!colCombinations[i].includes(col)) tmp.push(colCombinations[i]);
                });
            }

            colCombinations = tmp;
        }
        else continue;
    }

    return result;
}


// testCase
console.log(solution([["100","ryan","music","2"],
                      ["200","apeach","math","2"],
                      ["300","tube","computer","3"],
                      ["400","con","computer","4"],
                      ["500","muzi","music","3"],
                      ["600","apeach","music","2"]]));      // 2