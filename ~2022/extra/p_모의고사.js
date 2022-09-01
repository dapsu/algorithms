function solution(answers) {
    let result = [];

    const student1 = [1,2,3,4,5];
    const student2 = [2,1,2,3,2,4,2,5];
    const student3 = [3,3,1,1,2,2,4,4,5,5];
    
    let score1 = answers.filter((v, idx) => v === student1[idx%5]).length;
    let score2 = answers.filter((v, idx) => v === student2[idx%8]).length;
    let score3 = answers.filter((v, idx) => v === student3[idx%10]).length;

    let max = Math.max(score1, score2, score3);
    
    if (score1 === max) result.push(1);
    if (score2 === max) result.push(2);
    if (score3 === max) result.push(3);

    return result;
}


// testCase
console.log(solution([1,2,3,4,5]));     // [1]
console.log(solution([1,3,2,4,2]));     // [1,2,3]