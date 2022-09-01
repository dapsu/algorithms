function solution(left, right) {
    let result = 0;
    
    for (let num = left; num <= right; num++) {
        let arr = new Array(num).fill(0);
        arr.map((v, i) => arr[i] = i+1);
        cnt = arr.filter(elem => !(num % elem)).length;
        
        if (cnt % 2 === 0) result += num;
        else result -= num;
    }
    
    return result;
}

console.log(solution(13, 17));      // 43
console.log(solution(24, 27));      // 52