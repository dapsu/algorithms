// 효율성 시간 초과..
// 실패 (signal: aborted (core dumped))??
// function solution(mod1, mod2, max_range) {
//     const arr = [...Array(max_range)].map((v, i) => i+1);
    
//     const result = arr.filter((num) => {
//       if (num % mod1 === 0) return num;
//     }).filter((num) => {
//         if (num % mod2 !== 0) return num;
//     });

//     return result.length;
// }

// 역시 시간초과..
function solution(mod1, mod2, max_range) {
    const arr = [];

    for (let i = 1; i <= max_range; i++) {
        if (i % mod1 === 0) arr.push(i);
    }
    
    return arr.filter((num) => {if (num % mod2 !== 0) return num}).length;
}

// 이놈도 역시 시간 초과...
// function solution(mod1, mod2, max_range) {
//     const arr = [];

//     for (let i = 1; i <= max_range; i++) {
//         if (i % mod1 === 0) arr.push(i);
//     }

//     const result = [];
//     for (const i of arr) {
//         if (i % mod2 !== 0) result.push(i);
//     }
    
//     return result.length;
// }




// testCase
console.log(solution(4, 3, 20));      // 4
console.log(solution(3, 4, 20));      // 5