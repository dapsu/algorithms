// https://programmers.co.kr/learn/courses/30/lessons/42860


// fail. 커서 좌우로 움직였을 때 변수가 발생할 수 있다는 것을 고려해야 할 듯
// 현재 코드는 오로지 커서를 오른쪽을 이동했을 경우만 해당
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
    const arr = [0];
    let result = 0;

    const repeatA = (A) => {
        let count = 0;

        for (let i = 0; i < A.length; i++) {
            if (A[i] !== "A") break;
            count++;
        }

        return count;
    }

    const changeAlpha = (alpha) => {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const alphaLen = alphabet.length;

        let count = alphabet.indexOf(alpha) < alphaLen/2 ? alphabet.indexOf(alpha) : alphaLen - alphabet.indexOf(alpha);
        
        return count;
    }
    
    for (const [i, a] of [...name].entries()) {
        if (a === "A") {
            if (i === 0) arr.push(repeatA(name)-1);

            else if (name[i-1] !== "A") arr.push(repeatA(name.slice(i)) - (i - 1));

            result++;
        }
        else result += changeAlpha(a) + 1;
    }

    return result - Math.max(...arr) - 1;
}


// testCase
console.log(solution("JAZ"));       // 11
console.log(solution("JEROEN"));       // 56
console.log(solution("JAN"));       // 23
console.log(solution("GANGNAAAAAAAAAAAAAAAAM"));       // 59