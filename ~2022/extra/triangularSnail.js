// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
    const result = Array(n).fill().map((v, i) => Array(i+1).fill(0));
    
    let [value, x, y] = [0, -1, 0];

    while ( n > 0) {
        for (let i = 0; i < n; i++) result[++x][y] = ++value;
        for (let i = 0; i < n-1; i++) result[x][++y] = ++value;
        for (let i = 0; i < n-2; i++) result[--x][--y] = ++value;

        n -= 3;
    }

    return result.flat();
}


// testCase
console.log(solution(4));       // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5));       // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6));       // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]