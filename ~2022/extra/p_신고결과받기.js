function solution(id_list, report, k) {
    const result = new Array(id_list.length).fill(0);
    const obj = {};

    id_list.forEach((id => {
        obj[id] = [];
    }));

    report.map((elem) => {
        [id, rep] = elem.split(' ');
        if (!obj[rep].includes(id)) obj[rep].push(id);  // key는 신고 당한 사람, value는 신고한 사람
    });
    console.log(obj);
    
    for (const key in obj) {
        if (obj[key].length >= k) {
            obj[key].map((user) => {
                result[id_list.indexOf(user)] += 1;
            });
        }
    }

    return result;
}


// tsetCase
console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))    // [2,1,1,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 2))    // [0,0]


/**Array.prototype.indexOf()
 * IindexOf()
 * 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 존재하지 않으면 -1
 const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
 
 console.log(beasts.indexOf('bison'));
 // expected output: 1
 
 // start from index 2
 console.log(beasts.indexOf('bison', 2));
 // expected output: 4
 
 console.log(beasts.indexOf('giraffe'));
 // expected output: -1
 */