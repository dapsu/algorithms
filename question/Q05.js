const combinations = function(arr, selectNum) {
    const result = [];

    if (selectNum === 1) {
        return arr.map(value => [value]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const reCombinations = combinations(rest, selectNum-1);
        const attached = reCombinations.map(combination => [fixed, ...combination]);
        result.push(...attached);
    });
    return result;
};

function solution(arr, k, t) {
    let max = [];

    for (let i = k; i <= arr.length; i++) {
        let combiArr = combinations(arr, i);
        combiArr.forEach((combi) => {
            let sum = combi.reduce((a, b) => a + b);
            if (sum <= t) {
                max.push(sum);
            }
        });
    }

    return max.length;
}


// testCase
console.log(solution([2,5,3,8,1], 3, 11));      // 6
console.log(solution([1,1,2,2], 2, 3));      // 5
console.log(solution([1,2,3,2], 2, 2));      // 0