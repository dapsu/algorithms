const permutations = (len) => {
    const result = [];

    if (len === 1) return [["+"], ["-"]];

    const rePermutations = permutations(len-1);

    while (rePermutations.length > 0) {
        const permu = rePermutations.shift();
        result.push(["+", ...permu]);
        result.push(["-", ...permu]);
    }
    return result;
}

function solution(numbers) {
    let result = 0;

    const operations = permutations(numbers.length);
    
    while (operations.length > 0) {
        let operation = operations.pop();
        let sum = numbers.map((num, i)=> Number(operation[i]+1) * num);
        if (!sum.reduce((a, b) => a+b)) result++;
    }

    return result;
}


// testCase
console.log(solution([1, 1, 1, 1]));        // 6
console.log(solution([8, 3, 5, 7, 3, 4]));        // 6

