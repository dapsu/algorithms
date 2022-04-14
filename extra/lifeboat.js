// https://programmers.co.kr/learn/courses/30/lessons/42885

// 시간 초과
// function solution(people, limit) {
//     let result = 0;

//     people.sort((a, b) => a - b);

//     while (people.length > 0) {
//         result++;
//         let lastPerson = people.pop();

//         for (let i = 0; i < people.length; i++) {
//             if (lastPerson + people[i] <= limit) {
//                 people.splice(i, 1);
//                 break;
//             }
//         }
//     }

//     return result;
// }
/**
 * while문과 for문 이중으로 반복문이 돌아서 시간 초과 뜨는 것 같음
 */


// 통과
function solution(people, limit) {
    let result = 0;

    people.sort((a, b) => b-a);

    for (let i = 0, j = people.length-1; i <= j; i++) {
        if (people[i] + people[j] <= limit) j--;
        result++;
    }

    return result;
}
/**
 * 큰 값이 구명보트에 최소 1인으로 타기 때문에 큰 값을 기준으로 잡아야 정확성에서 에러가 나지 않음
 * for문을 하나로 만들어서 효율성 통과
 */


// testCase
console.log(solution([70, 50, 80, 50], 100));    // 3
console.log(solution([70, 80, 50], 100));    // 3
