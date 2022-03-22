const pythgorean = (a, b) => {
    return Math.sqrt(a**2 + b**2);
};

function solution(b){
    let result = -1;

    for (let a = 1; a <= b; a++) {
        if (Number.isInteger(pythgorean(a, b))) {
            result = pythgorean(a, b);
            break;
        }
    }

    return result;
}


// testCase
console.log(solution(4));     // 5
console.log(solution(12));     // 13
console.log(solution(5));     // -1