// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(
            land[i-1][1],
            land[i-1][2],
            land[i-1][3]
        );
        land[i][1] += Math.max(
            land[i-1][0],
            land[i-1][2],
            land[i-1][3]
        );
        land[i][2] += Math.max(
            land[i-1][0],
            land[i-1][1],
            land[i-1][3]
        );
        land[i][3] += Math.max(
            land[i-1][0],
            land[i-1][1],
            land[i-1][2]
        );
    }

    return Math.max(...land[land.length-1]);
}


// testCase
console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));     // 16