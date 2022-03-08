// https://programmers.co.kr/learn/courses/30/lessons/72412

// res.01
// function solution(info, query) {
//     const result = new Array(query.length).fill(0);
//     const applicants = new Map();

//     info.forEach((val, idx) => {
//        const [language, job, career, food, score] = val.split(" ");

//        applicants.set(idx, [language, job, career, food, score]);
//     });

//     query.forEach((val, idx) => {
//         let arr = new Array;
//         const [language, job, career, tmp] = val.split(" and ");
//         const [food, score] = tmp.split(" ");
        
//         arr.push(language, job, career, food, score);
//         applicants.forEach((applicant) => {
//             let count = 0;
//             applicant.forEach((val, i) => {
//                 if (val === arr[i] || arr[i] === "-") count += 1;
//             });

//             if (Number(applicant[4]) > Number(arr[4])) count += 1;
//             if (count === 5) result[idx] += 1;
//         });
//     });
//     return result;
// }
/*
테스트 1 〉	통과 (0.44ms, 29.9MB)
테스트 2 〉	통과 (0.47ms, 30.4MB)
테스트 3 〉	통과 (3.71ms, 32.1MB)
테스트 4 〉	통과 (12.19ms, 34.2MB)
테스트 5 〉	통과 (16.79ms, 33.6MB)
테스트 6 〉	통과 (27.45ms, 33.2MB)
테스트 7 〉	통과 (23.64ms, 34.7MB)
테스트 8 〉	통과 (56.27ms, 35.8MB)
테스트 9 〉	통과 (59.37ms, 36.2MB)
테스트 10 〉	통과 (72.04ms, 36.2MB)
테스트 11 〉	통과 (21.08ms, 34.5MB)
테스트 12 〉	통과 (21.47ms, 34.6MB)
테스트 13 〉	통과 (19.60ms, 33.5MB)
테스트 14 〉	통과 (60.60ms, 34.5MB)
테스트 15 〉	통과 (54.93ms, 34.7MB)
테스트 16 〉	통과 (15.01ms, 34.4MB)
테스트 17 〉	통과 (20.06ms, 33.6MB)
테스트 18 〉	통과 (36.77ms, 34.6MB)
효율성 테스트: 실패
 */

// 다른사람 풀이1: 꼭 문자열로 변환해야 하나?
// 이분 탐색입니다. 해당 값이 어느 인덱스에 있을지를 탐색하여 결과를 반환합니다.
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while(left <= right) {
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
  
      mid = Math.floor((left + right) / 2);
    }
    // 기준이 되는 인덱스는, 여기서 나온 값보다 항상 1이 더 큽니다. 따라서 +1을 해주죠!
    return mid + 1; 
  }
  
  const getInfos = (info) => {
    const infos = {}; // object를 생성해줄 거에요.
    info.forEach(infoString => { // 이제 object에 `info`를 처리해줘야겠죠?!
      const arr = infoString.split(" "); // 먼저 " " 기준으로 string을 분리해줍시다.
      const score = parseInt(arr.pop()); // 정수로 바꿔줄 거에요.
      const key = arr.join(""); // key를 javabackendjuniorpizza와 같은 형태로 해줄 거에요.
      if (infos[key]) infos[key].push(score)
      else infos[key] = [score]; // [150]의 형태로 배열에 점수를 넣어줘요.
    });
    for (const key in infos) {
      // 다 처리된 이후에는 각 키의 점수 배열을 정렬해줍니다.
      // 이건 이분탐색을 위한 거에요.
      infos[key].sort((a, b) => a - b); 
    }
    return infos;
  }
  
  const getResult = (infos, query, score) => {
    // 키들을 배열 형태로 갖고 옵시다.
    const infosKey = Object.keys(infos);
    // 여기서 이제 키들에 대해 쿼리 조건을 만족하는 것들을 필터링해서 배열로 반환하고 (filter)
    // reduce로 전체 점수 배열의 길이값 - 이분 탐색 결과 인덱스 값을 해줍니다.
    // 그러면 결국 값이 같거나 큰 애들의 수만큼 값이 나오겠죠? (정렬되어 있으니까요)
    // 이를 누산해줍니다.
    return infosKey
      .filter(key => query.every(v => key.includes(v)))
      .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
  }
  
  const solution = (info, query) => {
    let answer = [];
    const infos = getInfos(info); // solution
    query
      .map(q => q
         .split(/ and | |-/i) //' and '와 ' '와 '-'이 들어가 있는 친구들 기준으로 split 처리해줘요.
         .filter(v => v !== "") // `split`에 의해 값이 "" 처리가 된 친구들을 없애줍니다.
      ) // 쿼리 조건들을 필터링해줄 거에요.
      .forEach(query => {
          const score = query.pop();
        const result = getResult(infos, query, score);
        answer.push(result) // getResult로 인해 누산된 결과값을, answer에 넣어줍시다.
      })
    return answer;
  }


// testCase
console.log(solution(["java backend junior pizza 150",
             "python frontend senior chicken 210",
             "python frontend senior chicken 150",
             "cpp backend senior pizza 260",
             "java backend junior chicken 80",
             "python backend senior chicken 50"], 
            ["java and backend and junior and pizza 100",
             "python and frontend and senior and chicken 200",
             "cpp and - and senior and pizza 250",
             "- and backend and senior and - 150",
             "- and - and - and chicken 100",
             "- and - and - and - 150"]));
// expected output: [1,1,1,1,2,4]