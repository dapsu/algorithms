// https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

const solution = (n, results) => {
    let result = 0;
    const isWin = Array(n).fill().map(v => Array(n).fill(false));

    results.forEach(([winner, loser]) => {
        isWin[winner-1][loser-1] = true;
    });

    for (let mid = 0; mid < isWin.length; mid++) {
        for (let i = 0; i < isWin.length; i++) {
            for (let j = 0; j < isWin.length; j++) { 
                if (isWin[i][mid] && isWin[mid][j]) isWin[i][j] = true;
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (isWin[i][j] || isWin[j][i]) count++;
        }
        if (n-1 === count) result++;
    }

    return result;
};


// testCase
console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));     // 2