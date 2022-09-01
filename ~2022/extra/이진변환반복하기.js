// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    const result = [0, 0];

    while (s !== "1") {
        let len = [...s].reduce((pre, cur) => {
            if (cur === "0") {
                result[1]++;
                return pre;
            }
            return pre + 1;
        }, 0);

        s = len.toString(2);
        result[0]++;
    }

    return result;
}


// testCase
console.log(solution("110010101001"));    // [3,8]
console.log(solution("01110"));    // [3,3]
console.log(solution("1111111"));    // [4,1]