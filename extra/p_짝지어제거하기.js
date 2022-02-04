function solution(s) {
    let stack = [];

    for (let i of s) {
        if (stack.length === 0 || stack[stack.length-1] !== i) {
            stack.push(i);
        }
        else stack.pop();
    }
    return stack.length === 0 ? 1 : 0
}


// testCase
console.log(solution('baabaa'));
console.log(solution('cdcd'));