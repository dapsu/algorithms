// https://programmers.co.kr/learn/courses/30/lessons/12936

// 시간 초과
// const permutations = (arr, num) => {
//     const result = [];
//     if (num === 1) return arr.map(v => [v]);
//     arr.forEach((fixed, idx, origin) => {
//         const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
//         const rePermutations = permutations(rest, num-1);
//         const attached = rePermutations.map(combi => [fixed, ...combi]);
//         result.push(...attached);
//     });
//     return result;
// }

// const solution = (n, k) => {
//     const arr = Array(n).fill().map((_, i) => i+1);
//     return permutations(arr, n)[k-1];
// }


const solution = (n, k) => {
    const result = [];
    let arr = Array(n).fill().map((_, i) => i+1);
    let factorial = arr.reduce((prev, cur) => prev * cur);  // arr의 순열의 경우의 수가 몇 개인지
    let pivot = k-1;

    while (result.length < n) {
        factorial = Math.floor(factorial / arr.length);     // n-1까지 경우의 수
        const target = arr[Math.floor(pivot / factorial)];
        result.push(target);
        pivot %= factorial;
        arr = arr.filter(v => v !== target);
    }
    return result;
}

// testCase
console.log(solution(3, 5));    // [3,1,2]