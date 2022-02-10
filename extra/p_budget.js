function solution(d, budget) {
    let result = 0;
    let tmp = 0;

    d.sort((a, b) => a- b);

    for (const a of d) {
        tmp += a;
        if (tmp > budget) {
            tmp -= a;
            break;
        }
        result += 1;
    }

    return result;
}


// testCase
console.log(solution([1,3,2,5,4], 9));      // 3
console.log(solution([2,2,3,3], 10));      // 4