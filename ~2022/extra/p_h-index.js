// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    let result = 0;

    citations.sort((a, b) => b - a);

    for (const [idx, val] of citations.entries()) {
        if (idx < val) result++;
    }

    return result;
}


// testCase
console.log(solution([3, 0, 6, 1, 5]));     // 3