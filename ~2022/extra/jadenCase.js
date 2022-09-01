// https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

function solution(s) {
    const arr = s.split(" ").map(str => str[0].toUpperCase() + str.slice(1));

    return arr.join(" ");
}


// testCase
console.log(solution("3people unFollowed me"));     // "3people Unfollowed Me"
console.log(solution("for the last week"));     // "For The Last Week"