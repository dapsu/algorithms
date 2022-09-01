// https://programmers.co.kr/learn/courses/30/lessons/12923

const getMultiple = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && num / i <= 1e7) return num / i;
    }
    return 1;
}

const solution = (begin, end) => {
    const arr = Array(end - begin + 1).fill(0);
    for (let i = begin; i <= end; i++) {
        arr[i-begin] = getMultiple(i);

    }
    
    if (begin === 1) arr[0] = 0; 
    
    return arr;
};


// testCase
console.log(solution(1, 10));       // [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]