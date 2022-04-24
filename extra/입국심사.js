// https://programmers.co.kr/learn/courses/30/lessons/43238

const solution = (n, times) => {
    times.sort((a, b) => a - b);

    let left = 0;
    let right = times[times.length-1] * n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const pivot = times.reduce((res, cur) => res + Math.floor(mid/cur), 0);
        if (pivot >= n) right = mid -1;
        else left = mid + 1;
    }
    return left;
};


// testCase
console.log(solution(6, [7, 10]));      // 28