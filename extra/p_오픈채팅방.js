function solution(record) {
    let result = [];
    let chat;

    for (const i of record) {
        let tmp;
        chat = i.split(" ");
        
        if (chat[0] === 'Enter') {
            tmp = chat[2] + '님이 들어왔습니다.';
            result.push(tmp);
        }
        else if (chat[0] === 'Leave') {
            tmp = chat[2] + '님이 나갔습니다.';
            result.push(tmp);
        }
        else if (chat[0] === 'Change') {
            continue;
        }
    }

    return result;
}


// testCase
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]