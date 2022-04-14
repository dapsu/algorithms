// https://programmers.co.kr/learn/courses/30/lessons/87390

// 실패 (signal: aborted (core dumped))
// function solution(n, left, right) {
//     let arr = Array(n).fill().map(e => Array(n).fill(null));
    
//     arr[0] = arr[0].map((_, idx) => idx+1);
//     for (let i = 1; i < arr.length; i++) {    
//         for (let j = 0; j < arr.length; j++) {
//             if (j === 0) {
//                 arr[i][j] = arr[i-1][j] + 1;
//                 continue;
//             }
//             if (j <= i) {
//                 arr[i][j] = arr[i][0];
//             }
//             else {
//                 arr[i][j] = arr[i][j-1] + 1;
//             }
//         }
//     }

//     return arr.flat()
//     .slice(left, right+1);
// }


// sol2
function solution(n, left, right) {
    const result = [];

    for (let i = left; i < right+1; i++) {
        result.push(Math.max(parseInt(i/n), i % n) + 1);
    }
    
    return result;
}
/**
 * 모든 배열을 처음에 했던 공식대로 생성하게 되면 10^7차원의 이차원 배열의 크기를 다룰 때 메모리 문제가 발생할 수 밖에 없음. 그러니까 core dump 에러가 발생했고.
 * 배열의 원소에 들어가는 숫자의 규칙은 행+1과 열+1 중 최댓값
 * 예를 들면 arr[1][2]의 값은 3으로, 2와 3중의 최댓값
 * 이 규칙을 기반으로 점화식을 만들면 위의 식과 같음  
 */


// testCase
console.log(solution(3, 2, 5));    // [3,2,2,3]
console.log(solution(4, 7, 14));    // [4,3,3,3,4,4,4,4]
