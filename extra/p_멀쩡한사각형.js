// https://programmers.co.kr/learn/courses/30/lessons/62048

// 최대공약수 만드는 함수
const makeGcd = (m, n) => {
    const tmp = m % n;
    if (tmp === 0) return n;

    return makeGcd(n, tmp);
};

function solution(w, h) {
    // 예외처리: 가로, 세로 중 하나라도 길이가 1cm면 정사각형을 만들 수 없다.
    if (w === 1 || h === 1) return 0;

    const gcd = makeGcd(w, h);

    return (w * h) - (w + h - gcd);
}


// testCase
console.log(solution(8, 12));   // 80