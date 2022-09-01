// function solution(participant, completion) {
//     let loser;

//     participant.sort();
//     completion.sort();

//     while (completion) {
//         if (participant[0] === completion[0]) {
//             participant.shift();
//             completion.shift();
//         }
//         else {
//             break;
//         }
//     }
//     loser = participant[0];
//     return loser;
// }

//############## 정확성은 문제 없지만 시간 초과 ##################################


function solution(participant, completion) {
    let loser;

    participant.sort();
    completion.sort();

    for (let i=0; participant.length; i++) {
        if (participant[i] != completion[i]) {   // 인덱스 에러 안뜨네?
            return participant[i];
        }
    }
}



// test case
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));