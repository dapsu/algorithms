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

    return mid + 1; 
}

const getResult = (infos, query, score) => {
    const infosKey = Object.keys(infos);

    return infosKey.filter(key => query.every(v => key.includes(v)))
                   .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
}

function solution(info, query) {
    const result = [];
    
    const infos = {};
    info.forEach((str) => {
        const arr = str.split(" ");
        const score = Number(arr.pop());
        const key = arr.join("");
        if (infos[key]) infos[key].push(score);
        else infos[key] = [score];
    });

    for (const key in infos) {
        infos[key].sort((a, b) => a - b);
    }

    query.map(q => q.split(/ and | |-/i)
                    .filter(v => v !== "")
    ).forEach(query => {
        const score = query.pop();
        const res = getResult(infos, query, score);
        result.push(res);
    })

    return result;
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