// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    let result = 0;

    binaryN = n.toString(2);
    oneCounts = [...binaryN].filter(s => s === "1").length;

    while (true) {
        n++;

        nexCounts = [...n.toString(2)].filter(s => s === "1").length;

        if (nexCounts === oneCounts) {
            result = n;
            break;
        }
    }

    return result;
}


// testCase
console.log(solution(78));    // 83
console.log(solution(15));    // 23