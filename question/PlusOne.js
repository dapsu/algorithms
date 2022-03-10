/**
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

For example,
if digits are [5, 8, 4], then [5, 8, 5] should be returned
if digits are [5, 9, 9], then [6, 0, 0] should be returned

// Template for C++
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        
    }
};
 */

// const plusOne = (digits) => {
//     let lastDigit = digits.pop();

//     lastDigit += 1;
//     if (lastDigit === 10) {
//         plusOne(digits);
//         digits.push(0);
//     }
//     else digits.push(lastDigit);

//     return digits;
// };

const plusOne = (digits) => {
    digits = Number(digits.join(""));
    digits += 1;
   
    return [...String(digits)].map((e) => Number(e));
};

// testCase
console.log(plusOne([5, 8, 4]));    // [5, 8, 5]
console.log(plusOne([5, 9, 9]));    // [6, 0, 0]
console.log(plusOne([5, 7, 9, 8, 9]));    // [ 5, 7, 9, 9, 0 ]
console.log(plusOne([9, 9, 9, 9]));    // [1, 0, 0, 0, 0]

/** 문제 해설
주어진 배열을 먼저 숫자로 만들고, +1을 한다.
그 이후 전개 연산자를 이용하여 숫자를 다시 배열로 만든다. 이때 map() 메소드를 이용하여 각 원소를 다시 숫자로 변환한다. 
 */