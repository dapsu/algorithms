// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let result = [];
    const alreadyUsed = [];

    for (const [i, word] of words.entries()) {
        const len = alreadyUsed.length;
        const lastWord = alreadyUsed[len-1];

        if (!len) alreadyUsed.push(word);
        else {
            if (!alreadyUsed.includes(word) && lastWord[lastWord.length-1] === word[0]) alreadyUsed.push(word);
            else {
                const elem1 = (i+1)%n === 0 ? n : (i+1)%n;
                const elem2 = !((i+1) % n) ? (i+1) /n : parseInt((i+1)/n)+1;
                result.push(elem1, elem2);
                break;
            }
        }    
    }

    return !result.length ? [0, 0] : result;
}

// 다른 사람 풀이: 조금 더 느림
// function solution(n, words) {
//     let answer = 0;
//     words.reduce((prev, now, idx) => {
//         answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
//         return now[now.length-1];
//     }, "")

//     return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
// }


// testCase
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));  // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1, 3]