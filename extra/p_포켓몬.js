// const combinations = function(arr, selectNum) {
//     const res = [];
//     if (selectNum === 1) return arr.map(value => [value]);

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index+1);
//         const reCombinations = combinations(rest, selectNum-1);
//         const attached = reCombinations.map(combi => [fixed, ...combi]);
//         res.push(...attached);
//     });
//     return res;
// }

// function solution(nums) {
//     let combi = combinations(nums, nums.length/2);
//     let arr = [];
//     combi.map(elem => {
//         let tmp = new Set(elem).size;
//         arr.push(tmp);
//     });
//     let max = 0;
//     for (const elem of arr) {
//         if (elem > max ? max = elem : max);
//     }
//     return max;
// }
/** 런타임 에러? 조합 재귀돌 때 깊이 문제 때문인가 */

function solution(nums) {
    const getSet = [...new Set(nums)];
    const maxLen = nums.length/2;
    let res = getSet.length <= maxLen ? getSet.length : maxLen; 
    return res;
}


// testCase
console.log(solution([3,1,2,3]));   // 2
console.log(solution([3,3,3,2,2,4]));   // 3
console.log(solution([3,3,3,2,2,2]));   // 2