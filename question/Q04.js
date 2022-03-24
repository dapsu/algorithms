// 효율성 개빡치네...
function solution(p){
    if (p[0] === ">" && p[p.length-1] === "<") return 0;

    let leftDone = false;
    const left = [];
    const right = [];

    for (const [i, v] of [...p].entries()) {
        if (v === "<") {
            if (p[i-1] !== ">" && leftDone === false) left.push(v);
            else {
                right.length = 0;
                leftDone = true;
            }
        }
        else if (v === ">") right.push(v);
    }

    return left.length + right.length;
}


// testCase
console.log(solution("<<<><"));     // 3
console.log(solution("<>>>><>>><"));     // 1
console.log(solution("<>>>><>>><>"));     // 2
console.log(solution("><>>>><>>><><"));     // 0
console.log(solution("<>><><<<>>>>"));     // 5