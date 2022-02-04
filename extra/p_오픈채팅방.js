function solution(record) {
    let result = [];
    const mapping = new Map();

    for (const i of record) {
        const [state, uid, name] = i.split(" ");
        
        if (state === 'Leave') {
            result.push([uid, '님이 나갔습니다.']);
            continue;
        }

        if (state === 'Enter') result.push([uid, '님이 들어왔습니다.']);

        mapping.set(uid, name);
    }
    return result.map(elem => mapping.get(elem[0]) + elem[1]);
}


// testCase
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]