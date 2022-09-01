function solution(n) {
    let result = 0;
    let [idx, nine] = [1, 9];

    while (n > idx*nine) {
        n -= (idx * nine);
        result += nine;
        idx++;
        nine *= 10;
    }
    
    result = String(result + 1 + Math.floor((n - 1) / idx));
    // console.log(result);
    return Number(result[(n-1)%idx]);
}

// testCase
console.log(solution(5));       // 5
console.log(solution(8));       // 8
console.log(solution(15));      // 2
console.log(solution(10));      // 1
console.log(solution(11));      // 0
console.log(solution(12));      // 1
console.log(solution(189));      // 9
console.log(solution(190));      // 1
console.log(solution(191));      // 0
console.log(solution(192));      // 0
console.log(solution(193));      // 1