/**
 * Q1. Input을 Output으로 바뀌도록 해라.
 * 1112222233 => 132532
 * 3333449 => 344291
 */

// const solution = (num) => {
//     let result = '';
//     num = String(num);
//     const arr = [...num];
    
//     const set = new Set(arr);
//     set.forEach(e => {
//         result += e;
//         result += arr.filter(v => v === e).length;
//     })

//     return result;
// }

/**
 * Q2. 더 나아가 다음 조건도 만족시키도록 보완해라.
 * 1144444111 => 124513
 */
const solution = (num) => {
    let result = '';
    num = String(num);
    const arr = [...num];
    let count = 0;
    let tmp = '';

    for (const [i, v] of arr.entries()) {
        if (i === 0) {
            tmp = v;
            result += v;
        }

        if (tmp !== v) {
            tmp = v;
            result += count;
            result += v;
            count = 0;
        }

        if (tmp === v) count += 1;

        if (i === arr.length-1) result += count;
    }

    return result;
};


// testCase
console.log(solution(1112222233));      // 132532
console.log(solution(3333449));         // 344291
console.log(solution(1144444111));      // 124513