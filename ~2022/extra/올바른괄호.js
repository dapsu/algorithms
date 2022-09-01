// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    let result;
    const stack = [];

    if (s[0] === ")" || s[s.length-1] === "(") return false;

    [...s].forEach(str => {
        if (!stack.length) stack.push(str);
        else {
            if (str === ")") stack.pop();
            else stack.push(str);
        }
    });

    return result = stack.length ? false : true; 
}


// testCase
console.log(solution("()()"));    // true
console.log(solution("(())()"));    // true
console.log(solution(")()("));    // false
console.log(solution("(()("));    // false