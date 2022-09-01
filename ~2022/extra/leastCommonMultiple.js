// https://programmers.co.kr/learn/courses/30/lessons/12953

const makeGcd = (m, n) => {
    const tmp = m % n;
    if (tmp === 0) return n;
    return makeGcd(n, tmp);
};

const makeLcm = (m, n) => {
    return (m*n) / makeGcd(m, n);
}

const solution = (arr) => {
    let result = 1;
    arr.forEach(num => {
        result = makeLcm(result, num);
    });
    return result;
}


// tsetCase
console.log(solution([2,6,8,14]));      // 168
console.log(solution([1,2,3]));         // 6