// https://programmers.co.kr/learn/courses/30/lessons/68935

// function solution(n) {
//     let str = "";
//     let result = 0;

//     const makeThree = (num) => {
//         if (num < 3) {
//             str = str + String(num);
//             return;
//         }
//         else {
//             str = str + String(num%3);
//             makeThree(Math.floor(num/3));
//         }
//     };

//     makeThree(n);

//     for (let i = str.length-1; i >= 0; i--) {
//         let tmp = str.length-1-i;
//         if (tmp === 0) result += Number(str[i]);
//         else {
//             let n = Math.pow(3, tmp);
//             result += Number(n * str[i]);
//         }
//     }

//     return result;
// }


// 다른 사람 풀이
const solution = (n) => {
    console.log([...n.toString()]);
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

/** toString(num)
 * 객체를 문자열이 포함된 배열로 반환함.
 * 이때 매개변수로 숫자 입력시, 그 숫자의 진법으로 변환 후 반환
 */


// testCase
console.log(solution(45));      // 7
console.log(solution(125));      // 229