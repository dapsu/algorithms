// https://programmers.co.kr/learn/courses/30/lessons/42895

const solution = (N, number) => {
    const numSet = [new Set()];
    
    for (let i = 1; i <= 8; i++) {
        numSet.push(new Set([parseInt(String(N).repeat(i))]));
        for (let j = 0; j < i; j++) {
            for (const num1 of numSet[j]) {
                for (const num2 of numSet[i-j]) {
                    numSet[i].add(num1 + num2);
                    numSet[i].add(num1 - num2);
                    numSet[i].add(num1 * num2);
                    numSet[i].add(parseInt(num1 / num2));
                }
            }
        }

        if (numSet[i].has(number)) return i;
    }
    return -1;
};


// testCase
console.log(solution(5, 12));     // 4
console.log(solution(2, 11));     // 3