// https://programmers.co.kr/learn/courses/30/lessons/17684

const dic = {};
const makeDic = () => {
    for (let i = 1, j = 65; i <= 26; i++, j++) {
        dic[String.fromCharCode(j)] = i;
    }
}
makeDic();

function solution(msg) {
    const result = [];

    let cnt = 0;
    let dicOrder = 26;
    let w = msg[cnt];
    while (true) {
        let c = msg[++cnt];

        if (c === undefined) {
            result.push(dic[w]);
            break;
        }

        if (dic[w] && !dic[w+c]) {
            dic[w+c] = ++dicOrder;
            result.push(dic[w]);
            w = c;
        }
        else {
            w += c;
        }
    }

    return result;
}


// testCase
console.log(solution("KAKAO"));      // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));      // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB"));      // [1, 2, 27, 29, 28, 31, 30]