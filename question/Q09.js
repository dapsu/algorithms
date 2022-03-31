function solution(words) {
    let result = [];
    const obj = {};

    words.forEach((word, i) => {
        let round = i+1;
        if (obj[word] === undefined) {
            obj[word] = round;
            result.push(round);
        }
        else result.push(obj[word]);
    })

    return result;
}


// testCase
console.log(solution(["one", "one", "two", "one"]));                // [1,1,3,1]
console.log(solution(["may", "with", "may", "you", "you"]));      // [1, 2, 1, 4, 4]