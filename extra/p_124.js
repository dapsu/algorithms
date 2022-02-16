function solution(n) {
    let result = '';
    const num124 = [4, 1, 2];

    while (n) {
        result = num124[n%3] + result;
        n = (n%3 === 0) ? n/3 -1 : Math.floor(n/3);
    }
    
    return result;
}


// testCase
for (let i = 1; i <= 11; i++) console.log(solution(i));

/**
 * Math.floor()
 * 매개 값의 가장 가까운 정수 반환
 */