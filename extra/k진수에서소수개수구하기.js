// https://programmers.co.kr/learn/courses/30/lessons/92335

const getPrimeNum = (num) => {
    if (num === 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

function solution(n, k) {
    const result = n.toString(k).split('0');
    return result.filter(num => num !== '' && getPrimeNum(Number(num))).length;
}

// testCase
console.log(solution(437674, 3));   // 3
console.log(solution(110011, 10));  // 2