// 효율성 테스트 다 시간 초과.. 후...
const sumElem = (arr, i, k) => {
    return arr.slice(i, i+k).reduce((a, b) => a+b);
}

function solution(estimates, k) {
    let max = 0;
    for (let i = 0; i <= estimates.length-k; i++) {
        max = max > sumElem(estimates, i, k) ? max : sumElem(estimates, i, k);
    }
    return max;
}


// testCase
console.log(solution([5, 1, 9, 8, 10, 5], 3));      // 27
console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6));      // 29