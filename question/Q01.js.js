/**
 * Q. Input을 Output으로 바뀌도록 해라.
 * 1112222233 => 132532
 * 3333449 => 344291
 * 1144444111 => 124513
 */

const solution = (num) => {
    let result = '';
    num = String(num);
    const arr = [...num];
    
    const set = new Set(arr);
    set.forEach(e => {
        result += e;
        result += arr.filter(v => v === e).length;
    })

    return result;
}


// testCase
console.log(solution(1112222233));      // 132532
console.log(solution(3333449));         // 344291
console.log(solution(1144444111));      // 12413