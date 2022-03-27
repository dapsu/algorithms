// https://programmers.co.kr/learn/courses/30/lessons/42883


// (signal: aborted (core dumped))?? 메모리 관련 문제?
// https://ko.wikipedia.org/wiki/%EC%BD%94%EC%96%B4_%EB%8D%A4%ED%94%84
// const combinations = (arr, num) => {
//     const result = [];

//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index+1);
//         const reCombinations = combinations(rest, num-1);
//         const attached = reCombinations.map(combi => [fixed, ...combi]);

//         result.push(...attached);
//     });

//     return result;
// }

// const pickMax = (arr) => {
//     let result = arr.map(num => num.join(""));
//     return Math.max(...result);
// }

// function solution(number, k) {
//     const numArr = combinations([...number], number.length - k);
//     const max = pickMax(numArr);

//     return String(max);
// }


// so1.2 stack 활용
function solution(number, k) {
    let stack = [];

    for (const num of number) {
        
        while (k > 0 && stack[stack.length-1] < num) {
            stack.pop();
            k--;
        }

        stack.push(num);
    }

    stack.splice(stack.length-k, k);    // k가 남았다는 말은 뒤의 숫자가 앞의 숫자보다 작다는 의미

    return stack.join("");
}

// testCase
console.log(solution("1924", 2));        // "94"
console.log(solution("1231234", 3));        // "3234"
console.log(solution("4177252841", 4));        // "775841"