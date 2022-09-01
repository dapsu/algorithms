// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
    let [zeroCnt, oneCnt] = [0, 0];

    const divArr = (x, y, n) => {
        const pivot = arr[x][y];

        for (let i = x; i < x+n; i++) {
            for (let j = y; j < y+n; j++) {
                if (arr[i][j] !== pivot) {
                    divArr(x, y, n/2);
                    divArr(x + n/2, y, n/2);
                    divArr(x, y + n/2, n/2);
                    divArr(x + n/2, y + n/2, n/2);
                    return;
                }
            }
        }

        pivot === 0 ? zeroCnt++ : oneCnt++;
    }

    divArr(0, 0, arr.length);

    return [zeroCnt, oneCnt];
}


// testCase
console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));    // [4,9]
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],
    [0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]));    // [10, 15]