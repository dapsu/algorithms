// https://programmers.co.kr/learn/courses/30/lessons/42578

// sol.1
// function solution(clothes) {
//     let result = 1;
//     const obj = {};

//     clothes.forEach((wear, idx) => {
//         obj[wear[1]] = (obj[wear[1]] || 1) + 1;
//     });

//     for (const key in obj) {
//         result *= obj[key];
//     }

//     return result - 1;
// }


// sol.2
function solution(clothes) {
    let result = 1;
  
    let table = clothes.reduce((acc, cur) => {
      acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
      return acc;
    }, {});
  
    for (const key in table) {
        result *= table[key] + 1;
    }
  
    return result - 1;
  }


// testCase
console.time();
console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));    // 5
console.timeEnd();

console.time();
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));    // 3
console.timeEnd();