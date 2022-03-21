// fail. 커서 좌우로 움직였을 때 변수가 발생할 수 있다는 것을 고려해야 할 듯
// function solution(name) {
//     let result = 0;

//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     const alphaLen = alphabet.length;
    
//     for (const a of name) {
//         let tmp = alphabet.indexOf(a) < alphaLen/2 ? alphabet.indexOf(a) : alphaLen - alphabet.indexOf(a);
        
//         result += tmp;

//         if (name.indexOf(a) !== name.length-1 && a !== "A") result++;
//     }

//     return result;
// }


function solution(name) {
    let result = 0;

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alphaLen = alphabet.length;
    
    for (const a of name) {
        let tmp = alphabet.indexOf(a) < alphaLen/2 ? alphabet.indexOf(a) : alphaLen - alphabet.indexOf(a);
        
        result += tmp;

        if (name.indexOf(a) !== name.length-1 && a !== "A") result++;
    }

    return result;
}


// testCase
console.log(solution("JAZ"));       // 11
console.log(solution("JEROEN"));       // 56
console.log(solution("JAN"));       // 23