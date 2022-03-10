/**Problem
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "kongstudios", return "kongstiduos".

Note:
The vowels does not include the letter "y".

// Template for C++
class Solution {
public:
    string reverseVowels(string s) {
        
    }
};
 */
// --> 모음만 반전!

// 모음 요소 포함한 배열
const vowelsArr = ["a", "e", "i", "o", "u"];

//모음을 활용하기 위한 스택 함수
const stack = (s) => {
    const result = [];
    [...s].map((e) => {
        if (vowelsArr.includes(e)) result.push(e);
    });

    return result;
}

// 모음만 뒤집기 위한 함수
const vowelsReverse = (s) => {
    const result = [];
    const stackArr = stack(s);
    const arr = [...s];

    for (const i of arr) {
        if (!vowelsArr.includes(i)) result.push(i);
        else result.push(stackArr.pop());
    }

    return result.join("");
}

console.log(vowelsReverse("kongstudios"));
console.log(vowelsReverse("hello"));




/** 문제 해설
스택 자료구조를 이용하여 주어진 문자열 중 모음만 추가된 배열을 생성한다.
스택은 후입선출 방식으로, 나중에 들어온 원소를 먼저 pop한다. 즉 vowelsReverse()함수에서 가장 뒤에 있는 모음을 가장 앞에 배치하도록 하기 위해서
모음이 들어가야 하는 자리에 스택을 pop한 리턴값을 대신 넣도록 한다.
 */