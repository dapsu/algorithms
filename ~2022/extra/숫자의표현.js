// https://programmers.co.kr/learn/courses/30/lessons/12924

// 2개 시간 초과
// function solution(n) {
//     let result = 1;
//     let ptr = 0;
//     while (++ptr < n) {
//         let value = 0;
//         for (let i = ptr; i<n; i++) {
//             let tmp = value + i;
//             if (tmp <= n) {
//                 value += i;
//                 if ( value === n) {
//                     result++;
//                     continue;
//                 }    
//             }
//             else break;
//         }
//     }
//     return result;
// }


// 다른 사람 풀이
function solution(n) {
    let answer = 0;
    
    for(let i = 0; i <= n; i++) {
        if(n%i === 0 && i%2 === 1) answer++;
    }
    
    return answer;
}
// "주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다."


// testCase
console.log(solution(15));      // 4