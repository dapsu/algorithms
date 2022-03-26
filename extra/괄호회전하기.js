// https://programmers.co.kr/learn/courses/30/lessons/76502

const rotation = (str, idx) => {
    if (idx === 0) return str;

    const arr = [...str];
    arr.push(...arr.splice(0, idx));

    return arr.join("");
}

const isValid = (str) => {
    if (str[0] === "]" || str[0] ==="}" || str[0] === ")") return false;
    if (str[str.length-1] === "[" || str[str.length-1] ==="{" || str[str.length-1] === "(") return false;

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[" || str[i] === "{" || str[i] === "(") stack.push(str[i]);
        else {
            if (str[i] === "]" && stack[stack.length-1] !== "[") return false;
            if (str[i] === "}" && stack[stack.length-1] !== "{") return false;
            if (str[i] === ")" && stack[stack.length-1] !== "(") return false;

            stack.pop();
        }
    }

    if (stack.length) return fasle;

    return true;
}

function solution(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let tmp = rotation(s, i);
        if (isValid(tmp)) result++;
    }
    
    return result;
}


// testCase
console.log(solution("[](){}"));    // 3
console.log(solution("}]()[{"));    // 2
console.log(solution("[)(]"));    // 0
console.log(solution("}}}"));    // 0