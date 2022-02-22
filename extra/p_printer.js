function solution(priorities, location) {
    let max;
    let cnt = 0;
    
    while(true) {
      	max = Math.max.apply(null, priorities);
        let n = priorities.shift();
        
        if (n === max) {
            cnt++;
            if (location === 0) {
                return cnt;
            }
        } else {
            priorities.push(n);
        }
        location--;
        
        if (location == -1) {
            location = priorities.length - 1;
        }
    }
}

// another solution
// function solution(priorities, location) {
//     // 대기열 문서를 내 문서인지 확인하는 boolean isMe와 value를 가진 객체로 변환
//     // map,some 때문에 속도가 느려지기 때문에 풀이 1이 더 나은거 같음.
//     let list = priorities.map((element, index) => ({
//         isMe: index === location,
//         val: element,
//     }));

//     let ranking = 0;

//     while (true) {
//         // 첫 문서를 빼서 자신보다 중요도가 높은 문서가 하나라도 있으면
//         // 대기열 제일 뒤로 보낸다
//         let firstPage = list.shift();
//         if (list.some((element) => element.val > firstPage.val)) {
//             list.push(firstPage);
//         } else {
//             // 없으면 순위를 갱신하고 그 문서가 자신인지 확인한다.
//             // 자신이 맞으면 순위를 return
//             ranking++;
//             if (firstPage.isMe) return ranking;
//         }
//     }
// }


// testCase
console.log(solution([2, 1, 3, 2], 2));             // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0));       // 5