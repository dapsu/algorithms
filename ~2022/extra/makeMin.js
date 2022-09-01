// https://programmers.co.kr/learn/courses/30/lessons/12941

const solution = (A, B) => {
    let result = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    while (A.length > 0) {
        const aMin = A.shift();
        const bMax = B.pop();
        result += aMin*bMax;
    }

    return result;
}

// testCase
console.log(solution([1,4,2], [5,4,4]));    // 29
console.log(solution([1,2], [3,4]));        // 10