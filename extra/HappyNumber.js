/** 문제
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

class Solution {
public:
    bool isHappy(int n) {
        
    }
};
 */


// const happyNum = (num) => {
//     let result = false;
//     const arr = [...String(num)].map((e) => e*e);
//     let sum = arr.reduce((a, b) => a+b);

//     if (sum === 1) return result = true;
//     else result = happyNum(sum);

//     return result;
// };

const happyNum = (num, count=0) => {
    let result = false;
    const arr = [...String(num)].map((e) => e*e);
    let sum = arr.reduce((a, b) => a+b);

    if (count < 6600) {
        if (sum === 1) return result = true;
        else {
            count++;
            result = happyNum(sum, count);
        }
    }

    return result;
};

// testCase
console.log(happyNum(19));
console.log(happyNum(12));


/** 문제 해설
주어진 양의 정수에서 각 자리의 수를 제곱하여 더한 값이 1이면 행복한 숫자라고 정의한다는 문제이다.

happyNum이라는 함수를 만들고, num이라는 매개변수를 받도록 한다. num의 숫자를 각 자리의 수가 원소로 담긴 배열을 생성하고, 원소들을 제곱한다.
그리고 reduce()메소드를 이용하여 배열의 모든 원소를 합치고, 그 값을 sum으로 정의한다.
만약 sum이 1이면 결과를 true로 설정하고, 그렇지 않다면 sum 값을 다시 happyNum 함수의 매개변수로 넣어서 재귀 함수를 실행하도록 한다.
[처음 풀이]
const happyNum = (num) => {
    let result = false;
    const arr = [...String(num)].map((e) => e*e);
    let sum = arr.reduce((a, b) => a+b);

    if (sum === 1) return result = true;
    else result = happyNum(sum);

    return result;
};

문제에 주어진 것처럼 19라는 숫자를 이용하여 테스트를 한 결과, true가 반환된다. 그런데 문제는 다른 숫자로 테스트케이스를 할 때이다.
12라는 숫자로 테스트를 했을 때 다음과 같은 에러가 난다.
"RangeError: Maximum call stack size exceeded"
즉 행복한 숫자로 정의되지 않는 숫자인 경우 무한루프에 돌게 되기 때문에 엔진의 콜스택이 가득 차게 되어 용량 부족 문제가 생기는 것이다.

해당 알고리즘 문제에서는 요구하지 않았지만, 재귀하면서 행복한 숫자인지 판별하는 것에 횟수를 두어 무한루프를 도는 것을 벗어나도록 해봤다.
happyNum 함수에 count=0 이라는 매개변수를 추가하였고, sum이 1이 아닌, 즉 행복한 숫자가 아닐 경우 count++을 통해 횟수를 추가했다.
count가 약 6600개일 때까지 에러 구문이 뜨지 않았기 때문에 횟수 제한은 6600으로 설정했다.
 */