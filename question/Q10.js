// 완전탐색. 더 효율적인 방안 생각해보자
const primeNum = (num) => {
    for (let i=2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const combinations = (arr, num) => {
    const result = [];

    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const reCombinations = combinations(rest, num-1);
        const attached = reCombinations.map(combi => [fixed, ...combi]);
        result.push(...attached);
    });

    return result;
};

function solution(nums) {
    result = 0;
    const selectThreeNums = [];

    selectThreeNums.push(...combinations(nums, 3));
    
    selectThreeNums.forEach(arr => {
        const sum = arr.reduce((a, b) => a+b);
        if (primeNum(sum)) result++;
    });

    return result;
}


// testCase
console.log(solution([1, 2, 3, 4]));       // 1
console.log(solution([1, 2, 7, 6, 4]));    // 4